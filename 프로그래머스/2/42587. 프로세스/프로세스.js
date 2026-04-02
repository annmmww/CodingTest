class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    
    isEmpty() {
        return this.size === 0;
    }
    
    getSize() {
        return this.size;
    }
    
    enqueue(value) {
        const node = new Node(value);
        
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
            this.size++;
            return;
        }
        this.tail.next = node;
        this.tail = node;
        this.size++;
    }
    
    dequeue() {
        if (this.isEmpty()) return null;
        
        const value = this.head;
        this.head = this.head.next;
        this.size--;
        return value;
    }
    
    peek() {
        if (this.isEmpty()) return null;
        
        return this.head;
    }
}

function solution(priorities, location) {
    const queue = new Queue();
    
    for (let i = 0; i < priorities.length; i++) {
        queue.enqueue([priorities[i], i]);
    }
    
    priorities.sort((a, b) => b - a);
    
    let count = 0;
    for (const priority of priorities) {
        
        while (true) {
            const value = queue.peek().value;
            
            if (value[0] === priority) {
                queue.dequeue();
                count++;

                if (value[1] === location) {
                    return count;
                }
                break;
            }
            queue.enqueue(queue.dequeue().value);
        }
    }
}