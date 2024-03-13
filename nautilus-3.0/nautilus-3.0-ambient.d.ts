
declare module 'gi://Nautilus?version=3.0' {
    import Nautilus30 from '@girs/nautilus-3.0';
    export default Nautilus30;
}

declare module 'gi://Nautilus' {
    export * from 'gi://Nautilus?version=3.0';
}


