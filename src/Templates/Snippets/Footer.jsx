
const Footer = () => (
    <footer className="flex flex-col py-5 space-y-10 justify-center  bg-gray-900 text-gray-300">

        <nav className="flex justify-center flex-wrap gap-6 text-gray-300 font-medium">
            <a className="hover:text-cyan-400" href="#">Home</a>
            <a className="hover:text-cyan-400" href="#">About</a>
            <a className="hover:text-cyan-400" href="#">Services</a>
            <a className="hover:text-cyan-400" href="#">Media</a>
            <a className="hover:text-cyan-400" href="#">Gallery</a>
            <a className="hover:text-cyan-400" href="#">Contact</a>
        </nav>

        <div className="flex justify-center space-x-5">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png"/>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png"/>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png"/>
            </a>
            <a href="https://messenger.com" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png"/>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/fluent/30/000000/twitter.png"/>
            </a>
        </div>
        <p className="text-center text-gray-400 font-medium">&copy; 2022 Company Ltd. All rights reservered.</p>
    </footer>
);

export default Footer;