import React from 'react';
import './Verticals.css';
import PrimaryHeading from '../Heading/Heading';
import { verticals } from '../../data/data';

export default function Verticals({ text }) {


    return (
        <>
            <div className="verticals">
                <PrimaryHeading text='Our Verticals' />

                <div className="verticals-grid">
                    {
                        verticals.map((item, i) => (
                            <div className={`verticals-cards ${item.text.toLowerCase()}`} key={i}>
                                <h3>{item.text.toUpperCase()}</h3>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}
