


const maxDistance = (nums1, nums2) => {

    let left = 0;
    let right = 0;
    let maxDistance = 0;

    while(right < nums2.length) {
      if(nums1[left] <= nums2[right]) {
        maxDistance = Math.max(maxDistance,right - left);
        right++;
      }
      else {
        left++;
        right = left;
      }
    }

    return maxDistance;
};

const inputs = [
  [[55,30,5,4,2],[100,20,10,10,5]],
  [[0],[0]],
  [[100,100,100,100],[2,2,2,1]]
]

maxDistance(...inputs[1])

