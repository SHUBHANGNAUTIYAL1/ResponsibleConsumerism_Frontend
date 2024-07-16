import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import InventoryModal from '../Components/InventoryModal';
import CreateModal from '../Components/CreateModal';
import Footer from '../Components/Footer';
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';

function Inventory() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [open, setOpen] = useState(false);
    const [openCreate, setCreate] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
  
    useEffect(() => {
        // Fetch products from the backend
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://responsibleconsumerism-backend.onrender.com/api/product'); // Adjust the URL as needed
                setProducts(response.data.products);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);
  
    const handleOpen = (item) => {
        setSelectedItem(item);
        setOpen(true);
    };
  
    const handleClose = () => {
        setOpen(false);
        setSelectedItem(null);
    };

    const CreateClose = () => {
        setCreate(false);
    }

    return (
        <div className="flex flex-col ">
            <Navbar />
            <div className="flex flex-col gap-12 px-20 py-10">
                <div className='flex justify-between items-center'>
                    <h1 className="text-[40px] font-bold font-serif">Your Inventory</h1>
                    <button className='px-5 py-3 text-white font-bold bg-blue-600 rounded-xl' onClick={() => setCreate(!openCreate)}>Create</button>
                </div>
                <div className="flex flex-wrap gap-4">
                    {products.map((product, index) => (
                        <div key={index} className='px-5'>
                            <div onClick={() => handleOpen(product)} className="flex flex-col justify-between items-center bg-white w-[270px] p-4 shadow-md m-2 border rounded-sm border-gray-200 h-[400px]">
                                <img src={product.image} alt={product.title} className="w-32 h-32 object-contain bg-white" />
                                <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
                                <p className="text-sm text-gray-500">{product.desc}</p>
                                <p className="text-lg font-bold mt-2"><CurrencyPoundIcon/> {product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {selectedItem && (
                <InventoryModal open={open} handleClose={handleClose} item={selectedItem} />
            )}
            {openCreate && <CreateModal setOpen={setCreate} />}
            <Footer />
        </div>
    )
}

export default Inventory;
