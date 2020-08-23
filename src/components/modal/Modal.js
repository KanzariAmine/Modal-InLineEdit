import React, { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import {
  WrapperContainer,
  ModalContainer,
  TopCloseModalButton,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "./Modal.styled";
const usePortal = () => {
  const modalRef = useRef(null);

  useEffect(() => {
    document.body.appendChild(modalRef.current);
  }, []);

  function getModal() {
    if (!modalRef.current) {
      modalRef.current = document.getElementById("modal-root");
    }
    return modalRef.current;
  }
  return getModal();
};

//#################################################
//###########      Modal           ################
//#################################################

const Modal = (props) => {
  const { onToggleModal, children, modalSize, ...restProps } = props;
  const NodeModal = usePortal();
  return createPortal(
    <WrapperContainer onClick={onToggleModal}>
      <ModalContainer onClick={(e) => e.stopPropagation()} size={modalSize}>
        {children}
      </ModalContainer>
    </WrapperContainer>,
    NodeModal
  );
};

//#################################################
//###########       ModalHeader     ###############
//#################################################
const Header = (props) => {
  const { title, onToggleModal, ...restProps } = props;
  return (
    <ModalHeader {...restProps}>
      <h3>{title}</h3>
      <TopCloseModalButton onClick={onToggleModal}>&times;</TopCloseModalButton>
    </ModalHeader>
  );
};

//#################################################
//###########       Body         ##################
//#################################################

const Body = (props) => {
  const { children, ...restProps } = props;
  return <ModalBody>{children}</ModalBody>;
};

//#################################################
//###########       Footer       ##################
//#################################################

const Footer = (props) => (
  <ModalFooter {...props}>{props.children}</ModalFooter>
);

// static
Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

Modal.propType = {
  children: PropTypes.any.isRequired,
  onToggleModal: PropTypes.func.isRequired,
};
export default Modal;
