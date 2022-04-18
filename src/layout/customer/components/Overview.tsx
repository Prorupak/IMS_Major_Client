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

.ant-card-meta-avatar {
     padding: 18px 20px 0 0
}

.ant-avatar {
     width: 42px;
     height: 42px;
}
`
const StyledList = styled(List)`
border-bottom: none;
padding: 0px;

.ant-list-split .ant-list-header {
     border-bottom: none;
}
.ant-list-header {
     padding: 0px;
     border-bottom: none;
}
`

const StyledItem = styled(Item)`
display: flex;
align-items: center;
gap: 5px;
`

const StyledDescriptions = styled(Descriptions.Item)`
display: flex;
align-items: center;
gap: 1rem;
`

const Overview = () => {
     const { Customer: customer, loading } = React.useContext(CustomerData);

     console.log("customerOver", customer.address?.map((item: any) => item.billingAddress[0]))
     const billing = customer.address?.map((item: any) => item.billingAddress[0])
     const shipping = customer.address?.map((item: any) => item.shippingAddress[0])
     const other = customer.otherDetails?.map((item: any) => item[0])
     console.log("billing", billing?.map((item: any) => item.country))

     const [data, setData] = React.useState<any[]>([])
     React.useEffect(() => {
          for (let i in billing) {
               const data = [
                    billing[i].country,
                    billing[i].city,
                    billing[i].state,
                    billing[i].addressLine1,
                    billing[i].addressLine2,
                    billing[i].zip,
                    billing[i].phone,
               ]
               setData(data);

          }
     }, [customer])
     console.log('billingADD', billing)
     console.log('billingADDDD', data)

     return (
          <div>
               <Layout.Content style={{
                    // flex: '0 0 400',
                    width: '400px',
                    minWidth: '400px',
                    maxWidth: '400px',
                    borderRight: "1px solid rgba(0, 0, 0, 0.1) ",
                    padding: "15px 15px 20px 15px",
                    background: "#F7F7F7",
                    height: "100vh",


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
                         <Skeleton loading={loading} active>
                              <StyledItem fontSize="13px" fontWeight='500'>Billing Address</StyledItem>
                              {
                                   billing?.length > 0 ?
                                        billing?.map((item: any, idx: number) => (
                                             <Layout.Content key={idx}>
                                                  <StyledItem fontSize='12px' fontWeight='400' color='#777777' margin='3px'>
                                                       {item.addressLine1}
                                                  </StyledItem>
                                                  <StyledItem fontSize='12px' fontWeight='400' color='#777777' margin='3px'>
                                                       {item.addressLine2}
                                                  </StyledItem>
                                                  <StyledItem fontSize='12px' fontWeight='400' color='#777777' margin='3px'>
                                                       {item.state}, {item.city}, {item.zip}
                                                  </StyledItem>
                                                  <StyledItem fontSize='12px' fontWeight='400' color='#777777' margin='3px'>
                                                       Phone: {item.phone}
                                                  </StyledItem>
                                             </Layout.Content>
                                        )) : (
                                             <p>Loading</p>
                                        )
                              }

                         </Skeleton>
                         <Skeleton loading={loading} active>
                              <StyledItem fontSize="13px" fontWeight='500'>Selling Address</StyledItem>
                              {
                                   shipping?.length > 0 ?
                                        shipping?.map((item: any, idx: number) => (
                                             <Layout.Content key={idx}>
                                                  <StyledItem fontSize='12px' fontWeight='400' color='#777777' margin='3px'>
                                                       {item.addressLine1}
                                                  </StyledItem>
                                                  <StyledItem fontSize='12px' fontWeight='400' color='#777777' margin='3px'>
                                                       {item.addressLine2}
                                                  </StyledItem>
                                                  <StyledItem fontSize='12px' fontWeight='400' color='#777777' margin='3px'>
                                                       {item.state}, {item.city}, {item.zip}
                                                  </StyledItem>
                                                  <StyledItem fontSize='12px' fontWeight='400' color='#777777' margin='3px'>
                                                       Phone: {item.phone}
                                                  </StyledItem>
                                             </Layout.Content>
                                        )) : (
                                             <p>Loading</p>
                                        )
                              }

                         </Skeleton>
                    </StyledCard>
                    <StyledCard size="small" title="Other Details" style={{ width: "100%" }}>
                         <Skeleton loading={loading} active>
                              <Meta
                                   description={(
                                        <>
                                             <Layout.Content
                                                  style={{
                                                       display: "flex",
                                                       flexFlow: "column",
                                                  }}
                                             >
                                                  <StyledItem style={{
                                                       display: "flex"
                                                  }}>
                                                       <StyledItem fontSize='12px' fontWeight='500' color='var(--color-primary-dark)' margin='3px'>
                                                            Customer ID
                                                       </StyledItem>
                                                       <StyledItem fontSize='12px' fontWeight='400' color='#777777' margin='3px'>
                                                            {customer.id}
                                                       </StyledItem>
                                                  </StyledItem>
                                                  <StyledItem style={{
                                                       display: "flex"
                                                  }}>
                                                       <StyledItem fontSize='12px' fontWeight='500' color='var(--color-primary-dark)' margin='3px'>
                                                            Customer Type
                                                       </StyledItem>
                                                       <StyledItem fontSize='12px' fontWeight='400' color='#777777' margin='3px'>
                                                            {customer.customerType}
                                                       </StyledItem>
                                                  </StyledItem>
                                                  <StyledItem style={{
                                                       display: "flex"
                                                  }}>
                                                       <StyledItem fontSize='12px' fontWeight='500' color='var(--color-primary-dark)' margin='3px'>
                                                            Currency Code
                                                       </StyledItem>
                                                       <StyledItem fontSize='12px' fontWeight='400' color='#777777' margin='3px'>
                                                            {"NPR"}
                                                       </StyledItem>
                                                  </StyledItem>
                                                  <StyledItem style={{
                                                       display: "flex"
                                                  }}>
                                                       <StyledItem fontSize='12px' fontWeight='500' color='var(--color-primary-dark)' margin='3px'>
                                                            Payment Terms
                                                       </StyledItem>
                                                       <StyledItem fontSize='12px' fontWeight='400' color='#777777' margin='3px'>
                                                            {customer.paymentTerms}
                                                       </StyledItem>
                                                  </StyledItem>

                                             </Layout.Content>
                                        </>
                                   )}

                              />
                         </Skeleton>
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
          </div>
     )
}

export default Overview