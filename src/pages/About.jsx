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
        Cliffton James, has worked hard to develop this project during our time
        in the Mimo Bootcamp.
      </p>

      <p className='mb-4 text-stone-600'>
        Our goal was to create a user-friendly database where users can easily
        search for meals and recipes using the Meals API. We used a combination
        of React, Tailwind CSS, and other tools and skills we learned in the
        Mimo Bootcamp to build a sleek and modern user interface.
      </p>

      <p className='mb-4 text-stone-600'>
        Thank you for using our meals database! We hope it helps you find some
        delicious recipes to try out.
      </p>
    </section>
  );
};

export default About;
