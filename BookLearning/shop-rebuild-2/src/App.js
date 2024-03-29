import React from 'react';
import Nav from './Nav';
import ItemPage from './ItemPage';
import {items} from './static-data';
import CartPage from './CartPage';

class App extends React.Component {

  state = {
    activeTab: 0,
    cart: []
  };

  handleTabChange = (index) => {
    this.setState({
      activeTab: index
    });
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
    // Count how many of each item in the cart
    const itemCounts = this.state.cart.reduce((itemCounts, itemId) => {
      itemCounts[itemId] = itemCounts[itemId] || 0;
      itemCounts[itemId]++;
      return itemCounts;
    }, {});

    // Create an array of items 
    return Object.keys(itemCounts).map(itemId => {
      // find the item by its id
      var item = items.find(item => 
        item.id === parseInt(itemId, 10)
      );

      // create a new 'item' and add the 'count' property
      return {
        ...item,
        count: itemCounts[itemId]
      }
    });

  }

  renderCart() {
    return (
      <CartPage 
        items={this.computeCartItems()}
        onAddOne={this.handleAddToCart}
        onRemoveOne={this.handleRemoveOne} />
    );
  }

  renderContent() {
    switch(this.state.activeTab) {
      default:
      case 0: return <ItemPage items={items} onAddToCart={this.handleAddToCart} />;
      case 1: return this.renderCart();
    }
  }

  render() {
    let {activeTab} = this.state;
    return (
      <div className="App">
        <Nav 
          activeTab={activeTab} 
          onTabChange={this.handleTabChange}
          items={this.computeCartItems()} />
        <main className="App-content">
        <div> {this.state.cart.length} items </div>
          {this.renderContent()}
        </main>
      </div>
    )
  }
}

export default App;