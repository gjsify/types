
declare module 'gi://Goa?version=1.0' {
    import Goa from './goa-1.0.d.ts';
    export default Goa;
}

declare module 'gi://Goa' {
    import Goa10 from 'gi://Goa?version=1.0';
    export default Goa10;
}


