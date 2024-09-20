import { Avatar, Div } from '../components';
import type { DivProps } from '../components';
import * as D from '../data';

export type UserProps = DivProps & {
  user: D.IUser;
};

const User = ({ user, ...props }: UserProps) => {
  const { name, email, jobTitle, avatar } = user;
  return (
    <Div {...props}>
      <div className="flex p-2">
        <Avatar src={avatar} size="2rem" />
        <div className="ml-2">
          <p className="font-bold">{name}</p>
          <p className="text-gray-500 line-clamp-1">{jobTitle}</p>
          <p className="text-blue-500 underline">{email}</p>
        </div>
      </div>
    </Div>
  );
};

export default User;
