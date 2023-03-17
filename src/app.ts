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

let revenue:number = 500;
let bonus: number = 1000;

let res: number = revenue + bonus;

// Union - ето возможность сказать что в той или иной переменной у нас могут находиться различніе типі при различніх обстоятельствах

function logId(id: string | number | boolean) {
  if (typeof id === 'string') {
    console.log(id.toLocaleLowerCase());
  } else if(typeof id === 'number') {
    console.log(++id);
  } else {
    console.log(id);
  }
}

function objLog(obj: { a: number } | { b: number }) {
  if ('a' in obj) {
    console.log(obj.a);
  } else {
    console.log(obj.b)
  }
}

// ================== Type Aliases

type httpMethods = 'post' | 'get'; // - прописуємо слово type і вказуємо щосамо воно містить і цю назву можна підставити замість того щоб писати окремо post && get

function fetchWidthAuth(url: string, method: httpMethods): 1 | -1 {
  console.log(url, method);
  return 1
}

fetchWidthAuth('s', 'post');

// or one more exemple

type ObjData = {
  name: string,
  age: number,
  skills: string[]
}

type ObjRole = {
  position: string
}

type ObjDataAndRole = ObjData & ObjRole

let user: ObjDataAndRole = {
  name: 'Mango',
  age: 18,
  skills: ['JS', 'React'],
  position: 'TeamLEad'
} // - етот обьект обязательно должен состоять из двух type так как мі указали оператор "&" 

// ================== Interfaces

interface ObjData2 {
  name: string,
  age: number,
  skills: string[],
  log: (id: number) => string
} // - отличие Interfaces от Type Aliases тем что в начале пишется interface і не нужно ставить "="

interface UserWidthRole extends ObjData2 {
  roleId: number
} // - создалі еще один интерфейс и унаследовали свойства от интерфейса ObjData2 и теперь UserWidthRole - интерфейс который соеденяет в себе два интерфейса

let user2: UserWidthRole = {
  name: 'Mango',
  age: 18,
  skills: ['JS', 'React'],
  roleId: 1,
  log(id) {
    return ''
  }
}