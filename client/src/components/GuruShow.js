import React, {Component} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

export default class GuruShow extends Component {
    state={
guru: {
    guruId: '',
    name: "",
    brief_description: "",
    location: "",
    image_url: "",
    skill_set: ""
}
    }

    componentDidMount() {
        const guruId = this.props.match.params.guruId
        this.getGuru(guruId)
    }

    getGuru = async (guruId) => {
        try {
            const res = await axios.get(`/api/v1/gurus/${guruId}/`)
            this.setState({
                guru: res.data
            })
        }
        catch(error){
            console.log(error, 'error from getGuru on GuruShow')
        }
    }

render() {
    return (
        <div>
<button> <Link to={`/gurus/${this.state.guru.id}/edit`}> Edit </Link>  </button>
<div key={this.state.guru.id}>

<div>Name: {this.state.guru.name}</div>
<div>Location: {this.state.guru.location}</div>
<div>Description: {this.state.guru.brief_description}</div>
<div>Picture: {this.state.guru.image_url}</div>
<div>SkillSet: {this.state.guru.skill_set}</div>

</div>
        </div>
    )
}

    

}

// componentDidMount = () => {
//     if (this.props.match.params) {
//         axios.get(`api/v1/gurus/${this.props.match.params.guruId}`)
//         .then(res => {
//             this.setState({
//                 guru: {
//                     name: res.data.name,
//                     brief_description: res.data.brief_description,
//                     location: res.data.location,
//                     image_url: res.data.image_url,
//                     skill_set: res.data.skill_set
//                 }
//             })
//         })
//     }
// }