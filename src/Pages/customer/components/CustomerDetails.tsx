import React from 'react'
import CustomerSidebar from 'layout/customer/components/CustomerSidebar'
import styled from 'styled-components';
import { Layout } from 'antd';
import { ToggleContext } from 'Hooks/useToggle';
import Sider from 'antd/lib/layout/Sider';
import { Content } from 'antd/lib/layout/layout';
import Overview from 'layout/customer/components/Overview';
import Comments from 'layout/customer/components/Comments';
import Transactions from 'layout/customer/components/Transactions';
import Mail from 'layout/customer/components/Mail';
import Statements from 'layout/customer/components/Statements';


const StyledSider = styled(Sider)`
 background-color: #fff;
 position: relative;
 top: 58px;
`;

const StyledContent = styled(Content)`
 background-color: #f6f6f6;
`;

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

const CustomerDetails = () => {
     const [current, setCurrent] = React.useState('overview');

     const { value: collapsed, toggleHandle } = React.useContext(ToggleContext);

     const handleClicked = (event: any) => {
          console.log('click', event);
          setCurrent(event.key);
     };

     return (
          <>
               <StyledContent>
                    {
                         (current === 'overview' ||
                              current === 'transaction' ||
                              current === 'history') && <>{tabs({ currents: current })}</>}
               </StyledContent>
               <StyledSider width={collapsed ? "1100px" : "0px"}>
                    <CustomerSidebar handleClicked={handleClicked} current={current} />
               </StyledSider>
          </>
     )
}

export default CustomerDetails