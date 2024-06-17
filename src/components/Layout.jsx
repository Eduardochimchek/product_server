import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import '../index.css';

const Layout = ({ children }) => {
    const navigate = useNavigate();

    return (
        <div className='OrgLayout'>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;