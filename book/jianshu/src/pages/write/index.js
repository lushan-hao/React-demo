import React, { PureComponent } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Writeb ,WriteT} from "./style";

class Write extends PureComponent {
  render() {
    const { loginStatus } = this.props;
    if (loginStatus) {
      return (
        <div>
          <Writeb>
            <WriteT>暂未开发</WriteT>
          </Writeb>
        </div>
      );
    } else {
      return <Redirect to="/login" />;
    }
  }
}

const mapState = state => ({
  loginStatus: state.getIn(["login", "login"])
});

export default connect(
  mapState,
  null
)(Write);
