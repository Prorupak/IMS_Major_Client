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

const { Sider, Content, Header } = Layout;

const StyledLayout = styled(Layout) <{ collapsed?: boolean }>`
 background-color: #f6f6f6;
 height: 100%;
 
`;

const StyledSubLayout = styled(Layout)`
 background-color: #fff;
`;

const StyledHeader = styled(Header)`
 background-color: #fff;
 padding: 0px;
 height: 0px;
`;

type TCustomer = {
     children: React.ReactNode;
};






const Customer: React.FC<TCustomer> = ({ children }) => {
     const { Customer: customer, loading } = React.useContext(CustomerData);


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
                                   <StyledHeader>
                                        <CustomerHeader />
                                   </StyledHeader>
                                   <StyledSubLayout>

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
