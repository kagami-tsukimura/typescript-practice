import React from 'react';
import './App.css';
import EventComponent from './components/EventComponent';
import FCPropsComponent from './components/FCPropsComponent';
import PropsComponent from './components/PropsComponent';
import UseStateComponent, { Profile } from './components/UseStateComponent';

const App: React.FC = () => {
  const user: Profile = {
    id: 1234,
    name: 'kagami',
  };
  return (
    <>
      <div className='App'>
        <UseStateComponent id={user.id} name={user.name} />
        <EventComponent />
        <PropsComponent id={user.id} />
        <FCPropsComponent name={user.name} />
      </div>
    </>
  );
};

export default App;
