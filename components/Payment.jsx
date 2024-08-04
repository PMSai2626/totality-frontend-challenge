'use client'

import React, {useState} from "react"
import Image from "next/image";
import { useCart } from "@/app/context/CartContext";
import Link from "next/link";

const Payment = () => {
    const {cart, clearCart} = useCart()
    const [showPopup, setShowpopup] = useState(false);
    const [formData, setFormdata] = useState({
        name: '',
        email:"",
        phone:'',
        address:'',
        cardName:"",
        cardNumber:"",
        expiryDate:"",
        cvv:"",
    })
    const [errors, setErrors] = useState({})

const handleChange = (e) => {
    const {name, value} = e.target;
    setFormdata({
        ...formData,
        [name]: value,
    });

};


const handlePayment = () => {
    const newErrors = {};
    Object.keys(formData).forEach(key => {
        if(!formData[key]){
            newErrors[key] = 'This field is required';
        }
    });

    if(Object.keys(newErrors).length > 0){
        setErrors(newErrors);
        return;
        setErrors({})
    }
    setShowpopup(true)
}

    const handleRedirect = () => {
        clearCart();
        setShowpopup(true)
        
    }


    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)
    

  return (
    <div className="conatainer mx-auto p-4 flex flex-col lg:flex-row gap-8">
        {/* <h1 className="text-3xl font-bold mb-4">Payment Details</h1> */}
        <div className="bg-white p-6 rounded shadow-md flex flex-col lg:flex-grow gap-8">
          <div className="lg:w-1/2 ml-10">
            <h2 className="text-xl font-semibold mb-4">Review Your Items</h2>
            <div className="mb-4 p-4 rounded-md overflow-x-auto">
                {cart.map((item) => (
<<<<<<< HEAD
                    <div key={item.id} className="flex flex-col sm:flex-row  items-center mb-4">
=======
                    <div key={item.id} className="flex flex-col sm:flex-row items-center mb-4">
>>>>>>> fe187d63db45a61c3048ed79d07aca555c1790f4
                        <Image src={item.image || '/default-image.jpg' } alt={item.title}
                            width={60}
                            height={60}
                            className="object-cover w-16 h-16 mr-4"
                         />
                         <div className="flex-1">
                            <h3 className="text-sm font-semibold">{item.title} </h3>
                            <p className="text-gray-600 text-sm">{item.quantity} x ${item.price.toFixed(2)} </p>
                            <p className="text-sm font-semibold">${(item.price * item.quantity).toFixed(2)} </p>

                         </div>
                         <p className="text-sm font-bold">${(item.price * item.quantity).toFixed(2)} </p>
                        <Link href='/cart'> <button className="bg-blue-500 text-white rounded px-2 py-2 ml-10 text-sm font-semibold">Go To cart</button> </Link>
                    </div>
                ))}

            </div>
            <div className="text-sm font-semibold mb-4">
                <p>Total Items: {totalItems}</p>
                <p>Total price: ${totalPrice.toFixed(2)} </p>
                </div>
            </div>
            <div >
            <h2 className="text-xl font-semibold mb-4">Enter Your Details</h2>
            <form className="space-y-4">
                <div className="flex gap-4">
                <div className="w-1/2">
                    <label className="block text-sm font-medium mb-1">Name </label>
                    <input
                     type="text"
                     name="name"
                      value={formData.name} 
                      onChange={handleChange}
                      className="w-full border rounded p-2 text-sm"
                      placeholder="Enter Your Name"
                      required
                      />
                      {errors.name && <p className="text-red-500 text-sm">{errors.name} </p>}
                </div>

                <div className="w-1/2">
                    <label className="block text-sm font-medium mb-1">Email </label>
                    <input type="email"
                     name="email"
                      value={formData.email} 
                      onChange={handleChange}
                      className="w-full border rounded p-2 text-sm"
                      placeholder="Enter Your Email"
                      required
                      />
                 {errors.email && <p className="text-red-500 text-sm">{errors.email} </p>}

                </div>
                </div>
                <div className="flex gap-4">
                <div className="w-1/2">
                    <label className="block text-sm font-medium mb-1">Phone </label>
                    <input type="number"
                     name="phone"
                      value={formData.phone} 
                      onChange={handleChange}
                      className="w-full border rounded p-2 text-sm"
                      placeholder="Enter Your Number"
                      required
                      />
                 {errors.phone && <p className="text-red-500 text-sm">{errors.phone} </p>}

                </div>

                <div className="w-1/2">
                    <label className="block text-sm font-medium mb-1">Address </label>
                    <input type="text"
                     name="address"
                      value={formData.address} 
                      onChange={handleChange}
                      className="w-full border rounded p-2 text-sm"
                      placeholder="Enter Your Address"
                      required
                      />
                      {errors.address && <p className="text-red-500 text-sm">{errors.address} </p>}
                </div>
               </div>
               <div className="flex gap-4">

                <div className="w-1/2">
                    <label className="block text-sm font-medium mb-1">Name of Card</label>
                    <input type="text"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleChange}
                    placeholder="Enter Your Name"
                    className="w-full border rounded p-2 text-sm"
                    required 
                    />
                    {errors.cardName && <p className="text-red-500 text-sm">{errors.cardName} </p>}
                    
                </div>

                <div className="w-1/2">
                    <label className="block text-sm font-medium mb-1">Card Number</label>
                    <input type="number"
                    name="cardNumber"
                    placeholder="Enter Your Card Number"
                    onChange={handleChange}
                    value={formData.cardNumber}
                    className="w-full border rounded p-2 text-sm"
                    required 
                    />
                    {errors.cardNumber && <p className="text-red-500 text-sm">{errors.cardNumber} </p>}
                    
                </div>
                </div>
                <div className="flex gap-4">
                <div className="w-1/2">
                    <label className="block text-sm font-medium mb-1">Expiry Date</label>
                    <input type="number"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleChange}
                    placeholder="Enter Your Expiry date"
                    className="w-full border rounded p-2 text-sm"
                    required 
                    />
                    {errors.expiryDate && <p className="text-red-500 text-sm">{errors.expiryDate} </p>}
                    
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1">CVV</label>
                    <input type="number"
                    name="cvv"
                    placeholder="Enter Your cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    className="w-full border rounded p-2 text-sm"
                    required 
                    />
                    {errors.cvv && <p className="text-red-500 text-sm">{errors.cvv} </p>}
                </div>
                </div>
                <button 
                className="bg-green-500 text-white px-4 py-2  rounded ml-auto hover:bg-green-600 mt-4 w-full"
                   type="button" onClick={handlePayment}
                >Buy</button>

            </form>
        </div>
        </div>
        {showPopup && (
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 items-center justify-center">
                <div className="bg-white p-6 rounded shadow-md text-center">
                    <h2 className="text-2xl font-semibold mb-4">Payment Successful</h2>
                   <Link href='/properties'> <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={handleRedirect}>Go To Properties</button></Link>
{/*                     <button className="bg-orange-500 text-white px-2 py-2 rounded font-semibold">Go To Preperties</button> */}

                </div>

            </div>
        )}
      
    </div>
  )
}

export default Payment
