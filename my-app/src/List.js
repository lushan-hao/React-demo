import React, {Component} from 'react';
// import store from './store1/';
import {connect} from 'react-redux';

class List extends Component{
        // constructor(props){
        //     super(props);
        //     // this.state = store.getState();
        //     // this.valueChange = this.valueChange.bind(this);
        // }
    render() {
        return <div>
            <div>
                <input value={this.props.inputValue} onChange={this.props.valueChange}></input>
                <button onClick={this.props.addList}>提交</button>
            </div>
            <div>
                <ul>{
                    this.props.list.map((item,index) => {
                        return <li key={index}>{item}</li>
                    })
                }
                </ul>
            </div>
        </div>
    }
}


 //获取store数据
const mapStateToProps = (state) =>{
     return {
         inputValue: state.inputValue,
         list: state.list
     }
}
//修改store数据
const mapDispatchToProps = (dispatch) => {
    return {
        valueChange(e){
            const action ={
                type: 'change_input_value',
                value: e.target.value
            }
            dispatch(action);
        },
        addList(){
            const action ={
                type: 'add_value'
            }
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(List);