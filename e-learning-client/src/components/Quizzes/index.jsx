import React, { useState } from 'react';
import './style.css';

const QuizzForm = () => {
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctOptionIndex, setCorrectOptionIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);

  const handleAddQuestion = () => {
    if (question.trim() === '' || options.some(option => option.trim() === '')) {
        alert("You must add question with multiple choices !!")
        return;
    }

    const newQuestion = {
      question,
      options,
      correctOptionIndex
    };
    setQuestions([...questions, newQuestion]);
    setQuestion('');
    setOptions(['', '', '', '']);
    setCorrectOptionIndex(0);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="contquizz">
      <button onClick={toggleForm}>
        {showForm ? 'Hide Quizzes' : 'Add Quiz'}
      </button>
      {showForm && (
        <>
          <div className='quizz'>
            <label>Question:</label>
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </div>
          <div className='contain'>
            <label>Options:</label>
            {options.map((option, index) => (
              <div key={index}>
                <input
                  type="text"
                  value={option}
                  onChange={(e) =>
                    setOptions((prevOptions) => {
                      const newOptions = [...prevOptions];
                      newOptions[index] = e.target.value;
                      return newOptions;
                    })
                  }
                />
                <input
                  type="radio"
                  checked={correctOptionIndex === index}
                  onChange={() => setCorrectOptionIndex(index)}
                />
              </div>
            ))}
          </div>
          <button onClick={handleAddQuestion}>Add Question</button>
        </>
      )}
      <div className="preview">
        {questions.map((q, index) => (
          <div key={index}>
            <p>{q.question}</p>
            <ul>
              {q.options.map((option, i) => (
                <li key={i}>{option}</li>
              ))}
            </ul>
            <p>Correct Answer: {q.options[q.correctOptionIndex]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizzForm;
