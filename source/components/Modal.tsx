import React from "react";
import { Link } from 'react-router-dom';
import LogoECN from '../sites/publicodes/images/logo-ECN.png';
import LogoNCO2 from '../sites/publicodes/images/logo-NCO2.png';
import Logo from '../sites/publicodes/Logo';
import "./Modal.css";


const Modal = ({ isOpen, closeModal, children }) => {
  if (!isOpen) return null;
  return (
    <div className="modal-parent">
      <div className="modal-content" >
        <nav
          css={`
            display: flex;
            justify-content: space-evenly;
            margin: .6rem;
          `}
        >
          <a href="https://www.ec-nantes.fr">
            <img
              css="height: 4.5rem;"
              src={LogoECN}
            />
          </a>
          <Link
            to="/"
            css={`
              display: flex;
              align-items: center;
              text-decoration: none;
              font-size: 170%;
              margin-bottom: 0.4rem;
            `}
          >
            <Logo />
          </Link>
          <a href="https://neutralite-carbone.ec-nantes.fr">
            <img
              css="height: 4.5rem;"
              src={LogoNCO2}
            />
          </a>
        </nav>
        {children}
        <button css="margin: 1rem auto; width: 10rem" className="ui__ plain button" onClick={closeModal}>
          Ok >>>
        </button>
      </div>
    </div>
  );
};

export default Modal;