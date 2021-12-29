import React from 'react';
// import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const NavigationList = () => {

    const dispatch = useDispatch();

    const changePage = (e) => {
        dispatch({type:`${e.target.id}`})
    }
    
    return (
        <ul className='header-nav'>
            <li id="HOME_PAGE" onClick={changePage}>HOME</li>
            <li id="REPORTTHEFT_PAGE" onClick={changePage}>REPORT THEFT</li>
            <li id="ALLTHEFT_PAGE" onClick={changePage}>ALL THEFT</li>
            <li id="RESPONSIBLEEMPLOYEES_PAGE" onClick={changePage}>RESPONSIBLE EMPLOYEES</li>
            <li id="REGISTRATION_PAGE" onClick={changePage}>REGISTRATION</li>
            <li id="AUTHORIZATION_PAGE" onClick={changePage}>AUTHORIZATION</li>
        </ul>
    );
};

export default NavigationList;