"use client"/*to run in cient side, we have to write this line. */
import React, { useState } from 'react'
/*First import usestate by writting usestate and again write usestatesnippets to import the snippets like :::::    const [first, setfirst] = useState(second)  */

const page = () => {
  /**The usestate is used to make variabls in react. */
  const [title, settitle] = useState("")/**use state ko "" empty box maa j aauxa tyo title variable maa janxa. */
  const [Description, setDescription] = useState("") /**use state ko "" empty box maa j aauxa tyo description variable maa janxa. */
  /*hamile form maa onSubmit= {submitHandler} function banayim
  aani yaha submitHandler function banayim to handle and stop 
  the page from reloading when we submit the form.
  Kinaki jun sukai form submit garda turant form 
  maa vareko data harauxa submit click garda
  aani tyo page pani turant reload hunxa. ho yei reload
  huna na dina ko lagi yo function banako. */

  /*Another usestate snippets to contain the title and description in the form of empty array.*/
  const [mainTask, setmainTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault() /*to prevent the form from submitting when we click submit button. */
    setmainTask([...mainTask, {title, Description}]);/*... is a spread operator.which helps to store title and description in setmainTask. */
    settitle("")/*yesle form submit garisake paxi form feri khali banauxa. */
    setDescription("")
  };
  const deleteHandler = (index) => {
    let copyTask = [...mainTask]/*copyTask variable maa main task lai copy gareko. */
    copyTask.splice(index,1);  
    setmainTask(copyTask)
  }


  let renderTask = <h2>No Task Available</h2>
  /*This is for adding task................................................. */
  if(mainTask.length > 0){  /*thisif statement is used to show no task available if we dont have any task. maintask 0 xaina vani task dekhau natra no task available dekhau.*/
    renderTask = mainTask.map((task, index) => {
      return (
      <li key={index} className='flex items-center justify-between mb-8'>
          <div className='flex items-center justify-between mb-5 w-2/3'>
        <h5 className='text-2xl font-semibold'>{task.title}</h5>
        <p className='text-lg font-medium'>{task.Description}</p>
      </div>
      <button
      onClick={() =>{   /*yaha delete handler call function bata gareko xa.
      direct call garni ho vani automatically call hunxa ra task add 
      huna bitikai delete hunxa. */
        deleteHandler(index)
      }}
      className='bg-red-400 text-white px-4 py-2 rounded font-bold'>Delete</button>
      </li>
  
      );
    })
  }
  /*This is for adding task  yaha samma...................................... */


  return (
    <div>
      <>
      <h1 className="bg-black text-white text-center font-bold text-5xl">Rajan's Todo List</h1>
      <form onSubmit= {submitHandler}>
          <input type = "text" className='text-2xl border-zinc-800 border-3 px-4 py-2 m-8' 
              placeholder='Enter your title here.' 
              value={title} /*here we are doing two way binding. hamile react lai pani vani rako xam ki data kasari store vai rako xa ra user lai pani data show garirako xam. */
              onChange={(e)=>{
                settitle(e.target.value)/*react lai pani batauna ko lai hamile title name ko variable banayim
                and i am making changes inside the variable not in user interface directly. i
                am making changes in variable because this help us to tell react that this is oue variable that we are
                making changes in the title.and the changes we made in variable, this is replicated in the user interface.
                this is called two way binding where we tell the react about the changes
                and we tell user also.*/
              }}
            />

          <input type = "text" className='text-2xl border-zinc-800 border-3 px-4 py-2 m-8' 
              placeholder='Enter your Description here.'
              value={Description}
              onChange = {(e)=>{
                setDescription(e.target.value)
            }}
          
          />
          <button className='bg-black text-white px-4 py-3 text-2xl font-bold rounded-3xl m-5'>Enter Task</button>

      </form>
      </>
      <hr />
      <div className='p-8 bg-slate-300'>
        <ul>{renderTask}</ul>
      </div>
    </div>
  )
}

export default page