// 5. Sorting a linked list using merge sort
// Given a Linked List, sort the linked list using merge sort. 
// You will need your linked list class from previous lesson to create the list and use all of its supplemental functions to solve this problem.

const linkedListToSort = new LinkedList();

const createList = () => {
    linkedListToSort.insertFirst(9);
    linkedListToSort.insertLast(3);
    linkedListToSort.insertLast(4);
    linkedListToSort.insertLast(1);
    linkedListToSort.insertLast(7);

    return linkedListToSort;
}

console.log(createList());

// Merge sort algorithm using a linked list rather than array
const mergeSortLists = list => {
    if (list.length <= 1) {
        return list;
    }

    const middle = Math.floor(list.length / 2);

    let left = splitList(list, 0, middle);
    let right = splitList(list, middle, list.length);

    console.log('list: ', list, 'left: ', left, 'right: ', right);
    
    left = mergeSortLists(left);
    right = mergeSortLists(right);

    return mergeLists(left, right);
};

const mergeLists = (leftList, rightList) => {
    const mergedList = new LinkedList();
    let currLeft = leftList.head;
    let currRight = rightList.head;

    // while there are nodes in both lists
    while (currLeft && currRight) {
        // if value of left list is lower, append it to the end of mergedList
        if (currLeft.value <= currRight.value) {
            mergedList.insertLast(currLeft.value);
            // move currLeft forward
            currLeft = currLeft.next;
        }
        else {
            // append value of currRight to mergedList
            mergedList.insertLast(currRight.value)
            // move currRight forward
            currRight = currRight.next
        }
    }
    // once the end of one list is reached, append remaining values to list
    while (currLeft) {
        mergedList.insertLast(currLeft.value);
        currLeft = currLeft.next;
    }
    while (currRight) {
        mergedList.insertLast(currRight.value);
        currRight = currRight.next;
    }
    return mergedList;
};

// helper function to split the linked list, excludes value of "end"
const splitList = (list, start, end) => {
    let currNode = list.head;
    if (currNode === null) return;
    const returnList = new LinkedList();
    let i = 0;
    while (currNode !== null) {
        if (i >= start && i < end) {
            console.log('length: ', returnList.length);
            returnList.insertLast(currNode.value);
            console.log('insertLast: ', currNode.value);
        }
        i++;
        currNode = currNode.next;
    }
    console.log('length: ', returnList.length);
    return returnList;
}

console.log(mergeSortLists(linkedListToSort));