"use strict";
// parameter kimi array of strings | numbers qəbul edən,
// və qəbul etdiyi arrayi reverse edib geri qaytaran generic function yazin
// let numbers = [1, 2, 3, 4, 5];
// let strings = ["apple", "banana", "cherry", "date"];
// let reversedNumbers = reverseArray(numbers);
// let reversedStrings = reverseArray(strings);
// console.log(reversedNumbers);
// console.log(reversedStrings);
// function reverseArray<T>(array: T[]): T[] {
//     return array.reverse();
//   }


// class name:  Queue
// property name: items/elements
// methods:
// add
// remove
// isEmpty
// clear
// print

class Queue {
    constructor() {
        this.elements = [];
    }
    add(item) {
        this.elements.push(item);
    }
    remove() {
        return this.elements.shift();
    }
    isEmpty() {
        return this.elements.length === 0;
    }
    print() {
        console.log(this.elements);
    }
}
let numberQueue = new Queue();
// Add some numbers
numberQueue.add(10);
numberQueue.add(20);
numberQueue.add(30);
// Print the queue
console.log("Queue after adding numbers:");
numberQueue.print();
// Remove elements
let removedItem1 = numberQueue.remove();
let removedItem2 = numberQueue.remove();
// Print the queue after remove
console.log("Queue after removing:");
numberQueue.print();
// Print removed items
console.log("Removed items:");
console.log(removedItem1);
console.log(removedItem2);
