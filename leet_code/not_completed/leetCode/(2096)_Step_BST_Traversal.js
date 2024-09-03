

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const root = new TreeNode(5);
root.left = new TreeNode(1)
root.left.left = new TreeNode(3)
root.right = new TreeNode(2)
root.right.right = new TreeNode(4)
root.right.left = new TreeNode(6)


var getDirections = function(root, startValue, destValue) {
  let left = dfs(root, startValue, [])
  let right = dfs(root, destValue, [])
  let i = 0
  let lStr = ""
  let rStr = ""
  //console.log(left)
  while(left[i] && right[i] && left[i] == right[i]) {
      i++
      // skip
  }
  //console.log("l", left[i-1], right[i-1])
  let j = Math.max(0,i), k = Math.max(0,i)
  while (left[j]) {
      lStr += "U"
      j++
  }
  //console.log(left, right, k)
  while (right[k]) {
      rStr += right[k]
      k++
  }

  return lStr + rStr
};

function dfs(root, target, path) {
  if (root.val == target) return path
  if (root.left) {
      path.push("L")
      let out = dfs(root.left, target, path)
      if (out) return out
      path.splice(path.length-1,1)
  }
  if (root.right) {
      path.push("R")
      let out = dfs(root.right, target, path)
      if (out) return out

      path.splice(path.length-1,1)

  }
  if (!root.left && !root.right) return null
}

getDirections(root,3,6)

/*
function getDirections(root,start,end) {

  let res = "";
  let left = false;
  let right = false;

  function dfs(node) {
    if(!node) return;
    dfs(node.left);
    if(node.val !== root.val) {
      if((node.val === start && !right) || left) {
        left = true;
        res += "U";
      }else {
        res += "L"
      }
  }
    dfs(node.right);
    if(node.val !== root.val) {
      if((node.val === end && !left) || right) {
        right = true;
        res += "U"
      }
      else {
        res += "R"
      }
    }
  }
  dfs(root)
}

function getDirections(node,start,end,count=0) {

  if(!node) return "";
  let newCount = count + 1;
  let left = getDirections(node.left,start,end,newCount);
  if(node.val === start) {
    return left + "U".repeat(newCount)
  }
  else if(node.val === end) {
    return left + "L".repeat(newCount)
  }
  let right = getDirections(node.right,start,end,newCount);
  if(node.val === end) {
    return ""
  }
  
}
*/