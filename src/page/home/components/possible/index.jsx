import React from 'react';
import s from './Possible.module.scss'
import { ListPossible, PossibleTitle } from './helper'

function Possible() {
    return (
        <div className={s.possible}>
            <div className="container">
                <div className={s.wrapper}>
                    <div className={s['wrapper-title']}
                        data-aos="fade-up"
                        data-aos-offset="30">
                        <div>{PossibleTitle.title}</div>
                        <p>{PossibleTitle.sub}</p>
                    </div>
                    <div className={s['wrapper-context']}
                    >
                        {ListPossible.map((e, i) => (
                            <div className={s.context} key={i} data-aos="fade-up"
                                data-aos-offset="30">
                                <span>{e.title}</span>
                                <p>{e.text}</p>
                                <button><img src={e?.button} alt="" /></button>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Possible;