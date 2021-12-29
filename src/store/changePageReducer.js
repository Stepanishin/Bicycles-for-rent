const defaultState = {
    isHomePage: true,
    isRegistrationPage: false,
    isAuthorizationPage: false,
    isAllTheftPage: false,
    isReportTheftPage: false,
    isResponsibleEmployeesPage: false
  }
  
  
export const changePageReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "REGISTRATION_PAGE":
          return {...state, 
            isHomePage: false,
            isRegistrationPage: true,
            isAuthorizationPage: false,
            isAllTheftPage: false,
            isReportTheftPage: false,
            isResponsibleEmployeesPage: false 
          }
        case "HOME_PAGE":
          return {...state, 
            isHomePage: true,
            isRegistrationPage: false,
            isAuthorizationPage: false,
            isAllTheftPage: false,
            isReportTheftPage: false,
            isResponsibleEmployeesPage: false 
          }
          case "AUTHORIZATION_PAGE":
            return {...state, 
              isHomePage: false,
              isRegistrationPage: false,
              isAuthorizationPage: true,
              isAllTheftPage: false,
              isReportTheftPage: false,
              isResponsibleEmployeesPage: false 
            }
          case "ALLTHEFT_PAGE":
            return {...state, 
              isHomePage: false,
              isRegistrationPage: false,
              isAuthorizationPage: false,
              isAllTheftPage: true,
              isReportTheftPage: false,
              isResponsibleEmployeesPage: false 
            }
          case "REPORTTHEFT_PAGE":
              return {...state, 
                isHomePage: false,
                isRegistrationPage: false,
                isAuthorizationPage: false,
                isAllTheftPage: false,
                isReportTheftPage: true,
                isResponsibleEmployeesPage: false 
              }   
            case "RESPONSIBLEEMPLOYEES_PAGE":
              return {...state, 
                isHomePage: false,
                isRegistrationPage: false,
                isAuthorizationPage: false,
                isAllTheftPage: false,
                isReportTheftPage: false,
                isResponsibleEmployeesPage: true 
              }  
      default:
        return state
    }
  }