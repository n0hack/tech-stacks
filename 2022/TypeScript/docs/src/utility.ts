// 유틸리티 타입 (이미 정의해 놓은 타입을 변환할 때 사용하기 좋음)
interface Address {
  email: string;
  address: string;
}

type MayHaveEmail = Partial<Address>;
const me: MayHaveEmail = {};
const you: MayHaveEmail = { email: 'nohack@naver.com' };
const all: MayHaveEmail = { email: 'nohack@naver.com', address: 'seoul' };

// Pick 특정 타입에서 몇 개의 속성을 선택하여 타입 정의
interface Hero {
  name: string;
  skill: string;
}

const human: Pick<Hero, 'name'> = { name: '스킬이 없는 사람' };

// Omit 특정 타입에서 지정된 속성만 제거
interface AddressBook {
  name: string;
  phone: number;
  address: string;
  company: string;
}

const phoneBook: Omit<AddressBook, 'address'> = {
  name: '재택',
  phone: 1231123,
  company: '내 방',
};
