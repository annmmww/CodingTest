class Node {
    constructor(weight, input) {
        this.weight = weight;
        this.input = input;
        this.next = null;
    }
}

class Queue {
    constructor(size) {
        this.head = null;
        this.tail = null;
        this.size = 0;
        this.weight = 0;
    }
    
    enqueue(weight, input) {
        const newNode = new Node(weight, input);
        
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
            this.size++;
            this.weight += weight;
            return;
        }
        
        this.tail.next = newNode;
        this.tail = newNode;
        this.weight += weight;
        this.size++;
    }
    
    dequeue() {
        if (this.isEmpty()) return;
        
        const value = this.head.weight;
        this.head = this.head.next;
        this.size--;
        
        if (this.isEmpty()) {
            this.tail = null;
        }
        this.weight -= value;
        return value;
    }
    
    peek() {
        if (this.isEmpty()) return null;
        
        return this.head.input;
    }
    
    isEmpty() {
        return this.size === 0;
    }
    
    getSize() {
        return this.size;
    }
    
    getWeight() {
        return this.weight;
    }
}

function solution(bridge_length, weight, truck_weights) {
    let truck_count = 0;
    let out_truck_count = 0;
    const queue = new Queue();
    let answer = 0;
    while (out_truck_count < truck_weights.length) {
        answer++;
        
        if (answer - queue.peek() === bridge_length) {
            const value = queue.dequeue();
            out_truck_count++;
        }
        if (weight - queue.getWeight() >= truck_weights[truck_count] && queue.getSize() <= bridge_length) {
            queue.enqueue(truck_weights[truck_count], answer);
            truck_count++;
        }
    }
    
    return answer;
}