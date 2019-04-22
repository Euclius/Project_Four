import React, { Component } from 'react'
import axios from 'axios'
import SupplierForm from './SupplierForm.js'

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
        checked: false
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

        console.log('at componentdidmount in edit suppleir')

    }
    supplierEdit = () => {
        const payload = this.state.supplier
        const supplierId = this.props.match.params.supplierId
        axios.put(`/api/v1/suppliers/${supplierId}/`, payload)
            .then((res) => {
                console.log(res)
            }
            )
    }


    handleChange = (e) => {
        const editSupplier = { ...this.state.supplier }
        editSupplier[e.target.name] = e.target.value
        this.setState({ supplier: editSupplier })
    }

    locationSwitch=()=>{
        console.log('switch being clicked?')
        let checkedBox = this.state.checked
        checkedBox = !checkedBox
        this.setState({
            checked: checkedBox
        })
    }

    handleEdit = (e) => {
        e.preventDefault()
        this.supplierEdit()
    }

    supplierDelete = () => {
        const supplierId = this.props.match.params.supplierId
        axios.delete(`/api/v1/suppliers/${supplierId}`)
        .then(() => {
            this.props.history.goBack()
          })
    }

    render() {
        return (
            <div>
                <SupplierForm
                    supplier={this.state.supplier}
                    handleChange={this.handleChange}
                    handleEdit={this.supplierEdit}
                    locationSwitch={this.locationSwitch}
                    submitBtnText="update"
                />
                <button onClick={()=> this.supplierDelete(this.state.supplier.supplierId)}>Delete</button>
            </div>
            
        )
    }
}