import React, { Component } from "react";
import { connect } from "react-redux";

import "./SAdminUserLayout.css";

class SAdminUserLayout extends Component {
  render() {
    const { isMenuOpen } = this.props;

    return (
      <>
        <div
          className={"container" + (isMenuOpen ? " user-panel" : " force-left")}
        >
          {this.props.children}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isMenuOpen: state.slideMenuReducer.isMenuOpen,
  };
};

const connectedSAdminUserLayout = connect(mapStateToProps)(SAdminUserLayout);

export { connectedSAdminUserLayout as SAdminUserLayout };
