import React, { Component } from 'react';

class HabitAddForm extends Component {
    inputRef = React.createRef();

    onSubmit = (event) =>{
        event.preventDefault(); 
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        this.inputRef.current.value = '';
    }

    render() {
        return (
                <form className='addForm' onSubmit={this.onSubmit}>
                    <input 
                        ref={this.inputRef} 
                        className='addInput' 
                        type="text" 
                        placeholder='Habit' 
                        />
                    <button className='addBtn'>Add</button>
                </form>
        );
    }
}

export default HabitAddForm;