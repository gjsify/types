declare module 'gi://Goa?version=1.0' {
    import Goa10 from '@girs/goa-1.0';
    export default Goa10;
}

declare module 'gi://Goa' {
    import Goa10 from 'gi://Goa?version=1.0';
    export default Goa10;
}
