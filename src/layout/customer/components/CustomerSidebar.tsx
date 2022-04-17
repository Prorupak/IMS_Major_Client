import { CustomerData } from 'context/CustomerContext';
import { ToggleContext } from 'Hooks/useToggle';
import {
     MenuOutlined,
     PlusOutlined,
     LinkOutlined,
     CaretDownOutlined,
} from "@ant-design/icons";
import { Button, Divider, Dropdown, Layout, Menu, PageHeader } from 'antd'
import { useNavigate } from 'react-router'
import React from 'react'
import { Tooltip } from '@mui/material';
import { ICustomer } from 'Interfaces/Interfaces';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Overview from './Overview';
import Comments from './Comments';
import Transactions from './Transactions';
import Mail from './Mail';
import Statements from './Statements';

const StyledMenuAntd = styled(Menu)`
 && {
  .ant-menu-horizontal {
   padding: var(--spacing-5) var(--spacing-10);
   font-size: var(--font-size-14);
   background-color: red;
  }
 }
 position: relative;
 left: -10px;
 bottom: -3px;
`;

const StyledLayout = styled(Layout) <{ collapsed?: boolean }>`
     background-color: #fff;
`;

const StyledAntdItemGroup = styled(Menu.ItemGroup)`
 font-weight: 600;
`;

const menu = (
     <Menu>
          <Menu.Item key="0">
               <Link to="#">Email Customer</Link>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="3">Mark as Inactive</Menu.Item>
          <Menu.Item key="3">Delete</Menu.Item>
     </Menu>
);

const newTrans = (
     <Menu>
          <StyledAntdItemGroup title="SALES">
               <Link to="#">
                    <Menu.Item key="0">Customer Payment</Menu.Item>
               </Link>
               <Link to="#">
                    <Menu.Item key="0">Sales Order</Menu.Item>
               </Link>
               <Link to="#">
                    <Menu.Item key="0">Package</Menu.Item>
               </Link>
          </StyledAntdItemGroup>
     </Menu>
);

type TCus = {
     handleClicked: (event?: any) => void;
     current: string
}

const tabs = ({ currents }: any) => {
     switch (currents) {
          case 'overview':
               return <Overview />;
          case 'comments':
               return <Comments />;
          case 'transactions':
               return <Transactions />;
          case 'mails':
               return <Mail />;
          case 'statement':
               return <Statements />;
          default:
               return <Overview />;
     }
};

const CustomerSidebar: React.FC<TCus> = ({ handleClicked, current }) => {
     const { value: collapsed, toggleHandle } = React.useContext(ToggleContext);
     const { Customer: customer, loading } = React.useContext(CustomerData);
     const navigate = useNavigate();



     return (
          <StyledLayout>
               <PageHeader
                    className="site-page-header-responsive"
                    onBack={toggleHandle}

                    style={{
                         padding: "10px",
                         textTransform: "capitalize",
                    }}
                    title={customer.customerDisplayName}
                    avatar={{
                         src: "https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png",
                         alt: "avatar",
                    }}
                    extra={[
                         <Button
                              onClick={() => {
                                   navigate(
                                        `/customer/${customer.id}`
                                   );
                              }}
                              size="small"
                              style={{
                                   borderRadius: "5px",
                              }}
                              key="2"
                         >
                              Edit
                         </Button>,
                         <Tooltip title="Attach Files">
                              <Button
                                   onClick={() => {
                                        navigate(
                                             `/customer/${customer.map((item: ICustomer) => item.id)}`
                                        );
                                   }}
                                   size="small"
                                   style={{
                                        borderRadius: "5px",
                                   }}
                                   key="2"
                              >
                                   <LinkOutlined />
                              </Button>
                         </Tooltip>,
                         <Dropdown overlay={newTrans} trigger={["click"]}>
                              <Button
                                   size="small"
                                   type="primary"
                                   style={{
                                        borderRadius: "5px",
                                        marginLeft: "3px",
                                   }}
                                   key="3"
                              >
                                   New Transaction
                                   <span
                                        style={{
                                             marginLeft: "3px",
                                        }}
                                   >
                                        <CaretDownOutlined size={24} />
                                   </span>
                              </Button>
                         </Dropdown>,
                         <Dropdown overlay={menu} trigger={["click"]}>
                              <Button
                                   size="small"
                                   style={{
                                        borderRadius: "5px",
                                        marginLeft: "3px",
                                   }}
                                   key="3"
                              >
                                   More
                                   <span
                                        style={{
                                             marginLeft: "3px",
                                        }}
                                   >
                                        <CaretDownOutlined size={24} />
                                   </span>
                              </Button>
                         </Dropdown>,
                    ]}
                    footer={
                         <StyledMenuAntd
                              mode="horizontal"
                              onClick={handleClicked}
                              selectedKeys={[current]}
                              style={{
                                   fontSize: "13px",
                                   lineHeight: "20px",
                              }}
                         >
                              <Menu.Item key="overview" style={{ padding: "10px" }}>
                                   Overview
                              </Menu.Item>
                              <Menu.Item key="comments" style={{ padding: "10px" }}>
                                   Comments
                              </Menu.Item>
                              <Menu.Item key="transactions" style={{ padding: "10px" }}>
                                   Transactions
                              </Menu.Item>
                              <Menu.Item key="mails" style={{ padding: "10px" }}>
                                   Mails
                              </Menu.Item>
                              <Menu.Item key="statement" style={{ padding: "10px" }}>
                                   Statement
                              </Menu.Item>
                         </StyledMenuAntd>
                    }
               ></PageHeader>
               <StyledLayout>
                    {
                         (current === 'overview' ||
                              current === 'comments' ||
                              current === 'transactions' ||
                              current === 'mails' ||
                              current === 'statement'

                         ) && <>{tabs({ currents: current })}</>}
               </StyledLayout>
          </StyledLayout>
     )
}

export default CustomerSidebar