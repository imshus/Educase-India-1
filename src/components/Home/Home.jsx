const Home = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex flex-col justify-end p-4 lg:border lg:border-gray-300 lg:shadow-md lg:w-1/4 min-h-[90%]">
                <span className="text-xl font-bold">Welcome to PopX</span>
                <span className="text-sm mt-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</span>
                <div>
                    <button className="bg-blue-500 text-sm text-white mt-4 px-4 py-1 rounded w-full cursor-pointer">
                        <p className="text-xs font-semibold">Create Account</p>
                    </button>
                    <button className="bg-pink-100 text-gray-800 mt-2 px-4 py-1 rounded w-full lg:mb-4 cursor-pointer">
                        <p className="text-xs font-semibold">Already Registered? Login</p>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Home

