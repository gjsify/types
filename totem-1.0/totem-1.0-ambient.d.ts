
declare module 'gi://Totem?version=1.0' {
    import Totem from './totem-1.0.d.ts';
    export default Totem;
}

declare module 'gi://Totem' {
    import Totem10 from 'gi://Totem?version=1.0';
    export default Totem10;
}


