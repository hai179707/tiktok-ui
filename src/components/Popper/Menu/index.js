import classNames from "classnames/bind";
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from "./MenuItem";

const cx = classNames.bind(styles)


function Menu({ children, items = [] }) {
    const renderItem = () => {
        return items.map((item, index) => (
            <MenuItem key={index} data={item} />
        ))
    }

    return (
        <div className={cx('wrapper')}>
            <Tippy
                delay={[0, 800]}
                placement='bottom-end'
                interactive
                render={attrs => (
                    <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            {renderItem()}
                        </PopperWrapper>
                    </div>
                )}
            >
                {children}
            </Tippy>
        </div>
    );
}

export default Menu;