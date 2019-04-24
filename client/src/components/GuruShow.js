import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

export default class GuruShow extends Component {
    state = {
        guru: {
            guruId: '',
            name: "",
            brief_description: "",
            // location: "",
            image_url: "",
            skill_set: ""
        }
    }

    componentDidMount() {
        const guruId = this.props.match.params.guruId
        this.getGuru(guruId)
    }

    getGuru = async (guruId) => {
        try {
            const res = await axios.get(`/api/v1/gurus/${guruId}/`)
            this.setState({
                guru: res.data
            })
        }
        catch (error) { console.log(guruId)

        }
    }

    render() {
        return (
            <div>
                <button> <Link to={`/gurus/${this.state.guru.id}/edit`}> Edit </Link>  </button>
                <button> <Link to={`/addMap`}>Add A Location</Link></button>
                <div key={this.state.guru.id}>

                    <div>Name: {this.state.guru.name}</div>
                    {/* <div>Location: {this.state.guru.location}</div> */}
                    <div>Description: {this.state.guru.brief_description}</div>
                    <div>Picture:<img src={`${this.state.guru.image_url}`} alt={this.state.guru.name}></img></div>
                    <div>SkillSet: {this.state.guru.skill_set}</div>

                </div>
            </div>
        )
    }
}