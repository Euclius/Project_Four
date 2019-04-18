import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import SupplierForm from './SupplierForm';

export default class SupplierIndex extends Component {

    state = {
        suppliers: [],
        newSupplier: {
            title: '',
            location: '',
            description: '',
            photo_url: '',
            reason: ''
        }
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
            const supplierId = this.props.match.params.id
            const res = await axios.post(`api/v1/suppliers/${supplierId}`, this.state.newSupplier)
            const clonedSuppliers = [...this.state.suppliers]
            clonedSuppliers.push(res.data)
            this.setState({
                suppliers: clonedSuppliers,
                newSupplier: {
                    title: '',
                    location: '',
                    description: '',
                    photo_url: '',
                    reason: ''
                }
            })
        }
        catch (error) {
            console.log(error, 'error from createSupplier')
        }
    }

    handleChange = (e) => {
        const clonedNewSupplier = { ...this.state.newSupplier }
        clonedNewSupplier[e.target.name] = e.target.value
        this.setState({
            newSupplier: clonedNewSupplier
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.createSupplier()
    }


    render() {
        return (
            <div>
                <div>supplier show page</div>
                <ul>
                    {
                        this.state.suppliers.map((supplier) => {
                            return (
                                <Link to={`/suppliers/${supplier._id}`}
                                    key={supplier._id}>
                                    <div>
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
                    submitBtnText="Create"
                />
            </div>
        )
    }
}





/* <div>
                    <h2>add a favourite supplier</h2>
                    <form onSubmit={this.createSupplier}>
                        <input
                            type="text"
                            name="name"
                            value={this.state.newSupplier.title}
                            onChange={this.handleChange} />
                        <Link to={`/suppliers/${this.state.supplier}/`}>{this.state.suppliers.title}</Link>
                        <button>Create</button>
                    </form>
                </div> */


            //     try {
            //         const res = await axios.get(`/api/v1/suppliers/`)
            //         this.setState({
            //             suppliers: res.data,
            //         })
            //     }
            //     catch (error) {
            //         console.log(error, 'error from fetch supplier on supplier index')
            //     }
            // }

            // fetchSupplier = (error) => {
            //     axios.get('api/suppliers').then(res=> {
            //         this.setState({suppliers: res.data})
            //     })
            //         console.log(error, 'error from fetchsupplier on supplierindex')

            //         }