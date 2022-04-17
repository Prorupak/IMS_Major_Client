import React from 'react'
import styled from 'styled-components'
import { Button, Descriptions, Menu as Menu, Divider, PageHeader, Layout, Dropdown } from 'antd';
import {
     MenuOutlined,
     PlusOutlined,
     LinkOutlined,
     CaretDownOutlined
} from '@ant-design/icons';
import PageTips from 'Components/shared/PageTips';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router';
import { CustomerContext } from 'context/CustomerContext';
import { ICustomer } from 'Interfaces/Interfaces';
import Tooltip from '@mui/material/Tooltip';

const { Sider, Content, Header, Footer } = Layout

const StyledLayout = styled(Layout)`
     background-color: #f6f6f6;
     height: 100%;

`

const StyledSubLayout = styled(Layout)` 
     background-color: #fff;
`

const StyledSider = styled(Sider)`
     background-color: #fff;
     position: relative;
    top: 58px;
`

const StyledContent = styled(Content)`
     background-color: #f6f6f6;
`

const StyledHeader = styled(Header)`
     background-color: #fff;
     padding: 0px;
     height: 0px;
     `

type TCustomer = {
     children: React.ReactNode
}

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
                    <Menu.Item key="0">
                         Customer Payment
                    </Menu.Item>
               </Link>
               <Link to="#">
                    <Menu.Item key="0">
                         Sales Order
                    </Menu.Item>
               </Link>
               <Link to="#">
                    <Menu.Item key="0">
                         Package
                    </Menu.Item>
               </Link>
          </StyledAntdItemGroup>
     </Menu>
);

const Customer: React.FC<TCustomer> = ({ children }) => {
     const { data: customer } = React.useContext(CustomerContext)
     console.log('customer', customer)
     const navigate = useNavigate();
     return (
          <>
               {
                    customer.length > 0 ? (
                         <StyledLayout>
                              <StyledHeader>
                                   <PageHeader
                                        ghost={false}
                                        onBack={() => window.history.back()}
                                        title="Customers"
                                        style={{
                                             padding: '8px 15px',
                                             borderBottom: '1px solid rgba(0, 0, 0, 0.09)',
                                        }}
                                        extra={[
                                             <Button
                                                  size='small'
                                                  type='primary'
                                                  onClick={() => navigate('/customer/add')}
                                                  style={{
                                                       borderRadius: '5px',
                                                       marginLeft: '3px',
                                                  }}
                                                  key="3">
                                                  <PlusOutlined />
                                                  <span
                                                       style={{
                                                            marginLeft: '3px',
                                                       }}>

                                                       New
                                                  </span>
                                             </Button>,
                                             <Button
                                                  size='small'
                                                  style={{
                                                       borderRadius: '5px',
                                                       backgroundColor: '#f6f6f6',
                                                  }}

                                                  key="2">
                                                  <MenuOutlined />
                                             </Button>,
                                             <Divider
                                                  type="vertical"
                                                  style={{
                                                       height: "20px",
                                                       margin: "0px 5px",
                                                       borderLeft: "2px solid rgba(0, 0, 0, 0.1)",
                                                  }}
                                                  key="4" />,
                                             <PageTips key='5' />
                                        ]}
                                   >
                                   </PageHeader>
                              </StyledHeader>
                              <StyledSubLayout

                              >
                                   <StyledContent>{children}</StyledContent>
                                   <StyledSider width={1000}>
                                        <PageHeader
                                             className="site-page-header-responsive"
                                             onBack={() => window.history.back()}
                                             style={{
                                                  padding: '10px',
                                                  textTransform: "capitalize"
                                             }}
                                             title={customer.map((item: ICustomer) => item.customerDisplayName)}
                                             avatar={{
                                                  src: 'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png',
                                                  alt: 'avatar',
                                             }}
                                             extra={[
                                                  <Button
                                                       onClick={
                                                            () => {
                                                                 navigate(`/customer/${customer.map((item: ICustomer) => item.id)}`)
                                                            }
                                                       }
                                                       size="small"
                                                       style={{
                                                            borderRadius: "5px"
                                                       }}
                                                       key="2">Edit</Button>,
                                                  <Tooltip title="Attach Files" >
                                                       <Button
                                                            onClick={
                                                                 () => {
                                                                      navigate(`/customer/${customer.map((item: ICustomer) => item.id)}`)
                                                                 }
                                                            }
                                                            size="small"
                                                            style={{
                                                                 borderRadius: "5px"
                                                            }}
                                                            key="2">
                                                            <LinkOutlined />
                                                       </Button>
                                                  </Tooltip>,
                                                  <Dropdown overlay={newTrans} trigger={['click']}>
                                                       <Button
                                                            size='small'
                                                            type='primary'
                                                            style={{
                                                                 borderRadius: '5px',
                                                                 marginLeft: '3px',
                                                            }}
                                                            key="3">
                                                            New Transaction
                                                            <span
                                                                 style={{
                                                                      marginLeft: '3px',
                                                                 }}>
                                                                 <CaretDownOutlined size={24} />
                                                            </span>
                                                       </Button>
                                                  </Dropdown>,
                                                  <Dropdown overlay={newTrans} trigger={['click']}>
                                                       <Button
                                                            size='small'
                                                            style={{
                                                                 borderRadius: '5px',
                                                                 marginLeft: '3px',
                                                            }}
                                                            key="3">
                                                            More
                                                            <span
                                                                 style={{
                                                                      marginLeft: '3px',
                                                                 }}>
                                                                 <CaretDownOutlined size={24} />
                                                            </span>
                                                       </Button>
                                                  </Dropdown>,

                                             ]}
                                             footer={
                                                  <StyledMenuAntd
                                                       mode="horizontal"
                                                       style={{
                                                            fontSize: '13px',
                                                            lineHeight: '20px'
                                                       }}>
                                                       <Menu.Item key="overview" style={{ padding: '10px' }}>
                                                            Overview
                                                       </Menu.Item>
                                                       <Menu.Item key="comments" style={{ padding: '10px' }}>
                                                            Comments
                                                       </Menu.Item>
                                                       <Menu.Item key="transactions" style={{ padding: '10px' }}>
                                                            Transactions
                                                       </Menu.Item>
                                                       <Menu.Item key="mails" style={{ padding: '10px' }}>
                                                            Mails
                                                       </Menu.Item>
                                                       <Menu.Item key="statement" style={{ padding: '10px' }}>
                                                            Statement
                                                       </Menu.Item>
                                                  </StyledMenuAntd>
                                             }
                                        >
                                        </PageHeader>
                                   </StyledSider>
                              </StyledSubLayout>
                         </StyledLayout>
                    ) : (
                         <p>Loading.......</p>
                    )
               }

          </>
     )
}

export default Customer