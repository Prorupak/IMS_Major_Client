import Sidebar from 'Components/main/sidebar/sidebar';
import useToggle from 'Hooks/useToggle';
import React from 'react';
import styled from 'styled-components';
import { Breadcrumb, Layout as Container, Menu } from 'antd';
import { AiOutlineDashboard } from 'react-icons/ai'
import { MdOutlineInventory2, MdPieChartOutlined } from 'react-icons/md'
import { CgShoppingBag } from 'react-icons/cg'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { GrDocumentPdf } from 'react-icons/gr'

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

import Navbar from '../Components/main/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router';

const { Header, Content, Footer, Sider } = Container;
const { SubMenu } = Menu;


const Logo = styled.div`

  height: 32px;
  margin: 16px;
  /* background: rgba(255, 255, 255, 0.3); */
  text-align: center;
  color: #fff;
  font-size: 20px;
  font-weight: 600;

`

const Layout = ({ children, ...rest }: any) => {
  const { toggleHandle, value } = useToggle('sidebar', false);
  const [isOpen, setIsOpen] = React.useState(false);
  let location = useLocation();
  const [current, setCurrent] = React.useState([]);


  function handleClick(e: any) {
    setCurrent(e.key);
    console.log('current', current);
  }

  const [collapsed, setCollapsed] = React.useState<any>(true);
  const [mode, setMode] = React.useState<any>(null);
  const [key, setKey] = React.useState<any>('');

  console.log(key);

  const changeMode = (value: any) => {
    console.log('value', value)
    setCollapsed(false);
    setMode(value ? 'vertical' : 'inline');
    console.log(mode)
    setKey(value.key)
  };

  const onCollapse = (collapsed: any) => {
    setCollapsed((prev: any) => {
      return typeof collapsed === 'boolean' ? collapsed : !prev;
    });
  }



  return (
    <Container style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} trigger={null}
      >
        <Logo >Logo</Logo>
        <Menu theme="dark" mode="inline" onClick={handleClick}  >
          <Menu.Item key="1" icon={<AiOutlineDashboard size={19} />}>
            Dashboard
          </Menu.Item>
          <SubMenu key="sub1" icon={<MdOutlineInventory2 size={19} />} title="Inventory" >
            <NavLink
              to="/details"
            >
              <Menu.Item key="3">Categories</Menu.Item>
            </NavLink>
            <NavLink to="/products">
              <Menu.Item key="4">Products</Menu.Item>
            </NavLink>
            <NavLink to="/adjust">
              <Menu.Item key="5">Adjust Inventory</Menu.Item>
            </NavLink>
          </SubMenu>
          <SubMenu key="sub2" icon={<CgShoppingBag size={19} />} onTitleClick={changeMode} title="Sales">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="7">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="8" icon={<FileOutlined />}>
            Files
          </Menu.Item>
        </Menu>
      </Sider>
      <Container style={{
        backgroundColor: '#fff',
      }}>
        <Header style={{
          padding: 0,
          background: '#fff',
          borderBottom: '1px solid #e8e8e8',
        }} className="site-layout-background" >
          <Navbar onCollapse={onCollapse} collapsed={collapsed} />
        </Header>
        <Content>
          {children}
        </Content>
      </Container>
    </Container >
  );
};

export default Layout;
