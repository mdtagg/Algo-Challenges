

var maxNumberOfBalloons = function(text) {

    let strMap = new Map();
    let str = "balloon";
    let maxPossible = Infinity;

    for(let i = 0;i < text.length;i++) {
        strMap.set(text[i],(strMap.get(text[i]) || 0) + 1);
    }
    strMap.set("l",Math.floor(strMap.get("l") / 2));
    strMap.set("o",Math.floor(strMap.get("o") / 2));

    for(let i = 0;i < str.length;i++) {
        maxPossible = Math.min((strMap.get(str[i]) || 0),maxPossible)
    }
    return maxPossible;
};

const inputs = [
  "nlaebolko",
  "leetcode"
]

maxNumberOfBalloons(inputs[0])

/*
var maxNumberOfBalloons = function(text) {

    let strMap = new Map();
    let str = "balloon";
    let maxPossible = 0;

    for(let i = 0;i < text.length;i++) {
        strMap.set(text[i],(strMap.get(text[i]) || 0) + 1);
        maxPossible = Math.max(maxPossible,strMap.get(text[i]))
    }

    for(let i = 0;i < str.length;i++) {
        if(!strMap.has(str[i])) return 0;
        if(i === 2 || i === 4) {
            strMap.set(str[i],Math.floor((strMap.get(str[i])) / 2));
            i++
        }
        maxPossible = Math.min(strMap.get(str[i]),maxPossible)
    }
    return maxPossible;
};
*/