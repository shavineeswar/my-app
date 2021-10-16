import {useAuth0} from '@auth0/auth0-react'
import axios from 'axios';


function LoginAuth(){
//     const {loginWithPopup,loginWithRedirect,logout,user,isAuthenticated,getAccessTokenSilently} = useAuth0()


//     function callApiroute(){
//         axios.get("http://localhost:9999/")
//         .then(response =>console.log(response.data))
//         .catch(error =>console.log(error.message))
//     }

//     async function callProtectedApiroutes(){
//         try{
//         const token =await getAccessTokenSilently();
//         const response = await axios.get('http://localhost:9999/protected',{
//             headers:{
//                 authorization: `Bearer ${token}`
//             },
//         });
//         console.log(response.data);
//     }catch(error){
//         console.log(error.message);
//     }

// }

//     return(
//         <div>
//             <h1></h1>
//             <ul>
//                 <li>
//                     <button onClick={loginWithPopup}>Login with Popup</button>
//                 </li>
//                 <li>
//                     <button onClick={logout}>Logout</button>
//                 </li>
//                 <li>
//                     <button onClick={loginWithRedirect}>Login with redirect</button>
//                 </li>
//             </ul>

//             <ul>
//             <li>
//                     <button onClick={callApiroute}>Call Api route</button>
//                 </li>
                
//                 <li>
//                     <button onClick={callProtectedApiroutes}>Call Protected Api routes </button>
//                 </li>
                
//             </ul>




//             <h3>User is {isAuthenticated ? "Logged in" : "Not logged in"}</h3>
//             {isAuthenticated  && (
//             <pre style={{textAlign:'start'}}>{JSON.stringify(user,null,2)}</pre>)}
//         </div>
//     );




}

export default LoginAuth