import React, { Component } from 'react'
import axios from 'axios';
import {Redirect, Link} from 'react-router-dom'


export default class GuruCreate extends Component {
    state = {
        gurus: [],
        guru: {
            name: "",
            brief_description: "",
            location: "",
            image_url: "",
            skill_set: ""
        },
        createdGuru: {},
        redirectToHome: false,
        checked: false
    }

// componentDidMount =() => {
//     this.getGuru()
// }

getGuru = async () => {
    try {
        const res = await axios.get(`/api/v1/gurus/`)
        this.setState({
            gurus: res.data,
        })
    }
    catch (error) {
        console.log(error, 'error from get guru on guru show')
    }
}
    
createGuru = () => {
    axios.post(`/api/v1/gurus/`, this.state.guru).then((res) => {
        const guruList = [...this.state.gurus]
        guruList.unshift(res.data)
        this.setState({ createdGuru: res.data, redirectToHome: true})
    })
}

handleChange = (e) => {
    const newGuru = {...this.state.guru}
    newGuru[e.target.name] = e.target.value
    console.log(newGuru)
    this.setState({guru: newGuru})
    this.setState({checked: !this.state.checked})
}

handleSubmit = (e) => {
e.preventDefault()
this.createGuru()
}

    render() {
        if(this.state.redirectToHome===true) {
            return (<Redirect to={`/gurus/${this.state.createdGuru._id}`}></Redirect>)
        }
        if(this.state.checked===true) {}
        return (
            <div>
<h1>GuruCREATE</h1>
            <div>
<form onSubmit={this.handleSubmit}>
<div>
<label htmlFor="name">Name:</label>
<input onChange={this.handleChange}
name="name"
type="text"
value={this.state.guru.name}/>
</div>
<div>
<label htmlFor="brief_description">Brief Description:</label>
<input onChange={this.handleChange}
name="brief_description"
type="text"
value={this.state.guru.brief_description}/>  
</div>
<div>
<label htmlFor="location">Location:</label>
<input onChange={this.handleChange}
name="location"
type="checkbox"
value={this.state.guru.location}/>
</div>
<div>
<label htmlFor="image_url">Image:</label>
<input onChange={this.handleChange}
name="image_url"
type="text"
value={this.state.guru.image_url}/>
</div>
<div>
<label htmlFor="skill_set">Skillset:</label>
<input onChange={this.handleChange}
name="skill_set"
type="text"
value={this.state.guru.skill_set}/>
</div>
<div><button>Add a local Guru!</button></div>
</form>

            </div>
            </div>
        )
    }
}
