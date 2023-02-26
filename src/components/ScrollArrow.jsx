import { TbArrowBigUpLines } from "react-icons/tb";

const ScrollArrow = ({scrollToTop, arrowDisplay}) => {
    return ( 
        <div 
            className={(arrowDisplay)?
            'flex flex-col items-center fixed bottom-5 right-1 xl:right-10 xl:bottom-20 cursor-pointer z-10 transition-all delay-150':'fixed bottom-5 -right-20 md:bottom-20 md:-right-20 transition-all delay-150'}    
            onClick={scrollToTop}
        >
            <TbArrowBigUpLines className="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl"/>
            <label className="text-sm hidden xl:block">Back to top</label>
        </div>
     );
}
 
export default ScrollArrow;