node-deoopfy
------------
[![Build Status](https://travis-ci.org/yamadapc/node-deoopfy.svg?branch=master)](https://travis-ci.org/yamadapc/node-deoopfy)

Takes a function which acts on a context object, and returns a function which
takes the context as its first argument.

Install with:
```
npm install deoopfy
```

And use like:
```javascript
var slice = deoopfy(Array.prototype.slice);
slice([1, 2, 3], 1) // => [2, 3]
```

## Donations
Would you like to buy me a beer? Send bitcoin to 3JjxJydvoJjTrhLL86LGMc8cNB16pTAF3y
