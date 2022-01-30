A linked list is a data structure which consists of a group of nodes where each node may point to some other node to form a sequence. Our nodes will have two fields:

(1) a "data" field which will store our data (string, number, etc.)
(2) a "next" field which will be a reference to some other node

Linked lists are useful and simple data structures and are sometimes preferred over using arrays because inserting or deleting elements can be done without reallocation or reorganization of the entire structure.

If, for example, you wanted to add an element to the beginning of the array, every single other element would need to be moved and the array would need to make space for one extra element. Inserting an element at the beginning of a linked list simply requires you to create a new node and set its "next" field to point to some node, making this new node the first node in the sequence now.

```js
function Node(data, next) {
  this.data = data;
  this.next = next;
}
```

This is how we can then create a linked list with connecting nodes:

```js
var n1 = new Node("Hello", null);
var n2 = new Node("21", n1);
var n3 = new Node("Green", n2);

// assign a node to the head which functions
// as the entry into our linked list
var head = n3;
```

Our challenge is to now find the middle node in a linked list. We don't initially know the length of a linked list, all we have is a single node which acts as the head of the linked list and which we can access all other nodes by traversing through each nodes "next" property. We can continuously loop through each node until we get to a node that has a "next" property of null, which means we have reached the last node.
