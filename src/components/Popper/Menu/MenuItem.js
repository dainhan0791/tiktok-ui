import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
const cx = classNames.bind(styles);
function MenuItem({ data, onClick }) {
  const classes = cx('menu-list', {
    separate: data.separate,
  });
  return (
    <Button className={classes} to={data.to} onClick={onClick}>
      {data.icon}
      {data.title}
    </Button>
  );
}

export default MenuItem;