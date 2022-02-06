import {useState} from 'react';

function Element({deleteComponent}) {
    const [type, setType] = useState(null); // для изменения типа для запроса
    const [data, setData] = useState([]); // данные из запроса
    const [pos, setPos] = useState({ // координаты мыши
        x:0, y: 0
    });

    console.log('Component render'); // рендер компонента

    console.log('ComponentDidUpdate'); // Вызывается только при изменении, не при маунтинге
    fetch(`https://jsonplaceholder.typicode.com/${type}/1`) // запрос
        .then(response => response.json())
        .then(json => setData(json))

    const mouseMoveHandler = event => {
        setPos({
            x: event.clientX,
            y: event.clientY
        })
    }

    console.log('CopmponentDidMount'); // Вывести при маунтинге

    window.addEventListener('mousemove', mouseMoveHandler) // При маунтинге подписываемся

    console.log('CopmponentWillUnmount');
    window.removeEventListener('mousemove', mouseMoveHandler) // При удалении компонента отписываемся

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
