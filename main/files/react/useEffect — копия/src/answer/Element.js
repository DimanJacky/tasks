import {useState, useEffect} from 'react';

function Element({deleteComponent}) {
    const [type, setType] = useState(null);
    const [data, setData] = useState([]);
    const [pos, setPos] = useState({
        x:0, y: 0
    });

    console.log('Component render');

    useEffect(() => {
        if (type === null) { // Этот эффект вызываем только при изменении, не при маунтинге
            return;
        }
        console.log('ComponentDidUpdate');
        fetch(`https://jsonplaceholder.typicode.com/${type}/1`)
            .then(response => response.json())
            .then(json => setData(json))
    }, [type]); // Этот эффект вызывается только при изменении стейта type

    const mouseMoveHandler = event => {
        setPos({
            x: event.clientX,
            y: event.clientY
        })
    }

    useEffect(() => {
        console.log('CopmponentDidMount');

        window.addEventListener('mousemove', mouseMoveHandler) // При маунтинге подписываемся

        return () => {
            console.log('CopmponentWillUnmount');
            window.removeEventListener('mousemove', mouseMoveHandler) // При удалении компонента отписываемся
        }
    }, []); // Этот эффект вызываем только когда он маунтится

    return (
        <div>
            <h1>Ресурс: {type}</h1>


            <button onClick={() => setType('users')}>Пользователи</button>
            <button onClick={() => setType('todos')}>Todos</button>
            <button onClick={() => setType('posts')}>Посты</button>
            <br />
            <button onClick={() => deleteComponent()}>Удалить компонент</button>

            <pre>{JSON.stringify(pos, null, 2)}</pre>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default Element
