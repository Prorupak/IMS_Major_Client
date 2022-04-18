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



// const menu = (
//      <Menu>
//           <Menu.Item key="0">
//                <Link to="#">Email Customer</Link>
//           </Menu.Item>
//           <Menu.Divider />
//           <Menu.Item key="3">Mark as Inactive</Menu.Item>
//           <Menu.Item key="3">Delete</Menu.Item>
//      </Menu>
// );

// const newTrans = (
//      <Menu>
//           <StyledAntdItemGroup title="SALES">
//                <Link to="#">
//                     <Menu.Item key="0">Customer Payment</Menu.Item>
//                </Link>
//                <Link to="#">
//                     <Menu.Item key="0">Sales Order</Menu.Item>
//                </Link>
//                <Link to="#">
//                     <Menu.Item key="0">Package</Menu.Item>
//                </Link>
//           </StyledAntdItemGroup>
//      </Menu>
// );

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

const StyledLayout = styled(Layout) <{ collapsed?: boolean }>`
    background-color: #fff;
     border-left: 1px solid #eee;
`;


const CustomerSidebar: React.FC<TCus> = ({ handleClicked, current }) => {
     const { value: collapsed, toggleHandle } = React.useContext(ToggleContext);
     const { Customer: customer, loading } = React.useContext(CustomerData);
     const navigate = useNavigate();



     return (
          <StyledLayout>
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