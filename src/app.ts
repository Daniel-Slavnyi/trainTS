'use strict'

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
let age3: number = 50;
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

type httpMethods = 'post' | 'get'; // - прописуємо слово type і вказуємо що саме воно містить і цю назву можна підставити замість того щоб писати окремо post && get

function fetchWidthAuth(url: string, method: httpMethods): 1 | -1 {
  console.log(url, method);
  return 1
}

fetchWidthAuth('s', 'post');

// or one more exemple

type ObjData = {
  name: string,
  age1: number,
  skills: string[]
}

type ObjRole = {
  position: string
}

type ObjDataAndRole = ObjData & ObjRole

let user: ObjDataAndRole = {
  name: 'Mango',
  age1: 18,
  skills: ['JS', 'React'],
  position: 'TeamLEad'
} // - етот обьект обязательно должен состоять из двух type так как мі указали оператор "&" 

// ================== Interfaces

interface ObjData2 {
  name: string,
  age1: number,
  skills: string[],
  log: (id: number) => string
} // - отличие Interfaces от Type Aliases тем что в начале пишется interface і не нужно ставить "="

interface UserWidthRole extends ObjData2 {
  roleId: number
} // - создалі еще один интерфейс и унаследовали свойства от интерфейса ObjData2 и теперь UserWidthRole - интерфейс который соеденяет в себе два интерфейса

let user2: UserWidthRole = {
  name: 'Mango',
  age1: 18,
  skills: ['JS', 'React'],
  roleId: 1,
  log(id) {
    console.log(id);
    return ''
  }
}

// ================== Interfaces VS Type Aliases

type ID = string | number; // - если работаем спримитивами

interface IDI {
  ID: string | number
} // - если работаеем с обьектами


// ================== Optional

interface User3 {
  login: string;
  password?: string;
}

const userNew: User3 = {
  login: 'mango.mail',
} // - то есть если описать интерфейс и в обьекте пропустить свойство , будет ошибка

interface User2 {
  login: string;
  password?: string;
}

const userNew2: User2 = {
  login: 'mango.mail',
} // - optional - ето знак вопроса перед двоеточием ,которий говорит тайп скрипту что есто свойство может и не біть в обьекте

//пример optional с функцией

function muptiply(first: number, second?: number): number {
  if (!second) {
    return first * first
  }

  return first * second
} // - тут указуем что второй параметр функции не обязателен і в теле функции прописуем условие ,если второго параметра не будет то умнож первое число на себя же ,а в остальном случае первое на второе

const muptiply1 = muptiply(5);
const muptiply2 = muptiply(5, 2);
console.log(muptiply1);
console.log(muptiply2);

//- пример со значением по умолчанию

function muptiplySecond(first: number, second: number = 5): number {
  if (!second) {
    return first * first
  }

  return first * second
} // -тут вместо optional(знак вопроса) , добавляется значение поумолчанию и если вдруг параметр не будет передан топодставится "5"

const muptiply3 = muptiplySecond(5);
const muptiply4 = muptiplySecond(5, 2);
console.log(muptiply3);
console.log(muptiply4);

// ============ Упражнение - типизацияответа от сервера
// variant1

// enum StatusCode1 {
//   SUCCSESS = 'succsess',
//   FAILD = 'faild',
// } // - enum

// interface body {
//   sum: number,
//   from: number,
//   to: number
// }

// interface bodyRequest extends body { }

// interface succsessRes {
//   dataBasedId: number,
//   sum: number,
//   from: number,
//   to: number
// }
// interface faildRes {
//     errorMessage: 'string',
//     errorCode: 'number'
// }

// interface response {
//   status: StatusCode1,
//   data: succsessRes | faildRes
// }


// async function getFaqs1(req: body): Promise<response> {
//   const res = await fetch('/faqs', {
//     method: 'POST',
//     body: JSON.stringify(req)
//   })

//   const data = await res.json();
//   return data
// }

//variant2 best practice (ми типизировали то что принемает функцияи то что она возвращяет при помощи интерфейсов)

enum StatusCode1 {
  SUCCSESS = 'succsess',
  FAILD = 'faild',
} // - enum

interface body {
  sum: number,
  from: number,
  to: number
}

interface bodyRequest extends body { }

interface succsessRes extends body {
  dataBasedId: number,
}
interface faildRes {
    errorMessage: 'string',
    errorCode: 'number'
}

interface responseSuccsess {
  status: StatusCode1.SUCCSESS,
  data: succsessRes
}

interface responseFaild {
  status: StatusCode1.FAILD,
  data: faildRes
}


async function getFaqs1(req: body): Promise<responseSuccsess | responseFaild> {
  const res = await fetch('/faqs', {
    method: 'POST',
    body: JSON.stringify(req)
  })

  const data = await res.json();
  return data
}

//================================ привидение типов

let a: number = 5;

let b: string = a.toString(); // - ми привели "а" намбер в строку при помощи метода и положили в переменную

//================================ type guard

// Type guard - ето функция которая возвращяет буливое значение и пдставляется в условие в теле другой функции

function isString(x: string | number): x is string {
  return x === 'string'
} // - то есть сюда мі можем передать или строку или намбер и функция возвращяет буливое значение(ето и тайп гард)

function logId1(id: string | number) {
  if (isString(id)) {
    console.log(id);
  } else {
    console.log(id)
  }
} // - ми использовали TypeGuard для условия в функции которое проверяет строка ли аргумент которий ми передали или нет

// example #2
interface User5 {
  name: string,
  email: string,
  login: string
}

interface Admin {
  name: string,
  role: number
}

const user22: User5 = {
  name: 'Mango',
  email: 'mail.com',
  login: 'Orange'
}

function isAdmin(user: User | Admin): user is Admin {
  return 'role' in user
} // - this is typeGuard

function setRoleZero(user: User | Admin) {
  if (isAdmin(user)) {
    user.role = 0
  } else {
    throw new Error("this is not an admin")
  }
}

// =============================== делаем тайп гард ответа

enum StatusCode2 {
  SUCCSESS = 'succsess',
  FAILD = 'faild',
} // - enum

interface body {
  sum: number,
  from: number,
  to: number
}

interface bodyRequest extends body { }

interface succsessRes extends body {
  dataBasedId: number,
}
interface faildRes {
    errorMessage: 'string',
    errorCode: 'number'
}

interface responseSuccsess1 {
  status: StatusCode2.SUCCSESS,
  data: succsessRes
}

interface responseFaild1 {
  status: StatusCode2.FAILD,
  data: faildRes
}

function isSuccsess(res: responseSuccsess1 | responseFaild1): res is responseSuccsess1 {
  if (res.status === StatusCode2.SUCCSESS) {
    return true
  } else {
    return false
  }
}

function getIdFromData(res: responseSuccsess1 | responseFaild1): number {
  if (isSuccsess(res)) {
    return res.data.dataBasedId
  } else {
    throw new Error(res.data.errorMessage)
  }
}

// =============================== aserts
// Aserts - клас-функция, которая в случає если условие не виполняется кидает какуюто ошибку

interface User {
  name: string
}

const aa = {} // - ми хотим проверить являится ли наш обьект нашим пользователем


assertUser(aa)

aa.name = 'Mango'


function assertUser(obj: unknown): asserts obj is User {
  if (typeof obj === 'object' && !!obj && 'name' in obj) {
    return 
  }

 throw new Error('this is not our user')
} // - this is asert