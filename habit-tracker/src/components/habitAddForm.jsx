import React, { memo } from 'react';

const HabitAddForm = memo( props => {
        const inputRef = React.createRef();
        const onSubmit = (event) =>{
            event.preventDefault(); 
            const name = inputRef.current.value;
            name && props.onAdd(name);
            inputRef.current.value = '';
        }
    
        return (
            <form className='addForm' onSubmit={onSubmit}>
                <input 
                    ref={inputRef} 
                    className='addInput' 
                    type="text" 
                    placeholder='Habit' 
                    />
                <button className='addBtn'>Add</button>
            </form>
    );
    });


export default HabitAddForm;
