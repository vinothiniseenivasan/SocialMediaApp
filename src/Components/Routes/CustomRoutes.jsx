import {Routes , Route} from 'react-router-dom' 
import UserDetails from '../UserDetails/UserDetails';
import SocialApp from '../SocialApp';



function CustomRoutes()
{
    return (
        <Routes>
            <Route path = "/"   element = {<SocialApp />}  /> 
            <Route path = "/user/:id"    element = {<UserDetails />} /> 

        </Routes>
    )
}

export default CustomRoutes;