import React from 'react';
import { useSelector } from 'react-redux';
import { situationSelector } from 'Selectors/analyseSelectors';
import { AddAnswer } from '../sites/publicodes/API';
import './PopUpEnd.css';

const PopUpEnd = ({ isOpen, closeModal, children }) => {

  const situation = useSelector(situationSelector)

  if (!isOpen) return null;
  return (
    <div className="popup-parent">
      <div className="popup-content" >
        <div css="position: absolute"><button css="margin-top: -20%; margin-left:1550%;" className="ui__ small button" onClick={closeModal}>x</button></div>
        {children}
        <div className="div-buttons"
          css={`
              > button {
                margin: 1rem; 
                width: 15rem;
              }
            `}
        >
          <button className="ui__ small button" onClick={closeModal}>
            Je ne souhaite pas partager ma simulation
          </button>
          <button
            className="ui__ small plain button"
            onClick={closeModal}
            onMouseUp={
              () => AddAnswer(situation).then((response) => {
                console.log('API response', response)
                // set app state
              }).catch((error) => {
                console.log('API error', error)
              })
            }
          >
            Je partage ma simulation
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopUpEnd;