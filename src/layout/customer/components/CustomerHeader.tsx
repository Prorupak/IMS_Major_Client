import { Button, Divider, PageHeader } from 'antd'
import React from 'react'
import {
     MenuOutlined,
     PlusOutlined,
     LinkOutlined,
     CaretDownOutlined,
} from "@ant-design/icons";
import { useNavigate } from 'react-router'
import PageTips from 'Components/shared/PageTips';
import { CustomerData } from 'context/CustomerContext';

const CustomerHeader = () => {
     const { Customer: customer, loading } = React.useContext(CustomerData);
     const navigate = useNavigate();
     return (
          <>
               <PageHeader
                    ghost={false}
                    onBack={() => window.history.back()}
                    title="Customers"
                    style={{
                         padding: "8px 15px",
                         borderBottom: "1px solid rgba(0, 0, 0, 0.09)",
                    }}
                    extra={[
                         <Button
                              size="small"
                              type="primary"
                              onClick={() => navigate("/customer/add")}
                              style={{
                                   borderRadius: "5px",
                                   marginLeft: "3px",
                              }}
                              key="3"
                         >
                              <PlusOutlined />
                              <span
                                   style={{
                                        marginLeft: "3px",
                                   }}
                              >
                                   New
                              </span>
                         </Button>,
                         <Button
                              size="small"
                              style={{
                                   borderRadius: "5px",
                                   backgroundColor: "#f6f6f6",
                              }}
                              key="2"
                         >
                              <MenuOutlined />
                         </Button>,
                         <Divider
                              type="vertical"
                              style={{
                                   height: "20px",
                                   margin: "0px 5px",
                                   borderLeft: "2px solid rgba(0, 0, 0, 0.1)",
                              }}
                              key="4"
                         />,
                         <PageTips key="5" />,
                    ]}
               ></PageHeader>
          </>
     )
}

export default CustomerHeader