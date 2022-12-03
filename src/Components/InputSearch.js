import React from 'react';


const InputSearch = ({ setName, setAdjective, inputRefName, inputRefAdjective, handleSubmit}) => {

    return (
        <div className='containerInput'>
            <div className='title'>
            <h1>Jason Team</h1>
            </div>
            <div className='formContainer'>
            <form className='form' onSubmit={handleSubmit}>
                <div className='formDiv'>
                    <label htmlFor='inputName'>Name</label>
                    <input id='inputName' type='text' name='Name' ref={inputRefName} placeholder='Enter the name' onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className='formDiv'>
                    <label htmlFor='inputName'>Adjective</label>
                    <input id='inputName' type='text' name='Adjective' ref={inputRefAdjective} placeholder='Enter the adjectives' onChange={(e) => setAdjective(e.target.value)}/>
                </div>
                <div className='formDivBtn'>
                    <button type='submit'>Create member</button>
                </div>
            </form>
            </div>
        </div>
    );
};

export default InputSearch;