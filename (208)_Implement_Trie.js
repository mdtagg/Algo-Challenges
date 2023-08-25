
function Trie() {
    this.words = new Set()
}

Trie.prototype.insert = function(word) {
    this.words.add(word)
}

Trie.prototype.search = function(word) {
    return this.words.has(word) ? true : false
}

Trie.prototype.startsWith = function(prefix) {
    for(let word of this.words) {
        if(word.slice(0,prefix.length) === prefix) return true 
    }
    return false
}

const trie = new Trie()
trie.insert('apple')
trie.insert('test')
console.log(trie.search('apple'))
console.log(trie.search('app'))
console.log(trie.startsWith('app'))


console.log(trie)

/*
let test = false
    this.words.forEach(word => {
        if(word.slice(0,prefix.length) === prefix) {
            test = true;
            return false
        }
    })
    return test


    // let words = []
    // for(let key of this.words) {
    //     words.push(key)
    // }
    // for(let i = 0;i < words.length;i++) {
    //     let wordPrefix = words[i].slice(0,prefix.length)
    //     if(wordPrefix === prefix) return true
    // }
    // return false
    
    // function checkPrefix(word) {
    //     if(word.slice(0,prefix.length) === prefix) return true 
    //     return false
    // }

 // words.filter(word => word.includes(prefix))
let words = []
    for(let key of this.words) {
        words.push(key)
    }
    words.filter(word => word.includes(prefix))
    return words.length ? true : false
*/