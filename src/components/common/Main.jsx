import React from 'react'
import SideBar from './SideBar'
import ListAllProducts from '../products/ListAllProducts'
import AuthModal from './AuthModal'


export default function Main() {
  return (
    <main className='flex bg-gradient-to-r from-slate-50 to-orange-200'>
        <SideBar/>
        <ListAllProducts/>
        <AuthModal/>
    </main>
  )
}
