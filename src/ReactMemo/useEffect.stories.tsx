import React, { useEffect, useMemo, useState } from "react";

export default {
    title: 'useEffect demo',
}

export const SimpleExample = () => {
    const [count, setCount] = useState(1)
    const [fake, setFake] = useState(1)

    useEffect(() => {
        document.title = count.toString()
        // api.getUsers().then('')
        // setInterval
        // indexedDB
        // document.getElementById
        // document.title = 'User'
    }, [count])
    useEffect(() => {
        console.log('useEffect every render');
        document.title = count.toString()
    })

    useEffect(() => {
        console.log('useEffect only firsrt render');
        document.title = count.toString()
    }, [])

    useEffect(() => {
        console.log('useEffect firsrt render and every counter change');
        document.title = count.toString()
    }, [count])

    return <>
        <button onClick={() => setFake(fake + 1)}>+</button>
        <div>
            Hello, {count} {fake}
        </div>
    </>
}

export const SetTimeoutExample = () => {
    const [count, setCount] = useState(1)
    const [fake, setFake] = useState(1)

    useEffect(() => {


        setInterval(() => {
            console.log('tick');
            setCount((state) => state + 1)
        }, 1000)
    }, [])

    return <>
        <div>
            Hello, counter: {count} - fake: {fake}
        </div>
        {/* <button onClick={() => setCount(count + 1)}>count+</button>
        <button onClick={() => setFake(fake + 1)}>fake+</button> */}
    </>
}
