




/* union Types */

let str: 'name' | 'age' | 'address' = 'name';

type CompanyA = {
  companyName:string;
  since:number;
}


const company1:CompanyA & {ceo:string} = {
  companyName: 'five-tour',
  since:2022,
  ceo:'coldglasses'
}

















