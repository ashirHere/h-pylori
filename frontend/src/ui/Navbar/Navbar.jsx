import logo from '../../imgs/iqralogo.png'
import { Link } from 'react-router-dom';
import './NavStyle.scss'

function Navbar() {
  return (
    <div className='ash'>
      <Link className="nav-link active" aria-current="page" to="/">
        <img className='logo' src={logo} alt="not found" />
      </Link>
    </div>
  )
};

export default Navbar