import React, { useState } from "react";
import { RegisterUser } from "./RegisterUser";
import { RegisterCar } from "./RegisterCar";
import { RegisterMechanic } from "./RegisterMechanic";
import logo from '../../assets/v5me-logo-white.png'

interface RegisterProps {}

export const Register: React.FC<RegisterProps> = ({}) => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    username: "",
    nationality: "",
    other: "",
  });

  const PageDisplay = () => {
    if (page === 0) {
      // return <RegisterUser formData={formData} setFormData={setFormData} />;
      return <RegisterUser />;
    } else if (page === 1) {
      return <RegisterCar />;
    } else {
      return <RegisterMechanic />;
    }
  };

  return (
    <div className="register_page flex-column">
      <a href="/">
        <img src={logo} alt="" className="logo" />
      </a>

      {PageDisplay()}
      <div className="register_page-btns">
        <button
          className="btn"
          disabled={page == 0}
          onClick={() => {
            setPage((currPage) => currPage - 1);
          }}
        >
          Prev
        </button>
        <button
          className="btn"
          onClick={() => {
            if (page === 2) {
              alert("FORM SUBMITTED");
              console.log(formData);
            } else {
              setPage((currPage) => currPage + 1);
            }
          }}
        >
          {page === 2 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};
