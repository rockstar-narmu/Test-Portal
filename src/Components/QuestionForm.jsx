import React, { useState } from "react";
import "../styles/QuestionForm.css";

const QuestionForm = () => {
  const [topic, setTopic] = useState("");
  const [numQuestions, setNumQuestions] = useState("");
  const [questionType, setQuestionType] = useState("MCQs");
  const [proficiency, setProficiency] = useState("Beginner");
  const [selectedTopics, setSelectedTopics] = useState([]);

  const topicsList = ["Topic 1", "Topic 2", "Topic 3", "Topic 4", "Topic 5"];

  const handleCheckboxChange = (topic) => {
    setSelectedTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]
    );
  };

  return (
    <div className="form-container">
      <div className="header">
        <h2>Logo</h2>
        <div className="profile-icon"></div>
      </div>

      <div className="form-content">
        <label>Topic:</label>
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />

        <label>Number of Questions:</label>
        <input
          type="number"
          value={numQuestions}
          onChange={(e) => setNumQuestions(e.target.value)}
        />

        <div className="options">
          <p>Question Type:</p>
          <label>
            <input
              type="radio"
              value="MCQs"
              checked={questionType === "MCQs"}
              onChange={(e) => setQuestionType(e.target.value)}
            />
            MCQs
          </label>
          <label>
            <input
              type="radio"
              value="Fill in the blanks"
              checked={questionType === "Fill in the blanks"}
              onChange={(e) => setQuestionType(e.target.value)}
            />
            Fill in the blanks
          </label>
        </div>

        <div className="options">
          <p>Proficiency Level:</p>
          <label>
            <input
              type="radio"
              value="Beginner"
              checked={proficiency === "Beginner"}
              onChange={(e) => setProficiency(e.target.value)}
            />
            Beginner
          </label>
          <label>
            <input
              type="radio"
              value="Intermediate"
              checked={proficiency === "Intermediate"}
              onChange={(e) => setProficiency(e.target.value)}
            />
            Intermediate
          </label>
          <label>
            <input
              type="radio"
              value="Advanced"
              checked={proficiency === "Advanced"}
              onChange={(e) => setProficiency(e.target.value)}
            />
            Advanced
          </label>
        </div>

        <div className="topics">
          <p>Relevant Topics:</p>
          {topicsList.map((topic) => (
            <label key={topic}>
              <input
                type="checkbox"
                checked={selectedTopics.includes(topic)}
                onChange={() => handleCheckboxChange(topic)}
              />
              {topic}
            </label>
          ))}
        </div>

        <button className="generate-btn">
          Generate Questions <span>➜</span>
        </button>
      </div>
    </div>
  );
};

export default QuestionForm;
