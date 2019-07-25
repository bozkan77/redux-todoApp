import React,{ Component } from 'react'

class Todo extends Component {
  render() {
    return (
      <li className="collection-item">
        {this.props.text}
      </li>
    )
  }
}

export default Todo