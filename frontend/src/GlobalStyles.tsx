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
        padding-bottom: 1rem;
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
        display: none;
    }
    .home-events-table-column {
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
    // END HOME PAGE
    
    .page {
        background-color: white;
    }
    .page-container {
        width: 600px;
        margin: 0 auto;
        padding: 1rem;
    }
    
    // NEW EVENT PAGE
    .new-event-form {
        padding: 3rem 0;
    }
    .new-event-buttons {
        display: inline;
        margin-right: 100%;
    }
    .new-event-buttons-back {
        background-color: #eff2f4;
        border-color: #eff2f4;
        color: black;
    }
    .new-event-buttons-add {
        margin-left: 0.5rem;
        background-color: #005aa1;
        border-color: #005aa1;
    }
    
    // EVENT PAGE (details)
    .event-participants-table {
        width: 200%;
    }
    .event-participants-table-header {
        padding: 10px;
        display: none;
    }
    .event-participants-table-column {
        border: none;
        padding: 10px;
    }
    .event-participants-item {
        display: block;
    }
    .event-participants-item-participants {
        font-size: small;
        cursor: pointer;
    }
    .event-participants-item-remove {
        width: 20px;
        margin-left: 1rem;
        cursor: pointer;
    }
    .event-participants-item-btn {
        font-size: small;
        cursor: pointer;
    }
    .participant-type-btns {
        display: inherit;
    }
    .participant-type-btn {
        margin: 0.5rem;
    }
    .participant-type-btn-label {
        padding-left: 0.5rem;
    }
    .new-participant-form {
        padding-top: 1rem;
        padding-bottom: 3rem;
    }
    .new-participant-buttons {
        display: inline;
        margin-right: 100%;
    }
    .new-participant-buttons-back {
        background-color: #eff2f4;
        border-color: #eff2f4;
        color: black;
    }
    .new-participant-buttons-add {
        margin-left: 0.5rem;
        background-color: #005aa1;
        border-color: #005aa1;
    }
    
    // PAGE HEAD
    .page-head {
        margin-top: 1rem;
        border: 0;
        border-radius: 0;
        background-color: #005aa1;
    }
    .page-head-text {
        color: white;
        font-size: 28px;
        text-align: start;
        align-content: center;
        height: 100%;
        padding: 1rem 2rem;
    }
    .page-head-image {
        height: 5rem;
        overflow: hidden;
        width: 100%;
        vertical-align: middle;
        object-fit: cover;
    }
    
    // FOOTER
    .footer {
        background-color: #373737;
        display: flex;
        color: white;
        padding: 2rem;
        margin-top: 1rem;
        text-align: start;
    }
    .footer-column-ll {
        float: left;
        width: 25%;
    }
    .footer-column-lr {
        float: left;
        width: 25%;
    }
    .footer-column-rl {
        float: right;
        width: 25%;
    }
    .footer-column-rr {
        float: right;
        width: 25%;
    }
    .footer-text-large {
        font-size: 28px;
        padding-bottom: 1rem;
    }
    .footer-text-small {
        font-size: 16px;
    }
    
    .page-title {
        color: #005aa1;
        font-size: 28px;
        margin-right: 100%;
        display: inline;
    }
    
    .label-field {
        display: flex;
        margin-top: 10px;
    }
    .label-field-left {
        float: left;
    }
    .label-field-right {
        margin-left: auto;
        width: 300px;
        text-align: start;
    }
    
    .margin-left-1rem {
        margin-left: 1rem;
    }
    
    .p-selectable-row {
        cursor: default;
    }
    .bold {
        font-weight: bold;
    }
    .margin-top-auto {
        margin-top: auto;
    }
`;

export default GlobalStyles;