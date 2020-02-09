import React from 'react'
import './setup-form.styles.scss'

const SetUpForm = ({ updateStateProp, checkInputValues, projectInfo }) => (
    <form className="setup-form">

        <label htmlFor='projectName'>Name your project</label>
        <input onKeyUp={updateStateProp} id='projectName' type='text' placeholder={projectInfo.projectName} />

        <label htmlFor='projectHeight'>Project Height</label>
        <input onKeyUp={updateStateProp} id='projectHeight' type='tel' placeholder={projectInfo.projectHeight} />

        <label htmlFor='projectWidth'>Project Width</label>
        <input onKeyUp={updateStateProp} id='projectWidth' type='tel' placeholder={projectInfo.projectWidth} />

        <button onClick={checkInputValues} id='submit' className='button'>Lets Go</button>
    
    </form>
)

export default SetUpForm