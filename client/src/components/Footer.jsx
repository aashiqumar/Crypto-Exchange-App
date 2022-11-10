import logo from '../../images/logo.png';

const Footer = () => {
    return (
        <div className='w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer'>
            <div className='w-full flex sm:flex-row flex-col justify-between items-center my-4'>
                <div className='flex flex-[0.5] justify-center items-center'>
                    <img src={logo} alt="logo" className='w-32'/>
                </div>

                <div className='flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full'>
                    <a href='https://instagram.com/drylest'> <p className='text-white text-base text-center mx-2 cursor-pointer'>Instagram</p> </a>
                    <a href='https://twitter.com/drylest'> <p className='text-white text-base text-center mx-2 cursor-pointer'>Twitter</p> </a>
                    <a href='https://youtube.com/drylast'> <p className='text-white text-base text-center mx-2 cursor-pointer'>YouTube</p> </a>
                    <a href='https://aashiqumar.com'> <p className='text-white text-base text-center mx-2 cursor-pointer'>Developer Site</p> </a>
                </div>
            </div>

            <div className='flex justify-center items-center flex-col mt-5'>
                <p className='text-white text-sm text-center'>Contact Us </p>
                <p className='text-white text-sm text-center'>support@drylest.com</p>
            </div>

            <div className='sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5'/>

            <div className='sm:w-[90%] w-full flex justify-between items-center mt-3'>
                <p className='text-white text-sm text-center'>Drylest 2022 by Aashiq Umar</p>
                <p className='text-white text-sm text-center'>All rights reserved</p>
            </div>
            
        </div>
    );
}

export default Footer;