import {useState} from "react"
import Header from "./Header"

const Login =()=> {
    const [isSignInForm,setIsSignInFrom] = useState(true)
    const toggleSignInForm =()=> {
        setIsSignInFrom(!isSignInForm)
    }
    console.log(isSignInForm);
    return(
        <div>
            <Header/>
            <div className="absolute w-full bg-black bg-opacity-40">
            <img className=""  src="
                https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                alt="login-bg"/>
            </div>
 
        <form className="p-16 absolute w-3/12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg">
        <h1 className="font-bold text-3xl py-4">{isSignInForm?"Sign In":"Sign Up"}</h1>
            {!isSignInForm&& (
            <input type="text" placeholder="Full name" className="p-4 my-4 w-full bg-gray-700 rounded-lg bg-opacity-50" />
            )}
            <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700 rounded-lg bg-opacity-50" />
            <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700 rounded-lg bg-opacity-50" />

            <button type="submit" className=" py-4 w-full mt-10 bg-red-600 rounded-sm text-white hover:bg-red-700">SIGN IN </button>
                <div className="flex mt-4">
                <input type="checkbox" name="remember-login" id="remember-login" />
                <p className="text-white mx-4">Remember me</p>  
            </div>

            <p className="flex mt-6 text-lg cursor-pointer"
                onClick={toggleSignInForm}>
                    {isSignInForm?"New to Netflix ? Sign Up Now"
                    :"Already User ! Login"}
                </p>
        </form>
        </div>
    )
}

export default Login ;
               