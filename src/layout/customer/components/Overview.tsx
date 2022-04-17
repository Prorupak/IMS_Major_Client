import { Avatar, Card, Descriptions, Divider, Layout, List, Skeleton, Typography } from 'antd'
import Meta from 'antd/lib/card/Meta';
import { CustomerData } from 'context/CustomerContext';
import React from 'react'
import {
     PhoneOutlined,
     MobileOutlined
} from "@ant-design/icons";
import { Item } from 'Themes/utilityThemes';
import { ICustomer } from 'Interfaces/Interfaces';
import styled from 'styled-components';

const StyledCard = styled(Card)`
width: 300px;
margin-top: 16px;
border: none;
background-color: #f6f6f6;
.ant-card-body {
     padding: 0px;
}

.ant-card-actions {
     background-color: #f6f6f6;
     margin: 10px 0px;
}

.ant-card-head-title{
     padding: 0px;
}
.ant-card-head {
     min-height: 10px;
     margin-bottom: 15px;
     border-bottom: 1px solid rgba(0, 0, 0, 0.1);
     padding: 0px;

}
`
const StyledItem = styled(Item)`
display: flex;
align-items: center;
gap: 5px;
`

const Overview = () => {
     const { Customer: customer, loading } = React.useContext(CustomerData);

     console.log("customerOver", customer.address?.map((item: any) => item.billingAddress[0]))
     const billing = customer.address?.map((item: any) => item.billingAddress[0])
     const shipping = customer.address?.map((item: any) => item.shippingAddress[0])
     console.log("billing", billing?.address1)


     const data = [
          billing,
          'Japanese princess to wed commoner.',
          'Australian walks 100km after outback crash.',
          'Man charged over missing wedding girl.',
          'Los Angeles battles huge wildfires.',
     ];

     return (
          <Layout
               style={{
                    display: 'flex',
                    flexFlow: "row",
                    height: "100vh",
               }}
          >
               <Layout.Content style={{
                    // flex: '0 0 400',
                    width: '400px',
                    minWidth: '400px',
                    maxWidth: '400px',
                    borderRight: "1px solid rgba(0, 0, 0, 0.1) ",
                    padding: "var(--spacing-15)",
                    background: "#F7F7F7",


               }} >
                    <StyledCard
                         title={customer.customerDisplayName}
                         actions={[
                              <StyledItem width='0px' fontSize='12px' fontWeight='400' color='var(--color-secondary)' >
                                   Edit
                              </StyledItem>,
                              <StyledItem fontSize='12px' fontWeight='400' color='var(--color-secondary)' >
                                   Send Email
                              </StyledItem>,
                              <StyledItem fontSize='12px' fontWeight='400' color='var(--color-secondary)' >
                                   Delete
                              </StyledItem>,
                         ]}
                    >
                         <Skeleton loading={loading} avatar active>
                              <Meta
                                   avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                                   title={(
                                        <StyledItem fontSize='14px' fontWeight='500'>
                                             {customer.customerDisplayName}
                                        </StyledItem>
                                   )}
                                   description={(
                                        <>
                                             <Layout.Content
                                                  style={{
                                                       display: "flex",
                                                       flexFlow: "column",
                                                  }}
                                             >
                                                  <StyledItem fontSize='12px' fontWeight='400' color='#777777' margin='3px'>
                                                       {customer.email}
                                                  </StyledItem>
                                                  <StyledItem fontSize='12px' margin='3px' fontWeight='400' color='#777777'>
                                                       <PhoneOutlined color='var(--color-primary-dark)' />
                                                       {customer.phone}
                                                  </StyledItem>
                                                  <StyledItem fontSize='12px' margin='3px' fontWeight='400' color='#777777'>
                                                       <MobileOutlined color="var(--color-primary-dark)" />
                                                       {customer.otherDetails?.map((StyledItem: any) => StyledItem.phone)}
                                                  </StyledItem>
                                             </Layout.Content>
                                        </>
                                   )}

                              />
                         </Skeleton>
                    </StyledCard>
                    <StyledCard size="small" title="Address" style={{ width: "100%" }}>
                         <List
                              header={<div>Billing Address</div>}
                              dataSource={data}
                              renderItem={item => (
                                   <List.Item>
                                        <Typography.Text mark>[ITEM]</Typography.Text> {item}
                                   </List.Item>
                              )}
                         />
                    </StyledCard>
               </Layout.Content>
               <Layout.Content
                    style={{
                         backgroundColor: "#fff",
                         paddingTop: "-5px"
                    }}
               >
                    <h1>Sidebar</h1>
               </Layout.Content>
          </Layout>
     )
}

export default Overview