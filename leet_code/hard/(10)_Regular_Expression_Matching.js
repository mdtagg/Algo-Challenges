/*
Given an input string s and a pattern p, implement regular expression matching with 
support for '.' and '*' where:

'.' Matches any single character.​​​​
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).
*/


var isMatch = function(s, p) {
    const cache = new Map();
    return dp(0, 0);
    function dp(i, j) {
        const key = `${i}-${j}`;
        if (cache.has(key)) return cache.get(key);
        if (i === s.length && j == p.length) return i == s.length;
        if (j >= p.length) return false;

        let match = i < s.length && (s[i] === p[j] || p[j] === '.');
        if (j + 1 < p.length && p[j + 1] === '*') {
            // drop * || keep *
            const res = dp(i, j + 2) || (match && dp(i + 1, j));
            cache.set(key, res);
            return res;
        } else {
            if (match) match = match && dp(i + 1, j + 1);
            cache.set(key, match);
            return match;
        }
    }
};

isMatch('aa','a*')
/*
The key to this challenge was to find a way to incorporate string interpolation into the regex
to account for the changing p. Instead of declaring a regex and assigning to a variable we 
concatanate the starting flag with the p string with the ending bling flag. 
*/