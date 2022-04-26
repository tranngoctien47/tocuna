import React from 'react';
import { itemBottom, itemTop } from './helper';
import s from './Personal.module.scss'
import Imgpersonal from 'assets/svg/personal.svg'
import Imgpersonal2 from 'assets/svg/personal2.svg'
import cn from "classnames";



function Personal() {
    return (
        <div className={s.personal} >
            <div className="container">
                <div className={s.wrapper}>
                    <div className={cn(s['wrapper-top'], s['wrapper-item'])}>
                        <div className={s.img}>
                            <img src={Imgpersonal} alt=""
                                data-aos="zoom-in"
                                data-aos-offset="30" />
                        </div>
                        <div className={s['wrapper-text']}
                            data-aos="fade-up"
                            data-aos-offset="30">
                            <h2>Personal Protector</h2>
                            <p>Your digital twin serves you. It exists to make your life better, not to sell you to the highest bidder and create more noise for your to deal with.</p>
                            {itemTop?.map((e, i) => (
                                <div className={s.context} key={i}>
                                    <img src={e.icon} alt="" />
                                    <div className={s.text}>
                                        <span>{e?.title}</span>
                                        <p>{e?.des}</p>
                                    </div>
                                </div>
                            ))}
                        </div>


                    </div>
                    <div className={cn(s['wrapper-bottom'], s['wrapper-item'])}>
                        <div className={s['wrapper-text']}
                            data-aos="fade-up"
                            data-aos-offset="30">
                            {itemBottom?.map((e, i) => (
                                <div className={s.context} key={i}>
                                    <img src={e.icon} alt="" />
                                    <div className={s.text}>
                                        <span>{e?.title}</span>
                                        <p>{e?.des}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className={s.img}>
                            <img src={Imgpersonal2} alt=""
                                data-aos="zoom-in"
                                data-aos-offset="30" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Personal;