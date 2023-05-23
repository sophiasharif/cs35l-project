import React, {useState} from 'react';
import '../styles/Form.css';

const Form = () => {

  const emptyForm = {
    q1: '',
    q2: '',
    q3: '',
    q4: '',
    q5: 'files',
    q6: '',
    q7: '5'
  };
  
  const [formData, setFormData] = useState(emptyForm);

  const resetFormData = () => {
    setFormData(emptyForm);
  };

  const handleFormData = (event) => {
    setFormData(prevFormData => ({...prevFormData, [event.target.name]: event.target.value}));
  };

  const handleSubmit = async(event) => {
      event.preventDefault();
      try {
        let res = await fetch("https://httpbin.org/post", {
          method: "POST",
          body: JSON.stringify({
            q1: formData.q1,
            q2: formData.q2,
            q3: formData.q3,
            q4: formData.q4,
            q5: formData.q5,
            q6: formData.q6,
            q7: formData.q7
          }),
        });
        let resJson = await res.json();
        if (res.status === 200) {
          alert('Thanks for submitting the CS35l friendship matching form! Results will come out soon!')
          resetFormData();
        } else {
          alert("An error occurred when submitting your form!");
        }
      } catch (err) {
        console.log(err);
      }

      console.log(JSON.stringify({
        q1: formData.q1,
        q2: formData.q2,
        q3: formData.q3,
        q4: formData.q4,
        q5: formData.q5,
        q6: formData.q6,
        q7: formData.q7
      }))
  }

  return(
      <div>
          <form onSubmit={handleSubmit}>
              <fieldset>
              <h2>FrieMacS: A 35L Friend Matching Survey</h2> 
              <h3>(Because we all know we need it.)</h3>
                <div id="q1">
                  <p>Emacs or Vim?</p>
                  <div>
                    <input type="radio" id="Emacs" name="q1" value="Emacs" onChange={handleFormData} checked={formData.q1 === "Emacs"} required/>
                    <label htmlFor="Emacs"> Emacs</label><br/>
                  </div>
                  <div>
                    <input type="radio" id="Vim" name="q1" value="Vim" onChange={handleFormData} checked={formData.q1 === "Vim"}/>
                    <label htmlFor="Vim"> Vim</label><br/>
                  </div>
                </div>
                <div id="q2">
                  <p>Go to Eggert lecture or skip?</p>
                  <div>
                    <input type="radio" id="go" name="q2" value="go" onChange={handleFormData} checked={formData.q2 === "go"} required/>
                    <label htmlFor="go"> Go to lecture!</label><br/>
                  </div>
                  <div>
                    <input type="radio" id="zoom" name="q2" value="zoom" onChange={handleFormData} checked={formData.q2 === "zoom"}/>
                    <label htmlFor="zoom"> Get up at 8AM but Zoom in.</label><br/>
                  </div>
                  <div>
                    <input type="radio" id="recording" name="q2" value="recording" onChange={handleFormData} checked={formData.q2 === "recording"}/>
                    <label htmlFor="recording"> Sleep in and watch the recording.</label><br/>
                  </div>
                  <div>
                    <input type="radio" id="confused" name="q2" value="confused" onChange={handleFormData} checked={formData.q2 === "confused"}/>
                    <label htmlFor="confused"> You guys are going to class?</label><br/>
                  </div>
                </div>
                <div id="q3">
                  <p>Get egged or berged?</p>
                  <div>
                    <input type="radio" id="eggert" name="q3" value="eggert" onChange={handleFormData} checked={formData.q3 === "eggert"} required/>
                    <label htmlFor="eggert"> egged</label><br/>
                  </div>
                  <div>
                    <input type="radio" id="smallberg" name="q3" value="smallberg" onChange={handleFormData} checked={formData.q3 === "smallberg"}/>
                    <label htmlFor="smallberg"> &#40;small&#41;berged</label><br/>
                  </div>
                  <div>
                    <input type="radio" id="nachenberg" name="q3" value="nachenberg" onChange={handleFormData} checked={formData.q3 === "nachenberg"}/>
                    <label htmlFor="nachenberg"> &#40;nachen&#41;berged</label><br/>
                  </div>
                  <div>
                    <input type="radio" id="reinman" name="q3" value="reinman" onChange={handleFormData} checked={formData.q3 === "reinman"}/>
                    <label htmlFor="reinman"> Glenned ;&#41;</label><br/>
                  </div>
                  <div>
                    <input type="radio" id="none" name="q3" value="none" onChange={handleFormData} checked={formData.q3 === "none"}/>
                    <label htmlFor="none"> None of the above</label><br/>
                  </div>
                  <div>
                    <input type="radio" id="all" name="q3" value="all" onChange={handleFormData} checked={formData.q3 === "all"}/>
                    <label htmlFor="all"> All of the above</label><br/>
                  </div>
                </div>
                <div id="q4">
                  <p>How do you take notes?</p>
                  <div>
                    <input type="radio" id="iPad" name="q4" value="iPad" onChange={handleFormData} checked={formData.q4 === "iPad"} required/>
                    <label htmlFor="iPad"> iPad</label><br/>
                  </div>
                  <div>
                    <input type="radio" id="notebook" name="q4" value="notebook" onChange={handleFormData} checked={formData.q4 === "notebook"}/>
                    <label htmlFor="notebook"> Notebook</label><br/>
                  </div>
                  <div>
                    <input type="radio" id="laptop" name="q4" value="laptop" onChange={handleFormData} checked={formData.q4 === "laptop"}/>
                    <label htmlFor="laptop"> Laptop</label><br/>
                  </div>
                  <div>
                    <input type="radio" id="no-notes" name="q4" value="no-notes" onChange={handleFormData} checked={formData.q4 === "no-notes"}/>
                    <label htmlFor="no-notes"> Skill issue, I don't take notes.</label><br/>
                  </div>
                </div>
                <div id="q5">
                  <p>Favorite 35l assignment?</p>
                  <select onChange={handleFormData} name="q5" value={formData.q5} required>
                    <option value="files">Files and Shell Scripting</option>
                    <option value="scripting">Lisp and Python Scripting</option>
                    <option value="react">Chorus Lapilli</option>
                    <option value="git">Git Basics</option>
                    <option value="c">C Programming</option>
                    <option value="repo">Git Repository Organization</option>
                  </select>
                </div>
                <div id="q6">
                  <p>Does pineapple belong on Piazza?</p>
                  <div>
                    <input type="radio" id="yes" name="q6" value="yes" onChange={handleFormData} checked={formData.q6 === "yes"}/>
                    <label htmlFor="yes"> Yes, to balance out the acidity of Piazza.</label><br/>
                  </div>
                  <div>
                    <input type="radio" id="no" name="q6" value="no" onChange={handleFormData} checked={formData.q6 === "no"}/>
                    <label htmlFor="no"> Nothing belongs on Piazza, including CS35l. It looks like it was built in the 2nd century.</label><br/>
                  </div>
                </div>
                <div id="q7">
                <p>Give Eggert a Bruinwalk rating.</p>
                  <div>
                    <input type="range" id="rating" min="1" max="5" step="0.5" name="q7" list="values" onChange={handleFormData} value={formData.q7} required></input>
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
}

export default Form;