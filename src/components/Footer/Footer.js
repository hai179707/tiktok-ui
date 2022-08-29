import classNames from "classnames/bind";
import styles from './Footer.module.scss';

const cx = classNames.bind(styles)

function Footer() {
    return (
        <>
            <p className={cx('label')}>Footer</p>
            <div className={cx('body')}>

            </div>
        </>
    );
}

export default Footer;