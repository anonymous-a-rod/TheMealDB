const About = () => {
  return (
    <section className='max-w-3xl mx-auto py-16 px-10'>
      <h1 className='w-full text-center text-stone-800 text-4xl mb-10 font-semibold'>
        About
      </h1>

      <p className='mb-4 text-stone-600'>
        <span className='text-5xl'>W</span>elcome to our meals database created
        in React with Tailwind CSS. Our team, led by Aaron Venema and consisting
        of Kelsey Jackson, Kamil Watson, Alex Hessler, Michael Plantamura, and
        Cliffton James, worked diligently to develop this project during our time at the Mimo web development Bootcamp.
      </p>

      <p className='mb-4 text-stone-600'>
        Our goal was to create a user-friendly interface where users can easily
        search for meals and recipes using theMealsDB API. We used a combination of cutting-edge React and Tailwind CSS, as well as other tools and techniques we acquired during the Mimo Bootcamp, to construct a sleek and sophisticated user interface.
      </p>

      <p className='mb-4 text-stone-600'>
        Thank you for using our meals database! We hope it helps you find some
        delicious recipes to try out.
      </p>
    </section>
  );
};

export default About;
