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
            console.log(error, 'error at getProduct on ProductCREATE')
        }
    }

    productCreate = () => {
        const productId = this.props.match.params.productId
        axios.post(`/api/v1/products/${productId}`, {
            product: this.state.product
        }).then(res => {
            const productList = [...this.state.products]
            productList.unshift(res.data)
            this.setState({ redirectToHome: true, product: res.data })
        })
    }

    createProduct = async () => {
        try {
            const productId = this.props.match.params.id
            const res = await axios.post(`/api/v1/products/${productId}/`, this.state.product)
            const productList = [...this.state.products]
            productList.unshift(res.data)
            this.setState({
                products: productList,
                product: {
                    id: res.data.id,
                    name: res.data.name,
                    picture_url: res.data.picture_url,
                    description: res.data.description,
                    supplier: res.data.supplier
                },
                redirectToHome: true,
                createdProduct: res.data
            })
        }
        catch (error) {
            console.log(error, 'mistake at createproduct on ProductCreate')
        }
        // axios.post(`/api/v1/products/`, this.state.product).then((res) => {
        //     const productList = [...this.state.products]
        //     productList.unshift(res.data)
        //     this.setState({ createdProduct: res.data, redirectToHome: true })
        // })
    }

    handleChange = (e) => {
        const newProduct = { ...this.state.product }
        newProduct[e.target.name] = e.target.value
        this.setState({ product: newProduct })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // this.createProduct()
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