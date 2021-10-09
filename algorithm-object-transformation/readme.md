Implement a function that takes an arbitrary nested JS Object and do the following transformations:

- Add +1 to each Number within in Object (eg: x: 9 => x: 10)
- Add ‘AE’ to each String within in Object (eg: y: ‘abc’ => y: ‘abcAE’)
- The object should keep its structure!
- Log the result to the browser console

See a rough example structure below:

```js
  // initial object
  {
    a: 123,
    b: 'abc',
    c: [1, 2, 3]
  }

  // resulting object
  {
    a: 124,
    b: 'abc AE',
    c: [2, 3, 4]
  }
```
