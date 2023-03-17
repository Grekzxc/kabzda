import { type } from "os";
import React, { useState } from "react";

function UncontrolledRating() {

  const [selected, setSelected] = useState<number>(0)

  return <div>
    {/* <Star selected={selected > 0} /> <button onClick={() => { setSelected(0) }}>0</button> */}
    <Star selected={selected > 0} /> <button onClick={() => { setSelected(1) }}>1</button>
    <Star selected={selected > 1} /> <button onClick={() => { setSelected(2) }}>2</button>
    <Star selected={selected > 2} /> <button onClick={() => { setSelected(3) }}>3</button>
    <Star selected={selected > 3} /> <button onClick={() => { setSelected(4) }}>4</button>
    <Star selected={selected > 4} /> <button onClick={() => { setSelected(5) }}>5</button>
  </div>
}

type StarPropsType = {
  selected: boolean
}

function Star(props: StarPropsType) {
  return props.selected === true ? <span> <b>star </b></span> : <span>star </span>
}

export default UncontrolledRating