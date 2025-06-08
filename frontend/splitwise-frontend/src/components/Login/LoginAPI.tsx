import { signUp } from "../../interfaces/models"

    export const register = async (formData: signUp) => {
        const registerUrl = "api/registration"   

        try {
        const resp = await fetch(registerUrl, {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json"
                }
            })

            if (!resp.ok) {
                throw Error("Email has already been registered")
            } 

            return resp.json()
        } catch(error: any) {
            throw error
        }

    }


