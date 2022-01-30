const stringPlaceholders = (str, placeholders) => {
  let result = str;

  Object.keys(placeholders).forEach((key) => {
    result = result.replace(`{${key}}`, placeholders[key]);
  });

  return result;
};

const str1 =
  "Hello, my name is {name}, and I live in {city} with my dog {petName}";
const placeholder1 = { name: "John", city: "Vancouver", petName: "Rusty" };

console.log(stringPlaceholders(str1, placeholder1));
