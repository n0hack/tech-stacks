type Heroes = 'Hulk' | 'Thor' | 'Capt';

// 세 영웅의 이름에 각각 나이를 붙인 객체를 만들고 싶다면,
// 다음과 같이 맵드 타입을 재정의
type HeroProfiles = { [K in Heroes]: number };
const heroInfo: HeroProfiles = {
  Hulk: 54,
  Thor: 1000,
  Capt: 33,
};

// 맵드 타입 실용 예제 1
type Subset<T> = {
  [K in keyof T]?: T[K];
};

interface Person {
  age: number;
  name: string;
}

// 부분 집합
const ageOnly: Subset<Person> = { age: 23 };
const nameOnly: Subset<Person> = { name: 'NoHack' };
const emptyPerson: Subset<Person> = {};

// 사용자 프로필을 조회하는 API가 있을 때
// 업데이트하는 API에서 프로퍼티가 중복될 수 있음
// 그러므로 중복을 피하기 위해 맵드 타입을 활용. 실용 예제 2
interface UserProfile {
  username: string;
  email: string;
  profilePhotoUrl: string;
}

// @ts-ignore
function fetchUserProfile(): UserProfile {}

type UserProfileUpdate = {
  [p in keyof UserProfile]?: UserProfile[p];
};

function updateUserProfile(params: UserProfileUpdate) {}
