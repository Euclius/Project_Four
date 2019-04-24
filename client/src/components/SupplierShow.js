import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class SupplierShow extends Component {

    state = {
        supplier: {
            supplierId: '',
            title: '',
            // location: '',
            description: '',
            photo_url: '',
            reason: ''
        },
        product: []
    }

    componentDidMount() {
        if (this.props.match.params) {
            axios.get(`/api/v1/suppliers/${this.props.match.params.supplierId}/`)
                .then(res => {
                    this.setState({
                        product: res.data.product,
                        supplier: {
                            id: res.data.id,
                            title: res.data.title,
                            // location: res.data.location,
                            description: res.data.description,
                            photo_url: res.data.photo_url,
                            reason: res.data.reason
                        }
                    })
                })
        } 
        
    }


    render() {
        return (
            <div>
                <Link to ={`/suppliers/${this.state.supplier.id}/edit`}>Edit</Link>
                <div key={this.state.supplier.id}>

                    <div>Title: {this.state.supplier.title}</div>
                    {/* <div>Location: {this.state.supplier.location}</div> */}
                    <div>Description: {this.state.supplier.description}</div>
                    <div>Picture: {this.state.supplier.photo_url}</div>
                    <div>Reason: {this.state.supplier.reason}</div>

                </div>
            </div>
        )
    }
}
