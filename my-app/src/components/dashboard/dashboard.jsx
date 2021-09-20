import React from "react";
import Navbar from "../navbar/navbar";
import Sidebar from "../sideBar/sidebar";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: null,
      drawerOpen: false,
      allLabls: [],
      lable: false,
      profileImage: "",
    };
  }

  handleDrawerOpen = () => {
    this.setState({
      drawerOpen: true,
    });
  };

  handleDrawerClose = () => {
    this.setState({
      drawerOpen: false,
    });
  };

    render() {
    return (
      <>
        <Sidebar
          menuOpen={this.handleDrawerOpen}
          menuClose={this.handleDrawerClose}
          drawerOpen={this.state.drawerOpen}
          drawerclick={this.onclickdrawer}
          allLabls={this.state.allLabls}
        ></Sidebar>
        <Navbar
          details={this.state.item}
          menuOpen={this.handleDrawerOpen}
          imageUrl={this.state.profileImage}
          changeView={this.changeView}
        ></Navbar>
      </>
    );
  }
}


export default Dashboard;