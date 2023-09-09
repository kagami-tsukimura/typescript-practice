import { useState } from 'react';

export type Profile = {
  id: number;
  name: string;
};

const UseStateComponent: React.FC<Profile> = ({ id, name }) => {
  const [count, setCount] = useState<number>(0);
  const [profile, setProfile] = useState<Profile>({
    id: 1,
    name: 'hoge',
  });

  const handleClick = () => setCount(count + 1);
  const profileChange = () => setProfile({ id: id, name: name });
  return (
    <>
      <h2>useState</h2>
      <div>{count}</div>
      <button onClick={handleClick}>CountUp!</button>
      <div>
        {profile.id} {profile.name}
      </div>
      <button onClick={profileChange}>Change!</button>
    </>
  );
};

export default UseStateComponent;
