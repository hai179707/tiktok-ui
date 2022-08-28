import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './SuggestedAccounts.module.scss';
import Image from '../Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import AccountReview from './AccountReview';

const cx = classNames.bind(styles)

function AccountItem({ data }) {

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
                offset={[0, 0]}
                interactive
                render={renderPreview}
                placement='bottom-start'
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