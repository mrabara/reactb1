const Player = (props) => {
    return (
        <div>
            <p>{props.playerName}</p>
            <p>{props.number}</p>
        </div>
    )
}

// class Player extends React.Component {
//     render() {
//         return (
//             <div>
//                 <p>{this.props.playerName}</p>
//                 <p>{this.props.number}</p>
//             </div>
//         )
//     }
// }

export default Player;