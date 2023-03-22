import React, { useState } from 'react';
import './App.css';
import Accordion from './components/accordion/Accordion';
import Rating, { RatingValueType } from './components/Rating/Rating';
import { title } from 'process';
import { OnOff1 } from './components/OnOff/OnOff';
import UncontrollerAccordion from './components/accordion/UncontrolledAccordion';
import UncontrolledRating from './components/Rating/UncontrolledRating';
import { OnOff2 } from './components/OnOff/UncontrolledOnOff';

function App() {

  const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
  const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
  let [switchOn, setSwitchOn] = useState<boolean>(false)

  return (
    <div>
      <PageTitle title={'This is APP component '} />

      < OnOff2 on={switchOn} onChange={setSwitchOn} />
      < OnOff1 />
      <Rating value={ratingValue} onClick={setRatingValue} />
      <UncontrolledRating />
      <UncontrollerAccordion titleValue={'Menu'} />
      <Accordion titleValue={'Menu'} collapsed={accordionCollapsed} onChange={() => { setAccordionCollapsed(!accordionCollapsed) }} />

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
