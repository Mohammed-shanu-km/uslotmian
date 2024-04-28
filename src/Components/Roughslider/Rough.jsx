import React, { useState, useRef, useEffect } from "react";
import Layout from "../Layout/Layout";
import "./Rough.css";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { selectedLang } from "../../utils/recoil";
import { Toast } from 'primereact/toast';

const Rough = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    fetch('')
    .then(res => res.json())
    .then(res => console.log())
  }, []);

  
  const lang = useRecoilValue(selectedLang);
  // Array of questions
  const questions = [
    {
      id: 1,
      en: "You regularly make new friends.",
      mal: "നിങ്ങൾ പതിവായി പുതിയ സുഹൃത്തുക്കളെ ഉണ്ടാക്കുന്നു.",
      hi: "आप नियमित रूप से नए दोस्त बनाते हैं।",
    },
    {
      id: 2,
      en: "Complex and novel ideas excite you more than simple and straightforward ones.",
      mal: "ലളിതവും ലളിതവുമായ ആശയങ്ങളേക്കാൾ സങ്കീർണ്ണവും പുതുമയുള്ളതുമായ ആശയങ്ങൾ നിങ്ങളെ ഉത്തേജിപ്പിക്കുന്നു.",
      hi: "सरल और सीधे विचारों की तुलना में जटिल और नवीन विचार आपको अधिक उत्साहित करते हैं।",
    },
    {
      id: 3,
      en: "You usually feel more persuaded by what resonates emotionally with you than by factual arguments.",
      mal: "നിങ്ങൾ പതിവായി പുതിയ സുഹൃത്തുക്കളെ ഉണ്ടാക്കുന്നു.",
      hi: "आप नियमित रूप से नए दोस्त बनाते हैं।",
    },
    {
      id: 4,
      en: "Your living and working spaces are clean and organized.",
      mal: "നിങ്ങൾ പതിവായി പുതിയ സുഹൃത്തുക്കളെ ഉണ്ടാക്കുന്നു.",
      hi: "आप नियमित रूप से नए दोस्त बनाते हैं।",
    },
    {
      id: 4,
      en: "Your living and working spaces are clean and organized.",
      mal: "നിങ്ങൾ പതിവായി പുതിയ സുഹൃത്തുക്കളെ ഉണ്ടാക്കുന്നു.",
      hi: "आप नियमित रूप से नए दोस्त बनाते हैं।",
    },
    {
      id: 4,
      en: "Your living and working spaces are clean and organized.",
      mal: "നിങ്ങൾ പതിവായി പുതിയ സുഹൃത്തുക്കളെ ഉണ്ടാക്കുന്നു.",
      hi: "आप नियमित रूप से नए दोस्त बनाते हैं।",
    },
    {
      id: 4,
      en: "Your living and working spaces are clean and organized.",
      mal: "നിങ്ങൾ പതിവായി പുതിയ സുഹൃത്തുക്കളെ ഉണ്ടാക്കുന്നു.",
      hi: "आप नियमित रूप से नए दोस्त बनाते हैं।",
    },
    {
      id: 4,
      en: "Your living and working spaces are clean and organized.",
      mal: "നിങ്ങൾ പതിവായി പുതിയ സുഹൃത്തുക്കളെ ഉണ്ടാക്കുന്നു.",
      hi: "आप नियमित रूप से नए दोस्त बनाते हैं।",
    },
    { id: 5, en: "Select Gender." },
  ];
  const navigate = useNavigate();
  const toast = useRef(null);
  // State to keep track of selected option for each question
  const [selectedOptions, setSelectedOptions] = useState(
    Array(questions.length).fill(null)
  );
  const [opacity, setOpacity] = useState(0);

  // State to keep track of clicked status for each button
  const [clickedButtons, setClickedButtons] = useState(
    Array(questions.length).fill(null)
  );
  console.log(selectedOptions);

  // Ref for questions
  const questionRefs = useRef(Array(questions.length).fill(null));

  // Function to handle button click
  const handleButtonClick = (questionIndex, optionIndex, qid) => {
    // Update the selected option for the question
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[questionIndex] = { id: qid, choice: optionIndex };
    setSelectedOptions(newSelectedOptions);

    setOpacity(questionIndex + 1);

    // Update the clicked status for the button
    const newClickedButtons = [...clickedButtons];
    newClickedButtons[questionIndex] = optionIndex;
    setClickedButtons(newClickedButtons);

    // Scroll to the next question if it exists
    if (questionIndex < questions.length - 1) {
      questionRefs.current[questionIndex + 1].scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  // Function to handle gender selection
  const handleGenderSelection = (event) => {
    // Update selected options for all questions
    const updatedSelectedOptions = selectedOptions;
    updatedSelectedOptions[questions.length - 1] = {
      gender: event.target.value,
    };
    setSelectedOptions(updatedSelectedOptions);

    // Update opacity to show all questions
    setOpacity(questions.length);

    // Scroll to the last question
    questionRefs.current[questions.length - 1].scrollIntoView({
      behavior: "smooth",
    });
  };

  // Calculate completion percentage
  const completedQuestions = selectedOptions.filter(
    (option, index) =>
      index !== questions.length - 1 && option !== null && option !== ""
  ).length;
  const totalQuestions = questions.length - 1; // Excluding gender question from total
  const completionPercentage = (completedQuestions / totalQuestions) * 100;

  const handleSubmit = () => {
    const answeredQuestionsCount = selectedOptions.filter(option => option).length;
    if (answeredQuestionsCount === questions.length) 
      navigate('/energy')
   else{
      toast.current.show({severity:'warn', summary: 'Warning', detail:'please attend all questions', life: 3000});

   }
  }
  return (
    <Layout>
       <Toast ref={toast} />
      <div className="personality-container ">
        <div className="hidden">
          <div className="personality-heading">
            <h1>
              Free Personality Test by{" "}
              <span style={{ color: "#1C75BC" }}>Uslot</span>
            </h1>
          </div>
        </div>
        <div className="quistion-main-box ">
          <div
            className="loader"
            style={{ width: `${completionPercentage}%` }}
          ></div>
          <div className="complete-box">
            <h1>{completionPercentage.toFixed(0)}% completed</h1>
          </div>
          <div className="quistons-main scrollbar-hide">
            {/* Mapping questions */}
            {questions.map((question, questionIndex) => (
              <div
                className="q-t "
                key={questionIndex}
                ref={(el) => (questionRefs.current[questionIndex] = el)}
              >
                <div
                  className={`main-2  ${
                    questionIndex !== opacity && "opacity"
                  }`}
                >
                  <div className="q-t-heading">
                    <h1 className="fade-in">{question[lang.code]}</h1>
                  </div>
                </div>
                <div className="answer-button">
                  {/* Add onClick event handler to all buttons */}
                  {questionIndex !== questions.length - 1 ? (
                    <>
                      <h2
                        className={`agree-button ${
                          questionIndex !== opacity && "op"
                        }`}
                      >
                        Agree{" "}
                      </h2>
                      <div
                        className={`biground2-button ${
                          questionIndex !== opacity && "opa"
                        } ${
                          clickedButtons[questionIndex] === 1 ? "clicked" : ""
                        } size-2`}
                        onClick={() =>
                          handleButtonClick(questionIndex, 1, question.id)
                        }
                      ></div>
                      <div
                        className={`biground3-button  ${
                          questionIndex !== opacity && "opa"
                        } ${
                          clickedButtons[questionIndex] === 2 ? "clicked" : ""
                        } size-3`}
                        onClick={() =>
                          handleButtonClick(questionIndex, 2, question.id)
                        }
                      ></div>
                      <div
                        className={`biground4-button  ${
                          questionIndex !== opacity && "opa"
                        } ${
                          clickedButtons[questionIndex] === 3 ? "clicked" : ""
                        } size-4`}
                        onClick={() =>
                          handleButtonClick(questionIndex, 3, question.id)
                        }
                      ></div>
                      <div
                        className={`bigroundgreen2-button  ${
                          questionIndex !== opacity && "opa"
                        } ${
                          clickedButtons[questionIndex] === 4 ? "clicke" : ""
                        } size-5`}
                        onClick={() =>
                          handleButtonClick(questionIndex, 4, question.id)
                        }
                      ></div>
                      <div
                        className={`bigroundgreen3-button  ${
                          questionIndex !== opacity && "opa"
                        } ${
                          clickedButtons[questionIndex] === 5 ? "clicke" : ""
                        } size-6`}
                        onClick={() =>
                          handleButtonClick(questionIndex, 5, question.id)
                        }
                      ></div>
                      <h2
                        className={`disagree-button ${
                          questionIndex !== opacity && "op"
                        }`}
                      >
                        Disagree
                      </h2>
                     
                    </>
                    
                  ) : (
                    <div className="gender-dropdown">
                      <select onChange={handleGenderSelection}>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                      <div className="arrow-icon">&#9660;</div>
                    </div>
                    
                  )}
                   
                </div>
                
              </div>
            ))}
            {/* End of mapped questions */}
            <div className="complete-button">
              {/* <Link to={"/energy"}> */}
                <button onClick={handleSubmit}>Finish</button>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Rough;
