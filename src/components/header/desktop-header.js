import React from 'react';
import { Link } from 'react-router-dom';
import LanguageSwitch from '../language-switch';
import { useSelector } from 'react-redux';
import { translate } from '../translations';
import './header.css';

const DesktopHeader = () => {

  const lang = useSelector(state => state.language.lang);

  return (
      <div className="height-65 row justify-content-between align-items-center">
      
        <Link to="/" className="col-auto logo-font custom-link">SuperSuslo</Link>
        
        <div className="col-auto h-100 custom-font">
          <ul className="nav h-100">
            <li className="h-100">
              <Link 
                to="/calorie-calc" 
                className="nav-link h-100 custom-link d-flex align-items-center">
                {translate('calorieCalc', lang)}
              </Link>
            </li>
            <li className="h-100 ">
              <Link 
                to="/training-log" 
                className="nav-link h-100 custom-link d-flex align-items-center">
                {translate('log', lang)}
              </Link>
            </li>
            <li className="h-100 ">
              <Link 
                to="/calorie-calc" 
                className="nav-link h-100 custom-link d-flex align-items-center">
                {translate('calorieCalc', lang)}
              </Link>
            </li>
            <li className="h-100">
              <Link 
                to="/about" 
                className="nav-link h-100 custom-link d-flex align-items-center">
                {translate('about', lang)}
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-auto">
          <LanguageSwitch />
        </div>
      </div>
   

  );
};

export default DesktopHeader;