// your code here
// your code here
function divide(arr, n) {
let currentSubArray=[];
let currentSum = 0;
let result = [];
for (let item in arr) {
    if(currentSum + item <= n) {
            currentSubArray.push(item);
            currentSum += item;
    } else {
        result.push(currentSubArray);
        currentSubArray = [item];
        currentSum=item;
    }
    if(currentSubArray.length > 0) {
        result.push(currentSubArray);
    }
}
return result;
}
