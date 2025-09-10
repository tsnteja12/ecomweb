import React,{useContext} from 'react'
import { assets } from './../assets/assets';
import {useNavigate} from 'react-router-dom'
import { ShopContext } from './../context/ShopContext';

const Footer = () => {
    const {navigate} =useContext(ShopContext);
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div >
                <img src={assets.logo} className='mb-4 w-32' alt=""/>
                <p className=' md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non dapibus urna. Etiam cursus tristique massa, ac posuere elit varius at. Vestibulum consequat tellus a augue gravida, nec cursus sapien faucibus. Quisque non ligula ac nunc facilisis vehicula. Sed luctus tincidunt erat, ut pretium massa imperdiet eget. Vivamus egestas, nibh ac scelerisque dictum, enim ex egestas orci, vitae fermentum erat ipsum et quam.</p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li><button onClick={()=>navigate('./')}>Home</button></li>
                    <li><button onClick={()=>navigate('./about')}>About us</button></li>
                    <li><button onClick={()=>navigate('./orders')}>Delivery</button></li>
                    <li><button>Privacy Policy</button></li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+91 984567888</li>
                    <li>tsn@company.com</li>
                </ul>
            </div>
        </div>
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>
                Copyright 2025@ mycompany.com - All Right Reserved.

            </p>
        </div>
    </div>
  )
}

export default Footer