import React from 'react';
import './InfluencerAndPlatforms.css';
import PrimaryHeading from '../Heading/Heading';
import { social } from '../../data/data';

export default function InfluencerAndPlatforms({ text }) {
    const socialClasses = ['youtube', 'insta', 'tiktok', 'telegram', 'twitch', 'snap', 'fbgaming', 'podcast'];

    return (
        <>
            <div className="Influencer">
                <PrimaryHeading text='Any influencer, any platform' />
                
                <div className="Influencer-grid">
                    {
                        social.map((item, i) => (
                            <div className={`grid-cards ${socialClasses[i]}`} key={i}>
                                <img src={item?.icon} alt='logo' className='slider-image' />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}
