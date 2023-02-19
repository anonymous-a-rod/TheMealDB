import data from "../data/bios"
import { FaGithub, FaLink, FaLinkedin } from "react-icons/fa"

const Team = () => {

    return ( 
        <section className="max-w-6xl mx-auto flex flex-col justify-center items-center">
            <h2 className="text-4xl pb-8">Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((item, index) => (
                <article className="flexcflex-col justify-between border border-gray-400 rounded-md max-w-xs flex flex-col items-center relative"
                    key={index}
                >
                    <div className="flex flex-col items-center p-4">
                        <img src={item.pictureURL} alt={item.name} className="w-full mb-2 max-h-[200px] object-cover rounded-md " />
                        <h3 className="text-lg font-medium">{item.name}</h3>
                        <a href={item.websiteHref} target="_blank" rel="noreferrer" className="text-blue-500 hover:text-blue-700">{item.website}</a>
                        <p className="text-gray-500 my-2 text-center">{item.bio}</p>
                    </div>
                    <div className="relative bottom-0 flex justify-center gap-4 pb-2 pt-2 border-t border-gray-400 w-full bg-black rounded-bl-md rounded-br-md">
                        <a href={item.linkedIn} className="text-white hover:text-blue-500" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                        <a href={item.github} className="text-white hover:text-blue-500" target="_blank" rel="noreferrer"><FaGithub /></a>
                        <a href={item.websiteHref} className="text-white hover:text-blue-500" target="_blank" rel="noreferrer"><FaLink /></a>
                    </div>
                </article>   
            ))}
            </div>
        </section>
     );
}
 
export default Team;