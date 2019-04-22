import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

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
        const productId = this.props.match.params.id
        this.showSpecificProduct(productId)
    }

    showSpecificProduct = () => {
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
                <div key={this.state.product.id}>

                    Name:<div>{this.state.product.name}</div>
                    Description: <div>{this.state.product.description}</div>
                    Picture: <div>{this.state.product.picture_url}</div>
                    Supplier:<div>{this.state.supplier.title}</div>
                </div>
                <Link to={`/products/${this.state.product.id}/edit`}>Edit</Link>
            </div>
        )
    }
}