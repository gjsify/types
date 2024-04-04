
declare module 'gi://EBook?version=1.2' {
    import EBook from '@girs/ebook-1.2';
    export default EBook;
}

declare module 'gi://EBook' {
    import EBook12 from 'gi://EBook?version=1.2';
    export default EBook12;
}


