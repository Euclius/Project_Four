import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import GuruShow from './GuruShow';

const StyledLink = styled(Link)`
text-decoration:none;
color:darkcyan;
`

export default class GuruIndex extends Component {
    state = {
        gurus: []
    }

    componentDidMount = () => {
        this.getGuru()
    }
    
    getGuru = async () => {
        try {
            const res = await axios.get(`/api/v1/gurus/`)
            this.setState({
                gurus: res.data,
            })
        }
        catch (error) {
            console.log(error, 'error from getGuru on guru index')
        }
    }

    render() {
        return (
            <div>
                <div>Guru Index page</div>
<ul>
    {this.state.gurus.map((guru, i) => {
        return (
        <Link to={`/gurus/${guru.id}`}
        key={i}>
        <div  key={i}>
        {guru.name}
        </div>
        </Link>
        )
    }
    )
    }

</ul>
<button><StyledLink to='/guruCreate'>Know a local Guru? Add one!</StyledLink> </button>
            </div>
        )
    }
}
