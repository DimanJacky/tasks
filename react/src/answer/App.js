import {useState} from 'react';

function App() {
    // Объявить начальное состояние счетчика с помощью функции someExpensiveComputation
    // Назначить обработчики для кнопок
    // Увеличить на 1, зависит от предыдущего состояния
    // Уменьшить на 1, зависит от предыдущего состояния
    // Сбросить до начального состояния
    // Нужно чтобы не вычислялось каждый раз начальное состояние

    // Дорогостоящее вычисление начального состояния initialState
    function someExpensiveComputation() {
        return [...Array(10000000).keys()].map(val => ((val * 5000000) * 500000)).length;
    }

    const [count, setCount] = useState(() => {
        return someExpensiveComputation();
    });

    return (
        <div>
            Счёт: {count}
            <button onClick={() => setCount(someExpensiveComputation())}>Сбросить</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
        </div>
    );
}

export default App
