import React, { useEffect, useState } from 'react'

interface RegisterUserProps {
    userData: UserData
    setUserData: React.Dispatch<React.SetStateAction<UserData>>
}

interface UserData{
    firstName: string;
    lastName: string;
    isMechanic: boolean;
    isCarOwner: boolean;
}

export const RegisterUser: React.FC<RegisterUserProps> = ({ userData, setUserData}) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    
    // CheckBoxes
    const [isMechanic, setIsMechanic] = useState(false);
    const [isCarOwner, setIsCarOwner] = useState(false);

    const handleMechanicCheckbox = () => {
        setIsMechanic(!isMechanic);
    };

    const handleCarOwnerCheckbox = () => {
        setIsCarOwner(!isCarOwner);
    };

    useEffect(() => {
        setUserData({
            firstName: firstName,
            lastName: lastName,
            isMechanic: isMechanic,
            isCarOwner: isCarOwner
        })
    }, [firstName, lastName, isMechanic, isCarOwner])

  return (
    <div>
      <form action="" className="register_user_form flex-column">
        <h1>Register User</h1>
        <input
          type="text"
          name="first_name"
          id="first_name_input"
          placeholder="First Name"
          className="input_field"
          onBlur={(event) => setFirstName(event.target.value) }
          required
        />
        <input
          type="text"
          name="last_name"
          id="last_name_input"
          placeholder="Last Name"
          className="input_field"
          onBlur={(event) => setLastName(event.target.value) }
          required
        />

        <label htmlFor="mechanic_check_input" className="checkbox_container">
          Are you registering as a Mechanic?
          <input
            type="checkbox"
            name="mechanic_check"
            id="mechanic_check_input"
            checked={isMechanic}
            onClick={handleMechanicCheckbox}
          />
          <span className="checkmark"></span>
        </label>

        <label htmlFor="car_owner_check_input" className="checkbox_container">
          Are you registering as a vehicle owner?
          <input
            type="checkbox"
            name="car_owner_check"
            id="car_owner_check_input"
            checked={isCarOwner}
            onClick={handleCarOwnerCheckbox}
          />
          <span className="checkmark"></span>
        </label>
      </form>
    </div>
  );
};