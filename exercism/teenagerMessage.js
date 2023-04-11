 function hey(message) {
    message = message.trim()
   if(!message.length) return 'Fine. Be that way!'
   const regex = /[A-Za-z]/
   const messageArray = message.split('')
   const modifier = messageArray.pop()
   if(modifier === '?') {
     return messageArray.every(letter => letter.toUpperCase() === letter) &&
     messageArray.some(letter => letter.match(regex)) ? 
       "Calm down, I know what I'm doing!" :
       'Sure.'
   }
  if(messageArray.every(letter => letter.toUpperCase() === letter) &&
     messageArray.some(letter => letter.match(regex))
    ) {
    return 'Whoa, chill out!'
  }
  console.log('whatever')
  return "Whatever."
}

hey('1,2,3')


/*
Best Solution 
*/

// const answers: string[] = ["Whatever.", "Sure.", "Whoa, chill out!", "Calm down, I know what I'm doing!"];
// export const hey = (input: string): string => {
//   const speech = input.trim()
//   if (speech == "") return "Fine. Be that way!"
  
//   const isQuestion = speech.endsWith("?") ? 1 : 0
//   const isShout = /[A-Z]+/.test(speech) && speech == speech.toUpperCase() ? 2 : 0
//   return answers[isQuestion + isShout]
// }