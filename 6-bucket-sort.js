// 6. Bucket sort
// Write an O(n) algorithm to sort an array of integers, where you know in advance what the lowest and highest values are. 
// You can't use arr.splice(), shift() or unshift() for this exercise.

const bucketSort = (arr, min, max) => {
    const sortMap = new Map();

    // insert every value in the array into the Map object
    for (let i = 0; i < arr.length; i++) {
        if (sortMap.get(arr[i]) === undefined) {
            sortMap.set(arr[i], 1);
        }
        else {
            // tracking the number of times each value appears
            sortMap.set(arr[i], sortMap.get(arr[i]) + 1);
        }
    }
    console.log('sortMap: ', sortMap);

    // iterate each number between min and max value to get an ascending order
    let arrI = 0;
    for (let i = min; i <= max; i++) {
        // get the values in the Map object to know how many times the given value appears
        let numAppearing = sortMap.get(i);
        console.log('i: ', i);
        // overwrite the values in the array, in ascending order
        while (numAppearing) {
            arr[arrI] = i;
            numAppearing--;
            arrI++;
        }
    }
    return arr;
}

const sortIt = () => {
    const dataset = [22, 45, 12, 8, 10, 6, 72, 81, 33, 18, 50, 14, 10];
    const max = Math.max(...dataset);
    const min = Math.min(...dataset);

    console.log(bucketSort(dataset, min, max));
}

sortIt()