import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Item = ({ data, id }) => {
    const navigate = useNavigate('/music');
    // const [text, setText] = useState('');

    return (
        <>
            <div
                className='albumCover'
                style={{ backgroundImage: `url(${data.imgUrl})` }}
                onClick={() => {
                    navigate(`/music/${id}`, { state: data });
                }}
                onMouseOver={() => {
                    // 이거 하면 title이 나왔으면 좋겠어요
                }}
            ></div>
        </>
    );
};

export default Item;
