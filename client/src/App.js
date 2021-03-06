import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import SupplierIndex from "./components/SupplierIndex.js"
import SupplierShow from "./components/SupplierShow.js"
import GuruIndex from './components/GuruIndex.js'
import GuruCreate from './components/GuruCreate'
import GuruShow from './components/GuruShow.js'
import ProductIndex from './components/ProductIndex.js'
import styled from 'styled-components'
import ProductShow from './components/ProductShow.js'
import ProductCreate from './components/ProductCreate.js'
import GuruEdit from './components/GuruEdit.js'
import SupplierEdit from './components/EditSupplier.js'
import ProductEdit from './components/ProductEdit.js'
import AddMap from './components/AddMap.js'


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
            <h4>Know any local gurus-- anyone who has savant skill in a particular field? You can also tell others where you can find them!</h4>
            <h4>Know any great suppliers with great products? Share them also. </h4>
          </div>
          <Nav>
            <div>
              <StyledLink to='/suppliers'>All Suppliers</StyledLink>
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
            {/* index, with supplier also being create */}
            <Route exact path="/suppliers/" component={SupplierIndex} />
            <Route exact path='/products' component={ProductIndex} />
            <Route exact path="/gurus" component={GuruIndex} />
            {/* create */}
            <Route exact path="/guruCreate" component={GuruCreate} />
            <Route exact path='/productCreate' component={ProductCreate} />
            <Route exact path='/addMap' component={AddMap}/>
            {/* show */}
            <Route exact path='/gurus/:guruId' component={GuruShow} />
            <Route exact path='/products/:productId' component={ProductShow} />
            <Route exact path="/suppliers/:supplierId" component={SupplierShow} />
            {/* edit */}
            <Route exact path='/gurus/:guruId/edit' component={GuruEdit} />
            <Route exact path='/suppliers/:supplierId/edit' component={SupplierEdit} />
            <Route exact path='/products/:productId/edit' component={ProductEdit} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
