import Form from "../Form"

const Background = () => {
    return (
        <div className="bg-background h-full text-white flex flex-col">
            <img src="/images/bg-intro-mobile.png" className="absolute h-screen z-0 w-80" alt="bg mobile" />
            <h1 className="text-3xl font-semibold text-center text-white pt-20">Learn to code by watching others</h1>
            <p className="text-center pt-5 text w-80 self-center">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but undestanding how developers think is invaluable.</p>
            <button className=" w-80 flex flex-col self-center bg-blue items-center z-10 text-white rounded-xl p-4 shadow-2xl mt-14">
                <span className="font-semibold">Try it free 7 days</span>
                <b></b> then $20/mo.thereafter
            </button>
            <div className="flex justify-center pb-10 z-10">
            <Form />
            </div>
        </div>
    )
}

export default Background