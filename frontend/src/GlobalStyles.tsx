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
    }
    
    .header-logo {
        padding: 0 30px;
    }
    
    .header-nav {
        
    }
    
    .header-symbol {
        padding: 0 30px;
    }
    
    // Home page
    .info-panel {
        margin: 5px;
    }
    .p-splitter-gutter {
        display: none;
    }
    .p-splitter-gutter-handle {
        display: none;
    }
    
    .info-panel-text {
        background-color: blue;
        color: white;
        height: 100%;
        font-size: large;
    }
    
    .info-panel-image {}
`;

export default GlobalStyles;