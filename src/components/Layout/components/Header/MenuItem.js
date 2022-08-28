import { HelpIcon, KeyboardShortcutsIcon, LanguageIcon } from '~/components/Icons';
import routesConfig from '~/config/routes'


export const MENU_ITEMS = [
    {
        icon: <LanguageIcon />,
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
                }
            ]
        }
    },
    {
        icon: <HelpIcon />,
        title: 'Feedback and help',
        to: routesConfig.feedback,
    },
    {
        icon: <KeyboardShortcutsIcon />,
        title: 'Keyboard shortcuts',
    }
]