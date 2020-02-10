import React, {useState} from 'react';
import ImageGrid from '../../Components/Images/ImageGrid';
import ImageFilter from '../../Components/Images/ImageFilter';
import images from '../../Components/Images/data/imgs';

const Home = (props) => {
    const [input, setInput] = useState('');

    return (
        <div>
            <div>
                <h1 style={{'text-align': 'center'}}>
                    -=- React Demo -=-
                </h1>
            </div>
            <div className='m-auto'>
                <ImageFilter input={input} setInput={setInput}/>
                <ImageGrid filter={input} images={images}/>
            </div>
        </div>
    )
};

export default Home;