import React from 'react'

export default function GuruForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    name="name"
                    id="name"
                    type="text"
                    value={props.guru.name}
                    onChange={props.handleChange}
                />
                
            </div>
            <div>
                <label htmlFor="brief_description">Brief Description:</label>
                <input
                    onChange={props.handleChange}
                    name="brief_description"
                    id="brief_description"
                    type="text"
                    value={props.guru.brief_description}
                />
            </div>
            <div>
                <label htmlFor="location">Location:</label>
                <input
                    onChange={props.handleChange}
                    name="location"
                    id="location"
                    type="text"
                    value={props.guru.location}
                />
            </div>
            <div>
                <label htmlFor="image_url">Image:</label>
                <input
                    onChange={props.handleChange}
                    name="image_url"
                    id="image_url"
                    type="text"
                    value={props.guru.image_url}
                />
            </div>
            <div>
                <label htmlFor="skill_set">Skillset:</label>
                <input
                    onChange={props.handleChange}
                    name="skill_set"
                    id="skill_set"
                    type="text"
                    value={props.guru.skill_set}
                />
            </div>
            <div><button>Update the local Guru!</button></div>
        </form>
    )
}