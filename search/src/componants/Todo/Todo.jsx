import React, { useState } from 'react'
import "../Todo/Todo.css"
import { QuizData} from '../../Data/Data'


const Todo = () => {
    const [index,setindex] = useState(0)
    const [ question , setquestion]    = useState(QuizData[index])
    const [lock,setlock] = useState(false)
    const [result,setresult] = useState(0)

    const currct_option = (e,index) =>{
        if(lock === false){
            if(index +1 ===question.answer) {
              e.target.classList.add("currect")
              setlock(true)
              setresult(result + 1)
            }
            else{
             e.target.classList.add("incurect")
             setlock(true)
            }
        }
    }

    const next = () => {
        if(lock ===true){
            setindex(index + 1)
            setquestion(QuizData[index])
            setlock(false)

            question.options.map((options)=>{
                options.e.target.classList.remove("currect")
                options.e.target.classList.remove("incurect")
                return null
            })
        }

    }
    
  return (
    <div>
        <div>
           <h1>{index +1 } {question.question}</h1>
        </div>


        <div>
      {question.options.map((opt,index)=>{
        return (
            <ul>
                <li key={index} onClick={(e) => currct_option(e,index)}> {opt}</li>
            </ul>
        )
      })}            
        </div>

        <div>
            <button onClick={next}>Next</button>
            <h1> { index + 1} out of {QuizData.length} </h1>
        </div>
    </div>
  )
}

export default Todo