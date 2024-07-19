declare module 'gi://Template?version=1.0' {
    import Template10 from '@girs/template-1.0';
    export default Template10;
}

declare module 'gi://Template' {
    import Template10 from 'gi://Template?version=1.0';
    export default Template10;
}
