import React from 'react';
import { listMetaverse, MetaverseContent } from './helper';
import s from './Metaverse.module.scss'
import bg from "assets/svg/bgMetaverse.svg"

function Metaverse() {
    return (
        <div className={s.metaverse}  >
            <div className={s['metaverses-container']} style={{ background: `url(${bg})` }}>
                <div className={s.metaverses}>
                    <div className={s['metaverses-content']}
                        data-aos="fade-up"
                        data-aos-offset="30">
                        <div className={s['metaverses-content-context']}>
                            <h1>{MetaverseContent.title}</h1>
                            <span>{MetaverseContent.sub}</span>
                            <p>{MetaverseContent.des}</p>
                        </div>
                    </div>
                    <div className={s['metaverses-content']}
                    >
                        <div className={s['metaverses-content-item']}>
                            {listMetaverse?.map((e, i) => (
                                <div className={s['item']} key={i} data-aos="fade-up"
                                    data-aos-offset="30">
                                    <img src={e?.img} alt="" />
                                    <span>{e?.sub}</span>
                                    <p>{e?.des}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Metaverse;