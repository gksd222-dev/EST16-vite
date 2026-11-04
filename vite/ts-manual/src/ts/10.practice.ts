



// 타입 단언(as)을 사용해 에러를 해결해주세요.
// 태그 선택자('a')를 넣었기에 element가 뜬다.

const link = document.querySelector('a') as HTMLAnchorElement;

link.href = ''



// 타입 단언 제네릭을 사용해 에러를 해결해주세요.
//!를 사용하여 단언을 해주거나
//  조건문을 사용해서 확실히 있을때만 넣어주거나

//const image = document.querySelector<HTMLImageElement>('img')!;
const image = document.querySelector<HTMLImageElement>('img');

// image.src = '/assets/visual.jpg'
// image.alt = '작품명 : 모나리자'
if(image){
  image.src = '/assets/visual.jpg'
  image.alt = '작품명 : 모나리자'
}

// 타입 좁히기와 단언(as)를 사용해 에러를 해결해주세요.

const checkbox = document.querySelector('input[type="checkbox"]');

if(checkbox){
  (checkbox as HTMLInputElement).checked = false;
}

// checkbox.checked =  false



// 상속여부(instanceof)를 사용해 에러를 해결해주세요.

const agreement = document.querySelector('input[type="checkbox"]');

if(agreement instanceof HTMLInputElement){
  agreement.checked = true;  
}




// as const를 사용해 오류 없이 role을 정확히 비교할 수 있도록 수정해보세요.

// Object.freeze를 한것과 같다. 값을 절대 못바꾸니까

const user = {
  role: "guest"
} as const


if (user.role === "guest") {
  console.log("게스트입니다.");
}






























