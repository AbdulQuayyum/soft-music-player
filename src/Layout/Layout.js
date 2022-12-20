import React from 'react'
import { useSelector } from 'react-redux';

import { Searchbar, Sidebar, MusicPlayer, TopPlay } from '../Components/Index';
import MainRoutes from '../Routes/Routes';

const Layout = (props) => {
    const { children } = props;
    const { activeSong } = useSelector((state) => state.player);
    return (
        <>
            <div className="relative flex">
                <Sidebar />
                <div className="flex-1 flex flex-col bg-gradient-to-br from-black">
                    <Searchbar />

                    <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
                        <div className="flex-1 h-fit pb-40">
                            <MainRoutes />
                        </div>
                        <div className="xl:sticky relative top-0 h-fit">
                            <TopPlay />
                        </div>
                    </div>
                </div>

                {activeSong?.title && (
                    <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
                        <MusicPlayer />
                    </div>
                )}
            </div>
            {children}
        </>
    )
}

export default Layout