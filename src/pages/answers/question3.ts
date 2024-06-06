function twoSum(numbers: number[], target: number): number[] {
  for (let i = 0; i < numbers.length; i++) {
    //get subtraction from target with each number on array
    const subtractionResult = target - numbers[i];
    //if result of subtraction include on arrays
    if (numbers.includes(subtractionResult)) {
      //then will return index of current number (i+1) and index of result subtraction (numbers.indexOf(subtractionResult) + 1)
      return [i + 1, numbers.indexOf(subtractionResult) + 1];
    }
  }
  return [];
}

console.log(twoSum([4, 11, 17, 25], 21));
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 3, 4], 6));
console.log(twoSum([-1, 0], -1));
