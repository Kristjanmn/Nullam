import { createGlobalStyle } from 'styled-components';
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-blue/theme.css'

const GlobalStyles = createGlobalStyle`
    .content {
        max-width: 1180px;
        margin: 0 auto;
        padding-top: 10px;
    }
    
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
        
    }
    
    .header-symbol {
        padding: 0 2rem;
    }
    
    // Home page
    .info-panel {
        margin: 1rem 0;
    }
    .p-splitter-gutter {
        display: none;
    }
    .p-splitter-gutter-handle {
        display: none;
    }
    
    .info-panel-left {
        background-color: blue;
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
`;

export default GlobalStyles;