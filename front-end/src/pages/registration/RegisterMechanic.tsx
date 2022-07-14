import React, { useEffect, useRef, useState } from "react";

interface RegisterMechanicProps {
  userData: UserData;
  mechanicData: MechanicData;
  setMechanicData: React.Dispatch<React.SetStateAction<MechanicData>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

interface UserData {
  firstName: string;
  lastName: string;
  isMechanic: boolean;
  isCarOwner: boolean;
}

interface MechanicData {
  MOTLicenseNumber: string;
  tradingName: string;
  firstLineOfAddress: string;
  city: string;
  postcode: string;
  mechanicHasAgreed: boolean;
}

export const RegisterMechanic: React.FC<RegisterMechanicProps> = ({
  userData,
  mechanicData,
  setMechanicData,
  setPage,
}) => {
  const [MOTLicenseNumber, setMOTLicenseNumber] = useState(
    mechanicData.MOTLicenseNumber
  );
  const [tradingName, setTradingName] = useState(mechanicData.tradingName);
  const [firstLineOfAddress, setFirstLineOfAddress] = useState(
    mechanicData.firstLineOfAddress
  );
  const [city, setCity] = useState(mechanicData.city);
  const [postcode, setPostcode] = useState(mechanicData.postcode);

  // CheckBoxes
  const [mechanicHasAgreed, setMechanicHasAgreed] = useState(
    mechanicData.mechanicHasAgreed
  );

  const handleMechanicHasAgreedCheckbox = () => {
    setMechanicHasAgreed(!mechanicHasAgreed);
  };

  useEffect(() => {
    setMechanicData({
      MOTLicenseNumber: MOTLicenseNumber,
      tradingName: tradingName,
      firstLineOfAddress: firstLineOfAddress,
      city: city,
      postcode: postcode,
      mechanicHasAgreed: mechanicHasAgreed,
    });
  }, [
    MOTLicenseNumber,
    tradingName,
    firstLineOfAddress,
    city,
    postcode,
    mechanicHasAgreed,
  ]);

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    // CAN Redirect to Verify email page here!!
    if (!mechanicHasAgreed) {
      alert("Please agree to the conditions");
      console.log("If loop worked");
      return;
    }

    if (userData.isCarOwner) setPage(2);
    // IF not

    //Send all data to DB and create!!!!
    console.log("Data Submitted to DB")
    
  };

  return (
    <form
      action=""
      className="register_user_form flex-column"
      onSubmit={handleSubmit}
      ref={formRef}
    >
      <h1>Register Mechanic</h1>
      <input
        type="text"
        name="MOTLicenseNumber"
        id="MOTLicenseNumber_input"
        placeholder="MOT License Number"
        className="input_field"
        onChange={(event) => setMOTLicenseNumber(event.target.value)}
        value={MOTLicenseNumber}
        required
      />
      <input
        type="text"
        name="trading_name"
        id="trading_name_input"
        placeholder="Trading Name"
        className="input_field"
        onChange={(event) => setTradingName(event.target.value)}
        value={tradingName}
        required
      />

      <input
        type="text"
        name="first_line_of_address"
        id="first_line_of_address_input"
        placeholder="First Line Of Address"
        className="input_field"
        onChange={(event) => setFirstLineOfAddress(event.target.value)}
        value={firstLineOfAddress}
        required
      />

      <input
        type="text"
        name="city"
        id="city_input"
        placeholder="City"
        className="input_field"
        onChange={(event) => setCity(event.target.value)}
        value={city}
        required
      />

      <input
        type="text"
        name="postcode"
        id="postcode_input"
        placeholder="Postcode"
        className="input_field"
        onChange={(event) => setPostcode(event.target.value)}
        value={postcode}
        required
      />

      <label
        htmlFor="has_mechanic_agreed_check_input"
        className="checkbox_container flex-row"
      >
        <p className="checkbox_label">
          I confirm this vehicle is registered to me and I may be asked to
          provide verification later.{" "}
        </p>
        <input
          type="checkbox"
          name="has_mechanic_agreed_check"
          id="has_mechanic_agreed_check_input"
          checked={mechanicHasAgreed}
          onClick={handleMechanicHasAgreedCheckbox}
        />
        <span className="checkmark"></span>
      </label>

      <button className="btn" onClick={() => setPage(0)}>Prev </button>

      <input type="submit" className="btn" value={userData.isCarOwner ? "Next" : "Submit"} />
    </form>
  );
};
