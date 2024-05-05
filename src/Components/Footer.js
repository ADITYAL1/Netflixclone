
const Footer = () => {
    
  const img=require('./Watch Box.png');
  return (
    <div className="bg-[#141414]   ">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="flex items-center flex-col md:flex-row justify-between">
          <a href="#" className="flex items-center mb-6 md:mb-2">
          <img src={img} className=" h-14  mr-10" alt="Flowbite Logo" />
          </a>
          <ul className="flex flex-wrap items-center mb-2 text-sm font-medium text-gray-500">
            
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/aditya-singh-935722259" target='_blank' rel='noreferrer' className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
        <hr className="my-6 sm:mx-auto border-[#282727] lg:my-8" />
        <span className="block text-sm text-gray-500 text-center dark:text-gray-400">
          Crafted By <a href="https://www.linkedin.com/in/aditya-singh-935722259" rel='noreferrer' target='_blank' className="text-white hover:underline">Aditya Singh</a>
        </span>
      </div>
    </div>
  )
}

export default Footer;