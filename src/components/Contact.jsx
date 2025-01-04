import { useState } from "react";

const sendMessage = async (name, email, message) => {
  // Implement the actual function to send the message (e.g., an API call)
  console.log(`Message sent: ${name}, ${email}, ${message}`);
};

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleContact = async (e) => {
    e.preventDefault();
    try {
      await sendMessage(name, email, message);
      setSuccess(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {success ? (
        <div className="text-center text-pretty text-green-500 border-opacity-50">
          <h2>Message sent successfully!</h2>
          <p>Thank you {name} for reaching out. We&apos;ll get back to you shortly.</p>
          <p>Your message: {message}</p>
          <p>Email: {email}</p>
        </div>
      ) : (
        <form onSubmit={handleContact} className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="w-full p-2 border"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-2 border"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            className="w-full p-2 border"
          />
          <button type="submit" className="w-full p-2 bg-blue-600 text-white">Send</button>
        </form>
      )}
    </div>
  );
};

export default Contact;
