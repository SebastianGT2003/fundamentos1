
import {auth} from "../firebase/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import React from "react";

function ejemplomil() {

    async function handleOnCLick(){

        const googleProvider= new GoogleAuthProvider();
        await signInWithGoogle(googleProvider);


    }
    
    async function  signInWithGoogle(googleProvider){
        try {
            const res= await signInWithPopup(auth, googleProvider);
            console.log(res);
        } catch (error) {
            console.error(error)
            
        }
    } 
    return(

        <div> 
            <button onClick={handleOnCLick}>Hola</button>
        </div>

    );
}
export default ejemplomil;