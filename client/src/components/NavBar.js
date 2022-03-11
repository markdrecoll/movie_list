import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

const { SubMenu } = Menu;

class NavBar extends React.Component{
  render(){
    return (
        <>
            <Menu theme="dark" mode="horizontal">
                <Menu.Item key="0">
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="1">
                    <Link to="/popularmovies">Random Popular Movies</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/movielogger">Movie Logs</Link>
                </Menu.Item>
            </Menu>
        </>
    );
  }
}

export default NavBar;
