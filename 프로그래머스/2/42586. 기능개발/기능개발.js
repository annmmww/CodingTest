class Node {
    constructor(progress, speed) {
        this.progress = progress;
        this.speed = speed;
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
    
    enqueue(newProgress, speed) {
        const newNode = new Node(newProgress, speed);
        
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
            this.size++;
            return;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.size++;
    }
    
    dequeue() {
        if (this.isEmpty()) return null;
        
        const node = this.head;
        this.head = this.head.next;
        this.size--;
        return node;
    }
    
    progressing() {
        let curNode = this.head;
        while (curNode !== null) {
            curNode.progress += curNode.speed;
            curNode = curNode.next;
        }
    }
    
    peek() {
        if (this.isEmpty()) return null;
        
        return this.head.progress;
    }
}


function solution(progresses, speeds) {
    let answer = [];
    const queue = new Queue();
    
    for (let i = 0; i < progresses.length; i++) {
        queue.enqueue(progresses[i], speeds[i]);
    }
    
    let day = 0;
    while (!queue.isEmpty()) {
        queue.progressing();
        day++;
        
        
        let count = 0;
        while (queue.peek() >= 100) {
            queue.dequeue();
            count++;
        }
        if (count > 0) {
           answer.push(count);
        }
    }
    return answer;
}