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

  const [mechanicData, setMechanicData] = useState({
    MOTLicenseNumber: "",
    tradingName: "",
    firstLineOfAddress: "",
    city: "",
    postcode: "",
    mechanicHasAgreed: false
  });

  const [carData, setCarData] = useState({
    regNumber: "",
    make: "",
    engineSize: "",
    nickName: "",
    ownerHasAgreed: false,
  });

  const PageDisplay = () => {
    if (page === 0) {
      // return <RegisterUser formData={formData} setFormData={setFormData} />;
      return <RegisterUser userData={userData} setUserData={setUserData} setPage={setPage}/>;
    } else if (page === 1) {
      return <RegisterMechanic  userData={userData} mechanicData={mechanicData} setMechanicData={setMechanicData}  setPage={setPage}/>;
    } else if (page === 2){
      return <RegisterCar userData={userData} carData={carData} setCarData={setCarData}  setPage={setPage}/>;
    }
  };

  return (
    <div className="register_page flex-column">
      <a href="/">
        <img src={logo} alt="" className="logo" />
      </a>

      {PageDisplay()}

      {/* <div className="register_page-btns">
        {page != 0 ? 
        <button className="btn" onClick={() => {
            userData.isMechanic ? setPage((currPage) => currPage - 1) : setPage((currPage) => currPage - 2)
          }}>Prev </button>
          :
          <></>}

        
      </div> */}
    </div>
  );
};
