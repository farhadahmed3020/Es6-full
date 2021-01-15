const person = {name :'farhad ahmed',age : '21' , job: 'programming',
              friend:'baki billah',adders:'cumilla', phone:'01633333'};


const { name ,age , adders , phone} = person;

console.log( name ,age , adders, phone );
const friends = ['Sakib Khan' ,' Arman Khan','Aamir Khan' , 'Salman Khan' ,'Sharukh Khan'];
const [first, ...next] = friends ;
console.log(first ,next);