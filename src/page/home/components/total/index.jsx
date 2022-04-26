import { Box } from '@mui/material';
import React from 'react';
import { ListTotal } from './helper';
import s from './Total.module.scss'

const Container = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
}
function Total() {
    return (
        <div className={s.total}>
            <Box className="container" sx={Container}>
                <div className={s.wrapper}>
                    {ListTotal.map((e, i) => (
                        <div className={s.context} key={i}
                            data-aos="fade-up"
                            data-aos-offset="30">
                            {/* <span>{e.number}</span> */}
                            <img src={e?.number} alt="" />
                            <p>{e.text}</p>
                        </div>
                    ))}
                </div>
            </Box>
        </div>
    );
}

export default Total;