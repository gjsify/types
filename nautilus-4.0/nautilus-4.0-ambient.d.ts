declare module 'gi://Nautilus?version=4.0' {
    import Nautilus40 from '@girs/nautilus-4.0';
    export default Nautilus40;
}

declare module 'gi://Nautilus' {
    import Nautilus40 from 'gi://Nautilus?version=4.0';
    export default Nautilus40;
}
