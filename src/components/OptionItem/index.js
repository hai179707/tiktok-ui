import classNames from "classnames/bind";
import styles from "./OptionItem.module.scss";

const cx = classNames.bind(styles)

function OptionItem({ icon, title }) {
    return (
        <div className={cx('wrapper')}>
            {icon && <span className={cx('icon')}>{icon}</span>}
            <h4 className={cx('title')}>{title}</h4>
        </div>
    )
}

export default OptionItem;