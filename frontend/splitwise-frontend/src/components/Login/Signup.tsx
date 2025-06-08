import { useState } from "react"
import {register} from "./LoginAPI"
import { useNavigate } from "react-router-dom";

export default function Signup() {

    const navigate = useNavigate();

    let [isNew, setIsNew ] = useState(true)

    let [formData, setFormData] = useState(
        {
            name: "",
            email: "",
            password: ""
        }
    )

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
                console.log(data)
                // navigate("/")
            } catch(error: any) {
                console.log(error)
                console.log(error.message)
            }
    }

    return (
        <form className="p-4 flex flex-col gap-4" onSubmit={submitForm} method="POST"> 
            <legend className="uppercase text-gray-500">introduce yourself</legend>
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
        </form>
    )

}