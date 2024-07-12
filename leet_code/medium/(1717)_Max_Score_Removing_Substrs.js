

var maximumGain = function(s, x, y) {
  let a = 'a';
  let b = 'b';

  let a_score = 0;
  let b_score = 0;

  let score = 0;

  if(x < y) {
    [x,y] = [y,x];
    [a,b] = [b,a];
  }

  for(let char of s) {
    if(char === a) {
      ++a_score;
    }else if(char === b) {
      if(a_score > 0) {
        --a_score;
        score += x;
      }else {
        ++b_score;
      }
    }else {
      score = Math.min(a_score,b_score) * y;
      a_score = 0;
      b_score = 0;
    }
  }
  score += Math.min(a_score,b_score) * y;
  return score
};

maximumGain("cdbcbbaaabab",4,5)

/*
var maximumGain = function(s, x, y) {
  let a = 'a';
  let b = 'b';

  if(x < y){
     [x, y] = [y, x];
     [a, b] = [b, a];
  }

  let score=0;
  let a_count = 0;
  let b_count = 0;

  for(let c of s){
    if(c === a){
      ++a_count;
    }else if(c === b){
      if(a_count > 0){
          --a_count;
          score += x;
      }else{
          ++b_count;
      }
    }else{
      score += Math.min(a_count, b_count)*y;
      a_count = 0;
      b_count = 0;
    }
  }
  score += Math.min(a_count, b_count)*y;
  return score;
};
*/