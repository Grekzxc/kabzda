import React from 'react';
import './App.css';
import Accordion from './components/accordion/Accordion';
import Rating from './components/Rating/Rating';
import { title } from 'process';
import { OnOff1 } from './components/OnOff/OnOff';

function App() {
  console.log('App rendering');
  return (
    <div>
      {/* <PageTitle title ={'This is APP component '} />
      <PageTitle title ={'My friend '} /> */}

      <Rating value={3} />
      <Accordion titleValue={'Menu'} collapsed={true} />
      <Accordion titleValue={'Users'} collapsed={false} />
      < OnOff1 on={true} />
      < OnOff1 on={false} />
      <Rating value={0} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} />
    </div>
  );
}

type PageTitlePropsType = {
  title: string
}

function PageTitle(props: PageTitlePropsType) {
  return <div>{props.title}</div >
}

export default App;
