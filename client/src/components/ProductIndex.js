import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class ProductIndex extends Component {
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
            const res = await axios.get(`/api/v1/products/`)
            this.setState({
                products: res.data,
                supplier: {
                    title: res.data.title
                }
            })
        }
        catch (error) {
        }
    }

    render() {

        return (

            <div>
                <div>Product Index Page</div>
                {
                    this.state.products.map((product, i) => {
                        return (
                            <Link to={`/products/${product.id}`}
                                key={i}>
                                <div key={i}>
                                    <h4>{product.name}</h4>
                                </div>
                            </Link>
                        )

                    }
                    )
                }
                <button><Link to='/productCreate'>Add a Product</Link></button>
            </div>
        )
    }
}