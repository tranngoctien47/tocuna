import React from 'react';
import s from './Banner.module.scss'
import { banner } from './helper'
import Img from 'assets/svg/banner.svg'
import Block from 'assets/svg/blockBanner.svg'
import Block2 from 'assets/svg/blockBanner2.svg'


import bg from 'assets/img/bg-banner.jpg'

function Banner() {
    return (
        <div className={s.banner} style={{ background: `url(${bg})` }}>
            <div className="container">
                <div className={s.wrapper}>
                    <div className={s['wrapper-context']}
                        data-aos="fade-up"
                        data-aos-offset="30">
                        <h2>{banner.sub}</h2>
                        <div>
                            <img src={banner.title} alt="" />
                        </div>
                        <p>{banner.des}</p>
                        <img src={Block} alt="" className={s.img} />
                        <img src={Block2} alt="" className={s.img2} />
                    </div>
                    <div className={s['wrapper-img']}>
                        <img src={Img} alt=""
                            data-aos="zoom-in"
                            data-aos-offset="30" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;