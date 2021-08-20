import React, {useEffect, useState} from 'react';
import styles from './ClientHeader.module.scss'

import bruce from '../../../assets/images/BruceBanner.png';
import kerrigan from '../../../assets/images/Kerrigan.png';
import jimRaynor from '../../../assets/images/JimRaynor.jpeg';
import nova from '../../../assets/images/Nova.png';

import Button from "../../Button/Button";

import resume from "../../../assets/resume.docx";
const ClientHeader = (props) => {
    const [showGoods, setShowGoods] = useState('special');
    const [icon, setIcon] = useState(bruce);
    const {user, setUser} = props;

    useEffect(() => {
        setTimeout(() => {
            setShowGoods("specialVisible")
        }, 30000)
    }, []);

    const changeIcon = () => {
        let rndNum = Math.floor(Math.random() * 3) + 1;
        switch (rndNum) {
            case 1:
                setIcon(kerrigan)
                setUser({...user,
                    firstName: 'Sarah',
                    lastName: 'Kerrigan',
                    email: 'sarah.kerrigan@SC.com',
                    companyName: 'Blizzard',
                })
                break;
            case 2:
                setIcon(nova)
                setUser({...user,
                    firstName: 'Nova',
                    lastName: 'Terra',
                    email: 'Nova.Terra@SC.com',
                    companyName: 'Blizzard',
                })
                break;
            case 3:
                setIcon(jimRaynor)
                setUser({...user,
                    firstName: 'Jim',
                    lastName: 'Raynor',
                    email: 'jim.raynor@SC.com',
                    companyName: 'Blizzard',
                })
                break;
        }
    }

    return (
        <div className={styles.clientHeader}>
            <div className={styles.leftContent}>
                <img src={icon} alt='Display picture'/>
                <div className={styles.leftContentText}>
                    <div>
                        <h2>
                            {user ? user.firstName + ' ' + user.lastName : 'No user found'}
                        </h2>
                    </div>
                    <button><a href={resume} download="resume">View Resume</a></button>
                </div>
            </div>
            <Button type='secondary' label='Upload Resume' small/>
            <Button onClick={changeIcon} type={showGoods} label='Spice things up: Choose a hero'/>
        </div>
    );
};

export default ClientHeader;