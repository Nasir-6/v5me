import React from 'react'
import logo from '../assets/v5me-logo-white.png'
import car_image from '../assets/car_img.png'

interface DashboardProps {

}

export const Dashboard: React.FC<DashboardProps> = ({}) => {
        return (
            <div className="dashboard_page flex-column">
                <img src={logo} alt="" className="logo-faded"/>
                <h1>My Cars</h1>
                <h2 className="car_reg_number">KP10XSG</h2>
                <h3 className="car_make">HONDA</h3>
                <img src={car_image} alt="" className='car_img' />

                <div className="mot_container">
                <h3 className="car_make">MOT</h3>
                </div>


                <button className='dashboard-btn'>+</button>



            </div>
            
        );
}