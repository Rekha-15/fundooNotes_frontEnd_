import React from "react";
import Navbar from "../navbar/navbar";
import Sidebar from "../sideBar/sidebar";
import Notes from "../createNote/createNotes";
import UserNoteServices from "../../Services/NotesServices";

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

  // componentWillMount = () => {
  //   UserNoteServices.getAllNotes((res) => {
  //     this.setState({
  //       allNotes: res.data.data.data.reverse(),
  //     });
  //   });
  // }

  onclickdrawer = (value) => {
    if (value === "Notes") {
      this.setState({
        reminderNote: "ab",
        trashNote: false,
        archiveNote: false,
        condition: true,
      });
    } else if (value === "Trash") {
      this.setState({
        reminderNote: "ab",
        trashNote: true,
        archiveNote: false,
        condition: false,
      });
    } else if (value === "Archive") {
      this.setState({
        reminderNote: "ab",
        archiveNote: true,
        trashNote: false,
        condition: false,
      });
    } else if (value === "Edit labels") {
      this.setState({ lable: true }); 
    } else if (value === "Reminders") {
      this.setState({
        reminderNote: null,
        archiveNote: false,
        condition: false,
        trashNote: false,
      });
    } 
    // else {
    //   UserNoteServices.getNotesListByLabels(value, (res) => {
    //     this.setState({
    //       allNotes: res.data.data.data,
    //       condition: false,
    //       reminderNote: "ab",
    //     });
    //   });
    // }
  };


  render() {
    return (
      <>
        {this.state.condition === true ? (
          <Notes
            note={this.componentWillMount}
            allLabls={this.state.allLabls}
            update={this.componentWillMount}
          ></Notes>
        ) : (
          ""
        )}
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
          update={this.componentWillMount}
          searchValue={this.searchValue}
          imageUrl={this.state.profileImage}
          changeView={this.changeView}
        ></Navbar>
      </>
    );
  }
};



export default Dashboard;