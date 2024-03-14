// eslint-disable-next-line no-unused-vars
import React,{useState} from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  let data = [
    {
      name: "Fancy Product",
      tag : "sale",
      price : "$40.00 - $80.00",
    },
    {
      name: "Special Item",
      tag : "sale",
      price : "$18.00",
      oldPrice: "$20.00"
    },
    {
      name: "Sale Item",
      tag : "sale",
      price : "$25.00",
      oldPrice : "$50.00"
    },
    {
      name: "Popular Item",
      tag : "sale",
      price : "$40.00",
    },
    {
      name: "Sale Item",
      tag : "sale",
      price : "$25.00",
      oldPrice : "$50.00"
    },
    {
      name: "Fancy Product",
      tag : "sale",
      price : "$120.00 - $280.00",
    },
    {
      name: "Special Item",
      tag : "sale",
      price : "$18.00",
      oldPrice : "$20.00"
    },
    {
      name: "Popular Item",
      tag : "sale",
      price : "$40.00"
    }
  ]
  const [cart, setCart] = useState(0)

  return <>
    <Navbar cart={cart} setCart={setCart} />
    <Header />
    <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {
                  data.map((e,i)=>{
                    return <Card cart={cart} setCart={setCart} cardData={e} key={i}/>
                  })
                }
            </div>
        </div>
    </section>
    <Footer /> 
  </>
}

export default App