import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { collection, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase';
// import '../style/Music.scss';

const Music = () => {
    const musicCollection = collection(db, 'musics');
    const [music, setMusic] = useState({});
    const { musicID } = useParams();
    const { state } = useLocation();
    const navigate = useNavigate('/');

    useEffect(() => {
        setMusic({ ...state });
    }, []);

    const updateMusic = async () => {
        await updateDoc(doc(musicCollection, musicID), {
            title: music.title,
            artist: music.artist,
            album: music.album,
            released: music.released,
            length: music.length,
            trackNumber: parseInt(music.trackNumber),
            imgUrl: music.imgUrl,
        });
        navigate('/');
    };
    const deleteMusic = async () => {
        await deleteDoc(doc(musicCollection, musicID));
        navigate('/');
    };

    const changeHandler = (e) => {
        setMusic((prevItem) => ({ ...prevItem, [e.target.name]: e.target.value }));
    };

    return (
        <div className='container'>
            <h1>Playlist</h1>
            <form className='musicInfo'>
                <div className='title'>
                    제목 <input type='text' name='title' value={music.title || ''} onChange={changeHandler} />
                </div>
                <div className='artist'>
                    가수 <input type='text' name='artist' value={music.artist || ''} onChange={changeHandler} />
                </div>
                <div className='album'>
                    음반 <input type='text' name='album' value={music.album || ''} onChange={changeHandler} />
                </div>
                <div className='released'>
                    발매일 <input type='date' name='released' value={music.released || ''} onChange={changeHandler} />
                </div>
                <div className='length'>
                    길이 <input type='text' name='length' value={music.length || ''} onChange={changeHandler} />
                </div>
                <div className='trackNumber'>
                    트랙 번호 <input type='text' name='trackNumber' value={music.trackNumber || ''} onChange={changeHandler} />
                </div>
                <div className='imgUrl'>
                    이미지 <input type='text' name='imgUrl' value={music.imgUrl || ''} onChange={changeHandler} />
                </div>
                <button className='update' onClick={updateMusic}>
                    수정
                </button>
                <button className='delete' onClick={deleteMusic}>
                    제거
                </button>
            </form>
        </div>
    );
};

export default Music;
