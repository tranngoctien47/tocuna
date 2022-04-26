import React from 'react';
import { listEcosystem } from './helper';
import s from './Ecosystem.module.scss'

function Ecosystem() {
    return (
        <div className={s.ecosystem}>
            <div className="container">
                <div className={s['ecosystem-title']}
                    data-aos="fade-up"
                    data-aos-offset="30">
                    <h2>TOCUNA</h2>
                    <span>A better autonomous ecosystem</span>
                </div>
                <div className={s.warppper}>
                    {listEcosystem?.map((e, i) => (
                        <div className={s['warppper-context']} key={i} data-aos="fade-up"
                            data-aos-offset="30">
                            <img src={e?.img} alt="" />
                            <span>{e?.title}</span>
                            <p>{e?.des}</p>
                            <button><img src={e?.button} alt="" /></button>
                        </div>
                    ))}

                </div>
            </div>

        </div >
    );
}

export default Ecosystem;