// ============================ Ts в функціях
//1
function getFullName(name: string, lastName: string) { 
 return `${name} ${lastName}`
} // - вказуємо через двокрапку які типи мають приходити у параметри функціїї

const fullName = getFullName('Danis', 'Markovich');
console.log(fullName);


//2
function getFullName2(name: string, lastName: string): string { 
 return `${name} ${lastName}`
} // - вказуємо через двокрапку після круглих дужок і перед фігурними дужками що має повертати фунція.

const fullName2 = getFullName2('Danis2', 'Markovich2');
console.log(fullName2);

// arrowFunc
const getFullName3 = (name: string, lastName: string): string => { 
 return `${name} ${lastName}`
} // - вказуємо через двокрапку після круглих дужок і перед фігурними дужками що має повертати фунція.

const fullName3 = getFullName3('Danis3', 'Markovich3');
console.log(fullName3);

// ============================ Типизація функціі

enum StatusCode {
  PUBLISHED = 'published',
  DRAFT = 'draft',
  DELETED = 'deleted'
} // - enum

async function getFaqs(req: {
  topicId: number,
  status: StatusCode}): Promise<{
  question: string;
  answer: string;
  tags: string[];
  likes: number;
  status: StatusCode
}[]> {
  const res = await fetch('/faqs', {
    method: 'POST',
    body: JSON.stringify(req)
  })

  const data = await res.json();
  return data
}