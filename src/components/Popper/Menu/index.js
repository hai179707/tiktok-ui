import PropTypes from 'prop-types'
import { useState } from "react";
import classNames from "classnames/bind";
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import MenuItem from "./MenuItem";
import Header from "./Header";

const cx = classNames.bind(styles)
const defaultFnc = () => { }

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFnc }) {
    const [history, setHistory] = useState([{ data: items }])
    const current = history[history.length - 1]

    const renderItem = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.sub
            return <MenuItem key={index} data={item} onClick={() => {
                if (isParent) {
                    setHistory(prev => [...prev, item.sub])
                } else {
                    onChange(item)
                }
            }} />
        })
    }

    return (
        <div className={cx('wrapper')}>
            <Tippy
                delay={[0, 800]}
                hideOnClick={hideOnClick}
                placement='bottom-end'
                interactive
                render={attrs => (
                    <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            {history.length > 1 && <Header title={current.title} onBack={() => {
                                setHistory(prev => prev.slice(0, prev.length - 1))
                            }} />}
                            <div className={cx('menu-body')}>{renderItem()}</div>
                        </PopperWrapper>
                    </div>
                )}
                onHide={() => {
                    setHistory(prev => prev.slice(0, 1))
                }}
            >
                {children}
            </Tippy>
        </div>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array.isRequired,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
}

export default Menu;