
declare module 'gi://Secret?version=1' {
    import Secret from '@girs/secret-1';
    export default Secret;
}

declare module 'gi://Secret' {
    import Secret1 from 'gi://Secret?version=1';
    export default Secret1;
}


