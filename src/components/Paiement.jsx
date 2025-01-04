import { useLocation, useNavigate } from 'react-router-dom';

const Paiement = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {};

  if (!product) {
    return <div>No product selected for payment.</div>;
  }

  const handlePayment = (method) => {
    // Handle payment process here
    console.log(`Processing ${method} payment for`, product);
    // Redirect to a success page or do further processing
    navigate('/success');
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold">Payment for {product.title}</h1>
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
      <p className="text-gray-500">${product.price}</p>
      <div className="space-y-4">
        <button
          onClick={() => handlePayment('PayPal')}
          className="bg-yellow-500 text-white px-4 py-2 rounded w-full hover:bg-yellow-600 transition duration-300"
        >
          Pay with PayPal
        </button>
        <button
          onClick={() => handlePayment('Visa')}
          className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600 transition duration-300"
        >
          Pay with Visa
        </button>
        {/* Add more payment methods as needed */}
      </div>
    </div>
  );
};

export default Paiement;
