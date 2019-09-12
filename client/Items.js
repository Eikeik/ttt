import React, { Component } from "react";
import Item from "./item";
 
class Items extends Component {
  state = {
    items: [{ id: 1, value: 0 }, { id: 2, value: 10 }, { id: 3, value: 0 }]
  };
 
  handleDelete = itemId => {
    const items = this.state.items.filter(item => item.id !== itemId);
    this.setState({ items: items });
  };
 
  render() {
    return (
      <React.Fragment>
        {this.state.items.map(item => (
          <Item 
          key={item.id} 
          onDelete={this.handleDelete} 
          item={item} 
          />
        ))}
      </React.Fragment>
    );
  }
}
 
export default Items;