function threeSum(nums: number[]): number[][] {
  let arr: number[][] = [];
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = i + 2; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0 && i !== k && i !== j && j !== k)
          arr.push([nums[i], nums[j], nums[k]]);
      }
    }
  }

  let finArray: number[][] = [];

  for (let i = 0; i < arr.length; i++) {
    arr[i].sort();
    if (!JSON.stringify(finArray).includes(JSON.stringify(arr[i])))
      finArray.push(arr[i]);
  }

  return finArray;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 1, 1]));
console.log(threeSum([0, 0, 0]));
console.log(threeSum([3, 0, -2, -1, 1, 2]));
