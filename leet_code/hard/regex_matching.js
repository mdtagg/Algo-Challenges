/*
Given an input string s and a pattern p, implement regular expression matching with 
support for '.' and '*' where:

'.' Matches any single character.​​​​
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).
*/


var isMatch = function(s, p) {
    return (new RegExp("^" + p + "$")).test(s);
};

/*
The key to this challenge was to find a way to incorporate string interpolation into the regex
to account for the changing p. Instead of declaring a regex and assigning to a variable we 
concatanate the starting flag with the p string with the ending bling flag. 
*/