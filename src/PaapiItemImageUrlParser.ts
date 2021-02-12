import { URL } from 'url';

/**
 * PA-API Item Image URL Parser
 */
export default class {
	#url: URL;

	#dir: string;
	#fileId: string;
	#fileWidth: number | null;
	#fileExtension: string;

	/**
	 * @param {URL} inputUrl - Image URL (e.g. new URL('https://m.media-amazon.com/images/I/5198TOs+rnL._SL160_.jpg') )
	 */
	constructor(inputUrl: URL) {
		this.#url = inputUrl;

		const result = /(\/images\/[A-Z])\/([a-zA-Z0-9\-_+%]+)(\._SL([0-9]+)_)?(\.[a-zA-Z0-9]+)$/.exec(inputUrl.pathname);
		if (result === null) {
			throw new Error('The format of the URL does not seem to be that of an Amazon product image.');
		}
		this.#dir = result[1];
		this.#fileId = result[2];
		this.#fileWidth = result[4] !== undefined ? Number(result[4]) : null;
		this.#fileExtension = result[5];
	}

	/**
	 * Get the entire Image URL string.
	 *
	 * @returns {string} Image URL
	 */
	toString(): string {
		if (this.#fileWidth === null) {
			this.#url.pathname = `${this.#dir}/${this.#fileId}${this.#fileExtension}`;
		} else {
			this.#url.pathname = `${this.#dir}/${this.#fileId}._SL${this.#fileWidth}_${this.#fileExtension}`;
		}

		return this.#url.toString();
	}

	/**
	 * Get the ID part of URL
	 *
	 * @returns {string} ID of the image file name (e.g. '5198TOs+rnL')
	 */
	getId(): string {
		return this.#fileId;
	}

	/**
	 * Get the width part of URL
	 *
	 * @returns {number|null} Image width (e.g. 160)
	 */
	getWidth(): number | null {
		return this.#fileWidth;
	}

	/**
	 * Set the image width (Used to get images of different sizes)
	 *
	 * @param {number} width - Image width (e.g. 160)
	 */
	setWidth(width: number): void {
		if (!Number.isInteger(width)) {
			throw new TypeError('The image width must be specified as an integer.');
		}
		if (width < 1) {
			throw new RangeError('The image width must be a value greater than or equal to 1 (px).');
		}

		this.#fileWidth = width;
	}

	/**
	 * Multiply the width of the image (Used to get images of different sizes)
	 *
	 * @param {number} multiply - Numerical value to multiply the image width
	 */
	setWidthMultiply(multiply: number): void {
		if (multiply <= 0) {
			throw new RangeError('The value to be multiply must be greater than zero.');
		}
		if (this.#fileWidth === null) {
			throw new Error('It is not possible to multiply the width of an image whose size is not specified. Please execute the `setWidth()` method before this.');
		}

		const width = Math.round(this.#fileWidth * multiply);
		this.#fileWidth = width < 1 ? 1 : width;
	}

	/**
	 * Division the width of the image (Used to get images of different sizes)
	 *
	 * @param {number} division - Numerical value to division the image width
	 */
	setWidthDivision(division: number): void {
		if (division <= 0) {
			throw new RangeError('The value to be division must be greater than zero.');
		}
		if (this.#fileWidth === null) {
			throw new Error('It is not possible to division the width of an image whose size is not specified. Please execute the `setWidth()` method before this.');
		}

		const width = Math.round(this.#fileWidth / division);
		this.#fileWidth = width < 1 ? 1 : width;
	}

	/**
	 * Get the extension part of URL
	 *
	 * @returns {string} Image file extension (e.g. '.jpg')
	 */
	getExtension(): string {
		return this.#fileExtension;
	}
}
