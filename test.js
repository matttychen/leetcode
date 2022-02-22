var fullname = 'John Doe';
var obj = {
   fullname: 'Colin Ihrig',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); 
 
var test = obj.prop.getFullname.bind(obj.prop); 
 


console.log(test()); 



/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/*
var nextPermutation = function(nums) {
    let results = allPermutations(nums);
    
    for (let i = 0; i < results.length; i++) {
        if (JSON.stringify(nums) === JSON.stringify(results[i])) {
            const result = results[i + 1];
            for (let i = 0; i < nums.length; i++) {
                nums[i] = result[i];
            }
            return;
        }
    }
};

const allPermutations = (nums) => {
    let results = [];
    
    if (nums.length === 0) return [];
    if (nums.length === 1) return [nums];
    
    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        remainingNums = nums.slice(0, i).concat(nums.slice(i + 1));
        const remainingNumsPermuted = allPermutations(remainingNums);
        
        for (let j = 0; j < remainingNumsPermuted.length; j++) {
            permutedArray = [currentNum].concat(remainingNumsPermuted[j]);
            
            results.push(permutedArray);
        }
    }
        
    return results;
}
 */