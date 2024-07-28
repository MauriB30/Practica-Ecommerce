import ListOrders from "../components/profile/ListOrders"
import About from "../components/profile/About"
import Header from "../components/common/Header"
import Footer from "../components/common/Footer"

export default function Profile() {
  return (
    <div className="flex flex-col bg-gradient-to-r from-slate-50 to-orange-200 h-lvh">
      <Header/>
      <div className="flex gap-2 p-2 bg-gradient-to-r from-slate-50 to-orange-200">
        <div className="flex-1 h-fit border-2 p-2 border-orange-400 rounded ">
          <h2 className="m-10 font-semibold">Order History</h2>
          <ListOrders/>
        </div>
        <About/>
      </div>
      <Footer/> 
    </div>
  )
}
