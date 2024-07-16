
declare module 'gi://Garcon?version=1.0' {
    import Garcon from './garcon-1.0.d.ts';
    export default Garcon;
}

declare module 'gi://Garcon' {
    import Garcon10 from 'gi://Garcon?version=1.0';
    export default Garcon10;
}


