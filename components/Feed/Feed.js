import React from 'react';
import Header from './Header';
import Input from './Input';

const Feed = () => {
    
    return (
        <div className="text-white flex-1 border-l border-r border-gray-700 max-w-2xl sm:ml-[73px] xl:ml-[370px]">
            <Header />
            <Input />
        </div>
    );
};

export default Feed;