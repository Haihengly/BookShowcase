import BGBOOK from './image/BGBOOK.png';
import { Link } from 'react-router-dom';

const Firstpage = () => {
    return (
        <div className="w-screen h-screen">
            <img
                src={BGBOOK}
                alt="Background"
                className="w-screen h-screen object-cover absolute"
            />
            <div className="w-full h-full absolute px-40" style={{ backgroundColor: 'rgba(128, 128, 128, 0.717)' }}>
                <div className="w-full h-[20%] border-b-8 rounded-md border-white flex justify-between">
                    <div className="w-[25%] h-full flex items-center">
                        <h1 className="font-serif text-5xl font-bold text-white">HeaLeeBook</h1>
                    </div>
                    <div className="w-[50%] h-full">
                        <div className="h-[25%] w-[100%] flex" >
                            <div className='h-full w-[45%]'></div>
                                <div className="h-full w-[55%] flex justify-between">
                                <h1 className="w-[30%] h-full flex items-center justify-center font-serif text-xl text-black bg-white rounded-lg">Support</h1>
                                <h1 className="w-[35%] h-full flex items-center justify-center font-serif text-xl text-black bg-white rounded-lg">Register Now</h1>
                                <h1 className="w-[25%] h-full flex items-center justify-center font-serif text-xl text-black bg-white rounded-lg">Log In</h1>
                            </div>
                        </div>
                        <div className="w-full h-[75%] flex items-center justify-between">
                            <Link to="/Home">
                                <h1 className="font-serif text-2xl font-medium text-white">Home</h1>
                            </Link>
                            <Link to="/Featured">
                                    <h1 className="font-serif text-2xl font-medium text-white">Featured</h1>
                            </Link>
                            <Link to="/Arrivals">
                                    <h1 className="font-serif text-2xl font-medium text-white">Arrivals</h1>
                            </Link>
                            <Link to="/Blogs">
                                    <h1 className="font-serif text-2xl font-medium text-white">Blogs</h1>
                            </Link>
                            <Link to="/Shop">
                                    <h1 className="font-serif text-2xl font-medium text-white">Shop</h1>
                            </Link>
                            <Link to="/ContactUs">
                                    <h1 className="font-serif text-2xl font-medium text-white">Contact Us</h1>
                            </Link>
                        </div>

                    </div>
                </div>
                <div className="w-full h-[70%] flex pt-14">
                    <div className="w-[25%] h-[40%]">
                        <div className="w-full h-[50%] flex justify-center items-center">
                            <h1 className="text-6xl font-medium text-white">Up to 70% Off</h1>
                        </div>
                        <div className="w-full h-[50%] flex justify-center">
                            <Link to="/Shop" className="w-[40%] h-[40%] flex items-center justify-center font-serif text-xl text-black bg-white rounded-lg">
                                <h1>Shop Now</h1>
                            </Link>
                        </div>
                    </div>
                    <div className="w-[75%] h-[40%] flex justify-center pt-12">
                        <p className="text-xl font-medium text-white px-10">
                            Reading culture is one of the indispensable beauties in the spiritual life of people. Reading a book and then comprehending its beauty, its soul.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Firstpage;
