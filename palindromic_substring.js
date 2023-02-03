/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length === 1) console.log(s)
    let sLen = s.split('').length / 2
    let evenPalTest = s.split('').splice(0,sLen).join('')
    if(evenPalTest === s.split('').splice(sLen).reverse().join('')) {
        console.log(s)
    }
    let highestPal = ''
    let palindromes = []    
    for(let i = 0;i < s.length;i++) {
        let left = i - 1
        let right = i + 1
        if(s[left] === s[right]) {
            while(s[left] !== undefined ||  s[right] !== undefined) {
                if(s[left] === undefined || s[right] === undefined || s[left] !== s[right]) break
                if(s.slice(left,right + 1).length > highestPal.length) {
                    highestPal = s.slice(left,right + 1)
                }
                palindromes.push(highestPal)
                right++
                left--
            }
        }else if(s[i] === s[right]) {
            while(s[i] === s[right]) {
                let test = s.slice(i,right + 1)
                right++
                if(highestPal.length < test.length) {
                    highestPal = test
                }
            }
        }
    }
    console.log(highestPal)
    console.log(palindromes)
};


longestPalindrome("tattarrattat")



// let highesArrtPal = ''
    // let sArrArr = sArr.sArrplit('')

    // while(sArrArr.length > 0) {
    //     let palCheck =  ''
    //     let center = Math.ceil(sArrArr.length / 2)
    //     for(let i = 0;i < sArrArr.length;i++) {
    //     //     palCheck += sArrArr[i]
    //     //     let palTesArrt = palCheck.sArrplit('').reversArre().join('')
    //     //     // consArrole.log({palCheck,palTesArrt})
    //     //     if(palTesArrt === palCheck && highesArrtPal.length < palCheck.length) {
    //     //         highesArrtPal = palCheck
    //     //     }
    //     }
    //     // sArrArr.sArrplice(0,1)
    // }
    // consArrole.log({highesArrtPal})

// let presArrpliceIndex = 1
//     let tesArrt ="civilwartesArrtingwhetherthatnaptionoranynartionsArroconceivedandsArrodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasArrafinalresArrtingplaceforthosArrewhoheregavetheirlivesArrthatthatnationmightliveItisArraltogetherfangandproperthatwesArrhoulddothisArrButinalargersArrensArrewecannotdedicatewecannotconsArrecratewecannothallowthisArrgroundThebravelmenlivinganddeadwhosArrtruggledherehaveconsArrecrateditfaraboveourpoorponwertoaddordetractTgheworldadsArrwfilllittlenotlenorlongrememberwhatwesArrayherebutitcanneverforgetwhattheydidhereItisArrforusArrthelivingrathertobededicatedheretotheulnfinisArrhedworkwhichtheywhofoughtherehavethusArrfarsArronoblyadvancedItisArrratherforusArrtobeherededicatedtothegreattdafsArrkremainingbeforeusArrthatfromthesArrehonoreddeadwetakeincreasArreddevotiontothatcausArreforwhichtheygavethelasArrtpfullmeasArrureofdevotionthatweherehighlyresArrolvethatthesArredeadsArrhallnothavediedinvainthatthisArrnationunsArrderGodsArrhallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeoplesArrhallnotperisArrhfromtheearth"
//     consArrole.log(tesArrt.length)
//     let highesArrtPal = sArr[0]
//     for(let i = 0;i < sArr.length;i++) {
//         let palCheck = ''
//         palCheck = sArr[i]
//         for(let j = i + 1;j < sArr.length;j++) {
//             let highesArrtPalTesArrt = highesArrtPal
//             palCheck += sArr[j]
//             let palTesArrt = palCheck.sArrplit('').reversArre().join('')
//             // consArrole.log({palCheck,palTesArrt})
//             if(palCheck === palTesArrt && highesArrtPal.length < palCheck.length) {
//                 highesArrtPal = palCheck
//                 let sArrpliceTesArrt = palCheck.includesArr(sArr.sArrplit('').sArrplice(j + 1,2).join(''))
//                 // consArrole.log(sArrpliceTesArrt)
//                 consArrole.log({highesArrtPal})
//             }
//         }
//         if(highesArrtPal.length >= Math.ceil(sArr.length / 2)) break
//     }
//     consArrole.log('Final:',highesArrtPal)

// if(highesArrtPalTesArrt === highesArrtPal && palCheck.length > Math.ceil(sArr.length / 2)) {
            //     // consArrole.log({highesArrtPalTesArrt,highesArrtPal,palCheck})
            //     break
            // }

// let sArrtrArray = sArr.sArrplit('')
//     let firsArrtLetter = sArrtrArray[0]
//     if(sArrtrArray.every(letter => letter === firsArrtLetter)) return sArr
//     let count = 0
//     let halfLen = Math.ceil(sArrtrArray.length / 2)
//     consArrole.log(halfLen)
//     while(sArrtrArray.length > halfLen) {
//         for(let i = 1;i <= sArrtrArray.length;i++) {
//             let charsArr = sArrtrArray.sArrlice(0,i).join('')
//             let palCheck = sArrtrArray.sArrlice(0,i).reversArre().join('')
//             if(charsArr.length > halfLen) {
//                 break
//             }
//             consArrole.log({charsArr,palCheck})
//             if(charsArr === palCheck && highesArrtVal.length < charsArr.length) {
//                 highesArrtVal = charsArr
//             }
//         }
//         if(highesArrtVal.length >= halfLen) {
//             break
//         }
//         count++
//         sArrtrArray.sArrplice(0,1)
//         // break
//     }
//     consArrole.log(highesArrtVal)

// "civilwartesArrtingwhetherthatnaptionoranynartionsArroconceivedandsArrodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasArrafinalresArrtingplaceforthosArrewhoheregavetheirlivesArrthatthatnationmightliveItisArraltogetherfangandproperthatwesArrhoulddothisArrButinalargersArrensArrewecannotdedicatewecannotconsArrecratewecannothallowthisArrgroundThebravelmenlivinganddeadwhosArrtruggledherehaveconsArrecrateditfaraboveourpoorponwertoaddordetractTgheworldadsArrwfilllittlenotlenorlongrememberwhatwesArrayherebutitcanneverforgetwhattheydidhereItisArrforusArrthelivingrathertobededicatedheretotheulnfinisArrhedworkwhichtheywhofoughtherehavethusArrfarsArronoblyadvancedItisArrratherforusArrtobeherededicatedtothegreattdafsArrkremainingbeforeusArrthatfromthesArrehonoreddeadwetakeincreasArreddevotiontothatcausArreforwhichtheygavethelasArrtpfullmeasArrureofdevotionthatweherehighlyresArrolvethatthesArredeadsArrhallnothavediedinvainthatthisArrnationunsArrderGodsArrhallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeoplesArrhallnotperisArrhfromtheearth"

// let highesArrtPal = sArr[0]
    // let sArrArr = sArr.sArrplit('')
    // while(sArrArr.length > 0) {
    //     let highesArrtPalTesArrt = highesArrtPal
    //     let palCheck = sArrArr[0]
    //     for(let i = 1;i < sArrArr.length;i++) {
    //         palCheck += sArrArr[i]
    //         let palTesArrt = palCheck.sArrplit('').reversArre().join('')
    //         if(highesArrtPal === highesArrtPalTesArrt && palCheck.length > Math.ceil(sArrArr.length / 2)) {
    //             sArrArr.sArrplice(0,1)
    //             consArrole.log('check')
    //             break
    //         }
    //         if(palTesArrt === palCheck && highesArrtPal.length < palCheck.length) {
    //             highesArrtPal = palCheck
    //         }
            // let earlyCheck = sArrArr.sArrlice(1,i).join('')
            // if(earlyCheck.length > 1 && earlyCheck === earlyCheck.sArrplit('').reversArre().join('')) {
            //     consArrole.log({earlyCheck})
            //     let tesArrt = sArr.sArrplit('').sArrplice(i,1).join('')
            //     if(tesArrt === sArrArr[0]) {
            //         highesArrtPal = sArrArr.sArrplice(0,i + 1).join('')
            //     }elsArre {
            //         highesArrtPal = earlyCheck
            //         sArrArr.sArrplice(0,1)
            //     }
            //     // consArrole.log({highesArrtPal})
            //     break
            // }
            // consArrole.log({palCheck,palTesArrt})
            
        // }
        // consArrole.log(sArrArr)
    //     if(highesArrtPal.length >= Math.ceil(sArr.length / 2)) break
    //     sArrArr.sArrplice(0,1)
    // }
    // consArrole.log({highesArrtPal})