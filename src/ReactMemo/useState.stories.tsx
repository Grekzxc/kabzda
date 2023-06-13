import React, { useMemo, useState } from "react";

export default {
    title: 'useState demo',
}

function generateData() {
    console.log('generateData');

    return 1
}

export const Example1 = () => {
    console.log('Example1');

    const [count, setCount] = useState(generateData)

    const changer = (state: number) => state + 1

    return <>
        <button onClick={() => setCount(changer)}>+</button>
        {count}
    </>
}

