import React, {useEffect, useState} from 'react';

const ImageGrid = (props) => {
    const [images, setImages] = useState([]);

    // an explanation on useEffect https://dev.to/spukas/4-ways-to-useeffect-pf6
    useEffect(() => {
        setImages(props.images);
    }, []); // this will occur on initial render

    return (
        <div className='grid flower-container'>
            {
                images.filter(img => {
                    if (props.filter.trim() !== '') {
                        // if you would like to practice or learn about regular expressions visit
                        // https://regexone.com/ and run through the lessons!
                        const regexp = new RegExp(escapeRegExp(props.filter.trim().toLowerCase()));
                        if (img) {
                            const result = img.name.trim().toLowerCase().match(regexp);
                            return result && result.length > 0;
                        }
                        return false;
                    }
                    return true;
                }).map((img) => {
                    return <Flower name={img.name} src={images[images.indexOf(img)].url}/>
                })
            }
        </div>
    );
};

const Flower = (props) => {
    return (
        <div style={{padding: '20px'}}>
            <h5>{props.name}</h5>
            <img
                className='flower-card'
                src={props.src}
                style={{
                    cursor: 'pointer',
                    width: '200px',
                    height: '200px'
                }} alt={`Link failed from ${props.src}`}/>
        </div>
    )
};

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

export default ImageGrid;