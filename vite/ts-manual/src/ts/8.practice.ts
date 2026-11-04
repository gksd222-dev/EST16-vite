// 문제: Product 타입을 정의 후 union타입을 사용해 에러를 해결해주세요.

//import type { Person } from "./type"; 
// 확장자를 붙이지 않는다. import 뒤에 type을 붙여서 형식을 명시한다.

//전역에서 공유되는 타입을 설정하고 싶다.


interface Detail {
  id:string|number,
  name:string,
  price:number,
}

const product1:Detail = {
  id: 'abc123',
  name: 'Laptop',
  price: 1000
};

const product2:Detail = {
  id: 123456,
  name: 'Smartphone',
  price: 500
};







// 문제: Contact 타입을 정의 후 intersection을 사용하여 Employee를 만들어보세요.


//  a && b

// a || b



interface Contact{
  email:string,
  phone:string
}

type Emp = Person & Contact; //Employee의 약자 Emp

const employee1:Emp = {
  name: 'Alice',
  age: 30,
  email: 'alice@example.com',
  phone: '123-456-7890'
};