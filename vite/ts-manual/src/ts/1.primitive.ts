


// number, string, boolean, null, undefined


/* number type */

// 타입 추론 : type inference   / Explicit type annotation
let num1:number = 10;
let num2:number = NaN;
let num3:number = -123123;
let num4:number = -Infinity;
let num5:number = Infinity;
let num6:number = 123.54123123;

num1=12312321;

/* string type */

let str1:string = 'hi';
let str2:string = "hello";
let str3:string = `hello ${num1}`;

str1 = 'hello world'

/* boolean type */

let bool1:boolean = true;
let bool2:boolean = false;

bool1 = Boolean('1'); // true

/* null type */

let nullA:null = null;

/* undefined type */

let undef:undefined = undefined;

undef = null;

/* literal type */

let numA: 10 = 10; 

const numB = 10; // const로 선언하면 literal type으로 추론됨

//numA = 30;

let strA: 'hello' = 'hello';
let boolA: true = true;

/* unknown type */

let unknown:unknown;

/* never type */

let never:never;


/* any type */

let any:any;


/* void */



