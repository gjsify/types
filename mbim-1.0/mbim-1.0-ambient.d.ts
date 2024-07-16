
declare module 'gi://Mbim?version=1.0' {
    import Mbim from './mbim-1.0.d.ts';
    export default Mbim;
}

declare module 'gi://Mbim' {
    import Mbim10 from 'gi://Mbim?version=1.0';
    export default Mbim10;
}


