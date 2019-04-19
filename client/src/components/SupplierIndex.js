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
        },
        checked: false
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
            const res = await axios.post(`api/v1/suppliers/${supplierId}/`, this.state.newSupplier)
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
locationSwitch=()=>{
    console.log('switch being clicked?')
    let checkedBox = this.state.checked
    checkedBox = !checkedBox
    this.setState({
        checked: checkedBox
    })
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
        if(this.state.checked===true){}
        return (
            <div>
                <div>supplier show page</div>
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




