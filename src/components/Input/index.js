const Input = (props) => {
    return (
        <input className="mt-3 placeholder:text-black placeholder:font-semibold border rounded-xl border-gray w-72 p-3 lg:w-80 lg:mt-5" type="text" placeholder={props.placeholder} />
    )
}

export default Input