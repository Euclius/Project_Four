import React, { Component } from 'react'
import axios from 'axios'
import GuruForm from './GuruForm'
import { Redirect } from 'react-router-dom'

export default class GuruEdit extends Component {
    state = {
        guru: {
            id: '',
            name: '',
            brief_description: '',
            location: false,
            image_url: '',
            skill_set: ''
        },

        checked: false,
        redirectToGuru: false,
        redirectToHome: false
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
        axios.put(`/api/v1/gurus/${this.props.match.params.guruId}/`, payload)
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

                    redirectToHome: true
                })
                this.props.history.goBack()
            })
    }
    handleChange = (e) => {
        const guruEdit = { ...this.state.guru }
        if (e.target.type === 'checkbox') {
            this.setState({ checked: !this.state.checked })
            guruEdit.location = !this.state.checked
        } else {
            guruEdit[e.target.name] = e.target.value
        }
        console.log(guruEdit)
        this.setState({ guru: guruEdit })
    }
    guruDelete = () => {
        const guruId = this.props.match.params.guruId
        axios.delete(`/api/v1/gurus/${guruId}/`)
            .then(() => {
                this.setState({ redirectToHome: true })
            })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.editGuru()
    }
    render() {
        if (this.state.redirectToHome === true) {
            return (<Redirect to={`/gurus`} />)
        }
        if (this.state.redirectToGuru === true) {
            return (<Redirect to={`/gurus/${this.props.match.params.guruId}/`} />)
        }
        return (
            <div>
                <GuruForm
                    guru={this.state.guru}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    submitBtnText="Update this local Guru"
                />
                <button onClick={() => this.guruDelete(this.state.guru.guruId)}>Delete</button>
            </div>
        )
    }
}