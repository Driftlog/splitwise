import Navbar from "../Homepage/Navbar"
import { useEffect, useRef, useState } from "react"

export default function Login() {

    const googleClientID = '501217492631-b5j5au11vn7todhia2ho6ks7ehdtf430.apps.googleusercontent.com'

    const googleRef = useRef(null)

    const [user, setUser] = useState('')

    function handleCredentialResponse(response: any) {
        console.log('handling jwt response')
        console.log('response is ' + JSON.stringify(response))
        setUser(prevUser => response['clientId'])
        console.log(user)
        console.log(response.clientId)
        console.log(response['clientId'])
        
    }

    function decodeJwtResponse(token: string) {
        let base64Url = token.split('.')[1];
        let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        let jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    
        return JSON.parse(jsonPayload);
      }

    function googleSignOut(e: any) {
        console.log('time to log out')
        e.preventDefault()
        if (user) {
            window.google.accounts.id.disableAutoSelect()
            window.google.accounts.id.revoke(user)
            setUser('')
        }
    }

    useEffect(() => {
            window.google.accounts.id.initialize({
                client_id: googleClientID,
                callback: handleCredentialResponse,
            });

            window.google.accounts.id.renderButton(
                    googleRef.current,
                    { theme: 'outline', size: 'large' } // Customize button appearance if needed
                );
            
            window.google.accounts.id.prompt()
        } , []);

    
    
   return <div>
        <Navbar/>
        <div className="p-4">
             <form action="" className='p-4 flex flex-col gap-4 max-w-full border-1 border-gray-200 rounded-md' method='GET'>
                <legend className="text-3xl font-light">Log in</legend>
                <div className="">
                    <label> <h1>Email address</h1>
                        <input className="border-1 border-gray-200 w-full min-h-10" type='text'/>
                    </label>
                </div>
                <div>
                    <label > <h1 className="mb-1">Password</h1>
                        <input className="border-1 border-gray-200 w-full min-h-10" type='password'/>
                    </label>
                </div>
                <button className="border bg-emerald-600 text-white min-h-10" type='submit'>Log in</button>
                <p className="text-center text-green-700">Forgot your password?</p>
                <p className="text-gray-300 text-center"> --- or ---</p>       
                <div className="self-center" ref={googleRef}></div>
                <button className="border bg-emerald-600 text-white min-h-10"  onClick={googleSignOut}>Sign Out?</button>
            </form>
            

        </div>
        </div>
}