import React, { Component } from 'react';
import dotenv from 'dotenv'

dotenv.config()

class Map extends Component {
    constructor(props) {
        super(props);
        this.scriptLoad = this.scriptLoad.bind(this)
    }

  scriptLoad() {
    const map = new window.google.maps.Map(
      document.getElementById(this.props.id),
      this.props.options);
    this.props.onMapLoad(map)
  }

  componentDidMount() {
    if (!window.google) {
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = `https://maps.google.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP_API_KEY}`;
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
      s.addEventListener('load', e => {
        this.scriptLoad()
      })
    } else {
      this.scriptLoad()
    }
  }

  render() {
    return (
        <div>
      <div style={{ width: 500, height: 500 }} id={this.props.id}> </div>
      </div>
    );
  }
}

export default Map