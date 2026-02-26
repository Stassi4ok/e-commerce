import { useState, useRef, useEffect, useContext } from "react";
import {Link} from 'react-router'
import {CurrencyUser, ROLES} from '../../context/userContext'
import {USER_ROUTES,COMMON_ROUTES} from '../../router/routesName'
import "./accountDropdown.css";
import Profile from '../../assets/SVG/profile.svg?react'
export function AccountDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const {setUser} = useContext(CurrencyUser);
  
  function handleLogout(){
    const guest = { id: null, role: ROLES.GUEST };
    setUser(guest);
    
  }
  
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="account-wrapper" ref={dropdownRef}>
      <div className={`avatar ${isOpen? 'active' : ''} `}  onClick={() => setIsOpen(!isOpen)}>
        <Profile/>
      </div>

      {isOpen && (
        <div className="dropdown">
          <Link to={USER_ROUTES.PROFILE}><div className="dropdown-item">Manage My Account</div></Link>
          <Link to={USER_ROUTES.MY_ORDERS}><div className="dropdown-item">My Order</div></Link>
          <Link to={COMMON_ROUTES.HOME}><div onClick={handleLogout} className="dropdown-item logout">Logout</div></Link>
        </div>
      )}
    </div>
  );
}