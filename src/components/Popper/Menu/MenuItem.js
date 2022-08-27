import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles)

function MenuItem({ data, className, onClick }) {
    return (
        <Button leftIcon={data.icon} to={data.to} className={cx('menu-item', className)} onClick={onClick}>{data.title}</Button>
    );
}

export default MenuItem;