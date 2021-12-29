import React from 'react';
import './ReportTheft.css'

const ReportTheft = () => {
    return (
        <div className='ReportTheft'>
            <h1 className='ReportTheft-title'>REPORT THEFT</h1>
            <form className='ReportTheft-form'>
                <input required type="text" name="licenseNumber" id="licenseNumber" placeholder='enter license number' />
                <div className='choose_container'>
                    <p className='ReportTheft-form-choose'>Choose type of your bike:</p>
                    <select required name="type" id="type">
                        <option value="general">General</option>
                        <option value="sport">Sport</option>
                    </select>
                </div>         
                <input required type="text" name="ownerFullName" id="ownerFullName" placeholder='enter Full Name' />
                <input required type="text" name="clientId" id="clientId" placeholder='enter clientId' />
                <div className='choose_container'>
                    <p className='ReportTheft-form-choose'>Choose color of your bike:</p>
                    <select name="color" id="color">
                        <option value="black">Black</option>
                        <option value="yellow">Yellow</option>
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                    </select>
                </div>

                <input type="date" name="date" id="date" />
                <textarea name="description" id="description" cols="5" rows="5" placeholder='enter additional information'></textarea>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ReportTheft;