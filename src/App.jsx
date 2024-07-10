import { useState } from 'react'
import './App.css'
import { data } from './assets/data'
import InputCollection from './components/InputCollection'

function App() {
  const [value, setValue] = useState([])
  const [answerText, setAnswerText] = useState('')
  const answer = 'earth';
  const setAnswer = (e) => {
    if (e.target.className === 'answerWord') {
      setValue(prevState => [...prevState, e.target.value])
    }
  }
  const clearFields = (inputs) => {
    setValue([])
    inputs.forEach(input => {
      input.value = ''
    });
  }
  const checkAnswer = () => {
    const formattedValue = value.join('');
    const inputs = document.querySelectorAll('input[type="text"]');
    if (formattedValue === answer) {
      setAnswerText(formattedValue)
      clearFields(inputs)
    } else if (value.length < answer.length) {
      alert('All Highlighted Fields are required!')
      clearFields(inputs)
      return
    } else {
      alert('Wrong Answer!')
      clearFields(inputs)
      return
    }
  }
  return (
    <>
      <h1>Jumble Words</h1>
      <p>Unscramble the jumbles, one letter to each square, to spell words as suggested by the clues</p>
      {
        data.length > 0 &&
        <>
          <table className='main-table' border={1}>
            <tbody>
              {
                data.map(data => (
                  <tr key={data.id}>
                    <td style={{fontWeight:'bold', padding:'10px'}}>#{data.id}</td>
                    <td>{data.question}</td>
                    <td>
                      <table style={{ width: '100%', padding: '10px' }}>
                        <tbody>
                          <tr>
                            <td>{data.jumbledWord}</td>
                          </tr>
                          <tr>
                            <td id={data.id}>
                              <InputCollection data={data} setAnswer={setAnswer} />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
          <div className="flex" style={{ margin: '30px' }}>
            <button onClick={checkAnswer} style={{ background: 'green', color: '#fff' }}>Submit</button>
          </div>
        </>
      }
      <div className='flex-div'>
        <div className="answer-section"><h3>Mystery Answer</h3></div>
        <div className="answer">
          <div className="answer-question">
            <p>It is the third planet from the Sun and the only astronomical object known to harbor life.</p>
          </div>
          <div className="answer-container">
            <input type="text" disabled value={answerText} style={{ border: '2px solid' }} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
