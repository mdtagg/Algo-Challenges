
function WordDictionary() {
    this.words = new Set()
}

WordDictionary.prototype.addWord = function(word) {
    this.words.add(word)
}

WordDictionary.prototype.search = function(word) {
    if(this.words.has(word)) return true
    for(let setWord of this.words) {
        console.log(setWord,word)
        for(let i = 0;i < word.length;i++) {
            if((word[i] !== '.' && word[i] !== setWord[i]) || word.length !== setWord.length) break
            if(i === word.length - 1) return true
        }
    }
    return false
}

const obj = new WordDictionary()
obj.addWord('bad')
obj.addWord('dad')
obj.addWord('mad')
obj.search('pad')
obj.search('bad')
obj.search(".ad")
console.log(obj.search("b.."))
// const param2 = obj.search()

/*
PERFORMANCE SOLUTION 

var WordDictionary = function() {
    this.cache = {
        children: new Array(26),
        ends: 0,
        childArr: []
    };
    this.levelLetters = [];
};

WordDictionary.prototype.addWord = function(word) {
    let curr = this.cache;
    for (let i = 0; i<word.length; i++) {
        const c = word.charCodeAt(i)-97;
        if (!curr.children[c]) {
            curr.children[c] = {
                children: new Array(26),
                ends: 0,
            };
        }
        if (i === (word.length-1)) {
            curr.children[c].ends++
        }

        curr = curr.children[c];
        if (i === this.levelLetters.length) {
            this.levelLetters.push(0)
        }
        this.levelLetters[i] |= 1 << c;
    }
};

WordDictionary.prototype.search = function(word) {
    let currDepth = [this.cache], c = -1, i=0;

    while (currDepth.length && i< (word.length-1)) {
        c = word.charCodeAt(i)-97;
        if (i >= this.levelLetters.length  || (c !== -51 && !(this.levelLetters[i] & 1 << c))) {
            return false
        }
        currDepth = currDepth.reduce((agg, depth) => {
            if (c < 0) {
                depth.children.forEach(d => d && agg.push(d))
            } else if (depth.children[c]) {
                agg.push(depth.children[c])
            }
            return agg
        }, []);

        i++
    }

    if (!currDepth.length) {
        return false;
    }

    c = word.charCodeAt(word.length-1)-97;
    return c === -51 ? currDepth.some(d => d.children.some(d1 => d1?.ends)) : 
        ((this.levelLetters[i] & 1 << c) && currDepth.some(d => d.children[c]?.ends));

};
*/