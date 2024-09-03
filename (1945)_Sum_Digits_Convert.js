const getLucky = (s, k) => {
  let sConversion = "";

  for (let i = 0; i < s.length; i++) {
    sConversion += s[i].charCodeAt(0) - 96;
  }

  function transform(string) {
    let sInt = 0;

    for (let char of string) {
      sInt += parseInt(char);
    }

    return sInt.toString();
  }

  let transformedStr = sConversion;

  while (k > 0) {
    transformedStr = transform(transformedStr);
    k--;
  }
  return parseInt(transformedStr);
};

getLucky("zbax", 2);
