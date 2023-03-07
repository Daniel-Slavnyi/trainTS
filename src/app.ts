const button = document.querySelector("button")! as HTMLButtonElement;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function() {
  console.log(add(+input1.value, +input2.value));
});

// #2 ================================================

// 1
 let age: number = 50;
let naming: string = 'Max';
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined = undefined;
let callback = (a: number) => { return 100 + a };
// 2
let anything: any = -20;
anything = 'Text';
anything = {};
// 3
let some:unknown;
some = 'Text';

let str: string;

if (typeof some === 'string') {
    str = some;
}
// 4
let person: [string, number] = ['Max', 21];

// 5
enum Done { LOADING, READY };

let numOrStr: number | string;
let isEnable: 'enable' | 'disable';

// 6
function showMessage(message:string): void {
  console.log(message);
}


function calc(num1:number, num2:number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}
// 7
type DatabaseDate =  {
    title: string,
    likes: number,
    accounts: string[],
    status: string,
    details?: {
        createAt: string,
        updateAt: string
    }
}


const page1: DatabaseDate = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: '2021-01-01',
    updateAt: '2021-05-01',
  }
}

const page2: DatabaseDate = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}




