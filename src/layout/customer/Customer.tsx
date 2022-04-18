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

const StyledHeader = styled.div`
position: fixed;
z-index: 999;
 background-color: #fff;
 padding: 0px;
 height: 0px;
`;

const StyledSider = styled(Sider)`
 background-color: #fff;
  position: relative;
 top: 58px;
 /* overflow: scroll; */
 /* overflow-x: hidden; */
`;

type TCustomer = {
     children: React.ReactNode;
};

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
                                                       position: "sticky"
                                                  }}
                                             >
                                        <CustomerHeader />
                                   </StyledHeader>
                                             <StyledSubLayout>
                                                  <StyledContent>
                                                       {children}
                                                  </StyledContent>
                                                  <div className=""
                                                       style={{
                                                            overflow: "scroll"
                                                       }}
                                                  >
                                                  <StyledSider width={collapsed ? "1100px" : "0px"}>
                                                       <CustomerSidebar handleClicked={handleClicked} current={current} />
                                                  </StyledSider>
                                                  </div>
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
