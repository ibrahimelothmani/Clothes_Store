import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth(); // Create an instance of getAuth
      await createUserWithEmailAndPassword(auth, email, password);
      setSuccess(true);
      console.log("User registered successfully");
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <div>
      {success ? (
        <div className="text-center text-green-500 border-opacity-50">
          <h2>Registration successful!</h2>
          <p>Thank you {username} for registering. You can now log in.</p>
        </div>
      ) : (
        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="w-full p-2 border"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-2 border"
          />
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
            className="w-full p-2 border"
          />
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone"
            className="w-full p-2 border"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-2 border"
          />
          <button type="submit" className="w-full p-2 bg-blue-600 text-white">Register</button>
        </form>
      )}
    </div>
  );
};

export default Register;
