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

    let count = 0;

    return (
        <div>
            Счёт: {count}
            <button onClick=''>Сбросить</button>
            <button onClick=''>-</button>
            <button onClick=''>+</button>
        </div>
    );
}

export default App
