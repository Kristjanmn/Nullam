import react, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { header, RouteType } from '../RouterProvider';
import { cloneDeep } from 'lodash';
import { MenuItem } from 'primereact/menuitem';
import { Toolbar } from 'primereact/toolbar';
import { TabMenu } from 'primereact/tabmenu';
import { useEffectOnce } from 'react-use';
import { Menubar } from 'primereact/menubar';
import { navButtonTemplate } from './NavButton';

type HeaderProps = {};

const Header: FC<HeaderProps> = (props: HeaderProps) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const menuItems: MenuItem[] | { label: string; command: () => void; }[] = [];
    const routerRoutes: Array<RouteType> = cloneDeep(header);
    const [activeIndex, setActiveIndex] = useState(-1);

    routerRoutes.forEach(route => {
        menuItems.push({
            label: t(`nav.${route.path}`),
            icon: route.icon || '',
            command: () => {
                navigate(route.path);
            },
            template: navButtonTemplate
        });
    });

    useEffectOnce(() => {
        routerRoutes.forEach((route, index) => {
            if (route.path === window.location.pathname) {
                return;
            }
        })
    })

    const logo = (
        <>
            <div className="header-logo">
                <img src={`//${window?.top?.location.host}/logo.svg`}  alt="logo"/>
            </div>
        </>
    );

    const navbar = (
        <>
            <TabMenu
                className="header-nav"
                model={menuItems}
                activeIndex={activeIndex}
            />
        </>
    );

    const symbol = (
        <>
            <div className="header-symbol">
                <img src={`//${window?.top?.location.host}/symbol.svg`} alt="symbol" />
            </div>
        </>
    );

    return (
        <div className="header">
            <Menubar start={logo} model={menuItems} end={symbol} />
        </div>
    );
};

export default Header;