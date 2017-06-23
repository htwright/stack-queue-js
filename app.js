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

function displayStack(stack){
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
  let node = stack1.top;
  let counter = 0;
  while(node !== null){
    let popped = stack1.pop();
    if (popped !== string[counter]){
      return false;
    }
    node = stack1.top;
    counter++;
  }
  return true;
}

function parenMatch (string) {
  let stack1 = new Stack();
  let brackets = 0; // []
  let parens = 0; // ()
  let braces = 0; // {}
  for(let i = 0; i < string.length; i++){
    stack1.push(string[i]);
  }
  let node = stack1.top;
  while(node !== null){
    let popped = stack1.pop();
    switch(popped){
    case '[':
      brackets++;
      break;
    case ']':
      brackets--;
      break;
    case '(':
      parens++;
      break;
    case ')':
      parens--;
      break;
    case '{':
      braces++;
      break;
    case '}':
      braces--;
      break;
    default:
      break;
    }
    node = stack1.top;
  }
  if(braces === 0 && brackets === 0 && parens === 0){
    return true;
  } else {
    return false;
  }
}





let s = new Stack();

s.push(1);
s.push(2);
s.push(3);
palendrome('racecar');

console.log(parenMatch('(((()))){{{{{{{}}}{}}}}}[[[[[[[]]]]]]]'));


//--------------------------------Queue----------------------------

class Queue{
  constructor(){
    this.head = null;
    this.tail = null;
  }
  createNode(data = null, next = null, prev = null){
    return {
      data,
      next,
      prev
    };
  }

  enqueue(data){
    let newNode = this.createNode(data);
    if(this.tail){
      newNode.prev = this.tail;
      this.tail.next = newNode;
    }

    this.tail = newNode;

    if(this.head === null){
      this.head = newNode;
    }
  }

  dequeue() {
    
    if(this.head === null){
      return;
    }

    let head = this.head;
    this.head = head.next;

    
    if(head === this.tail){
      this.tail = null;
    }

    
    return head.data;
  }
}

function displayQueue(q) {
  let node = q.head;
  while(node !== null){
    console.log(node.data);
    node = node.next;
  }
}

function squareDance(men, women){
  let menQ = new Queue();
  let womenQ = new Queue();
  for(let i = 0; i < men.length; i++){
    menQ.enqueue(men[i]);
  }
  for(let i = 0; i < women.length; i++){
    womenQ.enqueue(women[i]);
  }
  let menN = menQ.head;
  let womenN = womenQ.head;
  while((menN !== null) && (womenN !== null)){
    console.log('female ' + womenN.data + ' and male ' + menN.data);
    womenQ.dequeue();
    menQ.dequeue();
    menN = menQ.head;
    womenN = womenQ.head;
  }
  if(menN !== null){
    let str = '';
    while(menN !== null){
      str += menN.data + ' ';
      menQ.dequeue();
      menN = menQ.head;
    }
    return 'men ' + str + ' waiting to dance!';
  }
  if(womenN !== null){
    let str = '';
    while(womenN !== null){
      str += womenN.data + ' ';
      womenQ.dequeue();
      womenN = womenQ.head;
    }
    return 'women ' + str + ' waiting to dance!';
  }
  return 'all even!';
}

console.log(squareDance(['bobby', 'joe', 'louis', 'jack'], ['alice', 'stephanie']));
console.log(squareDance(['daniel', 'royce'], ['gertrude', 'phyllis', 'cindy', 'kathy']));

function OphidianBank(num){
  let bank = new Queue();
  for (let i = 1; i <= num; i++){
    bank.enqueue(`Customer #${i}`);
  }
  let counter = 0;
  let firstInLine = bank.head;
  while(firstInLine !== null){
    console.log(firstInLine.data);    
    let current = bank.dequeue();
    counter ++;
    if((Math.random()*10) > 7.5){
      firstInLine = bank.head;
      bank.enqueue(current);
    } else {
      firstInLine = bank.head;
    }
  }
  return counter;
}
console.log(OphidianBank(20));