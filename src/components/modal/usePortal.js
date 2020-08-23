import React, { useRef, useEffect } from "react";

/**
 * @returns {HTMLElement} The DOM node to use as the Portal target.
 */
const usePortal = () => {
  const modalRef = useRef(null);

  useEffect(() => {
    //Add the element to the parent (modal-root)
    document.body.appendChild(modalRef.current);
  }, []);

  /**
   * We use objects lazily to avoid re-creating reference.
   * @returns {RefDomNode}
   * @link https://reactjs.org/docs/hooks-faq.html#how-to-create-expensive-objects-lazily
   */
  function getModal() {
    if (!modalRef.current) {
      modalRef.current = document.getElementById("modal-root");
    }
    return modalRef.current;
  }
  return getModal();
};

export default usePortal;
