node-deoopfy
------------
Takes a function which acts on a context object, and returns a function which
takes the context as its first argument.

Install with:
```
npm install deoopfy
```

And use like:
```javascript
var slice = deoopfy(Array.prototype.slice);
slice([1, 2, 3], [1]) // => [2, 3]
```
