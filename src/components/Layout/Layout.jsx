import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import PropTypes from 'prop-types'
import './Layout.scss'

const Layout = ({ children }) => {
  const year = new Date().getFullYear()

  return (
    <>
      <section className="layout">
        {/* header */}
        <Header />
        {/* main content page */}
        <main className="layout__main">
          <Outlet />
          {children}
        </main>
      </section>
      {/* footer */}
      <p className="layout__signature">Designed with Alireza Afshar – {year}</p>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
