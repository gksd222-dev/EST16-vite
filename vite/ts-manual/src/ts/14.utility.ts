
/*  Omit<T,K>
T : type
K : key

*/

type User = {
  id:number;
  name:string;
  email:string;
  address:string;
  isPaid:boolean;
}


// Omit 쪽 뽑아냈다.
type PublicUser = Omit<User, 'email'>;
 

/* Pick<T,K> */

type PickUser = Pick<User,'id'|'address'>;


const user2: Pick<User,'id'|'name'> = {
  id:2,
  name:'chan'
}




type UserData = {
  id:number;
  name:string;
  email:string;
  address:{
    lat:number,
    long:number
  }
}

type DeepPartial<T> = {
  [K in keyof T] ? : T[K] extends object
  ? DeepPartial<T[K]> : T[K];  
}




/* Partial<T> */

const user3:Partial<UserData> = {
  name:'tiger'
}








