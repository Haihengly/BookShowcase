import { RiSearchLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BGBOOK from './image/BGBOOK.png'; // Corrected import path and filename
import { FiShoppingCart } from 'react-icons/fi';

const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const response = await fetch("https://api.itbook.store/1.0/new");
                const data = await response.json();
                setBooks(data.books);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        const delayFetch = () => {
            setTimeout(() => {
                fetchApi();
            }, 2000);
        };

        delayFetch();

    }, []);

    return (
        <div className="w-screen h-screen relative">
            <img
                src={BGBOOK}
                alt="Background"
                className="w-screen h-screen object-cover absolute"
            />
            <div className="w-full h-full absolute" style={{ backgroundColor: 'rgba(128, 128, 128, 0.717)' }}>
                <div className="w-full h-[5%] border-b-2 border-black flex justify-between px-28">
                    <div className="w-[15%] h-full flex justify-between items-center">
                        <h1 className="text-base font-serif font-medium text-black">Contact</h1>
                        <h1 className="text-base font-serif font-medium px-6 border-x-2 border-black text-black">Help</h1>
                        <h1 className="text-base font-serif font-medium text-black">Support</h1>
                    </div>
                    <div className="w-[15%] h-full flex justify-between items-center">
                        <h1 className="w-[60%] h-[80%] flex items-center justify-center font-serif text-base rounded-lg border-2 border-black">Register Now</h1>    
                        <h1 className="w-[30%] h-[80%] flex items-center justify-center font-serif text-base rounded-lg border-2 border-black">Log In</h1>     
                    </div>
                </div>

                <div className="w-full h-[10%] border-b-2 border-black px-28 flex items-center">
                    <Link to="/">
                        <h1 className="font-serif text-5xl font-bold text-black">HeaLeeBook</h1>
                    </Link>
                    <div className="w-[70%] h-full flex items-center justify-center">
                        <input
                            type="text"
                            className="w-[90%] h-[50%] rounded-lg border-2 border-black p-4"
                            placeholder="Search Books"
                        />
                        <div className="w-[5%] h-[50%] rounded-r-lg border-2 border-black bg-white flex items-center justify-center ml-[-0.5%]">
                            <RiSearchLine className="h-[80%] w-[80%] text-black" />
                        </div>
                    </div>
                    <div className="w-[30%] h-full flex ml-8 items-center">
                        <FiShoppingCart className="w-[40%] h-[40%] text-black" />
                    </div>
                </div>
                <div className="w-full h-[5%] flex justify-center border-b-2 border-black">
                    <div className="h-full w-[45%] flex justify-between items-center">
                        <Link to="/Home">
                            <h1 className="font-serif text-xl font-medium text-black hover:text-white">Home</h1>
                        </Link>
                        <Link to="/Featured">
                            <h1 className="font-serif text-xl font-medium text-black hover:text-white">Featured</h1>
                        </Link>
                        <Link to="/Arrivals">
                            <h1 className="font-serif text-xl font-medium text-black hover:text-white">Arrivals</h1>
                        </Link>
                        <Link to="/Blogs">
                            <h1 className="font-serif text-xl font-medium text-black hover:text-white">Blogs</h1>
                        </Link>
                        <Link to="/Shop">
                            <h1 className="font-serif text-xl font-medium text-black hover:text-white">Shop</h1>
                        </Link>
                        <Link to="/ContactUs">
                            <h1 className="font-serif text-xl font-medium text-black hover:text-white">Contact Us</h1>
                        </Link>
                    </div>
                </div>

                <div className="w-full h-[80%] px-28 pt-14">
                    <div className="w-full h-[7%] flex">
                        <div className="w-[45%] h-[50%] border-b-2 border-black" />
                        <div className="w-[10%] h-full flex justify-center items-center border-2 border-black">
                            <h1 className="font-serif text-xl font-medium text-black">All Books</h1>
                        </div>
                        <div className="w-[45%] h-[50%] border-b-2 border-black" />
                    </div>
                    <div className="w-full h-[93%] flex items-center">
                        <div className='h-[70%] w-[100%] overflow-x-auto flex scrollbar-hide'>
                            {
                                (loading) ? 
                                <div className="w-full h-full flex justify-center items-center">
                                    <div class="flex-col gap-4 w-full flex items-center justify-center">
                                        <div class="w-20 h-20 border-4 border-transparent text-white text-4xl animate-spin flex items-center justify-center border-t-white rounded-full">
                                            <div class="w-16 h-16 border-4 border-transparent text-gray-500 text-2xl animate-spin flex items-center justify-center border-t-gray-500 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                                : books.map((book, index) => {
                                    return (
                                        <div className='w-[17%] h-full flex-shrink-0 border-2 border-black ml-10 px-2 hover:border-white hover:shadow-white' key={index}>
                                            <div className='w-[100%] h-[65%]'>
                                                <img src={book.image} alt="" className='w-full h-full object-cover' />
                                            </div>
                                            <h1 className='text-center text-base font-mono text-black font-medium'>{book.title}</h1>
                                            <div className='w-full h-[20%] flex justify-center items-center'>
                                                <div className='w-[60%] h-[60%] border-2 border-black flex justify-center items-center hover:bg-white text-black font-mono'>
                                                    <h1 className='text-center text-xl font-mono text-black font-medium'>{book.price}</h1>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                             }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
