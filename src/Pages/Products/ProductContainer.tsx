import React from 'react'
import { Outlet } from 'react-router'
import AddProducts from './AddProducts'

const ProductContainer = () => {
     return (
          <AddProducts>
               <Outlet />
          </AddProducts>
     )
}

export default ProductContainer