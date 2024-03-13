
declare module 'gi://Secret?version=1' {
    import Secret1 from '@girs/secret-1';
    export default Secret1;
}

declare module 'gi://Secret' {
    export default 'gi://Secret?version=1';
}


