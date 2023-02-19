import { CgSpinner } from "react-icons/cg";

const Spinner = () => {
    return ( 
        <section className='text-3xl flex justify-center mb-8'>
            <CgSpinner className="animate-spin h-20 w-20"/>
        </section>
     );
}
 
export default Spinner;
