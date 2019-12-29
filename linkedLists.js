class LinkedListNode {
  constructor(data) {
      this.data = data;
      this.next = null;
  }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(data) {

      // create a new node
      const newNode = new LinkedListNode(data);

      //special case: no items in the list yet
      if (this.head=== null) {

          // just set the head to the new node
          this.head = newNode;
      } else {

          // start out by looking at the first node
          let current = this.head;

          // follow `next` links until you reach the end
          while (current.next !== null) {
              current = current.next;
          }

          // assign the node into the `next` pointer
          current.next = newNode;
      }
  }

}

const ll = new LinkedList();
ll.add(10);
ll.add(20);
ll.add(30);
// ll.add(40);
console.log(JSON.stringify(ll));
ll.remove();

//console.log(ll.addToEnd());
console.log(JSON.parse(ll));