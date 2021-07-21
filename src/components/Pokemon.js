import React from 'react';

class Pokemon extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>
                    <img src={this.props.image} alt={this.props.name} /></td>
                <td>{this.props.type}</td>
            </tr>
        );
    }
}

export default Pokemon;