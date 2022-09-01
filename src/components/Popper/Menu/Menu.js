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

function Menu({ children, className, items = [], hideOnClick = false, placement = 'bottom-end', offset = [12, 11], onChange = defaultFnc }) {
    const [history, setHistory] = useState([{ data: items }])
    const [hasHeader, setHasHeader] = useState(true)
    const current = history[history.length - 1]

    const renderItem = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.sub
            const isMoreShare = !!item.more
            return <MenuItem key={index} data={item} onClick={() => {
                if (isParent) {
                    setHistory(prev => [...prev, item.sub])
                }
                else if (isMoreShare) {
                    setHistory(prev => [...prev, item.more])
                    setHasHeader(false)
                }
                else {
                    onChange(item)
                }
            }} />
        })
    }

    const handleBack = () => {
        setHistory(prev => prev.slice(0, prev.length - 1))
    }

    const renderResult = attrs => (
        <div className={cx('menu-items', { [className]: className })} tabIndex="-1" {...attrs}>
            <PopperWrapper>
                {history.length > 1 && hasHeader && <Header title={current.title} onBack={handleBack} />}
                <div className={cx('menu-body')}>{renderItem()}</div>
            </PopperWrapper>
        </div>
    )

    const handleResetMenu = () => {
        setHistory(prev => prev.slice(0, 1))
    }

    return (
        <div className={cx('wrapper')}>
            <Tippy
                offset={offset}
                delay={[0, 800]}
                hideOnClick={hideOnClick}
                placement={placement}
                interactive
                render={renderResult}
                onHide={handleResetMenu}
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
    placement: PropTypes.string,
    offset: PropTypes.array
}

export default Menu;