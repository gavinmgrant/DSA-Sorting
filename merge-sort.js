'use strict';

// 1. Understanding merge sort
// Given the following list of numbers 21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40

const array = [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40];

function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);
    console.log('array: ', array, 'left: ', left, 'right: ', right);
    left = mergeSort(left);
    right = mergeSort(right);
    return merge(left, right, array);
};

function merge(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        }
        else {
            array[outputIndex++] = right[rightIndex++];
        }
    }

    for (let i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i];
    }

    for (let i = rightIndex; i < right.length; i++) {
        array[outputIndex++] = right[i];
    }
    return array;
};

console.log(mergeSort(array));

// What is the resulting list that will be sorted after 3 recursive calls to mergesort?
// Answer: [ 21, 1 ]

// What is the resulting list that will be sorted after 16 recursive calls to mergesort?
// Answer: [ 1, 2, 9, 16, 21, 26, 27, 28, 29, 34, 39, 40, 43, 45, 46, 49 ]

// What are the first 2 lists to be merged?
// Answer: left: [ 21, 1, 26, 45, 29, 28, 2, 9 ] right: [ 16, 49, 39, 27, 43, 34, 46, 40 ]

// Which two lists would be merged on the 7th merge?
// Answer: left: [ 29 ] right: [ 28 ]