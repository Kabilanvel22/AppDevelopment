import { Layout, Menu } from "antd";
import React from 'react';
import Nav from './NavBar';
import { useState } from "react";
import { Link } from 'react-router-dom';
import '../Assests/Sidebar.css'
import {
  HomeOutlined,
  SettingOutlined,
  CheckCircleOutlined,
  UserOutlined,
  UnorderedListOutlined,
  OrderedListOutlined,
  TrademarkCircleOutlined,
  NotificationOutlined
} from "@ant-design/icons";

const { Sider } = Layout;
const { SubMenu } = Menu;

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);


  const onCollapse = (isCollapsed) => { 
    setCollapsed(!isCollapsed); 

    };
  

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={() => onCollapse(collapsed)}
      style={{ backgroundColor: "#fff" }}
      theme="light"
    >
    <div>
    
  </div>
      <div
        className="logo"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {!collapsed ? (
          <img  />
        ) : (
          <img width="25" />
        )}
      </div>
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}
      >
        <Menu defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<HomeOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            Products
          </Menu.Item>
          <Menu.Item key="3" icon={<OrderedListOutlined />}>
            Help
          </Menu.Item>
          <Menu.Item key="4" icon={<SettingOutlined />}>
          Settings
          </Menu.Item>
          <Menu.Item key="12" icon={<OrderedListOutlined />}>
           <Link to="/login" id="side">Logout</Link>
          </Menu.Item>
        </Menu>
        <Menu
          defaultSelectedKeys={["1"]}
          mode="inline"
          style={{ marginBottom: 70 }}
        >
         
        </Menu>
      </div>
      
    </Sider>
  );
}
