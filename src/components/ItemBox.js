import React from 'react';
import './ItemBox.css';

class ItemBox extends React.Component {
    orderClickHandler = () => {
        this.props.addToCart(this.props.item);
    }

    deleteBtnClickHandler = () => {
        this.props.deleteItem(this.props.item);
    }

    editBtnClickHandler = () => {
        this.props.editItem(this.props.item);
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
                    <button onClick={this.editBtnClickHandler}>Edit</button>
                    <button onClick={this.deleteBtnClickHandler}>Delete</button>
                </div>
            </div>
        );
    }
}

export default ItemBox;