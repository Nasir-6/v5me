import React, { useEffect, useState } from 'react'

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
              ownerHasAgreed: ownerHasAgreed
            });
          }, [ regNumber, make, engineSize, nickName, ownerHasAgreed]);

        return (
            <h1>Register Car</h1>
        );
        
}