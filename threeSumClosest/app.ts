function threeSumClosest(nums: number[], target: number): number {
  let arr: number[] = [];
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = i + 2; k < nums.length; k++) {
        if (i !== j && i !== k && j !== k)
          arr.push(nums[i] + nums[j] + nums[k]);
      }
    }
  }
  console.log("Array: ", arr);

  let newArray: number[] = [];

  for (let i = 0; i < arr.length; i++) {
    newArray.push(Math.abs(arr[i] - target));
  }

  const minDifference = Math.min(...newArray);
  const minDifferenceIndex = newArray.indexOf(minDifference);

  return arr[minDifferenceIndex];
}

console.log(threeSumClosest([-1, 2, 1, -4], 1));
console.log(threeSumClosest([0, 0, 0], 1));
