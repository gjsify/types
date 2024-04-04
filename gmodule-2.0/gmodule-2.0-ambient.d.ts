
declare module 'gi://GModule?version=2.0' {
    import GModule from '@girs/gmodule-2.0';
    export default GModule;
}

declare module 'gi://GModule' {
    import GModule20 from 'gi://GModule?version=2.0';
    export default GModule20;
}


