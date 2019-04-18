import React, {Component} from 'react'

export class Checkbox extends Component {

    static defaultProps = {
      checked: false
    }
  
    state = {
      checked: this.props.checked
    }
  
     handleChange = () => {
        this.setState({checked: !this.state.checked})
     }
  
    render () {
  
      return (
        <span>
          <input type="checkbox"
                 defaultChecked={this.state.checked} 
                 onChange={this.handleChange}  
                 id={this.props.id} 
                 name="True" /> "{this.props.label}"
        </span>
      );
    }
  }