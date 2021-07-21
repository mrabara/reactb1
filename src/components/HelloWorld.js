import React from 'react';

class HelloWorld extends React.Component {
    render() {
        let isAnonymous = false;

        const items = ['rice', 'chicken', 'cookies'];

        return (
            <div>
                <h1>Hello world</h1>
                <p>welcome to React!</p>
                <p>{this.props.a}</p>
                <ul>
                    {items.map(item => <li>{item}</li>)}
                </ul>
            </div>
        );
    }
}

export default HelloWorld;
