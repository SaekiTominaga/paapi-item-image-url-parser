# PA-API Item Image URL Parser

[![npm version](https://badge.fury.io/js/%40saekitominaga%2Fpaapi-item-image-url-parser.svg)](https://badge.fury.io/js/%40saekitominaga%2Fpaapi-item-image-url-parser)

## Examples

```JavaScript
import PaapiItemImageUrlParser from '@saekitominaga/paapi-item-image-url-parser';

const imageUrl = new URL('https://m.media-amazon.com/images/I/5198TOs+rnL._SL160_.jpg');
const paapiItemImageUrlParser = new PaapiItemImageUrlParser(imageUrl);

paapiItemImageUrlParser.getId(); // '5198TOs+rnL'
paapiItemImageUrlParser.getWidth(); // 160
paapiItemImageUrlParser.getExtension(); // '.jpg'
paapiItemImageUrlParser.toString(); // 'https://m.media-amazon.com/images/I/5198TOs+rnL._SL160_.jpg'

paapiItemImageUrlParser.setWidth(320);
paapiItemImageUrlParser.getWidth(); // 320

paapiItemImageUrlParser.setWidthMultiply(2);
paapiItemImageUrlParser.getWidth(); // 640

paapiItemImageUrlParser.setWidthDivision(3);
paapiItemImageUrlParser.getWidth(); // 213
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
<dt>getWidth(): number</dt>
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
