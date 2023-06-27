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

    return <>
        <button onClick={() => setCount(state => state + 1)}>+</button>
        {count}
    </>
}

