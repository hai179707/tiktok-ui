import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from './Discover.module.scss';
import DiscoverItem from "./DiscoverItem";

const cx = classNames.bind(styles)

function Discover() {
    const [discovers, setDiscover] = useState([])

    useEffect(() => {
        setDiscover([
            {
                isMusicDiscover: false,
                textContent: 'suthatla'
            },
            {
                isMusicDiscover: false,
                textContent: 'mackedoi'
            },
            {
                isMusicDiscover: false,
                textContent: 'sansangthaydoi'
            },
            {
                isMusicDiscover: true,
                textContent: 'Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media & h0n'
            },
            {
                isMusicDiscover: true,
                textContent: 'Về Nghe Mẹ Ru - NSND Bach Tuyet & Hứa Kim Tuyền & 14 Casper & Hoàng Dũng'
            }
        ])
    }, [])

    return (
        <>
            <p className={cx('label')}>Discover</p>
            <div className={cx('body')}>
                {discovers.map((discover, index) => (
                    <DiscoverItem key={index} data={discover} />
                ))}
            </div>
        </>
    );
}

export default Discover;