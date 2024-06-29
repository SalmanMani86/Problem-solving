/**
 * https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/description/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * 1290. Convert Binary Number in a Linked List to Integer
Easy
Topics
Companies
Hint
Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

Return the decimal value of the number in the linked list.

The most significant bit is at the head of the linked list.
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    let current=head;
    let length=0;
    let num=0;
   while (current !== null) {
        length++;
        current = current.next;
    }
    console.log(length,": Length");

    current=head;
    while(current!==null){
        length--;
       num += current.val * Math.pow(2, length);
        console.log(num);
        current=current.next;
    }
    return num;
};