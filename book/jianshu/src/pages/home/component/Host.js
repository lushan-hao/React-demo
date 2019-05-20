import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HostWrapper, HostItem } from './../style';

class Host extends Component {
  render() {
		return (
			<HostWrapper>
				{
					this.props.list.map((item) => {
						return <HostItem imgUrl={item.get('imgUrl')} key={item.get('id')}/>
					})
				}
			</HostWrapper>
		)
	}
}

const mapState = (state) => ({
	list: state.getIn(['home', 'HostList'])
})

export default connect(mapState, null)(Host);