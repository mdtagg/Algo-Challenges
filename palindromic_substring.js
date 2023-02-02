/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

    let test ="civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"
    console.log(test.length)
    let highestPal = s[0]
    for(let i = 0;i < s.length;i++) {
        let palCheck = ''
        palCheck = s[i]
        for(let j = i + 1;j < s.length - 1;j++) {
            let highestPalTest = highestPal
            palCheck += s[j]
            let palTest = palCheck.split('').reverse().join('')
            // console.log({palCheck,palTest})
            if(palCheck === palTest && highestPal.length < palCheck.length) {
                highestPal = palCheck
                // console.log({highestPalTest,highestPal})
            }
            if(highestPalTest === highestPal && palCheck.length > Math.ceil(s.length / 2)) {
                // console.log({highestPalTest,highestPal,palCheck})
                break
            }
        }
        if(highestPal.length >= Math.ceil(s.length / 2)) break
    }
    console.log('Final:',highestPal)
};

longestPalindrome("civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth")

// let strArray = s.split('')
//     let firstLetter = strArray[0]
//     if(strArray.every(letter => letter === firstLetter)) return s
//     let count = 0
//     let halfLen = Math.ceil(strArray.length / 2)
//     console.log(halfLen)
//     while(strArray.length > halfLen) {
//         for(let i = 1;i <= strArray.length;i++) {
//             let chars = strArray.slice(0,i).join('')
//             let palCheck = strArray.slice(0,i).reverse().join('')
//             if(chars.length > halfLen) {
//                 break
//             }
//             console.log({chars,palCheck})
//             if(chars === palCheck && highestVal.length < chars.length) {
//                 highestVal = chars
//             }
//         }
//         if(highestVal.length >= halfLen) {
//             break
//         }
//         count++
//         strArray.splice(0,1)
//         // break
//     }
//     console.log(highestVal)

// "civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"

