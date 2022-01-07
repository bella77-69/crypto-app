
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='footer'>
            Developed by    
            <Link
            className="footer-link"
            to={{ pathname: "https://github.com/bella77-69/crypto-app" }}
            target="_blank"
          ></Link><br></br> Built with <strong>React</strong> <br></br>Powered by <strong>CoinStats</strong> API
        </footer>
    );
};

export default Footer;