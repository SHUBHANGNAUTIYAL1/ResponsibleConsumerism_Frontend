import React, { useState } from 'react';
import axios from 'axios';

function CreateModal({ setOpen }) {
  const user = JSON.parse(localStorage.getItem('user'));
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [score,setScore]=useState('');
  const [type, setType] = useState('');
  const [rating, setRating] = useState('');
  const [label1, setLabel1] = useState(' ');
  const [label2, setLabel2] = useState(' ');

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "upload");

    const uploadRes = await axios.post(
      "https://api.cloudinary.com/v1_1/dh6zjine0/image/upload",
      formData
    );

    // Get the file URL from Cloudinary response
    const fileUrl = uploadRes.data.url;

    // Logic to handle form submission
    const productData = {
      image: fileUrl,
      name: title,
      desc: description,
      price: Number(price),
      stock: Number(stock),
      rating: Number(rating),
      score:Number(score),
      producttype: type,
      label1,
      label2,
      user
    };

    try {
      const response = await axios.post('https://responsibleconsumerism-backend.onrender.com/api/product/create-product', productData);
      console.log('Product created successfully:', response.data);
      handleClose();
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 relative overflow-y-scroll h-[800px]">
        <button onClick={handleClose} className="absolute top-2 right-2 text-red-500 hover:text-red-800">
          X
        </button>
        <h2 className="text-2xl font-bold mb-4">Create Item</h2>
        <div className="mb-4 flex w-full items-center justify-center">
          <img 
            src={
              image
                ? URL.createObjectURL(image)
                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
            }
            alt="Product Preview"
            className="w-[80%] h-[230px] object-cover mb-4 rounded"
          />
        </div>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="text"
          placeholder="Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="number"
          placeholder="Stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="number"
          placeholder="Rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
       
       
        <input
          type="text"
          placeholder="Label 1"
          value={label1}
          onChange={(e) => setLabel1(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
         
        <input
          type="text"
          placeholder="Label 2"
          value={label2}
          onChange={(e) => setLabel2(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
         <input
          type="number"
          placeholder="Ethical Score"
          value={score}
          onChange={(e) => setScore(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        >
          <option value="" disabled>Select Type</option>
          <option value="tea">Tea</option>
          <option value="coffee">Coffee</option>
          <option value="chocolate">Chocolate</option>
          <option value="biscuits">Biscuits</option>
        </select>
        <button onClick={handleSubmit} className="w-full py-2 bg-blue-600 text-white rounded-lg">
          Create
        </button>
      </div>
    </div>
  );
}

export default CreateModal;
