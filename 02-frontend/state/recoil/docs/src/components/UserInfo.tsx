import { useRecoilValue } from 'recoil';
import { userQuery } from '../recoil/users';

export default function UserInfo({ userID }: { userID: number }) {
  const user = useRecoilValue(userQuery(userID));
  return <div>{user.name}</div>;
}
