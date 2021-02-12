# PA-API Item Image URL Parser

[![npm version](https://badge.fury.io/js/%40saekitominaga%2Fpaapi-item-image-url-parser.svg)](https://badge.fury.io/js/%40saekitominaga%2Fpaapi-item-image-url-parser)

## Examples

```JavaScript
import PaapiItemImageUrlParser from '@saekitominaga/paapi-item-image-url-parser';

const image160Url = new URL('https://m.media-amazon.com/images/I/5198TOs+rnL._SL160_.jpg');
const paapiItemImageUrlParser1 = new PaapiItemImageUrlParser(image160Url);

paapiItemImageUrlParser1.getId(); // '5198TOs+rnL'
paapiItemImageUrlParser1.getWidth(); // 160
paapiItemImageUrlParser1.getExtension(); // '.jpg'
paapiItemImageUrlParser1.toString(); // 'https://m.media-amazon.com/images/I/5198TOs+rnL._SL160_.jpg'

paapiItemImageUrlParser1.setWidthMultiply(2);
paapiItemImageUrlParser1.getWidth(); // 320

paapiItemImageUrlParser1.setWidthDivision(3);
paapiItemImageUrlParser1.getWidth(); // 107

paapiItemImageUrlParser1.setWidth(320);
paapiItemImageUrlParser1.getWidth(); // 320


const imageOrigUrl = new URL('https://m.media-amazon.com/images/I/5198TOs+rnL.jpg');
const paapiItemImageUrlParser2 = new PaapiItemImageUrlParser(imageOrigUrl);

paapiItemImageUrlParser2.getId(); // '5198TOs+rnL'
paapiItemImageUrlParser2.getWidth(); // null
paapiItemImageUrlParser2.getExtension(); // '.jpg'
paapiItemImageUrlParser2.toString(); // 'https://m.media-amazon.com/images/I/5198TOs+rnL.jpg'

try {
  paapiItemImageUrlParser2.setWidthMultiply(2); // Error
} catch {
}

try {
  paapiItemImageUrlParser2.setWidthDivision(3); // Error
} catch {
}

paapiItemImageUrlParser2.setWidth(320);
paapiItemImageUrlParser2.getWidth(); // 320
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
<dt>getWidth(): number | null</dt>
<dd>Get the width part of URL</dd>
<dt>setWidth(width: number): void</dt>
<dd>Set the image width (Used to get images of different sizes)</dd>
<dt>setWidthMultiply(multiply: number)</dt>
<dd>Multiply the width of the image (Used to get images of different sizes)</dd>
<dt>setWidthDivision(division: number)</dt>
<dd>Division the width of the image (Used to get images of different sizes)</dd>
<dt>getExtension(): string</dt>
<dd>Get the extension part of URL</dd>
</dl>
