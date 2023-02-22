import data from "../data/bios"
import { FaGithub, FaLink, FaLinkedin } from "react-icons/fa"

const Team = () => {

    return ( 
        <section className="max-w-6xl mx-auto flex flex-col justify-center items-center">
            <h2 className="text-4xl pb-8">Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((item, index) => (
                <article className="bg-white shadow-lg rounded-lg overflow-hidden max-w-xs relative"
                    key={index}
                >
                <img src={item.pictureURL} alt={item.name} className="mx-auto h-48 w-48 object-cover rounded-full" />
                <div className="py-4 px-6 relative pb-9 text-center">
                  <h3 className="text-xl font-semibold ">{item.name}</h3>
                  
                  <a href={item.websiteHref} target="_blank" rel="noreferrer" className="text-blue-500 hover:text-blue-700 text-sm mb-2 block">{item.website}</a>
                  <p className="text-gray-600 text-sm mb-2">{item.bio}</p>
                </div>
                <div className="flex justify-center items-center absolute bottom-0 w-full text-center pb-3">
                    <a href={item.linkedIn} className="text-gray-600 hover:text-blue-600 text-xl mx-2"><FaLinkedin /></a>
                    <a href={item.github} className="text-gray-600 hover:text-blue-600 text-xl mx-2"><FaGithub /></a>
                    <a href={item.websiteHref} className="text-gray-600 hover:text-blue-600 text-xl mx-2"><FaLink /></a>
                </div>
              </article>
            ))}
            </div>
        </section>
     );
}
 
export default Team;