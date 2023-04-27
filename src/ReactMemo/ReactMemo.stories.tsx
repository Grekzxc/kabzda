import React, { useState } from "react";

export default {
    title: 'React.memo demo',
}

const Couter = (props: any) => {
    return <div>{props.count}</div>
}
const UsersSecret = (props: { users: Array<string> }) => {
    return <div>{props.users.map((u, i) => <div key={i}>{u}</div>)}</div>
}
const Users = React.memo(UsersSecret)

export const Example = () => {
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Alex'])

    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()]
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        <Couter count={count} />
        <Users users={users} />
    </>
}