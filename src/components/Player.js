import React from 'react';

class Player extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.playerName}</p>
                <p>{this.props.number}</p>
            </div>
        )
    }
}

export default Player;