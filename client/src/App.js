import React, { Component } from 'react'
import './App.css'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'
import SupplierIndex from "./components/SupplierIndex.js"
import SupplierShow from "./components/SupplierShow.js"
import GuruIndex from './components/GuruIndex.js'
import GuruCreate from './components/GuruCreate'
import GuruShow from './components/GuruShow.js'
import ProductIndex from './components/ProductIndex.js'
import styled from 'styled-components'

const StyledLink = styled(Link)`
text-decoration:none;
color:darkcyan;
`

const Nav = styled.div`
text-align:left;
`

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
<div>
  <h1>What's your favourite?!</h1>
</div>
<Nav>
  <div>
  <StyledLink to='/suppliers'>All suppliers</StyledLink>
  </div>
  <div>
  <StyledLink to='/gurus'>All Gurus</StyledLink>
  </div>
  <div>
    <StyledLink to='/products'>All Products</StyledLink>
  </div>
  <div>
  <StyledLink to='/'>Go Back Home</StyledLink>
  </div>
  {/* <Link to=''>Specific Supplier</Link> */}
</Nav>      
      <Switch>
        <Route exact path="/suppliers" component={SupplierIndex}/>
        <Route path="/suppliers/:supplierId" component={SupplierShow}/>
        <Route path="/gurus" component={GuruIndex}/>
        <Route path="/guruCreate" component={GuruCreate}/>
        <Route path='/gurus/:guruId' component={GuruShow}/>
        <Route path='/products' component={ProductIndex}/>
      </Switch>
</div>
     </Router> 
    );
  }
}

export default App;
