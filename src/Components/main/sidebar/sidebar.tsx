import { motion } from 'framer-motion';
import useToggle, { ToggleContext } from 'Hooks/useToggle';
import React from 'react';
import Icon from 'Assets/Icons/Icon';
import Sider from 'antd/lib/layout/Sider';

import styled from 'styled-components';
import Footer from './Footer';
import Logo from './logo';
import { Layout, Menu } from 'antd';

const { SubMenu } = Menu;


const Grid = styled(motion.div).attrs({})<{ toggle: boolean }>`
  /* position: relative; */
  display: grid;

  grid-template-areas:
    'header'
    'main'
    'footer';
  grid-template-rows: 3.625rem auto 50px;
  grid-template-columns: 100%;
  height: 100vh;
`;

const Header = styled.div`
  grid-area: header;
  display: grid;
  place-content: center;
  background-color: #fff;
  color: #000;
`;

const Main = styled.div`
  grid-area: main;
  color: aliceblue;
`;

const FooterGrid = styled.div`
  grid-area: footer;
  position: sticky;
  display: grid;
  place-content: center;
  bottom: 0;
  color: #000;
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: #1d2c38;
  }
`;

interface Props {
  toggle: boolean;
  toggleHandle: (action: any) => void;
}


const Sidebar: React.FC<Props> = ({ toggle, toggleHandle }) => {
  // const { toggle, toggleHandle } = React.useContext(ToggleContext)
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={toggle} onCollapse={toggleHandle}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" >
            Option 1
          </Menu.Item>
          <Menu.Item key="2" >
            Option 2
          </Menu.Item>
          <SubMenu key="sub1" title="User">
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title="Team">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={Icon.Documents}>
            Files
          </Menu.Item>
        </Menu>
      </Sider>
    </Layout>
  );
};

export default Sidebar;

