import { Card, Layout, Tabs } from 'antd'
import React from 'react'
import styled from 'styled-components'
import AddCustomer from './AddCustomer'
import Address from './Address'
import ContactPersons from './ContactPersons'
import OtherDetails from './OtherDetails'
import Remarks from './Remarks'
import Top from './Top'

const { TabPane } = Tabs

const StyledLayout = styled(Layout)`
  background: #fafafa;
  width: 100%;
`
const StyledCard = styled(Card)`
background-color: #fafafa;
width: 100%;

`

const CustomerForm = () => {
  return (
    <AddCustomer>
      <StyledLayout>
        <StyledLayout>
          <StyledLayout.Content>
            <StyledCard>
              <Top />
            </StyledCard>
          </StyledLayout.Content>
        </StyledLayout>
        <StyledLayout>
          <StyledLayout.Content>
            <Tabs defaultActiveKey="1">
              <TabPane tab="Other Details" key="1">
                <StyledCard>
                  <OtherDetails />
                </StyledCard>
              </TabPane>
              <TabPane tab="Address" key="2">
                <StyledCard>
                  bottom
                  <Address />
                </StyledCard>
              </TabPane>
              <TabPane tab="Contact Persons" key="3">
                <StyledCard>
                  <ContactPersons />
                </StyledCard>
              </TabPane>
              <TabPane tab="Remarks" key="4">
                <StyledCard>
                  <Remarks />
                </StyledCard>
              </TabPane>
            </Tabs>
          </StyledLayout.Content>
        </StyledLayout>
      </StyledLayout>
    </AddCustomer>
  )
}

export default CustomerForm