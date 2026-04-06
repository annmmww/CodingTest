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
    let truckCount = 0;
    let outTruckCount = 0;
    const queue = new Queue();
    let answer = 0;
    while (outTruckCount < truck_weights.length) {
        answer++;
        
        if (!queue.isEmpty() && answer - queue.peek() === bridge_length) {
            queue.dequeue();
            outTruckCount++;
        }
        if (truckCount < truck_weights.length &&
            weight - queue.getWeight() >= truck_weights[truckCount] && 
            queue.getSize() < bridge_length
        ) {
            queue.enqueue(truck_weights[truckCount], answer);
            truckCount++;
        }
    }
    
    return answer;
}