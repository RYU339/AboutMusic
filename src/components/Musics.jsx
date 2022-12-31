import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, doc, setDoc } from 'firebase/firestore';
import '../style/Musics.scss';

const Musics = () => {
    const musicCollection = collection(db, 'musics');
    const [title, setTitle] = useState('');
    const [item, setItem] = useState({
        artist: '',
        album: '',
        released: '',
        length: '',
        trackNumber: '',
        imgUrl: '',
    });

    const titleHandler = (e) => {
        setTitle(e.target.value);
    };
    const changeHandler = (e) => {
        setItem((prevItem) => ({ ...prevItem, [e.target.name]: e.target.value }));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        setTitle('');
        setItem('');
    };

    const setMusic = async () => {
        await setDoc(doc(musicCollection, item.title), {
            title: item.title,
            artist: item.artist,
            album: item.album,
            released: item.released,
            length: item.length,
            trackNumber: parseInt(item.trackNumber),
            imgUrl: item.imgUrl,
        });
    };

    return (
        <div className='container'>
            <h1>Playlist</h1>
            <form className='musicInfo' onSubmit={submitHandler}>
                <div className='title'>
                    제목 <input type='text' name='title' value={item.title || ''} onChange={changeHandler} />
                </div>
                <div className='artist'>
                    가수 <input type='text' name='artist' value={item.artist || ''} onChange={changeHandler} />
                </div>
                <div className='album'>
                    음반 <input type='text' name='album' value={item.album || ''} onChange={changeHandler} />
                </div>
                <div className='released'>
                    발매일 <input type='date' name='released' value={item.released || ''} onChange={changeHandler} />
                </div>
                <div className='length'>
                    길이 <input type='text' name='length' value={item.length || ''} onChange={changeHandler} />
                </div>
                <div className='trackNumber'>
                    트랙 번호 <input type='text' name='trackNumber' value={item.trackNumber || ''} onChange={changeHandler} />
                </div>
                <div className='imgUrl'>
                    이미지 <input type='text' name='imgUrl' value={item.imgUrl || ''} onChange={changeHandler} />
                </div>
                <button type='submit' onClick={setMusic}>
                    추가
                </button>
            </form>
        </div>
    );
};

export default Musics;
