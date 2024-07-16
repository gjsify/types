
declare module 'gi://Template?version=1.0' {
    import Template from './template-1.0.d.ts';
    export default Template;
}

declare module 'gi://Template' {
    import Template10 from 'gi://Template?version=1.0';
    export default Template10;
}


