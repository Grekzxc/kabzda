import React from 'react';
import './App.css';
import Accordion from './components/accordion/Accordion';
import Rating from './components/Rating/Rating';
import { title } from 'process';
import { OnOff1 } from './components/OnOff/OnOff';
import UncontrollerAccordion from './components/accordion/UncontrolledAccordion';
import UncontrolledRating from './components/Rating/UncontrolledRating';

function App() {
  return (
    <div>
      <PageTitle title={'This is APP component '} />
      <PageTitle title={'My friend '} />
      {/* <Accordion titleValue={'Menu'} collapsed={false} />
      <Accordion titleValue={'Users'} collapsed={false} /> */}

      < OnOff1 />
      < OnOff1 />
      {/* <Rating value={0} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} /> */}

      <UncontrollerAccordion titleValue={'Menu'} />

      <UncontrolledRating />
      <UncontrolledRating />
      <UncontrolledRating />
      <UncontrolledRating />
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
