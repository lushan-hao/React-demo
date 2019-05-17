import React, { Component, Fragment } from "react";
import TodoItem from './TodoItem';
import axios from 'axios';
import './style.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      list: []
    };
    this.buttonChange = this.buttonChange.bind(this);
    this.inputChange = this.inputChange.bind(this);
    this.itemDel = this.itemDel.bind(this);

  }
  render() {
    return (
      <Fragment>
        <div>
          <input className="input" value={this.state.inputValue} onChange={this.inputChange}/>
          {/* 因为函数里this指向时undefined，所以用bind改变this指向 */}
          <button onClick={this.buttonChange}>提交</button>
        </div>
        <ul>
            {this.getTodoItem()}
        </ul>
      </Fragment>
    );
  }

  componentDidMount(){
    axios.get('/api/todolist').then((res)=>{
      this.setState(()=>{
        return {
          list: [...res.data]
        }
      })
    }).catch(()=>{
      alert("error");
    })
  }

  getTodoItem(){
    return (
      this.state.list.map((item,index)=>{
        return (
                /* <li key={index} onClick={this.itemDel.bind(this,index)}>{item}</li> */
                <TodoItem key={index} itemDel={this.itemDel} index={index} item1={item}/>
                /* 父组件给子组件传值,通过属性进行传递，子组件接收内容用this.props.属性名，进行接收值 */
        )
    })
    )
  }

  inputChange(e){
    const value = e.target.value;
    this.setState(() => ({inputValue: value}));
    // console.log(e.target.value)
  }

  buttonChange(e){
    this.setState((prevState) => ({
      list: [...prevState.list,prevState.inputValue],
         inputValue: ''
    }));
  }

  itemDel(index){
    //immutable state不允许我们改变，不然后面性能优化有问题，所以定义一个副本list
      const list= [...this.state.list];
    //   拷贝
    list.splice(index,1); 
    this.setState(() =>({list}));
  }
}

export default TodoList;
