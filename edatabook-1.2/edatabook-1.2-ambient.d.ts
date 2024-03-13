
declare module 'gi://EDataBook?version=1.2' {
    import EDataBook12 from '@girs/edatabook-1.2';
    export default EDataBook12;
}

declare module 'gi://EDataBook' {
    export * from 'gi://EDataBook?version=1.2';
}


