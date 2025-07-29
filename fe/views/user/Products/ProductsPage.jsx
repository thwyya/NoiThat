import React from 'react'
import Breadcrumb from '@/components/Breadcrumb';
import PromoBanner from './components/PromoBanner';
import ProductListPage from './components/ProductListPage';

const ProductPage = () => {
  return (
      <div>
          <Breadcrumb />
          <PromoBanner />
          <ProductListPage />
    </div>
  )
}

export default ProductPage