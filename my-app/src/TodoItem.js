import React, {Component } from 'react';
import PropTypes from 'prop-types';
class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.itemDel = this.itemDel.bind(this);
        // 节约性能
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.content !== this.props.content){
            return true;
        }else{
            return false;
        }
    }

    render() {
        const {item1} = this.props;
        return <div onClick={this.itemDel}>{item1}</div>
    }
    itemDel(){
        // 解构赋值
        const { itemDel ,index } = this.props;
        itemDel(index);
        // console.log(this.props.index);
    }
}

TodoItem.propTypes = {
    item1: PropTypes.string
}
export default TodoItem;