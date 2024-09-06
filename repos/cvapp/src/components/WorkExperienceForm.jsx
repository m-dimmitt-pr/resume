import React from 'react';
import { useId} from 'react';

//this only needs one work history from [{experience}]
function WorkExperienceForm(props) {

  
    const AddNewExperience = function (){ 
        props.addHandler() ;
    } 
    const id = useId();
    return (

        <div >
                
            <button type="button" onClick={AddNewExperience}>Add New</button>
              
             
            <div className = "form-container">        
                <label htmlFor= { id + 'company' } >Company</label>

                <input 
                    type="text"
                    name = 'company'
                    value={props.details[0].company}
                    onChange={()=>props.onChangeHandler(event, props.details[0].id)}
                    id={id + 'company'} 
                />
            </div>

                
            <label htmlFor={id + 'title'} >Title</label>

            <input 
            type="text"
            name = 'title'
            value={props.details[0].title}
            onChange={()=>props.onChangeHandler(event, props.details[0].id)}
            id={id + 'title'}
            /> 
                    
            <label htmlFor={id + 'startDate'} >startDate</label>

            <input 
            type="date"
            name = 'startDate'
            value={props.details[0].startDate}
            onChange={()=>props.onChangeHandler(event, props.details[0].id)}
            id={id + 'startDate'}
            /> 

            <label htmlFor={id + 'endDate'} >End Date</label>

            <input 
                type="date"
                name = 'endDate'
                value={props.details[0].endDate}
                onChange={()=>props.onChangeHandler(event, props.details[0].id)}
                id={id + 'endDate'}
            /> 

            <label htmlFor = {id + 'details'}>Details</label>
            <textarea 
                name = 'details'
                value={props.details[0].details}
                onChange={()=>props.onChangeHandler(event, props.details[0].id)}
                id={id + 'details'} 
                ></textarea>
        </div>
    )
}
            

export default WorkExperienceForm