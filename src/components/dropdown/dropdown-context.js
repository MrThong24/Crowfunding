import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";

const DropdownContext = createContext();

function DropdownProvider(props) {
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow((prev) => !prev);
  };
  const values = { show, setShow, toggle };
  return (
    <DropdownContext.Provider value={values}>
      {props.children}
    </DropdownContext.Provider>
  );
}
function useDropdown() {
  const context = useContext(DropdownContext);
  if (typeof context === "undefined") {
    throw new Error("useDropdown must be used within DropdownProvider");
  }
  return context;
}

export { DropdownProvider, useDropdown };
