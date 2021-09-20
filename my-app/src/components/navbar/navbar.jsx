import React from "react";
import "../compScss/compountStyle.scss"
import FormatAlignJustifyIcon from "@material-ui/icons/FormatAlignJustify";
import Logo from "../../images/googleLogo";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import "./navbar.scss"


class Navbar extends React.Component  {
    render() {
        return (
                <AppBar  className= "navbar_bgColor">
                    <Toolbar>
                        <div style={{ color: "black" }}>
                            <FormatAlignJustifyIcon
                                onClick={this.props.menuOpen}
                            ></FormatAlignJustifyIcon>
                        </div>
                        
                    </Toolbar>
                </AppBar>
        );
    }
}


export default Navbar;

