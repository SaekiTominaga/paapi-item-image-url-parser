# PA-API Item Image URL Parser

[![npm version](https://badge.fury.io/js/%40saekitominaga%2Fpaapi-item-image-url-parser.svg)](https://badge.fury.io/js/%40saekitominaga%2Fpaapi-item-image-url-parser)

## Examples

```JavaScript
import PaapiItemImageUrlParser from '@saekitominaga/paapi-item-image-url-parser';

const imageUrl = new URL('https://m.media-amazon.com/images/I/5198TOs+rnL._SL160_.jpg');
const paapiItemImageUrlParser = new PaapiItemImageUrlParser(imageUrl);

paapiItemImageUrlParser.getId(); // '5198TOs+rnL'
paapiItemImageUrlParser.getSize(); // 160
paapiItemImageUrlParser.getExtension(); // '.jpg'
paapiItemImageUrlParser.toString(); // 'https://m.media-amazon.com/images/I/5198TOs+rnL._SL160_.jpg'

paapiItemImageUrlParser.setSizeMultiply(2);
paapiItemImageUrlParser.getSize(); // 320

paapiItemImageUrlParser.setSizeDivision(3);
paapiItemImageUrlParser.getSize(); // 107

paapiItemImageUrlParser.setSize(320);
paapiItemImageUrlParser.getSize(); // 320

paapiItemImageUrlParser.removeSize();
paapiItemImageUrlParser.getSize(); // null
paapiItemImageUrlParser.toString(); // 'https://m.media-amazon.com/images/I/5198TOs+rnL.jpg'
```

```JavaScript
import PaapiItemImageUrlParser from '@saekitominaga/paapi-item-image-url-parser';

const imageUrl = new URL('https://m.media-amazon.com/images/I/5198TOs+rnL.jpg');
const paapiItemImageUrlParser = new PaapiItemImageUrlParser(imageUrl);

paapiItemImageUrlParser.getId(); // '5198TOs+rnL'
paapiItemImageUrlParser.getSize(); // null
paapiItemImageUrlParser.getExtension(); // '.jpg'
paapiItemImageUrlParser.toString(); // 'https://m.media-amazon.com/images/I/5198TOs+rnL.jpg'

try {
  paapiItemImageUrlParser.setSizeMultiply(2); // Error
} catch {
}

try {
  paapiItemImageUrlParser.setSizeDivision(3); // Error
} catch {
}

paapiItemImageUrlParser.setSize(320);
paapiItemImageUrlParser.getSize(); // 320
```

## Constructor

```TypeScript
new PaapiItemImageUrlParser(inputUrl: URL)
```

### Parameters

<dl>
<dt>inputUrl</dt>
<dd>Image URL</dd>
</dl>

## Methods

<dl>
<dt>toString()</dt>
<dd>Get the entire Image URL string.</dd>
<dt>getId(): string</dt>
<dd>Get the ID part of URL</dd>
<dt>getSize(): number | null</dt>
<dd>Get the size part of URL</dd>
<dt>setSize(size: number): void</dt>
<dd>Set the image size (Used to get images of different sizes)</dd>
<dt>removeSize(): void</dt>
<dd>Remove the image size (Used to get the original size image)</dd>
<dt>setSizeMultiply(multiply: number)</dt>
<dd>Multiply the size of the image (Used to get images of different sizes)</dd>
<dt>setSizeDivision(division: number)</dt>
<dd>Division the size of the image (Used to get images of different sizes)</dd>
<dt>getExtension(): string</dt>
<dd>Get the extension part of URL</dd>
</dl>
