
/* 
typeof는 기존 변수나 객체의 타입을 가져오는 타입 연산자 입니다. 
JS의 typeof !== TS typeof;

이미 만들어진 값의 타입을 그대로 복사해서 새로운 타입을 만드는 기능

왜쓰나요?
객체를 만들 때마다 타입을 또 작성하는 것은 비효율적이기 때문에.
*/

const user = {
  name:'coldGlasses',
  age:30,
  gender:'male',
  address:'서울시 강동구'
}

if(typeof user === 'object'){

}

type User = typeof user;

/* keyof는 타입의 key만을 모아 새로운 타입을 만듦 */
type UserKey = keyof User;

type UserValue = User[keyof User];

//타입을 뽑아내겠다. 그중에서도 키를 뽑아내겠다.

type UserType = keyof typeof user;

// TS에서 typeof 뒤에서 오는 대상은 자바스크립트 객체
// TS에서 keyof 뒤에 오는 대상은 타입이 와야 함
// 늘 마우스를 올려서 확인해라

















