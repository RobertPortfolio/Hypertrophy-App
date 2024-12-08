import React, { useState } from 'react';
import { Navbar, Offcanvas, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LanguageSwitch from '../language-switch';
import { useSelector } from 'react-redux';
import { translate } from '../translations';
import './header.css';

const MobileHeader = () => {

  const lang = useSelector(state => state.language.lang);

  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show); // Переключение состояния

  return (
      <div className="height-65 row justify-content-between align-items-center">
      
        <div className="col-auto">
          <Navbar className="px-3">
            <Button 
              variant="outline-light" 
              onClick={handleToggle}
              className="position-absolute"
              style={{ zIndex: 1051 }}
            >
              <i className={`fa-solid ${show ? 'fa-xmark' : 'fa-bars'}`}></i>
            </Button>
          </Navbar>

          {/* Offcanvas */}
          <Offcanvas show={show} onHide={handleToggle} placement="start" className="offcanvas-below-header bg-dark">
            <Offcanvas.Body>
              <ul className="text-light custom-font">
                <li className="list-group-item mb-3">
                  <Link 
                    to="/calorie-calc" 
                    className="custom-link"
                    onClick={handleToggle}>
                    {translate('calorieCalc', lang)}
                  </Link>
                </li>
                <li className="list-group-item mb-3">
                  <Link 
                    to="/training-log" 
                    className=" custom-link"
                    onClick={handleToggle}>
                    {translate('log', lang)}
                  </Link>
                </li>
                <li className="list-group-item mb-3">
                  <Link 
                    to="/programs" 
                    className="custom-link"
                    onClick={handleToggle}>
                    {translate('programs', lang)}
                  </Link>
                </li>
                <li className="list-group-item mb-3">
                  <Link 
                    to="/about" 
                    className="custom-link"
                    onClick={handleToggle}>
                    {translate('about', lang)}
                  </Link>
                </li>
              </ul>
            </Offcanvas.Body>
          </Offcanvas>
        </div>

        <Link to="/" className="col-auto logo-font custom-link">SuperSuslo</Link>

        <div className="col-auto">
          <LanguageSwitch />
        </div>
      </div>
   

  );
};

export default MobileHeader;