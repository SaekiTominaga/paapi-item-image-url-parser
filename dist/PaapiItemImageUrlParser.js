var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _url, _dir, _fileId, _fileSize, _fileExtension;
/**
 * PA-API Item Image URL Parser
 */
export default class {
    /**
     * @param {URL} inputUrl - Image URL (e.g. new URL('https://m.media-amazon.com/images/I/5198TOs+rnL._SL160_.jpg') )
     */
    constructor(inputUrl) {
        _url.set(this, void 0);
        _dir.set(this, void 0);
        _fileId.set(this, void 0);
        _fileSize.set(this, void 0);
        _fileExtension.set(this, void 0);
        __classPrivateFieldSet(this, _url, inputUrl);
        const result = /(\/images\/[A-Z])\/([a-zA-Z0-9\-_+%]+)(\._SL([0-9]+)_)?(\.[a-zA-Z0-9]+)$/.exec(inputUrl.pathname);
        if (result === null) {
            throw new Error('The format of the URL does not seem to be that of an Amazon product image.');
        }
        __classPrivateFieldSet(this, _dir, result[1]);
        __classPrivateFieldSet(this, _fileId, result[2]);
        __classPrivateFieldSet(this, _fileSize, result[4] !== undefined ? Number(result[4]) : null);
        __classPrivateFieldSet(this, _fileExtension, result[5]);
    }
    /**
     * Get the entire Image URL string.
     *
     * @returns {string} Image URL
     */
    toString() {
        if (__classPrivateFieldGet(this, _fileSize) === null) {
            __classPrivateFieldGet(this, _url).pathname = `${__classPrivateFieldGet(this, _dir)}/${__classPrivateFieldGet(this, _fileId)}${__classPrivateFieldGet(this, _fileExtension)}`;
        }
        else {
            __classPrivateFieldGet(this, _url).pathname = `${__classPrivateFieldGet(this, _dir)}/${__classPrivateFieldGet(this, _fileId)}._SL${__classPrivateFieldGet(this, _fileSize)}_${__classPrivateFieldGet(this, _fileExtension)}`;
        }
        return __classPrivateFieldGet(this, _url).toString();
    }
    /**
     * Get the ID part of URL
     *
     * @returns {string} ID of the image file name (e.g. '5198TOs+rnL')
     */
    getId() {
        return __classPrivateFieldGet(this, _fileId);
    }
    /**
     * Get the size part of URL
     *
     * @returns {number|null} Image size (e.g. 160)
     */
    getSize() {
        return __classPrivateFieldGet(this, _fileSize);
    }
    /**
     * Set the image size (Used to get images of different sizes)
     *
     * @param {number} size - Image size (e.g. 160)
     */
    setSize(size) {
        if (!Number.isInteger(size)) {
            throw new TypeError('The image size must be specified as an integer.');
        }
        if (size < 1) {
            throw new RangeError('The image size must be a value greater than or equal to 1 (px).');
        }
        __classPrivateFieldSet(this, _fileSize, size);
    }
    /**
     * Remove the image size (Used to get the original size image)
     */
    removeSize() {
        __classPrivateFieldSet(this, _fileSize, null);
    }
    /**
     * Multiply the size of the image (Used to get images of different sizes)
     *
     * @param {number} multiply - Numerical value to multiply the image size
     */
    setSizeMultiply(multiply) {
        if (multiply <= 0) {
            throw new RangeError('The value to be multiply must be greater than zero.');
        }
        if (__classPrivateFieldGet(this, _fileSize) === null) {
            throw new Error('It is not possible to multiply the size of an image whose size is not specified. Please execute the `setSize()` method before this.');
        }
        const size = Math.round(__classPrivateFieldGet(this, _fileSize) * multiply);
        __classPrivateFieldSet(this, _fileSize, size < 1 ? 1 : size);
    }
    /**
     * Division the size of the image (Used to get images of different sizes)
     *
     * @param {number} division - Numerical value to division the image size
     */
    setSizeDivision(division) {
        if (division <= 0) {
            throw new RangeError('The value to be division must be greater than zero.');
        }
        if (__classPrivateFieldGet(this, _fileSize) === null) {
            throw new Error('It is not possible to division the size of an image whose size is not specified. Please execute the `setSize()` method before this.');
        }
        const size = Math.round(__classPrivateFieldGet(this, _fileSize) / division);
        __classPrivateFieldSet(this, _fileSize, size < 1 ? 1 : size);
    }
    /**
     * Get the extension part of URL
     *
     * @returns {string} Image file extension (e.g. '.jpg')
     */
    getExtension() {
        return __classPrivateFieldGet(this, _fileExtension);
    }
}
_url = new WeakMap(), _dir = new WeakMap(), _fileId = new WeakMap(), _fileSize = new WeakMap(), _fileExtension = new WeakMap();
//# sourceMappingURL=PaapiItemImageUrlParser.js.map