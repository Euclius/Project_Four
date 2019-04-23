import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import ProductForm from './ProductForm.js'

export default class ProductCreate extends Component {

    state = {
        supplier: [],
        products: [],
        product: {
            id: '',
            name: '',
            picture_url: '',
            description: '',
            supplier: ''
        },
        createdProduct: {},
        redirectToHome: false
    }

    componentDidMount = () => {
        const productId = this.props.match.params.id
        this.getProduct(productId)
    }

    getProduct = async () => {
        try {
            const res = await axios.get(`/api/v1/products/`)
            this.setState({
                products: res.data,
            })
        }
        catch (error) {

        }
    }

    productCreate = () => {
        axios.post(`/api/v1/products/`,
            this.state.product
        ).then(res => {
            const productList = [...this.state.products]
            productList.unshift(res.data)
            this.setState({ redirectToHome: true, createdProduct: res.data })
        })
    }

    handleChange = (e) => {
        const newProduct = { ...this.state.product }
        newProduct[e.target.name] = e.target.value
        this.setState({ product: newProduct })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.productCreate()
    }
    render() {
        if (this.state.redirectToHome === true) {
            return (<Redirect to={`/products/${this.state.createdProduct.id}`}></Redirect>)
        }
        return (

            <div>
                <h4>PRODUCT CREATIONS!</h4>
                <ProductForm
                    product={this.state.product}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    submitBtnText="Add a Product!"
                />
            </div>
        )
    }
}