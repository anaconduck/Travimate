
const LoginClient = () => {


    

    return (
        <div className="flex h-screen">
            {/* Gambar di sisi kiri */}
            <div className="hidden lg:block lg:w-[600px]">
            <img
                className="object-cover w-full h-full"
                src="https://i.ibb.co/ftcDBrk/Group.png"
                alt="Background"
            />
            </div>
    
            {/* Form login di sisi kanan */}
            <div className="w-full lg:w-[400px] my-auto">
            <form className="ps-10 pb-3 mt-3">
            <img 
                src="https://i.ibb.co/17Y3jJC/kotak.png" 
                alt="kotak"/>
                <h1 className="text-2xl font-bold mt-5 mb-5">Masuk ke Akunmu</h1>
                <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="email">
                    Email
                </label>
                <input
                    className="shadow appearance-none border rounded h-[50px] w-[500px] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Contoh: johndee@gmail.com"
                />
                </div>
                <div className="mb-5">
                <label className="block text-gray-700 mb-2" htmlFor="password">
                    Password
                </label>
                <input
                    className="shadow appearance-none border rounded h-[50px] w-[500px] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type='password'
                    placeholder="6+ karakter"
                />
                </div>
            
                <button
                    className="bg-blue-800 text-white font-bold w-[500px] py-3 px-5"
                    type="button">
                    Sign In
                </button>
            </form>
            </div>
        </div>
    )
}

export default LoginClient