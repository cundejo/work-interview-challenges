Write a function 

```
function stringPlaceholders(string, placeholders)
```
That will include in the `string` the placeholders pass in the second parameter. The amount of placeholders is variable.

E.g.: 
```
const str1 = "Hello, my name is {name}, and I live in {city} with my dog {petName}";
const placeholder1 = {name: 'John', city: 'Vancouver', petName: 'Rusty'};

stringPlaceholders(str1, placeholder1)
// Hello, my name is John, and I live in Vancouver with my dog Rusty
```

