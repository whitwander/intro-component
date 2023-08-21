import { useState } from "react"

const Form = () => {
    const [name, setName] = useState('')
    const [last, setLast] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <form className="bg-white w-80 lg:w-96 h-96 lg:h-full lg:pb-10 rounded-xl mt-5 flex items-center flex-col shadow-2xl">
            <input className="mt-3 placeholder:text-black placeholder:font-semibold border text-black rounded-xl border-gray w-72 p-3 lg:w-80 lg:mt-5" value={name} type="text" placeholder="First Name" onChange={(e) => setName(e.target.value)} />
            <input className="mt-3 placeholder:text-black placeholder:font-semibold border text-black rounded-xl border-gray w-72 p-3 lg:w-80 lg:mt-5" value={last} type="text" placeholder="Last Name" onChange={(e) => setLast(e.target.value)} />
            <input className="mt-3 placeholder:text-black placeholder:font-semibold border text-black rounded-xl border-gray w-72 p-3 lg:w-80 lg:mt-5" value={email} type="text" placeholder="E-mail Address" onChange={(e) => setEmail(e.target.value)} />
            <input className="mt-3 placeholder:text-black placeholder:font-semibold border text-black rounded-xl border-gray w-72 p-3 lg:w-80 lg:mt-5" value={password} type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button className="bg-green mt-3 mb-3 p-4 w-72 rounded-xl shadow-sm lg:w-80">CLAIM YOUR FREE TRIAL</button>
            <p className="text-gray text-xs text-center w-60">By clicking the button, you are agreeing to our <span className="text-background font-semibold">Terms and Services</span></p>
        </form>
    )
}

export default Form