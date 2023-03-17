// ============================ Ts й об*єкти

//1 обьект в параметрі функціі
const getFullName4 = (userEntity: {name:string, lastName: string}): string => { 
 return `${userEntity.name} ${userEntity.lastName}`
} // - в параметр функціі буде приходити обьект і ось так він описується.

const objUser = {
  name: "Mike",
  lastName: 'Mango',
  age: 25,
  city: "Kyiv"
}

const fullName4 = getFullName4(objUser);
console.log(fullName4);

//2 типізація об*екта

let info: {
  officeId: number;
  isOpened: boolean;
  contacts: {
    phone: string;
    email: string;
    skills: string[];
    adress: {
      city: string;
    }
  }
}

 info = {
  officeId: 9,
  isOpened: true,
  contacts: {
    phone: '009899098',
    email: 'mail@mail.com',
    skills: ["JS", "React"],
    adress: {
      city: 'Kyiv',
    }
  }
}

//3 типізуємо масив який слкадається із строк

const skills: string[] = ["Js", "React", "Ts"] //- у цього масива в середині може бути тільки строки

const num: number[] = [3, 4, 5, 6] //- у цього масива в середині може бути тільки цифри

const anyType: any[] = [3, "React", true, null] //- у цього масива в середині може бути все що завгодно
