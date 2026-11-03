



/* any type */



let obj:any;

obj = 10;
obj = 'hello';



/* unknown type */



let arr:unknown;

arr=1;
arr='hello';

//타입 좁히기 narrowing

if(typeof arr === 'number'){
  arr.toFixed()
}

/* 
 any type은 모든 타입을 허용하지만, 타입 안정성을 보장하지 못한다.
 unknown type은 모든 타입을 허용하지만, 타입 안정성을 보장한다.

*/

