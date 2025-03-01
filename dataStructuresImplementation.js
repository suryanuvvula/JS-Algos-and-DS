// Add your code here
// FIFO
class Queue {
    constructor() {
      this.items = {};
      this.front = 0;
      this.rear = 0;
    }
  
    // adds element at the rear end
    enqueue(element) {
      this.items[this.rear] = element;
      this.rear++;
    }
  
    // returns the front element and removes it from queue
    dequeue() {
      const item = this.items[this.front];
      delete this.items[this.front];
      this.front++;
      return item;
    }
  
    isEmpty() {
      return this.rear - this.front === 0;
    }
  
    peek() {
      return this.items[this.front];
    }
  
    size() {
      return this.rear - this.front;
    }
  
    print() {
      console.log(this.items);
    }
  }
  
  const obj = new Queue();
  console.log('isEmpty', obj.isEmpty());
  console.log('enqueue', obj.enqueue(10));
  console.log('enqueue', obj.enqueue(20));
  console.log('enqueue', obj.enqueue(30));
  console.log('size', obj.size());
  console.log('print', obj.print());
  console.log('dequeue', obj.dequeue());
  console.log('peek', obj.peek());
  
  // circular Queue
  class CircularQueue {
    constructor(capacity) {
      this.items = new Array(capacity);
      this.capacity = capacity;
      this.currentLength = 0;
      this.rear = -1;
      this.front = -1;
    }
  
    isFull() {
      return this.currentLength === this.capacity;
    }
  
    isEmpty() {
      return this.currentLength === 0;
    }
  
    enqueue(element) {
      if(!this.isFull()) {
        this.rear = (this.rear + 1) % this.capacity;
        this.items[this.rear] = element;
        this.currentLength += 1;
        if(this.front === -1) {
          this.front = this.rear;
        }
      }
    }
  
    dequeue() {
      if(this.isEmpty()) return null;
      const item = this.items[this.front];
      this.items[this.front] = null;
      this.front = (this.front + 1) % this.capacity;
      this.currentLength -= 1;
      if(this.isEmpty()) {
        this.front = -1;
        this.rear = -1;
      }
  
      return item;
    }
  
    peek() {
      if(!this.isEmpty()) {
        return this.items[this.front];
      }
  
      return null;
    }
  
    print() {
      if(this.isEmpty()) {
        console.log('Queue is empty');
      } else {
        let i;
        let str = '';
        for(let i = this.front; i != this.rear; i = (i +1) % this.capacity) {
          str += this.items[i] + ' ';
        }
        str += this.items[i];
        console.log(str);
      }
    }
  }
  
  const circularQueue = new CircularQueue(5);
  console.log('isEmpty', circularQueue.isEmpty());
  console.log('enqueue', circularQueue.enqueue(10));
  console.log('enqueue', circularQueue.enqueue(20));
  console.log('enqueue', circularQueue.enqueue(30));
  console.log('enqueue', circularQueue.enqueue(40));
  console.log('enqueue', circularQueue.enqueue(50));
  console.log('isFull', circularQueue.isFull());
  console.log('print', circularQueue.print());
  console.log('dequeue', circularQueue.dequeue());
  console.log('peek', circularQueue.peek());
  console.log('print', circularQueue.print());
  console.log('enqueue', circularQueue.enqueue(60));
  console.log('print', circularQueue.print());
  
  // Linked list
  class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    getSize() {
      return this.size;
    }
  
    prepend(value) {
      const node = new Node(value);
      if(this.isEmpty()) {
        this.head = node;
      } else {
        node.next = this.head;
        this.head = node;
      }
      this.size++;
    }
  
    append(value) {
      const newNode = new Node(value);
      if(this.isEmpty()) {
        this.head = newNode;
      } else {
        let current = this.head;
        while(current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
      this.size++;
    }
  
    insert(index, value) {
      if(index < 0 || index > this.size) return;
  
      if(index === 0) {
        this.prepend(value);
      } else {
        const newNode = new Node(value);
        let prev = this.head;
        for(let i = 0; i < index - 1; i++) {
          prev = prev.next;
        }
        newNode.next = prev.next;
        prev.next = newNode;
        this.size++;
      }
    }
  
    removeFrom(index) {
      debugger;
      if(index === 0 || index >= this.size) return;
      let removeNode;
      if(index === 0) {
        removeNode = this.head;
        this.head = this.head.next;
      } else {
        let prev = this.head;
        for(let i = 0; i < index - 1; i++) {
          prev = prev.next;
        }
        removeNode = prev.next;
        prev.next = removeNode.next;
      }
      this.size--;
      return removeNode.value;
    }
  
    removeValue(value) {
      if(this.isEmpty()) return null;
      if(this.head.value === value) {
        this.head = this.head.next;
        this.size--;
        return value;
      } else {
        let prev = this.head;
        while(prev.next && prev.next.value !== value) {
          prev = prev.next;
        }
        if(prev.next) {
          const removedNode = prev.next;
          prev.next = removedNode.next;
          this.size--;
          return value;
        }
        return null;
      }
    }
  
    search(value) {
      if(this.isEmpty()) {
        return -1;
      }
      let current = this.head;
      let i = 0;
      while(current) {
        if(current.value === value) {
          return i;
        }
        current = current.next;
        i++;
      }
      return -1;
    }
  
    reverse() {
      let prev = null;
      let current = this.head;
      while(current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
      }
      this.head = prev;
    }
  
    print() {
      if(this.isEmpty()) {
        console.log('list is empty');
      } else {
        let current = this.head;
        let listValues = '';
        while(current) {
          listValues += ` ${current.value}`;
          current = current.next;
        }
        return listValues;
      }
    }
  }
  
  const list = new LinkedList();
  console.log('isEmpty', list.isEmpty());
  console.log('print', list.print());
  console.log('getSize', list.getSize());
  console.log('prepend', list.prepend(10));
  console.log('print', list.print());
  console.log('prepend', list.prepend(20));
  console.log('print', list.print());
  console.log('prepend', list.prepend(30));
  console.log('print', list.print());
  console.log('append', list.append(40));
  console.log('print', list.print());
  console.log('insert', list.insert(2, 140));
  console.log('print', list.print());
  console.log('remove', list.removeFrom(2));
  console.log('print', list.print());
  console.log('remove', list.removeValue(40));
  console.log('print', list.print());
  console.log('search', list.search(20));
  console.log('print', list.print());
  console.log('reverse', list.reverse());
  console.log('print', list.print());
  
  // Hash table or hash map custom implementation
  class HashTable {
    constructor(size) {
      this.table = new Array(size);
      this.size = size;
    }
  
    hash(key) {
      let total = 0;
      for(let i = 0; i < key.length; i++) {
        total += key.charCodeAt(i)
      }
      return total % this.size;
    }
  
    set(key, value) {
      const index = this.hash(key);
      this.table[index] = value;
    }
  
    get(key) {
      const index = this.hash(key);
      return this.table[index];
    }
  
    remove(key) {
      const index = this.hash(key);
      this.table[index] = undefined;
    }
  
    display() {
      for(let i = 0; i < this.table.length; i++) {
        if(this.table[i]) {
          console.log(i, this.table[i]);
        }
      }
    }
  }
  
  const table = new HashTable(50);
  table.set('name', 'john');
  table.set('city', 'charlotte');
  console.log('display hash', table.display());
  console.log('name', table.get('name'));
  console.log('name', table.remove('name'));