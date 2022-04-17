import React from 'react'
import { Outlet } from 'react-router'
import Customer from 'layout/customer/Customer'

const CustomerContainer = () => {
     return (
          <Customer>
               <Outlet />
          </Customer>
     )
}

export default CustomerContainer