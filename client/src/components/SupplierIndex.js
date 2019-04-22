import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import SupplierForm from './SupplierForm.js'
import { Redirect } from 'react-router-dom'

export default class SupplierIndex extends Component {

    state = {
        suppliers: [],
        newSupplier: {
            title: '',
            location: false,
            description: '',
            photo_url: '',
            reason: ''
        },
        checked: false,
        redirectToHome: false,
        createdSupplier: {}
    }

    componentDidMount = () => {
        const supplierId = this.props.match.params.id
        this.getSupplier(supplierId)
    }

    getSupplier = async () => {
        try {
            const res = await axios.get(`/api/v1/suppliers/`)
            this.setState({
                suppliers: res.data,
            })
        }
        catch (error) {
            console.log(error, 'error from getSupplier on supplier index')
        }
    }

    createSupplier = async () => {
        try {
            let payload = this.state.newSupplier
            console.log(payload)
            console.log("im updating!!")
            const res = await axios.post(`/api/v1/suppliers/`, payload)
            const clonedSuppliers = [...this.state.suppliers]
            clonedSuppliers.push(res.data)
            this.setState({
                suppliers: clonedSuppliers,
                newSupplier: {
                    title: res.data.title,
                    location: this.state.checked,
                    description: res.data.description,
                    photo_url: res.data.photo_url,
                    reason: res.data.reason
                }, redirectToHome: true,
                createdSupplier: {}
            })
        }
        catch (error) {
            console.log(error, 'error from createSupplier')
        }
    }

    locationSwitch=()=>{
        console.log('switch being clicked?')
        let checkedBox = this.state.checked
        checkedBox = !checkedBox
        this.setState({
            checked: !checkedBox, location: true
        })
    }
    handleChange = (e) => {
        const clonedNewSupplier = { ...this.state.newSupplier }
        if (e.target.type === 'checkbox') {
            this.setState({ checked: !this.state.checked })
            clonedNewSupplier.location = !this.state.checked
        }
        else {
            clonedNewSupplier[e.target.name] = e.target.value
        }
        console.log(clonedNewSupplier)
        this.setState({
            newSupplier: clonedNewSupplier,
        })
    }


    handleSubmit = (e) => {
        e.preventDefault()
        this.createSupplier()
    }
    checkIt = () => {
        console.log(this.state.newSupplier)
    }

    render() {
        if (this.state.redirectToHome === true) {
            return (<Redirect to={`/suppliers/${this.state.createdSupplier.id}`}></Redirect>)
        }
        if (this.state.checked === true) { }
        return (
            <div>
                <div>supplier index page</div>
                <button onClick={this.checkIt} >checkittttt</button>
                <ul>
                    {
                        this.state.suppliers.map((supplier, i) => {
                            return (
                                <Link to={`/suppliers/${supplier.id}`}
                                    key={i}>
                                    <div key={i}>
                                        {supplier.title}
                                    </div>
                                </Link>

                            )
                        }
                        )
                    }
                </ul>
                <h2>Add a supplier</h2>
                <SupplierForm
                    supplier={this.state.newSupplier}
                    handleChange={this.handleChange}
                    handleSubmit={this.createSupplier}
                    locationSwitch={this.locationSwitch}

                    submitBtnText="Create"
                />
            </div>
        )
    }
}




