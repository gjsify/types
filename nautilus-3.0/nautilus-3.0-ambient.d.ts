
declare module 'gi://Nautilus?version=3.0' {
    import Nautilus from './nautilus-3.0.d.ts';
    export default Nautilus;
}

declare module 'gi://Nautilus' {
    import Nautilus30 from 'gi://Nautilus?version=3.0';
    export default Nautilus30;
}


