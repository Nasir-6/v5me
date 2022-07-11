import React, { useState } from 'react'

interface RegisterUserProps {}

export const RegisterUser: React.FC<RegisterUserProps> = ({}) => {

    const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
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

<label htmlFor='mechanic_check_input' className="checkbox_container" >
        Are you registering as a Mechanic?
        <input type="checkbox" name="mechanic_check" id="mechanic_check_input"
        checked={checked}
        onClick={handleChange}/>
        <span className="checkmark"></span>
    </label>
    

    {/* <div className="flex-row"> */}

    <label htmlFor='car_owner_check_input' className="checkbox_container" >
        Are you registering as a vehicle owner?
        <input type="checkbox" name="car_owner_check" id="car_owner_check_input"
        checked={checked}
        onClick={handleChange}/>
        <span className="checkmark"></span>
    </label>




      </form>
    </div>
  );
};