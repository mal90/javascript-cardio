// class LinkedList {
//     constructor(value) {
//         this.head = {
//             value,
//             next: null
//         };
//         this.length = 1;
//     }
// }
//console.log(new LinkedList('Hello!'));

////////////////////////////////


class LinkedList {
    constructor(value) {
        this.head = null;
        this.length = 0;
        this.addToHead(value);
    }

    addToHead(value) {
        const newNode = { value }; // 1
        newNode.next = this.head;  // 2
        this.head = newNode;       // 3
        this.length++;
        return this;
    }

    removeFromHead() {
        if (this.length === 0) {
            return undefined;
        }

        const value = this.head.value;
        this.head = this.head.next;
        this.length--;

        return value;
    }

    find(val) {
        let thisNode = this.head;

        while (thisNode) {
            if (thisNode.value === val) {
                return thisNode;
            }

            thisNode = thisNode.next;
        }

        return thisNode;
    }
}
const list = new LinkedList('first');
list.addToHead('second')
list.addToHead('third');
//list.removeFromHead();
list.find("first");

console.log(list.find("first"));