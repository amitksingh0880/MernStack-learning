class Queue{
    constructor(){
        this.items = [];
    }

    enqueue(ele){
         this.items.push(ele);
    }
    dequeue(){
         this.items.length > 0 ? console.log(this.items.shift()) : console.log("The queue is empty");        
    }
    peek(){
         this.items.length > 0 ? console.log(this.items[0]) : console.log("Queue is empty");
    }
    printQueue(){
        this.items.length > 0 ? console.log(this.items.join(",")): console.log("Queue is empty");       
    }
}
const queue = new Queue();
queue.enqueue(10);
queue.peek();
queue.enqueue(20);
queue.peek();
queue.enqueue(30);

queue.printQueue();

queue.dequeue();
queue.peek();
queue.dequeue();

queue.printQueue();
queue.dequeue();        



