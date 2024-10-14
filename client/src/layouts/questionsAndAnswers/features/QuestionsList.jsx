import React from 'react';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import axios from 'axios';

import SearchQuestions from './SearchQuestions.jsx';
import Question from './Question.jsx';
import PrimaryButton from '../../../components/PrimaryButton.jsx';

export default function QuestionsList({ productId }) {
  const [questions, setQuestions] = useState([]);
  const [displayedQuestions, setDisplayedQuestions] = useState(1);

  const handleLoadMoreQuestions = (e) => {
    setDisplayedQuestions((displayedQuestions) => displayedQuestions + 2);
  };

  useEffect(() => {
    axios
      .get(`/qa/questions?product_id=${productId}`)
      .then((result) => {
        console.log(result.data.results);
        setQuestions(result.data.results);
      })
      .catch((err) => console.log(err));
  }, [productId]);

  return (
    <div className="question-list container-xl ">
      <div className="d-flex align-items-lg-start">
        <SearchQuestions />
        <PrimaryButton label={'More Questions'} plus={true} />
        <PrimaryButton label={'Add a Question'} plus={false} />
      </div>
      {questions.map((question) => {
        console.log(question);
        return <Question key={question.question_id} question={question} />;
      })}
    </div>
  );
}
QuestionsList.propTypes = {
  productId: PropTypes.number.isRequired,
};
