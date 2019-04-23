import React from 'react'

export default function SupplierForm(props) {

    return (
        
        <form onSubmit={props.handleSubmit}>
            <div>
                <label htmlFor="title">Name:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={props.supplier.title}
                    onChange={props.handleChange}
                />
            </div>
            <div>
                <label htmlFor="location">Location:</label>
                <input
                    type="checkbox"
                    id="location"
                    name="location"
                    value={props.supplier.location}
                    onChange={props.handleChange}
                />
            </div>
            <div>
                <label htmlFor="photo_url">Photo:</label>
                <input
                    type="text"
                    id="photo_url"
                    name="photo_url"
                    value={props.supplier.photo_url}
                    onChange={props.handleChange}
                />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    value={props.supplier.description}
                    onChange={props.handleChange}
                />
            </div>
            <div>
                <label htmlFor="reason">Your Reason:</label>
                <input
                    type="text"
                    id="reason"
                    name="reason"
                    value={props.supplier.reason}
                    onChange={props.handleChange}
                />
            </div>
            <button>{props.submitBtnText}</button>
        </form>
    )
}