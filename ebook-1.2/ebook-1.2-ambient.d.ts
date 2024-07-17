
declare module 'gi://EBook?version=1.2' {
    const EBook12: typeof import('./ebook-1.2.js').default
    export default EBook12;
}

declare module 'gi://EBook' {
    const EBook12: typeof import('./ebook-1.2.js').default
    export default EBook12;
}


