import Question from "../components/Question";
import questions from "../data/questions";

const FAQ = () => {
  return (
    <div className='mx-auto max-w-6xl'>
      <h1 className='w-full text-center text-stone-800 text-4xl mb-10 font-semibold'>FAQ</h1>
        <div>
          <Question
            question={questions[0].question}
            answer={questions[0].answer}
          />
          <Question
            question={questions[1].question}
            answer={questions[1].answer}
          />
          <Question
            question={questions[2].question}
            answer={questions[2].answer}
          />
          <Question
            question={questions[3].question}
            answer={questions[3].answer}
          />
          <Question
            question={questions[4].question}
            answer={questions[4].answer}
          />
        </div>
    </div>
    
  );
};

export default FAQ;