


let arr: number[] = [1,2,3];


// arr = [100,1000,'hello'];


let str: string[] = 'a,b,c'.split(',');


// str=[1,2,3];



/* array generic type */

let _arr:Array<number> = [1,2,3];
let _str:Array<string> = 'a,b,c'.split(',');



/* 유니온 타입 [union type] + [array type] */

let multi: (string | number | boolean)[] = ['hello',true,10];

multi = [100,1000,false]


//자리 정하면 안되나?
//항목빼먹으면 안되는거 아닌가?


/* tuple type */

let tupleA:[number, number, number] = [1,2,3];


let tupleB:[string, number] = ['tiger', 30];


tupleB = ['100', 1000];







