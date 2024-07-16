
declare module 'gi://GModule?version=2.0' {
    import GModule from './gmodule-2.0.d.ts';
    export default GModule;
}

declare module 'gi://GModule' {
    import GModule20 from 'gi://GModule?version=2.0';
    export default GModule20;
}


