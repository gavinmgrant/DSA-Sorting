// 8. Sorting books
// Imagine that I gave you 20 books to sort in alphabetical order. 
// Express this as an algorithm and then implement your algorithm.

const books = [
    'A Time for Mercy',
    'The Return',
    'Walk the Wire',
    'Lovecraft Country',
    'Hocus Pocus',
    'Little Fires Everywhere',
    'Midwinter Murder',
    'Greenlights',
    'Untamed',
    'Caste',
    'Accidentally Wes Anderson',
    'Killing Crazy Horse',
    'One Vote Away',
    'How to Be an Antiracist',
    'My Own Words',
    'The Body Keeps the Score',
    'What Unites Us',
    'The Colot of Law',
    'Punching the Air',
    'All This Time'
];

// helper function to return true if two strings are in ascending alphabetical order, false if not
const stringsInOrder = (str1, str2, charIndex=0) => {
    // if two of the same books are next to each other, return true
    if (str1 === str2) {
        return true;
    }
    if (str1.toLowerCase().charCodeAt(charIndex) < str2.toLowerCase().charCodeAt(charIndex)) {
        return true;
    } else if (str1.toLowerCase().charCodeAt(charIndex) > str2.toLowerCase().charCodeAt(charIndex)) {
        return false;
    } else {
        // if letters are the same, iterate to next index in string by recursively calling function
        return stringsInOrder(str1, str2, charIndex+1)
    }
};

// break down array into continually smaller chunks, then merge them back together in the correct order
const mergeSort = array => {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    left = mergeSort(left);
    right = mergeSort(right);
    return merge(left, right, array);
};

// keep choosing the lowest value from the left or right arrays that hasn't already been added to the output array
// when 1 of the arrays is empty, you add all of the remaining values from the other array to it
const merge = (left, right, array) => {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        // use helper function to determine if two book titles are in the correct order
        if (stringsInOrder(left[leftIndex], right[rightIndex])) {
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

console.log(mergeSort(books));