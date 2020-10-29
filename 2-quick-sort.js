'use strict';

// 2. Understanding quicksort

/* 
1) Suppose you are debugging a quicksort implementation that is supposed to sort an array in ascending order. 
After the first partition step has been completed, the contents of the array is in the following order: 3 9 1 14 17 24 22 20. 
Which of the following statements is correct about the partition step? Explain your answer.

    X The pivot could have been 17, but could not have been 14
    --> The pivot could have been either 14 or 17 
        A: Given the order of the numbers, either 14 or 17 could be the pivot, since the numbers on either side are larger and smaller than 14 and 17.
    X Neither 14 nor 17 could have been the pivot
    X The pivot could have been 14, but could not have been 17


2) Given the following list of numbers 14, 17, 13, 15, 19, 10, 3, 16, 9, 12 
show the resulting list after the second partitioning according to the quicksort algorithm.

    When using the last item on the list as a pivot (12)
    first partitioning --> [ 10, 3, 9, 12, 19, 14, 17, 16, 13, 15 ]
    second partitioning --> [ 3, 9, 10, 12, 19, 14, 17, 16, 13, 15 ]

    When using the first item on the list as a pivot (14)    
    first partitioning --> [ ??? ]
    second partitioning --> [ ??? ]
*/

const array = [14, 17, 13, 15, 19, 10, 3, 16, 9, 12];

function swap(array, i, j) {
    console.log('swap!', 'i: ', array[i], 'j: ', array[j])
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
};

let count = 0;

function quickSort(array, start = 0, end = array.length) {
    if (start >= end) {
        return array;
    }
    console.log(count, 'array: ', array);
    count++;
    const middle = partition(array, start, end);
    array = quickSort(array, start, middle);
    array = quickSort(array, middle + 1, end);
    return array;
};

// Lomuto's algorithm with pivot at end
/*
function partition(array, start, end) {
    const pivot = array[end - 1];
    console.log('pivot: ', pivot);
    let j = start;
    for (let i = start; i < end - 1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }
    swap(array, end-1, j);
    return j;
};
*/

// Lomuto's algorithm with pivot at start

function partition(array, start, end) {
    const pivot = array[start];
    console.log('pivot: ', pivot);
    let j = start;
    for (let i = start; i < end - 1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }
    swap(array, start, j);
    return j;
};

console.log(quickSort(array));