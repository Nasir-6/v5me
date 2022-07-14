import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface RegisterCarProps {
    userData: UserData;
  carData: CarData;
  setCarData: React.Dispatch<React.SetStateAction<CarData>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

interface UserData {
  firstName: string;
  lastName: string;
  isMechanic: boolean;
  isCarOwner: boolean;
}

interface CarData {
  regNumber: string;
  make: string;
  engineSize: string;
  nickName: string;
  ownerHasAgreed: boolean;
}


export const RegisterCar: React.FC<RegisterCarProps> = ({userData,
    carData,
    setCarData,
    setPage,}) => {

        const [regNumber, setRegNumber] = useState(carData.regNumber);
        const [make, setMake] = useState(carData.make);
        const [engineSize, setEngineSize] = useState(carData.engineSize);
        const [nickName, setNickName] = useState(carData.nickName);

        // CheckBoxes
        const [ownerHasAgreed, setOwnerHasAgreed] = useState(carData.ownerHasAgreed);

        const handleOwnerHasAgreedCheckbox = () => {
          setOwnerHasAgreed(!ownerHasAgreed);
        };

        useEffect(() => {
          setCarData({
            regNumber: regNumber,
            make: make,
            engineSize: engineSize,
            nickName: nickName,
            ownerHasAgreed: ownerHasAgreed,
          });
        }, [regNumber, make, engineSize, nickName, ownerHasAgreed]);




        //   For submitting form and navigating
  const navigate = useNavigate();
  
        const handleSubmit = (event: React.SyntheticEvent) => {
          event.preventDefault();

          // CAN Redirect to Verify email page here!!
          if (!ownerHasAgreed) {
            alert("Please agree to the conditions");
            console.log("If loop worked");
            return;
          }

          // Maybe Validate all input here 


          //Send all data to DB and create!!!!
          console.log("Data Submitted to DB");
          // TODO: Navigate to the dashboard

        };

        const handleAutoFill = async () => {
          console.log(regNumber);
          // KP10XSG
          const carDetails = await fetch(
            "https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles",
            {
              method: "POST",
            //   mode: 'no-cors',
              body: JSON.stringify({ registrationNumber: "KP10XSG" }),
              headers: {
                "X-Api-Key": "kOxwBS2Jvr5bkfHpXJixU8L6jjCICZYy7FFRHkYQ",
                'Content-Type': 'application/json'
              },
            }
          )
            .then((res) => res.json())
            .then((json) => console.log(json))
            .catch((err) => console.log(err));

            console.log(carDetails)
        };

        return (
          <form
            action=""
            className="register_user_form flex-column"
            onSubmit={handleSubmit}
          >
            <h1>Register Car</h1>
            <input
              type="text"
              name="regNumber"
              id="regNumber_input"
              placeholder="Registration Number"
              className="input_field"
              onChange={(event) => setRegNumber(event.target.value)}
              value={regNumber}
              required
            />
            <button className="btn" onClick={handleAutoFill}>
              Auto fill
            </button>
            <input
              type="text"
              name="make"
              id="make_input"
              placeholder="Car Make"
              className="input_field"
              onChange={(event) => setMake(event.target.value)}
              value={make}
              required
            />

            <input
              type="text"
              name="engine_size"
              id="engine_size_input"
              placeholder="Engine Size"
              className="input_field"
              onChange={(event) => setEngineSize(event.target.value)}
              value={engineSize}
              required
            />

            <input
              type="text"
              name="nickname"
              id="nickname_input"
              placeholder="Nickname"
              className="input_field"
              onChange={(event) => setNickName(event.target.value)}
              value={nickName}
              required
            />

            <label
              htmlFor="has_owner_agreed_check_input"
              className="checkbox_container flex-row"
            >
              <p className="checkbox_label">
                I confirm this vehicle is registered to me and I may be asked to
                provide verification later.
              </p>
              <input
                type="checkbox"
                name="has_owner_agreed_check"
                id="has_owner_agreed_check_input"
                checked={ownerHasAgreed}
                onClick={handleOwnerHasAgreedCheckbox}
              />
              <span className="checkmark"></span>
            </label>

            <button
              className="btn"
              onClick={() => (userData.isMechanic ? setPage(1) : setPage(0))}
            >
              Prev{" "}
            </button>

            <input type="submit" className="btn" value="Submit" />
          </form>
        );
        
}