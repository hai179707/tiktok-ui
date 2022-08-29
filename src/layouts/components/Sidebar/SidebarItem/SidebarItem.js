import PropTypes from 'prop-types'
import classNames from "classnames/bind";
import styles from './SidebarItem.module.scss';

const cx = classNames.bind(styles)


function SidebarItem({ children }) {
    return (
        <div className={cx('wrapper')}>
            {children}
        </div>
    );
}

SidebarItem.propTypes = {
    children: PropTypes.node.isRequired
}

export default SidebarItem;