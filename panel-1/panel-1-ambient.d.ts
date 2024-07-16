
declare module 'gi://Panel?version=1' {
    import Panel from './panel-1.d.ts';
    export default Panel;
}

declare module 'gi://Panel' {
    import Panel1 from 'gi://Panel?version=1';
    export default Panel1;
}


