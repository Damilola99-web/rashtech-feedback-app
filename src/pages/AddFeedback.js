import React, { useState } from 'react';

const AddFeedback = () => {

    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [escription, setDescription] = useState('')

    return (
        <div>
            <p>Create New Feedback</p>

            <form>
                <label>
                    <span>Feedback Title</span>
                    <span>Add a short, descriptive headline</span>
                    <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} />
                </label>
                <label>
                    <span>Category</span>
                    <span>Select a category</span>
                    <input list='category' value={category} onChange={(e)=> setCategory(e.target.value)} className=' bg-red-500' />
                    <datalist id='category'>
                        <option value="feature"></option>
                        <option value="ui"></option>
                        <option value="ux"></option>
                        <option value="enhancement"></option>
                        <option value="bug"></option>
                    </datalist>
                </label>
            </form>
        </div>
    );
}

export default AddFeedback;
