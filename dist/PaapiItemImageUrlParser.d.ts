/// <reference types="node" />
import { URL } from 'url';
/**
 * PA-API Item Image URL Parser
 */
export default class {
    #private;
    /**
     * @param {URL} inputUrl - Image URL (e.g. new URL('https://m.media-amazon.com/images/I/5198TOs+rnL._SL160_.jpg') )
     */
    constructor(inputUrl: URL);
    /**
     * Get the entire Image URL string.
     *
     * @returns {string} Image URL
     */
    toString(): string;
    /**
     * Get the ID part of URL
     *
     * @returns {string} ID of the image file name (e.g. '5198TOs+rnL')
     */
    getId(): string;
    /**
     * Get the size part of URL
     *
     * @returns {number|null} Image size (e.g. 160)
     */
    getSize(): number | null;
    /**
     * Set the image size (Used to get images of different sizes)
     *
     * @param {number} size - Image size (e.g. 160)
     */
    setSize(size: number): void;
    /**
     * Remove the image size (Used to get the original size image)
     */
    removeSize(): void;
    /**
     * Multiply the size of the image (Used to get images of different sizes)
     *
     * @param {number} multiply - Numerical value to multiply the image size
     */
    setSizeMultiply(multiply: number): void;
    /**
     * Division the size of the image (Used to get images of different sizes)
     *
     * @param {number} division - Numerical value to division the image size
     */
    setSizeDivision(division: number): void;
    /**
     * Get the extension part of URL
     *
     * @returns {string} Image file extension (e.g. '.jpg')
     */
    getExtension(): string;
}
//# sourceMappingURL=PaapiItemImageUrlParser.d.ts.map