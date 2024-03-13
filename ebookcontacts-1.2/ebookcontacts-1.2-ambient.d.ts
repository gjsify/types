
declare module 'gi://EBookContacts?version=1.2' {
    import EBookContacts12 from '@girs/ebookcontacts-1.2';
    export default EBookContacts12;
}

declare module 'gi://EBookContacts' {
    export * from 'gi://EBookContacts?version=1.2';
}


