
const Footer = () => {

    return(
        <>
        <footer className="bg-gray-800 text-white p-4 flex justify-between items-center mt-96">
            <p>Copyright © 2024 Clothes Store. All rights reserved.</p>
            <p>Date : {new Date().getFullYear()}</p>
        </footer>

        </>
    );

}

export default Footer;