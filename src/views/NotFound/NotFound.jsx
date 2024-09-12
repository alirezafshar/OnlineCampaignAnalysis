import { useNavigate } from 'react-router-dom'
import { RiArrowGoBackLine } from 'react-icons/ri'
import { MdWifiFind } from 'react-icons/md'
import './NotFound.scss'

const NotFound = () => {
  const navigate = useNavigate()

  // navigate to home
  const handleNavigateToHome = () => {
    navigate('/')
  }

  return (
    <section className="notFound">
      <MdWifiFind className="notFound__mainIcon" />
      <h1 className="dashboard__title notFound__title">Sorry, Could Not Fount Your Page!</h1>
      <button className="notFound__btn" type="button" onClick={() => handleNavigateToHome()}>
        <RiArrowGoBackLine className="notFound__icon" /> Campaign List
      </button>
    </section>
  )
}

export default NotFound
