import React from 'react'
import { Outlet } from 'react-router'
import Customer from 'layout/customer/Customer'

const CustomerContainer = () => {
     return (
          <>
               <Outlet />
          </>
     )
}

export default CustomerContainer