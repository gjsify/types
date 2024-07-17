
declare module 'gi://Garcon?version=1.0' {
    import Garcon10 from '@girs/garcon-1.0';
    export default Garcon10;
}

declare module 'gi://Garcon' {
    import Garcon10 from 'gi://Garcon?version=1.0';
    export default Garcon10;
}


