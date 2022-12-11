import React, {useEffect} from 'react';
import {FcGoogle} from "react-icons/fc";
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import {auth} from "../../utils/firebase";
import {NextRouter, useRouter} from "next/router";
import {useAuthState} from "react-firebase-hooks/auth";

const Login: React.FC = () => {
    const route: NextRouter = useRouter()
    const [user, loding] = useAuthState(auth);
    const googleProvider: GoogleAuthProvider = new GoogleAuthProvider();
    const googleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            await route.push("/")
        }catch (e) {
            console.log(e)
        }
    };

    useEffect(() => {
        if (user){
            route.push("/").then();
        }else{
            console.log("Login")
        }
    }, [route, user]);
    

    return (
        <div className={"shadow-xl mt-32 p-10 text-gray-700 rounded-lg"}>
            <h2 className={"text-2xl font-medium"}>Join Today</h2>
            <div className={"py-4"}>
                <h3 className={"py-4"}>Sign in with one of the providers</h3>
                <button onClick={googleLogin} className={"text-white bg-gray-700 w-full font-medium rounded-lg flex align-middle p-4 gap-2"}>
                    <FcGoogle className={"text-2xl"}/>
                    Sign in with Google
                </button>
            </div>
        </div>
    );
};

export default Login;
