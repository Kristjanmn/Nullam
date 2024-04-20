import { createGlobalStyle } from 'styled-components';
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-blue/theme.css'

const GlobalStyles = createGlobalStyle`
    .content {
        max-width: 1180px;
        margin: 0 auto;
        padding-top: 10px;
    }
    
    // HEADER
    .header {
        background-color: white;
        border: 0px;
    }
    .p-menubar {
        padding: 0;
        border: 0px;
    }
    .header-logo {
        padding: 0 2rem;
    }
    .header-nav {
        font-weight: bold;
    }
    .header-nav-active {
        background-color: #005aa1;
        color: white;
    }
    .header-symbol {
        padding: 0 2rem;
    }
    
    // HOME PAGE
    .info-panel {
        margin: 1rem 0;
    }
    .p-splitter-gutter {
        display: none;
    }
    .p-splitter-gutter-handle {
        display: none;
    }
    
    // INFO PANEL
    .info-panel-left {
        background-color: #005aa1;
        color: white;
        padding: 2rem;
        height: 100%;
    }
    .info-panel-text {
        font-size: x-large;
        text-align: start;
        height: 100%;
        align-content: center;
    }
    .info-panel-image {
        height: 100%;
        width: 100%;
    }
    
    // EVENTS PANEL
    .events-panel {
        background: transparent;
        margin-bottom: 2rem;
        border: 0px;
    }
    .events-panel-left {
        margin-right: 1rem;
    }
    .events-panel-right {
        margin-left: 1rem;
    }
    .home-events {
        width: 100%;
    }
    .home-events-header {
        background-color: #005aa1;
        color: white;
        padding: 1rem;
    }
    .home-events-content {
        background-color: white;
    }
    .home-events-item {
        display: block;
    }
    .home-events-item-participants {
        font-size: small;
        cursor: pointer;
    }
    .home-events-item-remove {
        width: 20px;
        margin-left: 1rem;
        cursor: pointer;
    }
    .home-events-table {
    }
    .home-events-table-header {
        padding: 10px;
    }
    .home-events-table-column {
        border: none;
        padding: 10px;
    }
    .home-events-table-column:hover {
        border: none;
        padding: 10px;
    }
    .home-events-new-event-btn {
        margin-right: 100%;
        padding: 1rem;
        cursor: pointer;
        font-weight: bold;
        font-size: 12px;
        display: inline;
    }
    
    // FOOTER
    .footer {
        background-color: #373737;
        color: white;
        padding: 2rem;
    }
`;

export default GlobalStyles;