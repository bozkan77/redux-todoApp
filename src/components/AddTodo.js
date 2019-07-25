import React, {Component} from 'react';

class AddTodo extends Component {

  render(){
    return(
      <div className="" >
        <input type='text' ref='textinput' />
        <a className='btn-floaring btn-large red' onClick={(e)=> this.handleClick(e)}>
          Ekle
        </a>
      </div>
    )
  };

  handleClick(e){
    const node=this.refs.textinput
    const text=node.value.trim()
    this.props.onAddClick(text)
    node.value=''
  }
}

export default AddTodo;