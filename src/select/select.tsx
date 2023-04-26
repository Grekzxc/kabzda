import React, { useEffect, useState } from "react";
import styles from './select.module.css'

type ItemType = {
    title: string
    value: any
}
type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: SelectPropsType) {

    const [active, setActive] = useState(false)
    const [hoveredElValue, setHoveredElValue] = useState(props.value)

    useEffect(() => {
        setHoveredElValue(props.value)
    }, [props.value])

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElValue)


    const showItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value);
        showItems()
    }

    const onKeyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp')
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElValue) {
                    const pretendentEl = e.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1]
                    if (pretendentEl) {
                        props.onChange(pretendentEl.value)
                        break
                    }
                }
            }
        if (e.key === 'Escape' || e.key === 'Enter') {
            setActive(false)
        }
    }

    return (
        <>
            <div
                className={styles.select}
                tabIndex={0}
                onKeyUp={onKeyUp}>
                <span
                    className={styles.main}
                    onClick={showItems}>{selectedItem && selectedItem.title}
                </span>
                {
                    active &&
                    <div className={styles.items}>
                        {props.items.map(i =>
                            <div
                                onMouseEnter={() => { setHoveredElValue(i.value) }}
                                className={styles.item + ' ' + (hoveredItem === i ? styles.selected : '')}
                                key={i.value}
                                onClick={() => { onItemClick(i.value) }}
                            >{i.title}
                            </div>)}
                    </div>
                }
            </div>
        </>
    )
}