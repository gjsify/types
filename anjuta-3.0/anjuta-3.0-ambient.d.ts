
declare module 'gi://Anjuta?version=3.0' {
    import Anjuta30 from '@girs/anjuta-3.0';
    export default Anjuta30;
}

declare module 'gi://Anjuta' {
    export * from 'gi://Anjuta?version=3.0';
}


