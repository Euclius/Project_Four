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


    supplierCreate = () => {
        axios.post(`/api/v1/suppliers/`,
            this.state.newSupplier
        ).then(res => {
            const supplierList = [...this.state.suppliers]
            supplierList.unshift(res.data)
            this.setState({
                redirectToHome: true,
                suppliers: supplierList,
                newSupplier: {
                    title: '',
                    location: false,
                    description: '',
                    photo_url: '',
                    reason: ''
                }
            })
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
        this.supplierCreate()
    }

    checkIt = () => {
        console.log(this.state.newSupplier)
    }

    render() {
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
                    handleSubmit={this.handleSubmit}
                    submitBtnText="Create"
                />
            </div>
        )
    }
}




