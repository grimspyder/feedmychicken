import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './menu.scss'


const Menu = ({ active, setActive }) => {

  const location = useLocation()

  useEffect(() => {
    setActive(false)
  }, [setActive, location])

  return (
    <ul className={`menu ${active ? 'active' : ''}`}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  )
}

export default Menu