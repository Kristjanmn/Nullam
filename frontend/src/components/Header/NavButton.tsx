import { MenuItem, MenuItemOptions } from 'primereact/menuitem';

const navButtonTemplate = (item: MenuItem, options: MenuItemOptions) => {
    return (
        <div className="header-nav">
            <a className={options.className} target={item.target} onClick={options.onClick}>
                <span className={options.className}>{item.label}</span>
            </a>
        </div>
    );
}

export { navButtonTemplate };