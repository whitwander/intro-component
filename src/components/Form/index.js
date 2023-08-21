import Input from "../Input"

const Form = () => {

    return (
        <form className="bg-white w-80 lg:w-96 h-96 lg:h-full lg:pb-10 rounded-xl mt-5 flex items-center flex-col shadow-2xl">
            <Input />
            <button className="bg-green mt-3 mb-3 p-4 w-72 rounded-xl shadow-sm lg:w-80">CLAIM YOUR FREE TRIAL</button>
            <p className="text-gray text-xs text-center w-60">By clicking the button, you are agreeing to our <span className="text-background font-semibold">Terms and Services</span></p>
        </form>
    )
}

export default Form