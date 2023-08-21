import { useState } from "react"

const Input = (props) => {
    const [name, setName] = useState('')
    const [last, setLast] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    
    return (
        <>
            <input className="mt-3 placeholder:text-black placeholder:font-semibold border text-black rounded-xl border-gray w-72 p-3 lg:w-80 lg:mt-5" value={name} type="text" placeholder="First Name" onChange={(e) => setName(e.target.value)} />
            <input className="mt-3 placeholder:text-black placeholder:font-semibold border text-black rounded-xl border-gray w-72 p-3 lg:w-80 lg:mt-5" value={last} type="text" placeholder="Last Name" onChange={(e) => setLast(e.target.value)} />
            <input className="mt-3 placeholder:text-black placeholder:font-semibold border text-black rounded-xl border-gray w-72 p-3 lg:w-80 lg:mt-5" value={email} type="text" placeholder="E-mail Address" onChange={(e) => setEmail(e.target.value)} />
            <input className="mt-3 placeholder:text-black placeholder:font-semibold border text-black rounded-xl border-gray w-72 p-3 lg:w-80 lg:mt-5" value={password} type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <p>{name}</p>
            <p>{last}</p>
        </>
    )
}

export default Input