import React, { useState } from "react";
import { useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import "../styles/Form.css";

const Form = () => {
  const { user } = useAuthContext();
  const email = user.email;

  const [formData, setFormData] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "files",
    q6: "",
    q7: "5",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadForm = async () => {
      try {
        const response = await fetch(`https://friemacs-backend.onrender.com/api/survey/${email}`, {
          method: "GET",
          headers: { 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${user.token}`
          }
        });
        if (response.ok) {
          const surveyResponse = await response.json();
          setFormData({
            q1: surveyResponse.q1 || "",
            q2: surveyResponse.q2 || "",
            q3: surveyResponse.q3 || "",
            q4: surveyResponse.q4 || "",
            q5: surveyResponse.q5 || "files",
            q6: surveyResponse.q6 || "",
            q7: surveyResponse.q7 || "5",
          });
        } else {
          setFormData({
            q1: "",
            q2: "",
            q3: "",
            q4: "",
            q5: "files",
            q6: "",
            q7: "5",
          });
        }
      } catch (error) {
        setFormData({
          q1: "",
          q2: "",
          q3: "",
          q4: "",
          q5: "files",
          q6: "",
          q7: "5",
        });
      } finally {
        setLoading(false);
      }
    };

    loadForm();
  }, [email]);

  const handleFormData = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  //dummy email and name fields for now.
  //when adding user auth, change things
  const handleSubmit = async (event) => {

    if (!user) {
      alert('You must be logged in!')
      return
    }

    event.preventDefault();
    try {
      const stringBody = JSON.stringify({
        email: user.email,
        name: user.name,
        q1: formData.q1,
        q2: formData.q2,
        q3: formData.q3,
        q4: formData.q4,
        q5: formData.q5,
        q6: formData.q6,
        q7: formData.q7,
      });
      let res = await fetch("https://friemacs-backend.onrender.com/api/survey/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${user.token}`
        },
        body: stringBody,
      });
      let resJson = await res.json();
      if (res.status === 200) {
        alert(
          "Thanks for submitting the CS35l friendship matching form! Your matches are available in the Results page."
        );
      } else {
        alert("An error occurred when submitting your form!");
      }
    } catch (err) {
    }
  };

  return (
    <div>
      {loading && <h3>Loading your previous answers...</h3>}
      <h3>Feel free to submit the survey as many times as you'd like. We'll save your previous response for when you come back! </h3>
      <form onSubmit={handleSubmit}>
        <fieldset id="survey_field">
          <div className="question">
            <p>Emacs or Vim?</p>
            <div>
              <input
                type="radio"
                id="Emacs"
                name="q1"
                value="Emacs"
                onChange={handleFormData}
                checked={formData.q1 === "Emacs"}
                required
              />
              <label htmlFor="Emacs"> Emacs</label>
              <br />
            </div>
            <div>
              <input
                type="radio"
                id="Vim"
                name="q1"
                value="Vim"
                onChange={handleFormData}
                checked={formData.q1 === "Vim"}
              />
              <label htmlFor="Vim"> Vim</label>
              <br />
            </div>
          </div>
          <div className="question">
            <p>Go to Eggert lecture or skip?</p>
            <div>
              <input
                type="radio"
                id="go"
                name="q2"
                value="go"
                onChange={handleFormData}
                checked={formData.q2 === "go"}
                required
              />
              <label htmlFor="go"> Go to lecture.</label>
              <br />
            </div>
            <div>
              <input
                type="radio"
                id="zoom"
                name="q2"
                value="zoom"
                onChange={handleFormData}
                checked={formData.q2 === "zoom"}
              />
              <label htmlFor="zoom"> Get up at 8AM but Zoom in.</label>
              <br />
            </div>
            <div>
              <input
                type="radio"
                id="recording"
                name="q2"
                value="recording"
                onChange={handleFormData}
                checked={formData.q2 === "recording"}
              />
              <label htmlFor="recording">
                {" "}
                Sleep in and watch the recording.
              </label>
              <br />
            </div>
            <div>
              <input
                type="radio"
                id="confused"
                name="q2"
                value="confused"
                onChange={handleFormData}
                checked={formData.q2 === "confused"}
              />
              <label htmlFor="confused"> You guys are going to class?</label>
              <br />
            </div>
          </div>
          <div className="question">
            <p>Get egged or berged?</p>
            <div>
              <input
                type="radio"
                id="eggert"
                name="q3"
                value="eggert"
                onChange={handleFormData}
                checked={formData.q3 === "eggert"}
                required
              />
              <label htmlFor="eggert"> egged</label>
              <br />
            </div>
            <div>
              <input
                type="radio"
                id="smallberg"
                name="q3"
                value="smallberg"
                onChange={handleFormData}
                checked={formData.q3 === "smallberg"}
              />
              <label htmlFor="smallberg"> &#40;small&#41;berged</label>
              <br />
            </div>
            <div>
              <input
                type="radio"
                id="nachenberg"
                name="q3"
                value="nachenberg"
                onChange={handleFormData}
                checked={formData.q3 === "nachenberg"}
              />
              <label htmlFor="nachenberg"> &#40;nachen&#41;berged</label>
              <br />
            </div>
            <div>
              <input
                type="radio"
                id="reinman"
                name="q3"
                value="reinman"
                onChange={handleFormData}
                checked={formData.q3 === "reinman"}
              />
              <label htmlFor="reinman"> Glenned ;&#41;</label>
              <br />
            </div>
            <div>
              <input
                type="radio"
                id="none"
                name="q3"
                value="none"
                onChange={handleFormData}
                checked={formData.q3 === "none"}
              />
              <label htmlFor="none"> None of the above</label>
              <br />
            </div>
            <div>
              <input
                type="radio"
                id="all"
                name="q3"
                value="all"
                onChange={handleFormData}
                checked={formData.q3 === "all"}
              />
              <label htmlFor="all"> All of the above</label>
              <br />
            </div>
          </div>
          <div className="question">
            <p>How do you take notes?</p>
            <div>
              <input
                type="radio"
                id="iPad"
                name="q4"
                value="iPad"
                onChange={handleFormData}
                checked={formData.q4 === "iPad"}
                required
              />
              <label htmlFor="iPad"> iPad</label>
              <br />
            </div>
            <div>
              <input
                type="radio"
                id="notebook"
                name="q4"
                value="notebook"
                onChange={handleFormData}
                checked={formData.q4 === "notebook"}
              />
              <label htmlFor="notebook"> Notebook</label>
              <br />
            </div>
            <div>
              <input
                type="radio"
                id="laptop"
                name="q4"
                value="laptop"
                onChange={handleFormData}
                checked={formData.q4 === "laptop"}
              />
              <label htmlFor="laptop"> Laptop</label>
              <br />
            </div>
            <div>
              <input
                type="radio"
                id="no-notes"
                name="q4"
                value="no-notes"
                onChange={handleFormData}
                checked={formData.q4 === "no-notes"}
              />
              <label htmlFor="no-notes"> I don't take notes</label>
              <br />
            </div>
          </div>
          <div className="question">
            <p>Favorite 35l assignment?</p>
            <select
              onChange={handleFormData}
              name="q5"
              value={formData.q5}
              required
            >
              <option value="files">Files and Shell Scripting</option>
              <option value="scripting">Lisp and Python Scripting</option>
              <option value="react">Chorus Lapilli</option>
              <option value="git">Git Basics</option>
              <option value="c">C Programming</option>
              <option value="repo">Git Repository Organization</option>
            </select>
          </div>
          <div className="question">
            <p>Does pineapple belong on Piazza?</p>
            <div>
              <input
                type="radio"
                id="yes"
                name="q6"
                value="yes"
                onChange={handleFormData}
                checked={formData.q6 === "yes"}
              />
              <label htmlFor="yes">
                {" "}
                Yes, to balance out the acidity of Piazza.
              </label>
              <br />
            </div>
            <div>
              <input
                type="radio"
                id="no"
                name="q6"
                value="no"
                onChange={handleFormData}
                checked={formData.q6 === "no"}
              />
              <label htmlFor="no">
                {" "}
                Nothing belongs on Piazza, including 35l. It looks like it was
                built in 200 BC.
              </label>
              <br />
            </div>
          </div>
          <div className="question">
            <p>Give Eggert a Bruinwalk rating.</p>
            <div>
              <input
                type="range"
                id="rating"
                min="1"
                max="5"
                step="0.5"
                name="q7"
                list="values"
                onChange={handleFormData}
                value={formData.q7}
                required
              ></input>
              <datalist id="values">
                <option value="1" label="1"></option>
                <option value="2" label="2"></option>
                <option value="3" label="3"></option>
                <option value="4" label="4"></option>
                <option value="5" label="5"></option>
              </datalist>
            </div>
          </div>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;