import React from 'react';
import styles from './index.css';
import { connect } from 'dva';

@connect(state => {
  console.log('state',state);
  return{
    name: state.todo.name,
    list:state.add.list,
    addText:state.add.addText,
    
  }
})
export default class Demo extends React.Component {
  changeName = () => {
    this.props.dispatch({
      type:'todo/changeName',
      payload:{
        name:`i'm changed!`
      }
    })
  };
 
  add = () => {
    this.props.dispatch({
      type:'add/add',
      payload:{
          id:this.props.list.length + 1,
          content:this.props.addText,
          done: this.props.false
      }
    })
  };

  
  handleOnchange = e => {
    const value=e.target.value
    this.props.dispatch({
    type:'add/setState',
    payload:{
      addText:value
    }
    })
  };


  render() {
    return (
      <div>
        <input value={this.props.addText} onChange={this.handleOnchange}  />
          <button onClick={this.add}>Add</button>

<ul>
          {this.props.list.map((item, key) => (
            <li key={key}>
              {item.id}
              {item.content}
              {item.done ? "√" : ""}
              {!item.done && (
                <button onClick={() => this.done(item.id)}>Done!</button>
              )}
             </li>
          ))}
          
 </ul>
        <h1>Hello, {this.props.name}!</h1>
        <button onClick={this.changeName}>Change Name</button>
      </div>
    );
  }
}
