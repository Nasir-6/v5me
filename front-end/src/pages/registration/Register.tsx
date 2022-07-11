import React, { useState } from "react";
import { RegisterUser } from "./RegisterUser";
import { RegisterCar } from "./RegisterCar";
import { RegisterMechanic } from "./RegisterMechanic";
import logo from '../../assets/v5me-logo-white.png'

interface RegisterProps {}

export const Register: React.FC<RegisterProps> = ({}) => {
  const [page, setPage] = useState(0);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    isMechanic: false,
    isCarOwner: false
  });

  const PageDisplay = () => {
    if (page === 0) {
      // return <RegisterUser formData={formData} setFormData={setFormData} />;
      return <RegisterUser userData={userData} setUserData={setUserData}/>;
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
        {page != 0 ? <button
          className="btn"
          onClick={() => {
            setPage((currPage) => currPage - 1);
          }}
        >
          Prev
        </button>:<></>}

        <button
          className="btn"
          onClick={() => {
            if (page === 2) {
              alert("FORM SUBMITTED");
              console.log(userData);
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
