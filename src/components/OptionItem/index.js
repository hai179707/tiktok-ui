import classNames from "classnames/bind";
import styles from "./OptionItem.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles)

function OptionItem({ icon, title }) {
    return (
        <div className={cx('wrapper')}>
            <FontAwesomeIcon className={cx("icon")} icon={icon} />
            <h4 className={cx('title')}>{title}</h4>
        </div>
    )
}

export default OptionItem;