
declare module 'gi://Handy?version=1' {
    import Handy from '@girs/handy-1';
    export default Handy;
}

declare module 'gi://Handy' {
    import Handy1 from 'gi://Handy?version=1';
    export default Handy1;
}


