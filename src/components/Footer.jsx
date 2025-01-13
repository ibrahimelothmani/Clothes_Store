import "../index.css";

const Footer = () => {
  const Name = prompt("ENTER Your Name");
  return (
    <>
      <div>
        <footer className="bg-gray-800 text-white p-4 flex justify-between items-center mt-96">
          <div>Hello {Name}!</div>
          <div>Copyright © 2024 Clothes Store. All rights reserved.</div>
          <div>Date : {new Date().getFullYear()}</div>
          <div>{
            console.log(Name)
            }</div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
