import data from "../data/bios";
import { FaGithub, FaLink, FaLinkedin } from "react-icons/fa";

const Team = () => {
  return (
    <section className='max-w-6xl mx-auto flex flex-col justify-center items-center'>
      <h2 className='w-full text-stone-800 text-center text-4xl my-16 font-semibold'>
        Our Team
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {data.map((item, index) => (
          <article className='bg-white mb-10 shadow-lg rounded-lg overflow-hidden max-w-xs relative' key={index}>
          <img src={item.pictureURL} alt={item.name} className='mx-auto h-48 w-48 object-cover rounded-full shadow-lg' />
          <div className='py-4 px-6 pb-14 text-center'>
            <h3 className='text-xl font-semibold'>{item.name}</h3>
        
            <a href={item.websiteHref} target='_blank' rel='noreferrer' className='text-blue-500 hover:text-blue-700 text-sm mb-2 block'>
              {item.website}
            </a>
            <p className='text-stone-600 text-sm'>{item.bio}</p>
          </div>
          <div className='absolute bottom-0 left-0 right-0 mb-4'>
            <div className='flex justify-center items-center w-full text-center'>
              <a href={item.linkedIn} className='text-gray-600 hover:text-blue-600 text-xl mx-2'>
                <FaLinkedin />
              </a>
              <a href={item.github} className='text-gray-600 hover:text-blue-600 text-xl mx-2'>
                <FaGithub />
              </a>
              <a href={item.websiteHref} className='text-gray-600 hover:text-blue-600 text-xl mx-2'>
                <FaLink />
              </a>
            </div>
          </div>
        </article>
        
        ))}
      </div>
    </section>
  );
};

export default Team;
