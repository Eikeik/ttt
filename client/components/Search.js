import React, { Component } from 'react'
import { Label, Form, Input, Segment, Group, Table, Flag } from 'semantic-ui-react'

/* ###################### */
/* ##### Search bar ##### */
/* ###################### */

// need a component class here
// since we are using `refs`
class Search extends Component {
  render() {
    const { filterVal, filterUpdate} = this.props
    return (
      <Form>
        <Input 
          type='text'
          ref='filterInput'
          placeholder='Type to filter..'
          // binding the input value to state
          value={filterVal}
          onChange={() => {
           filterUpdate(this.refs.filterInput.value) 
          }}
        /> 
      </Form>
    )
  }
}

export default Search