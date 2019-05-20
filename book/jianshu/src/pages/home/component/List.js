import React, { Component } from "react";
import { ListItem, ListInfo, LoadMore } from '../style';
import { connect } from 'react-redux';

class List extends Component {
  render() {
    const { list } = this.props;
		return (
			<div>
				{
					list.map((item, index) => {
						return (
								<ListItem  key={index}>
									<img alt='' className='pic' src={item.get('imgUrl')} />
									<ListInfo>
										<h3 className='title'>{item.get('title')}</h3>
										<p className='desc'>{item.get('desc')}</p>
									</ListInfo>
								</ListItem>
						);
					})
				}
			</div>
		)
  }
}

const mapState = (state) => ({
	list: state.getIn(['home', 'hotList']),
	// page: state.getIn(['home', 'hotPage'])
});

const mapDispatch = (dispatch) => ({
	// getMoreList(page) {
	// 	dispatch(actionCreators.getMoreList(page))
	// }
})

export default connect(mapState, mapDispatch)(List);