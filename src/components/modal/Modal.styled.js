import styled, { keyframes } from "styled-components";

export const WrapperContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  padding: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  z-index: 1;
`;
export const animateModal = keyframes`{
  from {top:-300px; opacity:0}
  to {top:0; opacity:1}
}`;

export const ModalContainer = styled.div`
  width: ${({ size }) => handelModalSize(size)};
  max-height: calc(100% - 80px);
  margin: 50px auto;
  border-radius: 5px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  position: relative;
  animation-name: ${animateModal};
  animation-duration: 0.6s;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2px 14px;
  border-bottom: 1px solid #e5e5e5;
`;

export const ModalBody = styled.div`
  justify-content: flex-end;
  overflow: auto;
  padding: 10px 20px;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 15px 30px;
  border-top: 1px solid #e5e5e5;
`;

export const TopCloseModalButton = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  font-weight: bold;
  font-size: 25px;
  background: none;
  color: #ccc;
  &:hover {
    color: black;
  }
`;

/**
 *
 * @param {String} size: represented the size of modal
 * @returns {String} size of modal
 */
const handelModalSize = (size) => {
  switch (size) {
    case "small":
      return "300px";
    case "large":
      return "800px";
    case "extraLarge":
      return "1140px";
    default:
      return "45%";
  }
};
