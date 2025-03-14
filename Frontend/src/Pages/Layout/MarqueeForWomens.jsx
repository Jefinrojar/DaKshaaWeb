import React from 'react';

const MarqueeForWomens = () => {
    return (
        <div className="overflow-hidden whitespace-nowrap w-full bg-gray-100 py-2">
            <div className="animate-marquee inline-block">
                <p className="font-bold text-lg">Special discount for team of queens*</p>
            </div>
        </div>
    );
};

export default MarqueeForWomens;