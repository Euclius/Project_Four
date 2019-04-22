import React from 'react'

export default function ProductForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    name="name"
                    id="name"
                    type="text"
                    value={props.product.name}
                    onChange={props.handleChange}
                />
                
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <input
                    onChange={props.handleChange}
                    name="description"
                    id="description"
                    type="text"
                    value={props.product.description}
                />
            </div>
            <div>
                <label htmlFor="supplier">Supplier:</label>
                <input
                    onChange={props.handleChange}
                    name="supplier"
                    id="supplier"
                    type="text"
                    value={props.product.supplier}
                />
            </div>
            <div>
                <label htmlFor="picture_url">Picture:</label>
                <input
                    onChange={props.handleChange}
                    name="picture_url"
                    id="picture_url"
                    type="text"
                    value={props.product.picture_url}
                />
            </div>
            <div><button>Add a favourite Product of yours!</button></div>
        </form>
    )
}