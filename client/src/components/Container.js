export class Container extends React.Component {
    render() {
      if (!this.props.loaded) {
        return <div>Loading...</div>
      }
      return (
        <div>Map will go here</div>
      )
    }
  }
  
  export default GoogleApiComponent({
    apiKey: AIzaSyCUNJoTLUnDB2CkBVvZIkwwdQDWnkV_TbI
  })(Container)
