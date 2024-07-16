
declare module 'gi://Secret?version=1' {
    import Secret from './secret-1.d.ts';
    export default Secret;
}

declare module 'gi://Secret' {
    import Secret1 from 'gi://Secret?version=1';
    export default Secret1;
}


