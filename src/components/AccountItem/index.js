import { Link } from 'react-router-dom';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Image from '~/components/Image';
import styles from './AccountItem.module.scss';
const cx = classNames.bind(styles);

export default function AccountItem({ data }) {
  return (
    <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
      <Image className={cx('avatar')} src={data.avatar} alt={data.full_name} />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span className={cx('label')}>{data.nickname} </span>
          {data.tick && <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />}
        </h4>

        <span className={cx('username')}>{data.full_name}</span>
      </div>
    </Link>
  );
}
