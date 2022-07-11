import React, { useState } from 'react'

interface RegisterUserProps {}

export const RegisterUser: React.FC<RegisterUserProps> = ({}) => {

    const [isMechanic, setIsMechanic] = useState(false);
    const [isCarOwner, setIsCarOwner] = useState(false);

    const handleMechanicCheckbox = () => {
        setIsMechanic(!isMechanic);
    };

    const handleCarOwnerCheckbox = () => {
        setIsCarOwner(!isCarOwner);
    };

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
        />
        <input
          type="text"
          name="last_name"
          id="last_name_input"
          placeholder="Last Name"
          className="input_field"
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