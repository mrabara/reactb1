import { useState, useEffect } from 'react';

const AddItemForm = (props) => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState('');


    useEffect(() => {
        if (props.editItem) {
            setName(props.editItem.name);
            setCategory(props.editItem.category);
            setPrice(props.editItem.price);
            setImage(props.editItem.image);
        }
    }, [props.editItem]);

    const btnClickHandler = () => {
        if (props.editItem) {
            update();
        } else {
            addNewItem();
        }
    }

    const addNewItem = (e) => {
        let newItem = {
            name: name,
            price: price,
            category: category,
            image: image
        }

        props.addItem(newItem);
    }

    const update = () => {
        let updatedItem = {
            id: props.editItem.id,
            name: name,
            price: price,
            category: category,
            image: image
        }

        props.updateItem(updatedItem);
    }

    return (
        <div>
            Name: <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            /> <br />
            Category: <input
                type="text"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            /> <br />
            Price: <input
                type="number"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            /> <br />
            Image: <input
                type="text"
                name="image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
            /> <br />
            <button onClick={btnClickHandler}>{props.editItem ? 'Edit' : 'Add'}</button>
        </div>
    )
}

// class AddItemForm extends React.Component {
//     state = {
//         name: '',
//         category: '',
//         price: 0,
//         image: ''
//     }

//     inputChangeHandler = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//     }

//     addNewItem = (e) => {
//         let newItem = {
//             name: this.state.name,
//             price: this.state.price,
//             category: this.state.category,
//             image: this.state.image
//         }

//         this.props.addItem(newItem);
//     }

//     render() {
//         return (
//             <div>
//                 Name: <input
//                     type="text"
//                     name="name"
//                     value={this.state.name}
//                     onChange={this.inputChangeHandler}
//                 /> <br />
//                 Category: <input
//                     type="text"
//                     name="category"
//                     value={this.state.category}
//                     onChange={this.inputChangeHandler}
//                 /> <br />
//                 Price: <input
//                     type="number"
//                     name="price"
//                     value={this.state.price}
//                     onChange={this.inputChangeHandler}
//                 /> <br />
//                 Image: <input
//                     type="text"
//                     name="image"
//                     value={this.state.image}
//                     onChange={this.inputChangeHandler}
//                 /> <br />
//                 <button onClick={this.addNewItem}>Add Item</button>
//             </div>
//         )
//     }
// }

export default AddItemForm;