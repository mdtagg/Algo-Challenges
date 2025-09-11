
const minimumTeachings = (n, languages, friendships) => {

  const usersToTeach = new Set();

  for(let [user1,user2] of friendships) {

    user1-=1;
    user2-=1;
    let canCommunicate = false;

    for(let lang1 of languages[user1]) {
      for(let lang2 of languages[user2]) {
        if(lang1 === lang2) {
          canCommunicate = true;
          break;
        }
      }
      if(canCommunicate) break;
    }
    if(!canCommunicate) {
      usersToTeach.add(user1);
      usersToTeach.add(user2);
    }
  }

  let minToTeach = friendships.length + 1;

  for(let lang = 1;lang <= n;lang++) {
    let count = 0;
    for(let user of usersToTeach) {
      if(!languages[user].includes(lang)) {
        count++
      }
    }
    minToTeach = Math.min(minToTeach,count);
  }
  return minToTeach;
}


const testCases = [
  [
    2,
    [[1],[2],[1,2]],
    [[1,2],[1,3],[2,3]]
  ],
  [
    3,
    [[2],[1,3],[1,2],[3]],
    [[1,4],[1,2],[3,4],[2,3]]
  ]
]

minimumTeachings(...testCases[1])

/*
NOTES

There are n languages numbered 1 through n,

(unique languages)

[[1,2].[1,3]] 
two users, first knows lang 1 + 2 second knows 1 + 3

  [[1,3],[2,3]]
  Friendships will always have exactly 2 values

we can teach ONE language to each user 
what is the minimum number of users to teach
ONE language to so that ALL FRIENDS can speak
to each other

Languages: [[1],[2],[1,2]]
Friendships: [[1,2],[1,3],[2,3]]

Ex: user 2 and 3 can communicate with each other
becuase they both know language 2

here we can teach user 1 language 2 or user 2 language
1 for a minimum user count of 1




Solution: 

We need to first find out who can communicate with each other
already and elminate them to leave the teachavble users 

In this case that leaves us with user 1 and 2 

Next we need to try each language against each 
user and keep a count of how many of each language
we would have to add to each user


0: 
[2]

1: 
[1, 3]

2: 
[1, 2]

3:
[3]

(if we added language 1 to each that didnt speak it how many would that be?)

Finally we need to track the minimum as we compare




create a set to store the users that cant communicate 

iterate through the friendships checking for common languages 
    if they cant communicate add to our set

initialize a minToTeach variable to store our result

iterate through each language up to n 
    initialize a count variable to store how many languages we add per user
    iterate through our set of users
        if the langauge is not spoken by that user increment count 

    reassign the minToTeach variable with the minium count

return the minToTeach variable
  

var minimumTeachings = function(totalLanguages, userLanguages, friendships) {
  let usersToTeach = new Set();
  
  // Step 1: Find users who cannot communicate
  for (let [u1, u2] of friendships) {
      u1 -= 1;
      u2 -= 1;
      let canCommunicate = false;
      
      for (let lang1 of userLanguages[u1]) {
          for (let lang2 of userLanguages[u2]) {
              if (lang1 === lang2) {
                  canCommunicate = true;
                  break;
              }
          }
          if (canCommunicate) break;
      }
      
      if (!canCommunicate) {
          usersToTeach.add(u1);
          usersToTeach.add(u2);
      }
  }
  
  let minUsersToTeach = userLanguages.length + 1;
  
  // Step 2: Try each language
  for (let lang = 1; lang <= totalLanguages; lang++) {
      let count = 0;
      
      for (let user of usersToTeach) {
          if (!userLanguages[user].includes(lang)) {
              count++;
          }
      }
      
      minUsersToTeach = Math.min(minUsersToTeach, count);
  }
  
  return minUsersToTeach;
};

// const minimumTeachings = function(n, languages, friendships) {

//     const dp = new Array(friendships.length).fill(0).map(arr => {
//       arr = []
//       return arr
//     })

//     for(let i = 0;i < friendships.length;i++) {
//       let [friend1,friend2] = friendships[i]
//       dp[friend1 - 1].push(...languages[friend2 - 1])
//       dp[friend2 - 1].push(...languages[friend1 - 1])
//       dp[friend1 - 1].sort()
//       dp[friend2 - 1].sort()
//     }
//     console.log(dp)
    
// };
*/

