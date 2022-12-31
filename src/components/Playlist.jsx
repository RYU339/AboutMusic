import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs, getDoc, doc } from 'firebase/firestore';
import '../style/Playlist.scss';
import Item from './Item';

const Playlist = () => {
    const musicCollection = collection(db, 'musics');
    const [data, setData] = useState([]);

    const getMusic = async () => {
        const data = await getDocs(musicCollection);
        setData(data.docs);
    };

    useEffect(() => {
        getMusic();
    }, [data.length]);

    // useEffect(() => {
    //     const getMusic = async () => {
    //         const data = await getDocs(musicCollection);
    //         data.forEach((item, i) => {
    //             musicList.push({ id: item.id, ...item.data() });
    //         });
    //     };
    //     getMusic();
    // }, []);

    return (
        <div className='albumList'>
            {data.map((music, i) => (
                <Item key={i} data={music.data()} id={music.id} />
            ))}
        </div>
    );
};

export default Playlist;

// {/* {musicList.map((music, i) => (
//     <div>{music}</div>
// ))} */}
// {/* {useEffect(() => {
//     const getMusic = async () => {
//         const data = await getDocs(musicCollection);
//         data.forEach((item) => {
//             // <div className='albumCover' style={{ backgroundImage: `url(${item.imgUrl})` }}></div>;
//             <div></div>;
//         });
//     };
//     getMusic();
// }, [])} */}
