import { any } from "prop-types";
import React, { ChangeEvent, useRef, useState } from "react";

export const UncontrolledInput = () => <input />
export const TrackUncontrolledInput = () => {
    const [value, setValue] = useState('')
    const change = (e: ChangeEvent<HTMLInputElement>) => {
        const actualValue = e.currentTarget.value
        setValue(actualValue)
    }

    return <>
        <input onChange={change} />
        {value}
    </>
}

export const GetControlledInput = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const onSave = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <>
        <input ref={inputRef} />
        <button onClick={onSave}>save</button>
        actual value : {value}
    </>
}


export const ControlledInput = () => {

    const [parentValue, setParentValue] = useState('')
    const change = (e: ChangeEvent<HTMLInputElement>) => {
        const actualValue = e.currentTarget.value
        setParentValue(actualValue)
    }
    return <>
        <input
            value={parentValue}
            onChange={change}
        />
        {parentValue}
    </>

}

export const ControlledCheckBox = () => {

    const [check, setCheck] = useState(true)
    const onCheckHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const onCheck = e.currentTarget.checked
        setCheck(onCheck)
    }
    return <input
        type="checkbox"
        checked={check}
        onChange={onCheckHandler} />
}


export const ControlledSelect = () => {

    const [sel, setSel] = useState<string | undefined>(undefined)
    const onSel = (e: ChangeEvent<HTMLSelectElement>) => {
        const onSelHandler = e.currentTarget.value
        setSel(onSelHandler)
    }

    return <select value={sel} onChange={onSel}>
        <option >none</option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Moscow</option>
        <option value={'3'}>Kiev</option>
    </select>
}

