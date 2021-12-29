import React from 'react';
import { useSelector } from 'react-redux';
import Authorization from './AuthorizationPage/Authorization';
// import { useDispatch } from 'react-redux';
import Home from './HomePage/Home';
import Registration from './RegistrationPage/Registration';
import AllTheft from './AllTheftPage/AllTheft';
import ReportTheft from './ReportTheftPage/ReportTheft';
import ResponsibleEmployees from './ResponsibleEmployeesPage/ResponsibleEmployees';


const Main = () => {

    
    // const dispatch = useDispatch()

    const homePage = useSelector(state => state.changePageReducer.isHomePage)
    const registrationPage = useSelector(state => state.changePageReducer.isRegistrationPage)
    const authorizationPage = useSelector(state => state.changePageReducer.isAuthorizationPage)
    const allTheftPage = useSelector(state => state.changePageReducer.isAllTheftPage)
    const reportTheftPage = useSelector(state => state.changePageReducer.isReportTheftPage)
    const responsibleEmployeesPage = useSelector(state => state.changePageReducer.isResponsibleEmployeesPage)

    

    const page = () => {
      
        if (homePage) {     
           return  <Home />
        } else if (registrationPage) {
            return  <Registration />
        } else if (authorizationPage) {
            return <Authorization />
        } else if (allTheftPage) {
            return <AllTheft />
        } else if (reportTheftPage) {
            return <ReportTheft />
        } else if (responsibleEmployeesPage) {
            return <ResponsibleEmployees />
        }
    }

    return (
        <div>
                          
            {page()}
                      
        </div>
    );
};

export default Main;