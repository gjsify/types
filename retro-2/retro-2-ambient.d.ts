
declare module 'gi://Retro?version=2' {
    import Retro2 from '@girs/retro-2';
    export default Retro2;
}

declare module 'gi://Retro' {
    import Retro2 from 'gi://Retro?version=2';
    export default Retro2;
}


