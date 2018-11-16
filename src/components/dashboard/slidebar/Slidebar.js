import React from "react";
import Sidebar from "react-sidebar";
import SlidebarContent from './SlidebarContent'
class Slidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState(() =>({ sidebarOpen: open }));
  }

  render() {
    return (
      <Sidebar
        sidebar={<SlidebarContent/>}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "white" } }}
        pullRight={true}
        // docked={true}
      >
        <button onClick={() => this.onSetSidebarOpen(true)}>
          Open sidebar
        </button>


      </Sidebar>
    );
  }
}

export default Slidebar;
