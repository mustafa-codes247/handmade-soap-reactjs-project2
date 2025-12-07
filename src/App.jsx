import React from 'react'
import BestSellerPage from './c13-task2-handmadestore/pages/BestSellerPage'
import CategoryPage from './c13-task2-handmadestore/pages/CategoryPage'
import AboutHandmade from './c13-task2-handmadestore/pages/AboutHandmade';
import HomePage from './c13-task2-handmadestore/pages/HomePage';
import { Route,Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
    <Routes>

       {/* C13 handmade soap taks link */}
       <Route path='/' element={<HomePage/>}></Route>
          <Route path='hmbs' element={<BestSellerPage/>}></Route>
          <Route path='hmct' element={<CategoryPage/>}></Route>
          <Route path='hmab' element={<AboutHandmade/>}></Route>


    </Routes>
      
    </>
  )
}

export default App
