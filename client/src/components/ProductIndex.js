import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Product extends Component {
    state = {
        products: [],
        product: {
            name: '',
            description: '',
            picture_url: '',
            supplier: ''
        },
        supplier: {
            title: ''
        }
    }

    componentDidMount = () => {
        const productId = this.props.match.params.id
        this.getProducts(productId)
    }

    getProducts = async () => {
        try {
            const res = await axios.get(`/api/v1/products`)
            this.setState({
                products: res.data,
                supplier: {
                    title:res.data.title
                }
            })
        }
        catch (error) {
            console.log(error, 'error from getProducts on Product Index')
        }
    }

    render() {

        return (

            <div>
                <div>Product Index Page</div>
                {
                    this.state.products.map((product) => {
                        return (
                            <Link to={`/products/${product._id}`}
                                key={product._id}>
                                <div>
                                    <h4>{product.title}</h4>
                                    <h4>{product.picture_url}</h4>
                                    <h4>{product.description}</h4>
                                    <h4>{product.supplier}</h4>
                                </div>
                            </Link>
                        )

                    }
                    )
                }

            </div>
        )
    }
}