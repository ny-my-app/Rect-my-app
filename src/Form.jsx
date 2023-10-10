import { useState } from 'react';

const Form = ({onAddTask}) =>{

  const [text,setText] = useState('');

  const submitForm = (e) =>{
    e.preventDefault();
    onAddTask(text);
    setText('');
    }
    return (
      <div>
        <form onSubmit={submitForm} className='Form'>
          <div>
            <input type="text"
            value={text}
            onChange={(e) => setText(e.target.value)} className='From-input'>
            </input>
          </div>
          <div>
            <button type ="submit" disabled ={text === ''} className='submit-button'><span>追加</span></button>
          </div>
        </form>
      </div>
    )
}

export default Form;