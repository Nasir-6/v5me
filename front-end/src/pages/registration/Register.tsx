import React, { useState } from 'react'
import { RegisterUser } from "./RegisterUser";
import { RegisterCar } from "./RegisterCar";
import { RegisterMechanic } from "./RegisterMechanic";


interface RegisterProps {

}

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


    const FormTitles = ["User Details", "Car Details", "Mechanic Details"];

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
      <div className="form">
        <div className="progressbar">
          <div
            style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
          ></div>
        </div>
        <div className="form-container">
          <div className="header">
            <h1>{FormTitles[page]}</h1>
          </div>
          <div className="body">{PageDisplay()}</div>
          <div className="footer">
            <button
              disabled={page == 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              Prev
            </button>
            <button
              onClick={() => {
                if (page === FormTitles.length - 1) {
                  alert("FORM SUBMITTED");
                  console.log(formData);
                } else {
                  setPage((currPage) => currPage + 1);
                }
              }}
            >
              {page === FormTitles.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </div>
    );
}