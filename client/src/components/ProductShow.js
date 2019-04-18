import React, { Component } from 'react'
import axios from 'axios';

export default class ProductShow extends Component {
    state = {
        supplier: {
            title: ''
        },
        product: {
            name: '',
            description: '',
            picture_url: '',
            supplier: ''
        }
    }

    componentDidMount() {
        const productId = this.props.match.params._id
        this.showSpecificProduct(productId)
    }

    showSpecificProduct = () => {
        const supplierId = this.props.match.params.supplierId
        const productId = this.props.match.params.productId
        axios.get(`/api/v1/products/${productId}/`)
            .then(res => {
                this.setState({
                    product: res.data
                })
            })
    }
    render() {
        return (
            <div>
                <div key={this.state.product._id}>

                    Name:<div>{this.state.product.name}</div>
                    Description: <div>{this.state.product.description}</div>
                    Picture: <div>{this.state.product.picture_url}</div>
                    Supplier:<div>{this.state.supplier.title}</div>

                </div>
            </div>
        )
    }
}