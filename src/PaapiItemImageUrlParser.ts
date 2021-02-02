import { URL } from 'url';

/**
 * PA-API Item Image URL Parser
 */
export default class {
	#url: URL;

	#dir: string;
	#fileId: string;
	#fileWidth: number;
	#fileExtension: string;

	/**
	 * @param {URL} inputUrl - Image URL (e.g. new URL('https://m.media-amazon.com/images/I/5198TOs+rnL._SL160_.jpg') )
	 */
	constructor(inputUrl: URL) {
		this.#url = inputUrl;

		const result = /(\/images\/[A-Z])\/([a-zA-Z0-9\-_+%]+)\._SL([0-9]+)_(\.[a-zA-Z0-9]+)$/.exec(inputUrl.pathname);
		if (result === null) {
			throw new Error('The format of the URL does not seem to be that of an Amazon product image.');
		}
		this.#dir = result[1];
		this.#fileId = result[2];
		this.#fileWidth = Number(result[3]);
		this.#fileExtension = result[4];
	}

	/**
	 * Get the entire Image URL string.
	 *
	 * @returns {string} Image URL
	 */
	toString(): string {
		this._assemblePath();

		return this.#url.toString();
	}

	private _assemblePath() {
		this.#url.pathname = `${this.#dir}/${this.#fileId}._SL${this.#fileWidth}_${this.#fileExtension}`;
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
	 * @returns {number} Image width (e.g. 160)
	 */
	getWidth(): number {
		return this.#fileWidth;
	}

	/**
	 * Set the image width (Used to get images of different sizes)
	 *
	 * @param {number} width - Image width (e.g. 320)
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
			throw new RangeError('The value to be multiplied must be greater than zero.');
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
			throw new RangeError('The value to be divided must be greater than zero.');
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
