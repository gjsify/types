
declare module 'gi://Panel?version=1' {
    import Panel from '@girs/panel-1';
    export default Panel;
}

declare module 'gi://Panel' {
    import Panel1 from 'gi://Panel?version=1';
    export default Panel1;
}


