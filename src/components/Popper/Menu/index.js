import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { Wrapper as PopperWrapper } from 'components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);
const defaultFn = () => {};
function Menu({ children, items = [], onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    function renderItems() {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => {
                                return [...prev, item.children];
                            });
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    }
    return (
        <Tippy
            delay={[0, 500]}
            interactive
            placement="bottom-end"
            onHide={() => {
                setHistory((prev) => {
                    return prev.slice(0, 1);
                });
            }}
            render={(attrs) => (
                <div className={cx('list-item')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        {history.length - 1 > 0 && (
                            <Header
                                title="Ngôn ngữ"
                                onBack={() => setHistory((prev) => prev.slice(0, prev.length - 1))}
                            />
                        )}
                        <h2>{renderItems()}</h2>
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
