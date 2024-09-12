import { FaUserCircle } from 'react-icons/fa'
import logo from '../../assets/images/vite.svg'
import './Header.scss'

const Header = () => {
  return (
    <header className="header">
      {/* company info */}
      <figure className="header__businessInfo">
        <img className="header__logo" src={logo} alt="OCA logo" />
        <div className="header__businessDesc">
          <p className="header__title">OCA Inc.</p>
          <p className="header__slang">Online Campaign Analysis</p>
        </div>
      </figure>
      {/* user info */}
      <div className="header__user">
        <FaUserCircle className="header__userIcon" />
        <p className="header__name">Loblaw Test</p>
      </div>
    </header>
  )
}

export default Header
