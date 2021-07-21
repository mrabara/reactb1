import React from 'react';
import './ItemBox.css';

class ItemBox extends React.Component {
    orderClickHandler = () => {
        alert(this.props.item.name);
    }

    render() {
        let { name, price, image, category } = this.props.item;

        return (
            <div className="ItemBox">
                <img src={image} alt={name} />
                <div>
                    <strong>{name}</strong> <br />
                    <small>{category}</small> <br />
                    <p>Php {price}</p>
                    <button onClick={this.orderClickHandler}>Order</button>
                </div>
            </div>
        );
    }
}

export default ItemBox;