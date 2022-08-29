import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './SuggestedAccounts.module.scss';
import Image from '../Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import AccountReview from './AccountReview';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles)

function AccountItem({ data }) {
    const [placement, setPlacement] = useState('bottom-start')
    const [offset, setOffset] = useState([0, 0])

    useEffect(() => {
        if (window.innerWidth < 1072) {
            setPlacement('right')
            setOffset([60, 9])
        }
    }, [])

    const renderPreview = attrs => (
        <div tabIndex="-1" {...attrs}>
            <PopperWrapper>
                <AccountReview data={data} />
            </PopperWrapper>
        </div>
    )

    return (
        <div>
            <Tippy
                delay={[800, 500]}
                offset={offset}
                interactive
                render={renderPreview}
                placement={placement}
                appendTo={document.body}
            >
                <div className={cx('account-item')}>
                    <Image src={data.avatar} alt={data.nickname} className={cx('avatar')} />
                    <div className={cx('item-info')}>
                        <h4 className={cx('nickname')}>
                            <span>{data.nickname}</span>
                            {data.tick && <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />}
                        </h4>
                        <p className={cx('name')}>{`${data.first_name} ${data.last_name}`}</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired
}

export default AccountItem;