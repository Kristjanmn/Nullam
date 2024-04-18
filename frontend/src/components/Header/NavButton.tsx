import { MenuItem, MenuItemOptions } from 'primereact/menuitem';

const navButtonTemplate = (item: MenuItem, options: MenuItemOptions) => {
    return (
        <div className="header-nav">
            <a className={options.className} target={item.target} onClick={options.onClick}>
                <span className={options.className}><b>{item.label}</b></span>
            </a>
        </div>
    );
}

export { navButtonTemplate };