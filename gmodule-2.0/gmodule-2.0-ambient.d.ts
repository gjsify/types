
declare module 'gi://GModule?version=2.0' {
    import GModule20 from '@girs/gmodule-2.0';
    export default GModule20;
}

declare module 'gi://GModule' {
    export * from 'gi://GModule?version=2.0';
}


