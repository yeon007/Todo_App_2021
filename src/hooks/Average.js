import React,{useState, useRef,  useCallback, useMemo} from 'react'

const getAverage = lists => {
    console.log('평균값 계산중 ..');
    if(lists.length === 0) return 0;
    const sum = lists.reduce((a, b) => a+b);
    return sum / lists.length;
}

function Average() {
    const [lists, setLists] = useState([]);
    const [number, setNumber] = useState('');
    const inputEl = useRef(null);

    const onchange = useCallback(e => {
        console.log('컴포넌트가 처음 렌더링 될때만 함수 생성.. ');
        setNumber(e.target.value);

    },[]);//컴포넌트가 처음 렌더링 될 때만 함수 생성

    const onInsert = useCallback(e => {
        console.log('numbrt 혹은 list가 바뀌었을 때만 함수 생성');
        const nextLists = lists.concat(parseInt(number));
        setLists(nextLists);
        setNumber(''); // 내용 비우기
        inputEl.current.focus(); //커서 깜빡
    },[number,lists]); //number 혹은 list가 바뀌었을때만 함수 생성

    const avg = useMemo(() => getAverage(lists),[lists]);

    return (
        <div>
            <input value={number} onChange={onchange} ref={inputEl} />
            <button onClick={onInsert}>등록</button>
            <ul>
                {lists.map((list, index) => (
                        <li key={index}>{list}</li>
                ))}
            </ul>
            <div><b>평균값:</b> {avg} </div>
        </div>
    )
}

export default Average
