import React from 'react';
import Nav from './Nav';
import {items} from './static-data';
import ItemPage from './ItemPage';
import CartPage from './CartPage';

import './App.css';

class App extends React.Component {

  state = {
    activeTab: 1,
    cart: []
  }

  handleTabChange = (index) => {
    this.setState({
      activeTab: index
    })
  }

  handleAddToCart = (item) => {
    this.setState({
      cart: [...this.state.cart, item.id]
    });
  }

  handleRemoveOne = (item) => {
    let index = this.state.cart.indexOf(item.id);
    this.setState({
      cart: [
        ...this.state.cart.slice(0, index), 
        ...this.state.cart.slice(index + 1)
      ]
    });
  }

  computeCartItems() {
    // count how many of eact item in the cart
    const itemCounts = this.state.cart.reduce( (itemCounts, itemId) => {
      itemCounts[itemId] = itemCounts[itemId] || 0;
      itemCounts[itemId]++;
      return itemCounts;

    }, {}
    );

    // create new array of items with count added
    return Object.keys(itemCounts).map(itemId => {

      // find the item by its id
      const item = items.find(item => 
        item.id === parseInt(itemId, 10)
      );

      // create item and add count property
      return {
        ...item,
        count: itemCounts[itemId]
      }
    });
  }

  renderCart() {
    return(
      <CartPage 
        items={this.computeCartItems()} 
        onAddOne={this.handleAddToCart} 
        onRemoveOne={this.handleRemoveOne} />
    );
  }

  renderContent() {
    switch(this.state.activeTab) {
      case 0: return 'Homepage';
      case 1: return <ItemPage items={items} onAddToCart={this.handleAddToCart} />;
      case 2: return this.renderCart();
    }
  }

  render() {
    let { activeTab } = this.state;
    return (
      <div className="App">
        <Nav 
          items={this.computeCartItems()}
          activeTab={activeTab}
          onTabChange={this.handleTabChange} />
        <main className="App-content">
          {this.renderContent()}
        </main>
      </div>
    );
  }

}

export default App;