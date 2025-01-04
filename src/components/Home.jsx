import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleBuy = (product) => {
    navigate('/payment', { state: { product } });
  };


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded shadow-lg hover:shadow-xl transition duration-300">
          <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
          <h3 className="text-lg font-bold mt-2">{product.title}</h3>
          <p className="text-gray-500">${product.price}</p>
          <button
            onClick={() => handleBuy(product)}
            className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Buy
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;
