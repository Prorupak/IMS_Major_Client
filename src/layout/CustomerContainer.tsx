import React from 'react'
import { Outlet } from 'react-router'
import Customer from './Customer'

const CustomerContainer = () => {
     return (
          <Customer>
               <Outlet />
          </Customer>
     )
}

export default CustomerContainer