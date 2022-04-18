import React from "react";
import styled from "styled-components";
import {
     Button,
     Descriptions,
     Menu as Menu,
     Divider,
     PageHeader,
     Layout,
     Dropdown,
     Spin,
} from "antd";
import {
     MenuOutlined,
     PlusOutlined,
     LinkOutlined,
     CaretDownOutlined,
} from "@ant-design/icons";
import PageTips from "Components/shared/PageTips";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { CustomerData } from "context/CustomerContext";
import { ICustomer } from "Interfaces/Interfaces";
import Tooltip from "@mui/material/Tooltip";
import { ToggleContext } from "Hooks/useToggle";
import CustomerHeader from "layout/customer/components/CustomerHeader";
import CustomerSidebar from "./components/CustomerSidebar";
import CustomerDetails from "Pages/customer/components/CustomerDetails";
import Overview from "./components/Overview";
import Comments from "./components/Comments";
import Transactions from "./components/Transactions";
import Mail from "./components/Mail";
import Statements from "./components/Statements";

const { Sider, Content, Header } = Layout;

const StyledLayout = styled(Layout) <{ collapsed?: boolean }>`
 background-color: #f6f6f6;
 height: 100%;
 
`;

const StyledSubLayout = styled(Layout)`
 background-color: #fff;
`;


const StyledContent = styled(Content)`
 background-color: #fff;
 position: sticky;

`;

const StyledHeader = styled(Header)`
position: relative;
z-index: 1;
 background-color: #fff;
 padding: 0px;
 height: 0px;
`;

const StyledSider = styled(Sider)`
 background-color: #fff;
  position: relative;
 top: 58px;
`;

type TCustomer = {
     children: React.ReactNode;
};

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


const StyledAntdItemGroup = styled(Menu.ItemGroup)`
 font-weight: 600;
`;

const Customer: React.FC<TCustomer> = ({ children }) => {
     const { Customer: customer, loading } = React.useContext(CustomerData);
     const { value: collapsed, toggleHandle } = React.useContext(ToggleContext);


     const [current, setCurrent] = React.useState('overview');

     const handleClicked = (event: any) => {
          console.log('click', event);
          setCurrent(event.key);
     };

     console.log("customer", customer);
     const navigate = useNavigate();

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

     return (
          <>
               {loading ? (
                    <Spin />
               ) : customer ? (
                    <StyledLayout>
                         {loading ? (
                              <div>Loading...</div>
                         ) : (
                              <>
                                             <StyledHeader
                                                  style={{
                                                       position: "sticky",
                                                       top: 0,
                                                       zIndex: 999,
                                                  }}
                                             >
                                        <CustomerHeader />
                                   </StyledHeader>
                                             <StyledSubLayout style={{
                                                  // display: "initial",
                                                  position: "relative",
                                                  overflow: "scroll",
                                             }}>
                                                  <StyledContent style={{
                                                       position: "sticky",
                                                       top: 0,
                                                  }}>
                                                       {children}
                                                  </StyledContent>
                                                  <StyledSider width={collapsed ? "1100px" : "0px"}>     
                                                       <div style={{
                                                            display: "initial",
                                                            position: "sticky",
                                                            top: 0,
                                                       }}>
                                                            <PageHeader
                                                                 className="site-page-header-responsive"
                                                                 onBack={toggleHandle}

                                                                 style={{
                                                                      padding: "10px 10px 0px 10px",
                                                                      textTransform: "capitalize",
                                                                      position: "sticky",
                                                                      top: 0
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
                                                       </div>
                                                       <CustomerSidebar handleClicked={handleClicked} current={current} />
                                                  </StyledSider>
                                   </StyledSubLayout>
                              </>
                         )}
                    </StyledLayout>
               ) : (
                    <p>Loading.......</p>
               )}
          </>
     );
};

export default Customer;
