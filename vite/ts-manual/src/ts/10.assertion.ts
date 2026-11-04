


/* DOM을 조작 document.querySelector() => null  => 
HTML에 존재하지 않음 or 아직 로드가 안됨(defer) or 태그 생성이 안됨 elem?.addEventListener()*/
//                 꽤 위험하다 TS


/* 

<input type="text" id="textField">

*/

// 타입 단언 -> 얘 input 맞는데? -> 책임 내가
//const input = document.querySelector('#textField') as HTMLInputElement; //type assertion 

//const input = document.querySelector<HTMLInputElement>('#textField'); //generic type assertion

const input = document.querySelector<HTMLInputElement>('#textField'); //non-null assertion

const app = document.querySelector('#app')!;

//as assertion은 주장
//!은 장담

//무조건 단언한다고 되는 것이 아니기 때문에 아래와 같이 조건처리하여 선언을 해야한다.
//하다보면 단언을 많이 사용하게된다

// 너가 지금 잡은 대상이 null 일 수 있어
if(input){
  input.value  
}

(input as HTMLInputElement).value;



const personA:{
  readonly name:string;
  readonly age:number;
} = {
  name: 'tiger',
  age:30
}

personA.name = 'sun';

// const 단언 personB의 값을 바꿀수 없다. 
const personB = {
  name: 'sun',
  age:35
} as const

personB.name = 'tiger';

personB = []







