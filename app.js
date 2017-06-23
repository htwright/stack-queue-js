class Stack{
  constructor() {
    this.top = null;
  }
  createNode(data = null, next = null){
    return {
      data,
      next
    };
  }

  push(data){
    if(this.top === null){
      this.top = this.createNode(data);
      return;
    }

    const node = this.createNode(data, this.top);
    this.top = node;
  }

  pop(){
    let currentHead = this.top;
    this.top = currentHead.next;
    return currentHead.data;
  }
}

function peek(stack){
  if(stack.top === null){
    return null;
  }
  return stack.top.data;
}

function display(stack){
  let node = stack.top;
  let str = '';
  while(node !== null){
    str += node.data;
    node = node.next;
  }
  return str;
}

function palendrome(string){
  let stack1 = new Stack();
  for(let i = 0; i < string.length; i++){
    stack1.push(string[i]);
  }
  let original = display(stack1);;
 
  
  let stack2 = new Stack();
  let node = stack1.top;
  while(node !== null){
    stack2.push(node.data);
    node = node.next;
  }
  let reversed = display(stack2);
  for(let i = 0; i < string.length; i++){
    if(original[i] !== reversed[i]){
      return false;
    }
  }
  return true;
}

let s = new Stack();

s.push(1);
s.push(2);
s.push(3);
display(s);


