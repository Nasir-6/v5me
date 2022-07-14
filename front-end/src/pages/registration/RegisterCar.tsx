import React from 'react'

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
        return (
            <h1>Register Car</h1>
        );
}