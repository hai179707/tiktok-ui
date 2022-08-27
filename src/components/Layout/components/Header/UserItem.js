import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faCircleQuestion, faCoins, faGlobe, faKeyboard, faSliders, faUser } from '@fortawesome/free-solid-svg-icons';
const currentUser = {
    userName: 'thanhhai179707'
}

export const USER_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: `/@${currentUser.userName}`,
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coin',
        to: `/coin`,
    },
    {
        icon: <FontAwesomeIcon icon={faSliders} />,
        title: 'View profile',
        to: `/setting`,
    },
    {
        icon: <FontAwesomeIcon icon={faGlobe} />,
        title: 'English',
        sub: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                    subitem: true
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                    subitem: true
                },
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
    {
        type: 'log-out',
        icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
        title: 'Log out',
        separate: true
    }
]