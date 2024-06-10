import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import '../index.css';

const Layout = ({ children }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    };

    return (
        <div className='OrgLayout'>
            <Navbar />
            <button className="logout-button" onClick={handleLogout}>
                Logout
            </button>
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;