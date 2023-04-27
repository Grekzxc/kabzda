import React, { useReducer, useState } from "react";
import { Reduser } from "./reduser";

type AccordionPropsType = {
    titleValue: string
}


function UncontrollerAccordion(props: AccordionPropsType) {

    const [state, dispatch] = useReducer(Reduser, { collapsed: false })

    return <div>
        <AccordionTitle
            title={props.titleValue}
            onClick={() => { dispatch({ type: 'TOGGLE_COLLAPSED' }) }} />
        {!state.collapsed && <AccordionBody />}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={() => { props.onClick() }}>{props.title}</h3>
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default UncontrollerAccordion