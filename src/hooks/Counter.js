import React,{useState} from 'react'

function Counter() {
    const [value, setValue] = useState(0);
    return (
        <div>
            <h1>useState Hook 사용하기</h1>
            <p>현재 카운터 값은: <b>{value}</b> 입니다.</p>
            <button onClick={()=>setValue(value + 1)}>더하기</button>
            <button onClick={()=>setValue(value - 1)}>빼기</button>
        </div>
    )
}

export default Counter;
