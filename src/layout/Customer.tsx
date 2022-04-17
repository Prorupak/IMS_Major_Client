import React from 'react'
import { Button, Divider, Layout, PageHeader } from 'antd'
import styled from 'styled-components'
import {
     MenuOutlined,
     PlusOutlined
} from '@ant-design/icons';
import PageTips from 'Components/shared/PageTips';

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

const Customer: React.FC<TCustomer> = ({ children }) => {
     return (
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
                              </Button>, ,
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
                              title={product.name}
                              avatar={{
                                   src: 'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png',
                                   alt: 'avatar',
                              }}
                              extra={[
                                   <Button
                                        onClick={
                                             () => {
                                                  navigate(`/product/${product.id}`, { state: { lol: location.pathname } })
                                             }
                                        }
                                        size="small"
                                        style={{
                                             borderRadius: "5px"
                                        }}
                                        key="2">Edit</Button>,
                                   <Button
                                        size="small"
                                        style={{
                                             borderRadius: "5px"
                                        }}
                                        key="1" type="primary">
                                        Adjust Stock
                                   </Button>,
                              ]}
                              footer={
                                   <StyledMenuAntd
                                        mode="horizontal"
                                        onClick={handleClicked}
                                        selectedKeys={[current]}
                                        style={{
                                             fontSize: '13px',
                                             lineHeight: '20px'
                                        }}>
                                        <MenuAntd.Item key="overview" style={{ padding: '10px' }}>
                                             Overview
                                        </MenuAntd.Item>
                                        <MenuAntd.Item key="transaction" style={{ padding: '10px' }}>
                                             Transactions
                                        </MenuAntd.Item>
                                        <MenuAntd.Item key="history" style={{ padding: '10px' }}>
                                             History
                                        </MenuAntd.Item>
                                   </StyledMenuAntd>
                              }
                         >
                              <Descriptions.Item label="Created">{product.sku}</Descriptions.Item>
                              <Descriptions.Item label="Created">{"-"}</Descriptions.Item>
                              <Descriptions.Item label="Created">{product.name}</Descriptions.Item>
                         </PageHeader>
                    </StyledSider>
               </StyledSubLayout>
          </StyledLayout>)
}

export default Customer