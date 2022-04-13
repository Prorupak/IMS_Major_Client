import Sidebar from 'Components/main/sidebar/sidebar';
import useToggle from 'Hooks/useToggle';
import React from 'react';
import styled from 'styled-components';
import Sider from 'antd/lib/layout/Sider';
import { Layout as Lay, Menu } from 'antd';

import Navbar from '../Components/main/Navbar/Navbar';

const { SubMenu } = Menu;
const Grid = styled.div<{ toggle: any }>`
  position: relative;
  z-index: 999;
  display: grid;
  grid-template-areas:
    'sidebar nav'
    'sidebar content';
  /* grid-template:
    [row-1-start] min-content
    [row-1-end row-2-start] 1fr
    [row-end]/ min-content 1fr; */
  grid-template-columns:
    ${({ toggle }) => (toggle ? '50px' : '230px')}
    auto;
  grid-template-rows: auto auto;
  /* grid-template: 'nav header' min-content 'nav main' 1fr / min-content 1fr; */
  transition: all 0.2s ease;
`;

const GridNav = styled.div`
  grid-area: sidebar;
  color: #fff;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: var(--color-sidebar);

    /* background-color: #345b63; */
  }
`;

const GridHeader = styled.header`
  grid-area: nav;
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
`;

const GridMain = styled.main`
  grid-area: content;
  color: #000;
  background-color: #fff;
`;

const Layout = ({ children, ...rest }: any) => {
  const { toggleHandle, value } = useToggle('sidebar', false);
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => {
    return setIsOpen(!isOpen);
  };

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Grid {...rest} toggle={value}>
      <GridNav>
        <Lay style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={value} onCollapse={toggleHandle}>
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
              <Menu.Item key="9" >
                Files
              </Menu.Item>
            </Menu>
          </Sider>
        </Lay>      </GridNav>
      <GridHeader>
        <Navbar toggle={value} />
      </GridHeader>
      <GridMain>{children}</GridMain>
    </Grid>
  );
};

export default Layout;
