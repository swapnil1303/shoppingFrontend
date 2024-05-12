import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
    <div>
      <CategoryList/>
      <BannerProduct/>

      <VerticalCardProduct category={"Furniture"} heading={"Furniture"}/>
      <VerticalCardProduct category={"Art"} heading={"Art"}/>
      <VerticalCardProduct category={"Fashion"} heading={"Fashion"}/>
      <VerticalCardProduct category={"Home Decor"} heading={"Home Decor"}/>
      <VerticalCardProduct category={"Garden"} heading={"Garden"}/>
      <VerticalCardProduct category={"Outdoor"} heading={"Outdoor"}/>
    </div>
  )
}

export default Home