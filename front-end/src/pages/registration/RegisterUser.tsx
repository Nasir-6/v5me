import React, { useEffect, useRef, useState } from 'react'

interface RegisterUserProps {
    userData: UserData
    setUserData: React.Dispatch<React.SetStateAction<UserData>>
    setPage: React.Dispatch<React.SetStateAction<number>>
}

interface UserData{
    firstName: string;
    lastName: string;
    isMechanic: boolean;
    isCarOwner: boolean;
}

export const RegisterUser: React.FC<RegisterUserProps> = ({ userData, setUserData, setPage}) => {

    const [firstName, setFirstName] = useState(userData.firstName);
    const [lastName, setLastName] = useState(userData.lastName);

    
    // CheckBoxes
    const [isMechanic, setIsMechanic] = useState(userData.isMechanic);
    const [isCarOwner, setIsCarOwner] = useState(userData.isCarOwner);

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


    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();

 
    
        // CAN Redirect to Verify email page here!!
        if(!isMechanic && !isCarOwner){
            alert("Please sign up as a Mechanic or Car Owner");
            console.log("If loop worked");
            return;
        }

        // If mechanic - Go to mechanic page (Page 1)
        if(isMechanic) setPage(1);
        // IF not mechanics & Car owner (go to page 2)
        if(!isMechanic && isCarOwner) setPage(2)

      };

  return (
    
      <form action="" className="register_user_form flex-column" onSubmit={handleSubmit} ref={formRef}>
        <h1>Register User</h1>
        <input
          type="text"
          name="first_name"
          id="first_name_input"
          placeholder="First Name"
          className="input_field"
          onChange={(event) => setFirstName(event.target.value) }
          value={firstName}
          required
        />
        <input
          type="text"
          name="last_name"
          id="last_name_input"
          placeholder="Last Name"
          className="input_field"
          onChange={(event) => setLastName(event.target.value) }
          value={lastName}
          required
        />

        <label htmlFor="mechanic_check_input" className="checkbox_container flex-row">
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

        <label htmlFor="car_owner_check_input" className="checkbox_container flex-row">
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

        <input type="submit" className="btn" value="Next"/> 
      </form>
    
  );
};