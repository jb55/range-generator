
# range-generator

  A generator for a range of numbers.

  Exclusive. (eg. `range(5)` will yield `0,1,2,3,4`)

  [Other handy generators](https://github.com/jb55/generators)

  [![Build Status](https://travis-ci.org/jb55/range-generator.png)](https://travis-ci.org/jb55/range-generator)

## Installation

  Install with npm

    $ npm install range-generator

## Example

```js
'use strict';

let range = require('range-generator');

for (let x of range(10)) {
  console.log(x);
}

// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

for (let x of range(1, 11)) {
  console.log(x);
}

// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

```

## License

  The MIT License (MIT)

  Copyright (c) 2014 William Casarin

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
