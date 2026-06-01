import { useState, useEffect } from 'react';
const Counter = ({count, data}) => {
    useEffect(() => {
        console.log('Component mounting phase only once');   
    }, [])
    
    useEffect(() => {
        console.log('Count update phase:', count);   
    }, [count])

    useEffect(() => {
        return () => {
            console.log('Component unmounting phase');   
        }
    }, [])

    // useEffect(() => {
    //     console.log('Data update phase:', data);   
    // }, [data]);
    return (
        <div>
            <h1>Counter value: {count}</h1>
            <h1>Data: {data}</h1>
        </div>
    )
}
export default Counter;
