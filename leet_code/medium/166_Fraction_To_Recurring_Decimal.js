/*
Initialize n and d as BigInts 

Determine if the result will be negative

If n or d is negative change them to positives

add the integer quotient to the result

get the remainder 

calculate the value of each decimal place by multiplying the remainder by 10 and dividing by d

check that each addition is not repeating 

if it is add parenthesis to the decimal portion 

return the result
*/

const fractionToDecimal = (numerator, denominator) => {
  if (numerator === 0) return "0";
  // Initialize n and d as BigInts

  let n = BigInt(numerator);
  let d = BigInt(denominator);

  let result = "";

  // Determine if the result will be negative

  if (n < 0n !== d < 0n) result += "-";

  // If n or d is negative change them to positives

  if (n < 0n) n = -n;
  if (d < 0n) d = -d;

  // add the integer quotient to the result

  result += (n / d).toString();
  // get the remainder

  let rem = n % d;
  if (rem === 0n) return result;
  result += ".";

  let seen = new Map();

  // calculate the value of each decimal place by multiplying the remainder by 10 and dividing by d

  while (rem !== 0n) {
    if (seen.has(rem)) {
      let pos = seen.get(rem);
      result = result.slice(0, pos) + "(" + result.slice(pos) + ")";
      break;
    }
    seen.set(rem, result.length);
    rem *= 10n;
    result += (rem / d).toString();
    rem = rem % d;
  }

  // check that each addition is not repeating

  // if it is add parenthesis to the decimal portion

  // return the result
};

fractionToDecimal(4, 333);

// var fractionToDecimal = function(numerator, denominator) {
//   if (numerator === 0) return "0";

//   let n = BigInt(numerator);
//   let d = BigInt(denominator);

//   let res = "";
//   if ((n < 0n) !== (d < 0n)) res += "-";

//   if (n < 0n) n = -n;
//   if (d < 0n) d = -d;

//   res += (n / d).toString();
//   let rem = n % d;
//   if (rem === 0n) return res;

//   res += ".";
//   const seen = new Map();

//   while (rem !== 0n) {
//       if (seen.has(rem)) {
//           const pos = seen.get(rem);
//           res = res.slice(0, pos) + "(" + res.slice(pos) + ")";
//           break;
//       }
//       seen.set(rem, res.length);
//       rem *= 10n;
//       res += (rem / d).toString();
//       rem = rem % d;
//   }
//   return res;
// };
