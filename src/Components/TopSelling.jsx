import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import busc1 from "../assets/cofee/busc1.jpg";
import Anchor from "../assets/cofee/Anchored.jpg"
import cafe from "../assets/cofee/Cafeology.jpg";
import choco1 from "../assets/cofee/choco1.jpg";
import choco2 from "../assets/cofee/choco2.jpg";
import tea1 from "../assets/cofee/tea1.jpg"
import tea2 from "../assets/cofee/tea2.jpg";
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';

import ItemModal from './ItemaModal';
import { useState } from 'react';

const TopSale=[
  {
    image: Anchor,
    name: 'Anchored Coffee',
    desc: 'Your everyday-single-origin coffee. Perfect for all filter brewing styles',
    price: '19.27',
    stock: 12,
    rating: 4,
    label1:"https://st2.depositphotos.com/3369547/8465/v/450/depositphotos_84658790-stock-illustration-organic-natural-food-label.jpg",
    label2:"https://vedaearthloungespa.com/wp-content/uploads/2022/12/Trans-Lounge-Icons-01.png"
  },
  {
    image: cafe,
    name: 'Cafeology Coffee',
    desc: 'A sweet, clean pure Colombian Coffee made from 100% Colombian Excelso Fairtrade arabicas.',
    price: '6.46',
    stock: 12,
    rating: 4,
     label1:"https://st2.depositphotos.com/3369547/8465/v/450/depositphotos_84658790-stock-illustration-organic-natural-food-label.jpg",
    label2:"https://vedaearthloungespa.com/wp-content/uploads/2022/12/Trans-Lounge-Icons-01.png"
  },
  {
    image: choco1,
    name: 'Lindt Swiss Luxury Selection',
    desc: 'Lindt Swiss Luxury Selection - 14 Assorted Milk, White and Dark Chocolate Box Medium, 143g - Gift Present or Sharing Box - Birthday, Celebrations',
    price: '11.99',
    stock: 34,
    rating: 4,
     label1:"https://st2.depositphotos.com/3369547/8465/v/450/depositphotos_84658790-stock-illustration-organic-natural-food-label.jpg",
    label2:"https://vedaearthloungespa.com/wp-content/uploads/2022/12/Trans-Lounge-Icons-01.png"
  },
  {
    image: choco2,
    name: 'Cadbury Dairy Milk',
    desc: 'Cadbury Dairy Milk Chocolate Bar 110g (Pack of 21 Bars)',
    price: '26.99',
    stock: 8,
    rating: 4,
     label1:"https://st2.depositphotos.com/3369547/8465/v/450/depositphotos_84658790-stock-illustration-organic-natural-food-label.jpg",
    label2:"https://vedaearthloungespa.com/wp-content/uploads/2022/12/Trans-Lounge-Icons-01.png"
  },
  {
    image: tea1,
    name: 'HampStead Organic tea',
    desc: 'ORGANIC ENGLISH BREAKFAST TEA BAGS',
    price: '3.49',
    stock: 23,
    rating: 4
  },
  {
    image: busc1,
    name: 'Sweet FA – Oat & Raisin',
    desc: 'Chunky oats and sweet plump raisins and a sprinkling of cinnamon combine in a scrumptious cookie',
    price: '2.99',
    stock: 45,
    rating: 5
  },
  {
    image: tea2,
    name: 'Steenbergs Fairtrade Organic Christmas Tea',
    desc: 'Steenbergs spicy Organic Fairtrade Christmas Tea Loose Leaf - a seasonal blended tea full of Christmas flavours',
    price: '4.00',
    stock: 12,
    rating: 3
  },
    
    
  ]

function TopSelling() {

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
  

  const settings = {
    dots: false,
    infinite: true,

    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
   // nextArrow: <NextArrow />,
   // prevArrow: <PrevArrow />,
   arrows:false
  };

  return (
    <div className="w-full h-[500px] flex flex-col  px-5  ">
     <div className='flex flex-col gap-4 p-5 bg-white shadow-md'>
        <div className="flex items-center  ">
            <h1 className="font-bold text-[24px]">Top Selling Items</h1>
        </div>   
       

        <Slider  {...settings} className="w-full  flex justify-between  ">
          {
            TopSale.map((sale,index)=>(

             <div className="px-5 ">

                <div className="flex flex-col justify-between items-center bg-white w-[270px] p-4 shadow-md m-2 border rounded-sm border-gray-200 h-[350px] " key={index}   onClick={() => handleOpen(sale)}>
                    <img src={sale.image} alt={sale.name} className="w-32 h-32 object-contain bg-white" />
                    <h2 className="text-lg font-semibold mt-2">{sale.name}</h2>
                    <p className="text-sm text-gray-500">{sale.desc}</p>
                    <p className="text-lg font-bold mt-2"><CurrencyPoundIcon/> {sale.price}</p>
                    </div>
              
            </div>
          ))
         }
        </Slider>
           
       
     </div>
     {selectedItem && (
        <ItemModal open={open} handleClose={handleClose} item={selectedItem} />
      )}
   </div>
  );
}

export default TopSelling;
