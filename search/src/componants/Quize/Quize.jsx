import React, { useRef, useState } from 'react'
import { data } from '../../assets/data'
import './Quize.css'

const Quize = () => {
  const [index, setindex] = useState(1)
  const [question, setquestion] = useState(data[index])
  const [lock, setlock] = useState(false)
  const [score, setscore] = useState(0)
  const [result, setresult] = useState(false)


  const Option1 = useRef(null)
  const Option2 = useRef(null)
  const Option3 = useRef(null)
  const Option4 = useRef(null)

  let option_array = [Option1, Option2, Option3, Option4]

  const CheckAns = (e, ans) => {
    if (lock === false) {
      if (question.ans === ans) {
        e.target.classList.add("currect")
        setlock(true)
        setscore(score +1)
      }

      else {
        e.target.classList.add("increct")
        setlock(true)

        option_array[question.ans - 1].current.classList.add('currect')
      }
    }
  }


  const next = () => {
    if (lock === true) {
      if (index === data.length - 1) {
        setresult(true)
        return 0
      }
      setindex(index + 1);
      setquestion(data[index])
      setlock(false)

      option_array.map((option) => {
        option.current.classList.remove("currect")
        option.current.classList.remove("increct")
        return null;
      })
    }
  }

  const reset = () => {
    setindex(0);
    setquestion(data[index])
    setscore(0)
    setlock(false)
    setresult(false)


  }

  return (
    <div>
      <div>auize app</div>
      {result ? <></> : <div>
        <div className="qus">{index + 1} {question.question}</div>

        <ul>
          <li ref={Option1} onClick={(e) => { CheckAns(e, 1) }}>{question.option1}</li>
          <li ref={Option2} onClick={(e) => { CheckAns(e, 2) }}>{question.option2}</li>
          <li ref={Option3} onClick={(e) => { CheckAns(e, 3) }}>{question.option3}</li>
          <li ref={Option4} onClick={(e) => { CheckAns(e, 4) }}>{question.option4}</li>
        </ul>

        <button onClick={next}>  Next</button>

        <div> {index + 1}out of {data.length} </div>
      </div>}

      {result ? <><div>
        you score {score} out of {data.length}
        <button onClick={reset}>Reset</button>
      </div></> : <></>}


    </div>
  )
}

export default Quize