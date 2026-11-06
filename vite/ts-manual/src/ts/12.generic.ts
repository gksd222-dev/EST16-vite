

/* generic type */


/* 
제네릭(generic)이란? 타입을 미리 고정하지 않고 나중에 결정할 수 있도록 만드는 타입 변수 기능입니다.
제네릭은 다양한 타입을 하나의 코드로 처리하기 위해 타입을 매개변수절이 전달받는 기능이다.

*/

// function f(a){
//   return a
// }

//T는 타입의 약자이다

//type User = { name:string; age:number }
type User<T,U> = { name:T; age:U }

type _User = {
  name: string| number;
  age: number;
}

const user:User<string,number> = {
  name:'tiger',
  age:30
}

const user2:User<number,number> = {
  name:123123123,
  age:30
}

// 함수
// 재사용이 가장 많이 사용되는 함수에서 generic이 빛을 발한다.

// function fn(value:string):string{
//   return value;
// }

//함수 선언문
function fn<T>(value:T):T{
  return value;
}

//alias

// 제네릭 함수 타입 별칭 추론해서 입력해주는 것
// 대부분 제네릭 함수 타입을 사용하여 운영된다
type _Fn = <T>(value:T) => T;
// 타입분리
const _fn:_Fn = (value) => value;

_fn(10)
_fn('hi')
_fn(true)

// 제네릭 타입 별칭
type __Fn<T> = (value:T) => T;
const __fn:__Fn<number> = (value) => value;

__fn(10)
__fn(20)
//__fn('hi')

// //함수 표현식 (arrow function)
// const _fn = <T>(value:T):T => {
//   return value
// }


fn('hello')

fn(123);
fn([]);
fn({});
fn(()=>{})


/* 

T => type
U => type2 T옆에 있는 애
K => key
V => value
R => return
E => Element / Error
S => State

*/

function swapAtoB<T,U>(a:T,b:U):(T | U)[]{
  return [b,a]
}



swapAtoB(0,'a') // ['a',0]

//숫자를 리턴하는 형태이다
function getLength<T extends {length:number}>(arr:T):number{
  return arr.length;
}



getLength([1,2,3])
getLength({length:10})


type Response<T> = T extends string ? {type:string, content:string} : {type:string, content: T};


const r1:Response<string> = {
  type:'text',
  content:'hello'
}

const r2:Response<{name:string,age?:number}> = {
  type:'text',
  content:{
    name:'tiger'
  }
}

