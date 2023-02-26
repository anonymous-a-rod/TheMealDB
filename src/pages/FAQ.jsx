import Question from "../components/Question";
import questions from "../data/questions";

const FAQ = () => {
  return (
    <div className='max-w-4xl mx-auto py-16 px-10'>
      <h1 className='w-full text-center text-stone-800 text-4xl mb-10 font-semibold'>FAQ</h1>
        <div>
          { questions && questions.map((question, index)=> {
            return (
              <Question
                key={question.answer + index}
                question={question.question}
                answer={question.answer}
              />
            )
          })}
        </div>
    </div>
    
  );
};

export default FAQ;