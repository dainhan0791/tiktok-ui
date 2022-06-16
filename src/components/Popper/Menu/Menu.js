import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import classNames from 'classnames/bind';
import MenuItem from './MenuItem';
import styles from './Menu.module.scss';
import Header from './Header';
import { useState } from 'react';
const cx = classNames.bind(styles);

function Menu({ children, items = [], onChange, hideOnClick = false }) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };
  const handleBack = () => {
    setHistory((prev) => prev.slice(0, prev.length - 1));
  };
  const renderResult = (attrs) => (
    <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
      <PopperWrapper>
        {history.length > 1 && <Header title={current.title} onBack={handleBack} />}
        <div className={cx('menu-body')}>{renderItems()}</div>
      </PopperWrapper>
    </div>
  );
  // Reset to first page
  const handleResetMenu = () => setHistory((prev) => prev.slice(0, 1));
  return (
    <Tippy
      onHide={handleResetMenu}
      interactive
      hideOnClick={hideOnClick}
      offset={[16, 8]}
      placement="bottom-end"
      delay={[0, 200]}
      render={renderResult}
    >
      {children}
    </Tippy>
  );
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  onChange: PropTypes.func,
  hideOnClick: PropTypes.bool,
};
export default Menu;
