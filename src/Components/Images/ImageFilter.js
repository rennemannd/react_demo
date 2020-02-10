import React, {useState} from 'react';
import './styles/ImageFilter.scss';

const ImageFilter = (props) => {
    return (
        <div className="form__group field" style={{marginTop: '3vw'}}>
            <input type="input" className="form__field" name="name" id='name' required
                   placeholder='Filter by [a-i]flower[1-9]?'
                   aria-label='Image'
                   aria-describedby='search'
                   value={props.input}
                   onChange={(e) => {
                       props.setInput(e.target.value)
                   }}/>
            <label htmlFor="name" className="form__label">Enter a flower name.</label>
        </div>
    )
};

export default ImageFilter;