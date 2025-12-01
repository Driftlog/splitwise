import { signUp } from "../../interfaces/models"

    export const register = async (formData: signUp) => {
        const registerUrl = "api/registration"   

        const resp = await fetch(registerUrl, {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json"
                }
            })

            if (!resp.ok) {
                const errMessage = await resp.text()
                throw new Error(errMessage)
            } 

            return resp.json()
        } 

    export const login = async(formData : Object) => {
        
    }




