import { useEffect } from 'react';
const Counter = ({ count, data }) => {
    const handleCount = () => {
        console.log('Count has been updated');
    }
    const handleData = () => {
        console.log('Data has been updated');
    }
    // useEffect(() => {
    //     handleCount();
    //     handleData();
    // }, []);
    
    useEffect(() => {
        handleCount();
    }, [count]);
    useEffect(() => {
        handleData();
    }, [data]);

    // Play with different useEffect dependencies to see the effect in console

    // useEffect(() => {
    //     console.log('Count or Data has been updated');
    // }, [count, data]);

    // useEffect(() => {
    //     console.log('Component has been updated');
    // });

    // useEffect(() => {
    //     handleCount();
    //     console.log('Component has been mounted');
    // }, [count, data]);
    return (
        <div>
            <h1>Counter Value {count}</h1>
            <h1>Data Value {data}</h1>
        </div>
    );
}

export default Counter;