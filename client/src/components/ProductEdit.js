import React, { Component } from 'react'
import axios from 'axios'
import ProductForm from './ProductForm'

export default class ProductEdit extends Component {
    state = {
        product: {
            id: '',
            name: '',
            description: '',
            supplier: '',
            picture_url: ''
        },
        productEdited: false
    }

    componentDidMount = () => {
        axios.get(`/api/v1/products${this.props.match.params.productId}`)
            .then(res => {
                this.setState({
                    product: {
                        id: res.data.id,
                        name: res.data.name,
                        description: res.data.description,
                        supplier: res.data.supplier,
                        picture_url: res.data.picture_url
                    }
                })
            })
    }

    productEdit = () => {
        const payload = this.state.product
        const productId = this.props.match.params.id
        axios.put(`/api/v1/products/${productId}/`, payload)
            .then((res) => {
                console.log(res)
                this.setState({
                    product: {
                        name: '',
                        description: '',
                        supplier: '',
                        picture_url: ''
                    },
                    productEdited: true
                })
                this.props.history.goBack()
            })
    }
    handleChange = (e) => {
        const productEdit = { ...this.state.product }
        productEdit[e.target.name] = e.target.value
        this.setState({ product: productEdit })
    }
    handleProductEdit = (e) => {
        e.preventDefault()
        this.productEdit()
    }

    productDelete = () => {
        const productId = this.props.match.params.productId
        axios.delete(`/api/v1/products/${productId}/`)
            .then(() => {
                this.props.history.goBack()
            })
    }

    render() {
        return (
            <div>
                <ProductForm
                    product={this.state.product}
                    handleChange={this.handleChange}
                    handleProductEdit={this.productEdit}
                    submitBtnText="update this product"

                />
                <button onClick={() => this.productDelete(this.state.product.productId)}>Delete</button>
            </div>
        )
    }
}