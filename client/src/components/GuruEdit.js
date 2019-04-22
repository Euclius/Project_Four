import React, { Component } from 'react'
import axios from 'axios'
import GuruForm from './GuruForm'

export default class GuruEdit extends Component {
    state = {
        guru: {
            id: '',
            name: "",
            brief_description: "",
            location: "",
            image_url: "",
            skill_set: ""
        },
        guruEdited: false,
        checked: false,
    }
    componentDidMount = () => {
        axios.get(`/api/v1/gurus/${this.props.match.params.guruId}/`)
            .then(res => {
                this.setState({
                    guru: {
                        id: res.data.id,
                        name: res.data.name,
                        brief_description: res.data.brief_description,
                        location: res.data.location,
                        image_url: res.data.image_url,
                        skill_set: res.data.skill_set
                    }
                })
            })
    }

    editGuru = () => {
        const payload = this.state.guru
        axios.put(`/api/v1/gurus/${this.props.match.params.id}/`, payload)
            .then((res) => {
                console.log(res)
                this.setState({
                    guru: {
                        id: res.data.id,
                        name: res.data.name,
                        brief_description: res.data.brief_description,
                        location: res.data.location,
                        image_url: res.data.image_url,
                        skill_set: res.data.skill_set
                    },
                    guruEdited: true
                })
                this.props.history.goBack()
            })
    }

    handleChange = (e) => {
        const guruEdit = { ...this.state.guru }
        guruEdit[e.target.name] = e.target.value
        this.setState({ guru: guruEdit,  checked: this.state.guru.location})
    }

    handleGuruEdit = (e) => {
        e.preventDefault()
        this.editGuru()
    }

    locationSwitch=()=>{
        console.log('switch being clicked?')
        let checkedBox = this.state.checked
        // this.state.guru.location = this.state.checked
        checkedBox = !checkedBox
        this.setState({
            checked: checkedBox
        })
    }

guruDelete = () => {
    const guruId = this.props.match.params.guruId
    axios.delete(`/api/v1/gurus/${guruId}/`)
    .then(() => {
        this.props.history.goBack()
      })
}

    render() {
        return (
            <div>
                <GuruForm
                    guru={this.state.guru}
                    handleChange={this.handleChange}
                    handleGuruEdit={this.editGuru}
                    submitBtnText="Update this local Guru"
                />
<button onClick={()=> this.guruDelete(this.state.guru.guruId)}>Delete</button>
            </div>
        )
    }
}