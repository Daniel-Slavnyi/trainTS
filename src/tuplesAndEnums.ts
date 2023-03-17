// ============================ Tuples(кортеджи)
//1
const skill: [number, string] = [1, 'React'] //- ми описали масив і все що знаходиться усередині опису ,каже про те із чого повинен складатися  масив,тобто якщо додати ще будьякий елемент то буде помилка,так як ми вказали що потрібно тільки намбер і строка.

const skill2: [number, string, ...boolean[]] = [1, 'React', true, false] // - ми використовуємо спред оператор длятипів ,тобто кажемо таким чином що в масиві може бути довільна кількість бульових значень

// 2 read only

const skill3: readonly [number, string] = [1, 'React'] // readonly це модифікатор ,який дозволяє тільки отримати значення,але змінювати тепер мачив ми не можемо
// тобто зараз ми не можумо зробити так skill3.push('JS'), бо буде помилка і перезаписати таким чином теж не можемо skill3[0] = 2

// ============================ Enums

enum StatusCode {
  SUCCSESS = 1,
  IN_PROCESS = 'p',
  FAILED = 'f'
}

const res1 = {
  message: 'Yuor pay is done',
  statusCode: StatusCode.SUCCSESS 
}

function action(status: StatusCode) {
  console.log(status);
}

action(StatusCode.SUCCSESS) // - тобто ennum це яе обьект в якому ми зберигаємо константи, варіанти відповідей, тобто це тип(колекція значень) який ми можемо вказувати як тип.
