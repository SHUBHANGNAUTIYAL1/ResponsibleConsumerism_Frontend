import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Components/Navbar';
import ItemModal from '../Components/ItemaModal';
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';
import { useNavigate } from 'react-router-dom';
import Research from '../Components/Research';

function Cart() {
    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user._id;

    const [selectedItem, setSelectedItem] = useState(null);
    const [products, setProducts] = useState([]);
    const [totalOrderCost, setTotalOrderCost] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`https://responsibleconsumerism-backend.onrender.com/api/order/user/${userId}`);
                setProducts(response.data.orders);
                const orders = response.data.orders;
                const totalCost = orders.reduce((acc, order) => acc + order.price, 0);
      setTotalOrderCost(totalCost);
                console.log(totalCost);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, [userId]);

    const handleRemove = async (orderId, itemName) => {
        try {
            await axios.delete(`https://responsibleconsumerism-backend.onrender.com/api/order/${orderId}`);
            setProducts(products.filter(product => product._id !== orderId));

            alert("item is removed from cart");

            const logData = {
                message: `${itemName} removed from cart`,
                user: userId
            };

            await axios.post('https://responsibleconsumerism-backend.onrender.com/api/logs/create', logData);
            window.location.reload();
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(<span key={i} className="text-yellow-500">&#9733;</span>); // Unicode character for star
        }
        return stars;
    };

    const handleContinue = () => {
        // Add your continue button logic here
        navigate('/feed'); // Example navigation to the checkout page
    };

    return (
        <div className="flex flex-col">
            <Navbar />
            <div className='mt-4 bg-slate-100'>
                <Research />
            </div>
            <div className="flex flex-col gap-12 px-20 py-10 bg-slate-100 min-h-screen">
                <div>
                <h1 className="text-[40px] font-bold font-serif text-center my-4">
                    Your Cart
                    <span className="text-[32px] text-red-500 ml-2">
                        ( Total Cost <CurrencyPoundIcon className="align-middle" /> {totalOrderCost.toFixed(2)} )
                    </span>
                    </h1>
                </div>
                <div className="flex flex-wrap gap-4">
                    {products?.map((product, index) => (
                        <div className='px-5' key={index}>
                            <div
                                className="flex flex-col justify-between items-center bg-white w-[270px] p-4 shadow-md m-2 border rounded-sm border-gray-200 h-[450px]"
                            >
                                <img src={product.image} alt={product.name} className="w-32 h-32 object-contain bg-white" />
                                <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
                                <p className="text-sm text-gray-500">{product.desc}</p>
                                <p className="text-lg font-bold mt-2"><CurrencyPoundIcon />{product.price}</p>
                                <div className="flex justify-center mt-2">
                                    {renderStars(product.rating)}
                                </div>
                                <div className='flex flex-col justify-center w-full'>
                                    <h3 className='text-center'>Sustainability</h3>
                                    <div className='flex gap-2 w-full justify-center'>
                                        <img src={product.label1} className="h-[40px] w-[40px]" alt="" />
                                        <img src={product.label2} className="h-[40px] w-[40px]" alt="" />
                                    </div>
                                    </div>
                                <button
                                    className="bg-blue-600 text-white rounded-md px-4 py-2 mt-4 mx-auto block hover:bg-blue-700"
                                    onClick={() => handleRemove(product._id, product.name)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-end mt-8">
                    <button
                        className="bg-green-600 text-white rounded-md px-6 py-3 hover:bg-green-700"
                        onClick={handleContinue}
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Cart;
