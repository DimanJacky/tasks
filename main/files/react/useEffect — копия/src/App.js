import React, { Component } from 'react';
import Element from './Element';

class App extends Component {
    state = {
        elements: [
            {
                id: 1,
                title: 'First',
            },
            {
                id: 2,
                title: 'Second',
            },
        ],
    };

    handleDeleteElement = id => {
        this.setState(prevState => ({
            elements: prevState.elements.filter(el => el.id != id)
        }));
    };

    render() {
        const { elements } = this.state;

        return (
            <ul>
                {elements.map(el => (
                    <li
                        key={el.id}
                    >
                        <Element deleteComponent={() => this.handleDeleteElement(el.id)} />
                    </li>
                ))}
            </ul>
        )
    }
}

export default App
