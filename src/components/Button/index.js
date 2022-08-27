import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles)

function Button({ to, href, primary = false, outline = false, rounded = false, disable = false, small = false, large = false, leftIcon = false, rightIcon = false, children, className, onClick, passProps }) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps
    }

    if (to) {
        Comp = Link
        props.to = to
    }
    if (href) {
        Comp = 'a'
        props.href = href
    }
    if (disable) {
        Object.keys(props).forEach(prop => {
            if (prop.startsWith('on')) {
                delete props.prop
            }
        })
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        disable,
        rounded,
        small,
        large
    })

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;