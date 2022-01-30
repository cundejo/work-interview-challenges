/**
 * What we'll do is setup two pointers, one that will traverse the
 * linked list one node at a time, and the other pointer will traverse
 * two nodes at a time. This way when the faster pointer reaches the end of
 * the linked list, the slower pointer will be halfway there because
 * it was only moving one node at time while the faster one was moving two nodes at a time.
 * This allows you to find the middle node of a linked list with only one pass,
 * instead of passing through the whole linked list once, and then again to find the middle element.
 */

function Node(data, next) {
  this.data = data;
  this.next = next;
}

// setup some nodes and connect them to each other
// the linked list looks like:
// (head) n5 -> n4 -> n3 -> n2 -> n1 -> null
var n1 = new Node("Hello", null);
var n2 = new Node("21", n1);
var n3 = new Node("Green", n2);
var n4 = new Node("Blue", n3);
var n5 = new Node("Daniel", n4);

// assign a node to the head which functions
// as the entry into our linked list
var head = n5;

// setup pointers to both start
// at the head of the linked list
var fastPointer = head;
var slowPointer = head;

// loop through the linked list
// when fastPointer reaches the end of the list
// then slowPointer will be at the middle node
while (fastPointer.next !== null && fastPointer.next.next !== null) {
  fastPointer = fastPointer.next.next;
  slowPointer = slowPointer.next;
}

// slowPointer is now at the middle node in the linked list
slowPointer.data;
