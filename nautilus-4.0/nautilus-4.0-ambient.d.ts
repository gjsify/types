
declare module 'gi://Nautilus?version=4.0' {
    import Nautilus from './nautilus-4.0.d.ts';
    export default Nautilus;
}

declare module 'gi://Nautilus' {
    import Nautilus40 from 'gi://Nautilus?version=4.0';
    export default Nautilus40;
}


