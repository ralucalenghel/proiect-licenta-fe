
import { EmailAuthProvider } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import FirebaseAuth from '../../components/FirebaseAuth';


export const Login = () => {

    const uiConfig = {
      signInFlow: 'popup',
      signInOptions: [EmailAuthProvider.PROVIDER_ID],
      callbacks: {
        signInFailure: (error) => { console.log(error) },
        signInSuccessWithAuthResult: (user) => { console.log(user)
        localStorage.setItem("loggedIn","true")
        window.location = "/"
        }, //to do: salvez userul pe Redux si fac redirect pe dashboard
      },

    };

    return(
        <FirebaseAuth uiConfig={uiConfig} firebaseAuth={auth}/>
    )

}

export default Login;