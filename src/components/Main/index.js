import Form from "../Form"

const Main = () => {
    return (
        <div className="bg-background h-full md:h-screen text-white flex flex-col lg:flex-row lg:justify-center lg:items-center lg:gap-10 xl:px-40">
            <img src="/images/bg-intro-mobile.png" className="absolute h-screen z-0 w-80 lg:hidden" alt="bg mobile" />
            <img className="absolute hidden lg:block h-screen z-0 w-full" src="/images/bg-intro-desktop.png" alt="" />
            <div className="flex flex-col xl:w-4/5">
                <h1 className="text-3xl lg:text-5xl 2xl:text-6xl lg:w-96 2xl:w-1/2 2xl:self-center font-semibold text-center text-white pt-20">Learn to code by watching others</h1>
                <p className="text-center pt-5 lg:text-xl w-80 lg:w-96 self-center">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but undestanding how developers think is invaluable.</p>
            </div>
            <div className="z-10 flex flex-col lg:w-1/2 xl:w-2/3">
                <button className=" w-80 flex flex-col self-center bg-blue items-center z-10 text-white rounded-xl p-4 shadow-2xl mt-14 lg:w-96">
                    <span className="font-semibold">Try it free 7 days</span>
                    <b></b> then $20/mo.thereafter
                </button>
                <div className="flex justify-center pb-10 z-10">
                    <Form />
                </div>
            </div>
        </div>
    )
}

export default Main