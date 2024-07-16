import React from 'react'
import tractor from "../assets/tractor.jpg";
import pest from "../assets/pest.jpg"
import pump from "../assets/pump.jpg";
import seeds from "../assets/seeds.jpg";
import tool from "../assets/tool.jpg";
import fertilizer from "../assets/fertilizer.jpg";
import irrigation from "../assets/irrigation.jpg";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ItemModal from '../Components/ItemaModal';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TopSale=[
    {
        image: tractor,
        title: 'Tractor',
        description: 'High performance tractor',
        price: '₹500,000',
        stock:5
      },
      {
        image: fertilizer,
        title: 'Organic Fertilizer',
        description: 'Eco-friendly fertilizer',
        price: '₹2,000',
        stock:5
      },
      {
        image: irrigation,
        title: 'Irrigation System',
        description: 'Efficient water distribution',
        price: '₹15,000',
        stock:5
      },
   
      {
        image:seeds,
        title: 'High-Quality Seeds',
        description: 'Premium seeds for better yield',
        price: '₹500',
        stock:5
      },

      {
        image: pump,
        title: 'Water Pump',
        description: 'Reliable water pumping',
        price: '₹7,500',
        stock:5
      },
    
    
  ]

function Seeds() {


  const navigate=useNavigate()
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpen = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedItem(null);
  };
  const handleSubmit=()=>{
    navigate('/crops')

  }
  return (
    <div className="w-full h-[430px] flex flex-col  px-5  ">
     <div className='flex flex-col gap-4 p-5 bg-white shadow-md'>
        <div className="flex items-center justify-between ">
            <h1 className="font-bold text-[24px]">Seeds and Crops</h1>
            <div onClick={handleSubmit} className="bg-blue-600 hover:bg-blue-800 rounded-full w-[30px] h-[30px] flex items-center justify-center text-white font-semibold ">
                <ArrowForwardIosIcon style={{fontSize:16 }}/>
             </div>
                     </div>   
       
        <div className='flex items-center'>
       
          {
            TopSale.map((sale,index)=>(

             

                <div className="flex flex-col justify-between items-center bg-white w-[270px] p-4 shadow-md m-2 border rounded-sm border-gray-200 h-[300px] " key={index}   onClick={() => handleOpen(sale)}>
                    <img src={sale.image} alt={sale.title} className="w-32 h-32 object-contain bg-white" />
                    <h2 className="text-lg font-semibold mt-2">{sale.title}</h2>
                    <p className="text-sm text-gray-500">{sale.description}</p>
                    <p className="text-lg font-bold mt-2">{sale.price}</p>
                    </div>
              
        
          ))
         }
       
           
        </div>   
       
     </div>
     {selectedItem && (
        <ItemModal open={open} handleClose={handleClose} item={selectedItem} />
      )}
   </div>
  )
}

export default Seeds