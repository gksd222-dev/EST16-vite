


/* void type */


function sayHi(message:string):string{
  return message + '⚡';
}

sayHi('hello');

type Fn = (a:string) => string;

function printHi():void{
  console.log('hello');
}

printHi();

/* never type */
// 절대 발생하지 않는 값. 절대 도달할 수 없는 코드(성공이 아님)

function showError(message:string):never{

  throw new Error(message);
}

showError('알 수 없는 오류가 발생했습니다!');

function loop ():never{
  while(true){
    
  }
}

// lazy loop
// generator function
// map, set, weakMap, weakSet, websocket

function* gen():Generator<number, void, void>{
  let count = 0;
  while(true){
    yield ++count;
  }
}

/* 
1. yield 반환하는 값의 타입
2. 함수에 반환하는 값의 타입
3. next() 메서드에 전달하는 값의 타입
*/

const obj = gen();
