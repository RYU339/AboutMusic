import React, { useEffect } from 'react';
import { db } from './firebase';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import Musics from './components/Musics';
import Playlist from './components/Playlist';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './components/NotFound';
import Root from './components/Root';
import Music from './components/Music';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <NotFound />,
        children: [
            { index: true, element: <Playlist /> },
            { path: '/music', element: <Musics /> },
            { path: '/music/:musicID', element: <Music /> },
        ],
    },
]);

const App = () => {
    // const musicCollection = collection(db, 'musics');

    // useEffect(() => {
    //     const getMusic = async () => {
    //         const musicRef = doc(musicCollection, 'Better Babe');
    //         const data = await getDoc(musicRef);
    //         if (data.exists()) console.log('결과: ', data.data());
    //         else console.log('결과 없음');
    //     };
    //     getMusic();
    // }, []);

    return (
        <>
            <RouterProvider router={router} />
            {/* <Playlist musicCollection={musicCollection} /> */}
            {/* <Musics musicCollection={musicCollection} /> */}
        </>
    );
};

export default App;
