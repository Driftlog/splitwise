

export default function Signup() {

    return (
        <form className="p-4 flex flex-col gap-4">
            <legend className="uppercase text-gray-500">introduce yourself</legend>

            <div>
                <label className="text-2xl">Hi there! My name is
                    <textarea className="border border-gray-400 max-w-3/4 block mt-2" ></textarea>
                </label>
            </div>

            <div>
                <label className="text-xl"> Here's my <span className="font-medium">email address</span>:
                    <input className="border border-gray-400 max-w-3/4 block mt-2" ></input>
                </label>
            </div>
            
            <div>
                <label className="text-xl">And here's my <span className="font-medium">password</span>:
                    <input className="border border-gray-400 max-w-3/4 block mt-2" ></input>
                </label>
            </div>
        </form>
    )

}