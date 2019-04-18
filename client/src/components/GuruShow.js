import React, {Component} from 'react'
import axios from 'axios';

export default class GuruShow extends Component {
    state={
guru: {
    name: "",
    brief_description: "",
    location: "",
    image_url: "",
    skill_set: ""
}
    }

    // componentDidMount() {
    //     const guruId = this.props.match.params.guruId
    //     this.getGuru(guruId)
    // }

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
I'm a show
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