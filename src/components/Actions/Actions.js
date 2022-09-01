import PropTypes from 'prop-types'
import { useState } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faHeart, faShare } from "@fortawesome/free-solid-svg-icons";
import styles from './Actions.module.scss';
import { Menu as ShareMenu } from '~/components/Popper';
import { SHARE_ITEM_LIST } from './ShareItem';
import NumberFormat from '../NumberFormat/NumberFormat';
import Modal from '../Modal';
import LoginModal from '../Modal/LoginModal';
import { useModal } from '~/hooks';

const cx = classNames.bind(styles)

function Actions({ data }) {
    const [liked, setLiked] = useState(data.is_liked)
    const { isShowing, toggle } = useModal();
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || false

    const handleLike = () => {
        setLiked(!liked)
        if (liked) {
            data.likes_count--
        } else {
            data.likes_count++
        }
    }

    const handleShare = (menuItem) => {
        // Logic share
    }

    return (
        <div className={cx('wrapper')}>
            <button className={cx('btn')} onClick={currentUser ? handleLike : toggle}><span className={cx('icon', { liked })}><FontAwesomeIcon icon={faHeart} /></span><strong><NumberFormat value={data.likes_count} /></strong></button>
            <button className={cx('btn')} onClick={currentUser || toggle}><span className={cx('icon')}><FontAwesomeIcon icon={faCommentDots} /></span><strong><NumberFormat value={data.comments_count} /></strong></button>
            <ShareMenu
                items={SHARE_ITEM_LIST}
                onChange={handleShare}
                hideOnClick
                placement='top-start'
                offset={[-28, 5]}
                className='share'
            >
                <button className={cx('btn', 'share')}><span className={cx('icon')}><FontAwesomeIcon icon={faShare} /></span><strong><NumberFormat value={data.comments_count} /></strong></button>
            </ShareMenu>
            {currentUser || <Modal
                isShowing={isShowing}
                hide={toggle}
            >
                <LoginModal />
            </Modal>}
        </div>
    );
}

Actions.propTypes = {
    data: PropTypes.object.isRequired
}

export default Actions;