import React, { useCallback } from "react"
import { useMemo, useState } from "react"

export default {
    title: 'useCallback',
}

const Couter = (props: any) => {
    return <div>{props.count}</div>
}

export const LikeUseCallback = () => {
    const [count, setCount] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'CSS'])

    const memoizedAddBook = useMemo(() => {
        return () => {
            const newUsers = [...books, 'Angular' + new Date().getTime()]
            setBooks(newUsers)
        }
    }, [books])

    const memoizedAddBook2 = useCallback(() => {
        const newUsers = [...books, 'Angular' + new Date().getTime()]
        setBooks(newUsers)
    }, [books])

    return <>
        <button onClick={() => setCount(count + 1)}>+</button>
        {count}
        <Book addBook={memoizedAddBook2} />
    </>
}

type booksSecretPropsType = {
    addBook: () => void
}

const booksSecret = (props: booksSecretPropsType) => {
    return <div>
        <button onClick={() => props.addBook()}>add book</button>
        {/* {props.books.map((b, i) => <div key={i}>{b}</div>)} */}
    </div>
}
const Book = React.memo(booksSecret)