class stack{
    constructor(){
        this.items = [];
    }
    push(e){
        this.items.push(e);
    }
    pop(){
        return this.items.length > 0 ? this.items.pop() : "The stack is empty";
    }
    peek(){
        return this.items.length > 0 ? this.items[this.items.length - 1] : undefined;
    }
}
const st = new stack();
st.push(10);
console.log(st.peek());
st.push(20);
st.push(30);
console.log(st.peek());
console.log(st.pop());
console.log(st.pop());
console.log(st.pop());
console.log(st.pop());