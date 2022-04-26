import React from 'react';
import s from './Footer.module.scss'
import Logo from 'assets/svg/logoFooter.svg'
import { listFooter, ListIcon } from './helper';
import Contact from './contact';


function Footer() {
    return (
        <>
            <div className={s.warpper}>
                <Contact />
                <div className="container">
                    <div className={s['warpper-content']}>
                        <div className={s.logo}>
                            <img src={Logo} alt="" />
                            <p>
                                Safe, secure, & innovative crypto currency borrow & lending solutions
                            </p>
                        </div>

                        <div className={s.link}>
                            <div >
                                {listFooter[0]?.item.map((e, i) => {
                                    return (
                                        <a href={e.link} key={i}>{e.name}</a>
                                    )
                                })}
                            </div>
                            <div >
                                {listFooter[0]?.item2.map((e, i) => {
                                    return (
                                        <a href={e.link} key={i}>{e.name}</a>
                                    )
                                })}
                            </div>
                            <div >
                                {listFooter[0]?.item3.map((e, i) => {
                                    return (
                                        <a href={e.link} key={i}>{e.name}</a>
                                    )
                                })}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className={s['warpper-copy']} >
                <div className="container" style={{ height: '100%' }}>
                    <div className={s['warpper-copy-context']}>
                        <div className={s['warpper-copy-text']}>
                            <span>
                                CopyRight © 2020 - 2022 TOCUNA. All Rights Reserved.
                            </span>
                        </div>
                        <div className={s['warpper-copy-icon']}>
                            {ListIcon?.map((e, i) => (
                                <a href='#' key={i}>
                                    <img src={e?.icon} alt="" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

            </div>


        </>

    );
}

export default Footer;