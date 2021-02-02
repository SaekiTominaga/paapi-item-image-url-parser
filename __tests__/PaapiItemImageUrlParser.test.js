import { URL } from 'url';
import PaapiItemImageUrlParser from '../dist/PaapiItemImageUrlParser.js';

describe('正常系', () => {
	const url = new URL('https://m.media-amazon.com/images/I/5198TOs+rnL._SL160_.jpg');
	const paapiItemImageUrlParser = new PaapiItemImageUrlParser(url);

	test('id', () => {
		expect(paapiItemImageUrlParser.getId()).toBe('5198TOs+rnL');
	});
	test('width', () => {
		expect(paapiItemImageUrlParser.getWidth()).toBe(160);
	});
	test('extension', () => {
		expect(paapiItemImageUrlParser.getExtension()).toBe('.jpg');
	});
	test('URL', () => {
		expect(paapiItemImageUrlParser.toString()).toBe('https://m.media-amazon.com/images/I/5198TOs+rnL._SL160_.jpg');
	});
});

describe('幅を変更（直接指定）', () => {
	const url = new URL('https://m.media-amazon.com/images/I/5198TOs+rnL._SL160_.jpg');
	const paapiItemImageUrlParser = new PaapiItemImageUrlParser(url);

	paapiItemImageUrlParser.setWidth(500);

	test('width', () => {
		expect(paapiItemImageUrlParser.getWidth()).toBe(500);
	});
	test('URL', () => {
		expect(paapiItemImageUrlParser.toString()).toBe('https://m.media-amazon.com/images/I/5198TOs+rnL._SL500_.jpg');
	});
});

describe('幅を変更（乗算指定）', () => {
	const url = new URL('https://m.media-amazon.com/images/I/5198TOs+rnL._SL160_.jpg');
	const paapiItemImageUrlParser = new PaapiItemImageUrlParser(url);

	paapiItemImageUrlParser.setWidthMultiply(2);

	test('width', () => {
		expect(paapiItemImageUrlParser.getWidth()).toBe(320);
	});
	test('URL', () => {
		expect(paapiItemImageUrlParser.toString()).toBe('https://m.media-amazon.com/images/I/5198TOs+rnL._SL320_.jpg');
	});
});

describe('幅を変更（乗算指定・普通に計算すると 0 になってしまうケース）', () => {
	const url = new URL('https://m.media-amazon.com/images/I/5198TOs+rnL._SL160_.jpg');
	const paapiItemImageUrlParser = new PaapiItemImageUrlParser(url);

	paapiItemImageUrlParser.setWidthMultiply(0.001);

	test('width', () => {
		expect(paapiItemImageUrlParser.getWidth()).toBe(1);
	});
	test('URL', () => {
		expect(paapiItemImageUrlParser.toString()).toBe('https://m.media-amazon.com/images/I/5198TOs+rnL._SL1_.jpg');
	});
});

describe('幅を変更（除算指定）', () => {
	const url = new URL('https://m.media-amazon.com/images/I/5198TOs+rnL._SL160_.jpg');
	const paapiItemImageUrlParser = new PaapiItemImageUrlParser(url);

	paapiItemImageUrlParser.setWidthDivision(2);

	test('width', () => {
		expect(paapiItemImageUrlParser.getWidth()).toBe(80);
	});
	test('URL', () => {
		expect(paapiItemImageUrlParser.toString()).toBe('https://m.media-amazon.com/images/I/5198TOs+rnL._SL80_.jpg');
	});
});

describe('幅を変更（除算指定・普通に計算すると 0 になってしまうケース）', () => {
	const url = new URL('https://m.media-amazon.com/images/I/5198TOs+rnL._SL160_.jpg');
	const paapiItemImageUrlParser = new PaapiItemImageUrlParser(url);

	paapiItemImageUrlParser.setWidthDivision(500);

	test('width', () => {
		expect(paapiItemImageUrlParser.getWidth()).toBe(1);
	});
	test('URL', () => {
		expect(paapiItemImageUrlParser.toString()).toBe('https://m.media-amazon.com/images/I/5198TOs+rnL._SL1_.jpg');
	});
});

describe('invalid', () => {
	test('ID に想定外記号', () => {
		expect(() => {
			const url = new URL('https://m.media-amazon.com/images/I/5198TOs+rnL^._SL160_.jpg');
			new PaapiItemImageUrlParser(url);
		}).toThrow('The format of the URL does not seem to be that of an Amazon product image.');
	});

	test('幅なし', () => {
		expect(() => {
			const url = new URL('https://m.media-amazon.com/images/I/5198TOs+rnL._SL_.jpg');
			new PaapiItemImageUrlParser(url);
		}).toThrow('The format of the URL does not seem to be that of an Amazon product image.');
	});

	test('拡張子なし', () => {
		expect(() => {
			const url = new URL('https://m.media-amazon.com/images/I/5198TOs+rnL._SL160_');
			new PaapiItemImageUrlParser(url);
		}).toThrow('The format of the URL does not seem to be that of an Amazon product image.');
	});

	test('画像幅の直接指定で 0 を指定', () => {
		expect(() => {
			const url = new URL('https://m.media-amazon.com/images/I/5198TOs+rnL._SL160_.jpg');
			const paapiItemImageUrlParser = new PaapiItemImageUrlParser(url);
			paapiItemImageUrlParser.setWidth(0);
		}).toThrow('The image width must be a value greater than or equal to 1 (px).');
	});

	test('画像幅の直接指定で小数を指定', () => {
		expect(() => {
			const url = new URL('https://m.media-amazon.com/images/I/5198TOs+rnL._SL160_.jpg');
			const paapiItemImageUrlParser = new PaapiItemImageUrlParser(url);
			paapiItemImageUrlParser.setWidth(2.5);
		}).toThrow('The image width must be specified as an integer.');
	});

	test('画像幅の乗算で 0 を指定', () => {
		expect(() => {
			const url = new URL('https://m.media-amazon.com/images/I/5198TOs+rnL._SL160_.jpg');
			const paapiItemImageUrlParser = new PaapiItemImageUrlParser(url);
			paapiItemImageUrlParser.setWidthMultiply(0);
		}).toThrow('The value to be multiplied must be greater than zero.');
	});

	test('画像幅の除算で 0 を指定', () => {
		expect(() => {
			const url = new URL('https://m.media-amazon.com/images/I/5198TOs+rnL._SL160_.jpg');
			const paapiItemImageUrlParser = new PaapiItemImageUrlParser(url);
			paapiItemImageUrlParser.setWidthDivision(0);
		}).toThrow('The value to be divided must be greater than zero.');
	});
});
