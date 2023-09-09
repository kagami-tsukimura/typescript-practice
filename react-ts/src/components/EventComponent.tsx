import { useState } from 'react';

const EventComponent = () => {
  const [text, setText] = useState<string>('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  return (
    <>
      <div>EventComponent</div>
      <input type='text' onChange={handleChange} />
      <p>input message is {text}</p>
    </>
  );
};

export default EventComponent;
