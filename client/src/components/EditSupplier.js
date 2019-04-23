import React, { Component } from 'react'
import axios from 'axios'
import SupplierForm from './SupplierForm.js'
import { Redirect } from 'react-router-dom'

export default class SupplierEdit extends Component {
    state = {
        supplier: {
            supplierId: '',
            title: '',
            location: '',
            description: '',
            photo_url: '',
            reason: ''
        },
        checked: false,
        redirectToHome: false
    }
    componentDidMount = () => {
        axios.get(`/api/v1/suppliers/${this.props.match.params.supplierId}/`)
            .then((res) => {
                this.setState({
                    supplier: {
                        supplierId: res.data.id,
                        title: res.data.title,
                        location: res.data.location,
                        description: res.data.description,
                        photo_url: res.data.photo_url,
                        reason: res.data.reason
                    }
                }
                )
            }
            )

    }
    supplierEdit = () => {
        const payload = this.state.supplier
        const supplierId = this.props.match.params.supplierId
        axios.put(`/api/v1/suppliers/${supplierId}/`, payload)
            .then(() => {
                this.setState({
                    redirectToHome: true
                })
            })
}


handleChange = (e) => {
    const editSupplier = { ...this.state.supplier }
    if (e.target.type === 'checkbox') {
        this.setState({ checked: !this.state.checked })
        editSupplier.location = !this.state.checked
    } else {
        editSupplier[e.target.name] = e.target.value
    }
    this.setState({ supplier: editSupplier })
}



handleSubmit = (e) => {
    e.preventDefault()
    this.supplierEdit()
}

supplierDelete = () => {
    const supplierId = this.props.match.params.supplierId
    axios.delete(`/api/v1/suppliers/${supplierId}/`)
        .then(() => {
            this.setState({ redirectToHome: true })
        })
}

render() {
    if (this.state.redirectToHome === true) {
        return (
            <Redirect to='/suppliers' />)
    }
    return (
        <div>
            <SupplierForm
                supplier={this.state.supplier}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                submitBtnText="update"
            />
            <button onClick={() => this.supplierDelete(this.state.supplier.supplierId)}>Delete</button>
        </div>

    )
}
}