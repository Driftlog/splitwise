import { useState } from "react"
import {register} from "./LoginAPI"
import { useNavigate } from "react-router-dom";
import splitwiseLogo from '../../assets/images/splitwise.png'


export default function Signup() {

    const navigate = useNavigate();

    let [isNew, setIsNew ] = useState(true)
    let [isRegistered, setIsRegistered] = useState("") 
    let [formData, setFormData] = useState(
        {
            name: "",
            email: "",
            password: ""
        }
    )

    const returnHome = () => {
        navigate("/")
    }

    const updateForm = (event: any) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            [event.target.name] : event.target.value
        }))

        if (isNew) setIsNew(prevState => !prevState)
    }

    async function submitForm(e: React.FormEvent) {
            e.preventDefault()
            try {
                const data = await register(formData)
                // navigate("/")
            } catch(error: any) {
                setIsRegistered(prevState => error.message);
            }
    }

    return (
        <div className="min-h-screen flex gap-4 justify-center items-center">
            <div className="flex p-4 gap-12 items-start">
                <img className="max-w-3xs" onClick={returnHome} src={splitwiseLogo}></img>
                <form className="flex flex-col gap-4" onSubmit={submitForm} method="POST"> 
                    <h2 className="uppercase text-gray-500 justify-self-start">introduce yourself</h2>
                        { isRegistered.length > 0 && 
                        <p className="bg-red-600">
                            The following errors occured: {isRegistered}
                        </p>}
                        <label className="text-2xl">Hi there! My name is
                            <input name="name" onChange={updateForm} value={formData.name} className="border border-gray-400 w-full max-w-3xs block mt-2" ></input>
                        </label>
                { !isNew &&
                    <fieldset className="flex flex-col gap-4">
                            <label className="text-xl"> Here's my <span className="font-medium">email address</span>:
                                <input name="email" onChange={updateForm} value={formData.email} className="border border-gray-400 w-full max-w-3xs block mt-2" ></input>
                            </label>
                            <label className="text-xl">And here's my <span className="font-medium">password</span>:
                                <input name="password" onChange={updateForm} value={formData.password} className="border border-gray-400 w-full max-w-3xs block mt-2" ></input>
                            </label>
                        <button className="text-2xl font-light max-w-40 min-h-14 rounded-md bg-orange-500 border text-white " type="submit"> Sign me up!</button>
                    </fieldset>
                    }
                    <a href="">By signing up, you accept the Splitwise Terms of Service.</a>
                </form>
            </div>
        </div>
    )
}