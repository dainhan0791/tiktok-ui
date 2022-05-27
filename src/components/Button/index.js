import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
const cx = classNames.bind(styles);
function Button({
  to,
  href,
  primary = false,
  outline = false,
  small = false,
  large = false,
  plus = false,
  disabled = false,
  rounded = false,
  children,
  className,
  onClick,
  ...passProps
}) {
  let Comp = 'button';
  const props = {
    onClick,
    ...passProps,
  };
  // Remove event listener when btn is disabled
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] == 'function') {
        delete props[key];
      }
    });
    // delete props.onClick
  }
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  const classes = cx('wrapper', {
    // khi co className thi lay gia tri className lam gia tri key
    [className]: className,
    plus,
    primary,
    outline,
    small,
    large,
    disabled,
    rounded,
  });
  return (
    <Comp className={classes} {...props}>
      <span>{children}</span>
    </Comp>
  );
}

export default Button;
