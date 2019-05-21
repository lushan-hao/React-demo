import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { HostWrapper, HostItem } from './../style';
import { message} from 'antd';

class Host extends PureComponent {
  render() {
	const info = () => {
		message.info('别去那个页面了，很尴尬');
	  };
		return (
			<HostWrapper>
				{
					this.props.list.map((item) => {
						return <HostItem onClick={info} imgUrl={item.get('imgUrl')} key={item.get('id')}/>
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