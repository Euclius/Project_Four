import React, { Component } from 'react'
import axios from 'axios'

export default class SupplierShow extends Component {

    state = {
        supplier: {
            supplierId: '',
            title: '',
            location: '',
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
                            supplierId: res.data._id,
                            title: res.data.title,
                            location: res.data.location,
                            description: res.data.description,
                            photo_url: res.data.photo_url,
                            reason: res.data.reason
                        }
                    })
                })
        } 
            console.log('at component did mount on suppliershow')
        
    }


    render() {
        return (
            <div>
                <div key={this.state.supplier._id}>

                    Title:<div>{this.state.supplier.title}</div>
                    Location:<div>{this.state.supplier.location}</div>
                    Description: <div>{this.state.supplier.description}</div>
                    Picture: <div>{this.state.supplier.photo_url}</div>
                    Reason:<div>{this.state.supplier.reason}</div>

                </div>
            </div>
        )
    }
}

    // showSpecificSupplier = () => {
    //     const supplierId = this.props.match.params.supplierId
    //     axios.get(`api/v1/suppliers/${supplierId}/`)
    //         .then(res => {
    //             this.setState({
    //                 supplier: res.data
    //             })
    //         })
    // }