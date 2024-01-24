

const rot13 = (str) => {

    let result = ""

    function evaluate(charCode,mid) {
        charCode > mid ? charCode -= 13 : charCode += 13
        result += String.fromCharCode(charCode)
    }

    for(let i = 0;i < str.length;i++) {
        let charCode = str.charCodeAt(i)
        charCode >= 65 && charCode <= 90 ? evaluate(charCode,77) :
        charCode >= 97 && charCode <= 122 ? evaluate(charCode,109) :
        result += str[i]
    }
    return result
}

rot13("abyzABYZ")