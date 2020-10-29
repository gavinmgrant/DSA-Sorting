'use strict';

class _Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
};

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    insertFirst(item) {
        this.head = new _Node(item, this.head);
        this.length++;
    }

    insertLast(item) {
        if (this.head === null) {
            this.insertFirst(item);
            this.length--;
        }
        else {
            let tempNode = this.head;
            while (tempNode.next !== null) {
                tempNode = tempNode.next;
            }
            tempNode.next = new _Node(item, null);
        }
        this.length++;
    }

    insertBefore(insertItem, key) {
        // start at the head
        let currNode = this.head;
        
        while (key !== currNode.next.value) {
            currNode = currNode.next;
        }

        let findValue = this.find(key);

        // create the new node and set its value to the next list item
        currNode.next = new _Node(insertItem, findValue);
        this.length++;
    }

    insertAfter(insertItem, key) {
        let findValue = this.find(key);
        let tempNext = findValue.next;

        // create the new node after the value
        findValue.next = new _Node(insertItem, tempNext);
        this.length++;
    }

    insertAt(insertItem, position) {
        let currNode = this.head;
        let count = 0;

        // do this until you get to the end of the list
        while (currNode.next !== null) {
            count++;
            if (count === position) {
                this.insertBefore(insertItem, currNode.value);
            }
            currNode = currNode.next;
        }
        this.length++;
    }

    remove(item) {
        if (!this.head) {
            return null;
        }
        if (this.head.value === item) {
            this.head = this.head.next;
            return;
        }
        let currNode = this.head;
        let previousNode = this.head;
        while ((currNode !== null) && (currNode.value !== item)) {
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('Item not found');
            return;
        }
        previousNode.next = currNode.next;
        this.length--;
    }

    find(item) {
        let currNode = this.head;
        if (!this.head) {
            return null;
        }
        while (currNode.value !== item) {
            if (currNode.next === null) {
                return null;
            }
            else {
                currNode = currNode.next;
            }
        }
        return currNode;
    }
};

// export default LinkedList;