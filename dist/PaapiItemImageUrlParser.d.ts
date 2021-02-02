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
    private _assemblePath;
    /**
     * Get the ID part of URL
     *
     * @returns {string} ID of the image file name (e.g. '5198TOs+rnL')
     */
    getId(): string;
    /**
     * Get the width part of URL
     *
     * @returns {number} Image width (e.g. 160)
     */
    getWidth(): number;
    /**
     * Set the image width (Used to get images of different sizes)
     *
     * @param {number} width - Image width (e.g. 320)
     */
    setWidth(width: number): void;
    /**
     * Multiply the width of the image (Used to get images of different sizes)
     *
     * @param {number} multiply - Numerical value to multiply the image width
     */
    setWidthMultiply(multiply: number): void;
    /**
     * Division the width of the image (Used to get images of different sizes)
     *
     * @param {number} division - Numerical value to division the image width
     */
    setWidthDivision(division: number): void;
    /**
     * Get the extension part of URL
     *
     * @returns {string} Image file extension (e.g. '.jpg')
     */
    getExtension(): string;
}
//# sourceMappingURL=PaapiItemImageUrlParser.d.ts.map