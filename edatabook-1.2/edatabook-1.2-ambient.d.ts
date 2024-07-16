
declare module 'gi://EDataBook?version=1.2' {
    import EDataBook from './edatabook-1.2.d.ts';
    export default EDataBook;
}

declare module 'gi://EDataBook' {
    import EDataBook12 from 'gi://EDataBook?version=1.2';
    export default EDataBook12;
}


