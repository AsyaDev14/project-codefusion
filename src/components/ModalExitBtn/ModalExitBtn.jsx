import React, { useEffect, useRef } from 'react';
import {
  ExitBTNCancel,
  ExitBTNLogout,
  ExitContainer,
  ExitContainerBTN,
  ExitContainerBTNText,
  ExitContainerDivTest,
  ExitContainerGradient,
  ExitContainerLogo,
  ExitSpanMoneyGuard,
  ExitSpanText,
} from './ModalExitBtnStyled';
import ExitLogo from '../../images/Login/LoginLogo';

const ModalExitBtn = ({ buttonExitClick, handleLogout }) => {
  const modalRef = useRef();

  const handleClose = () => {
    buttonExitClick();
  };

  const handleKeyPress = e => {
    if (e.key === 'Escape') {
      handleClose();
    }
  };

  const handleClickOutside = event => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      handleClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleClose]);

  return (
    <>
      <ExitContainerDivTest></ExitContainerDivTest>
      <ExitContainer>
        <ExitContainerBTNText ref={modalRef}>
          <ExitContainerGradient></ExitContainerGradient>
          <ExitContainerLogo>
            <ExitLogo />
            <ExitSpanMoneyGuard>Money Guard</ExitSpanMoneyGuard>
          </ExitContainerLogo>
          <ExitSpanText>Are you sure you want to log out?</ExitSpanText>
          <ExitContainerBTN>
            <ExitBTNLogout onClick={handleLogout}>Logout</ExitBTNLogout>
            <ExitBTNCancel onClick={handleClose}>Cancel</ExitBTNCancel>
          </ExitContainerBTN>
        </ExitContainerBTNText>
      </ExitContainer>
    </>
  );
};

export default ModalExitBtn;
