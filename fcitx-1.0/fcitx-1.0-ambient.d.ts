
declare module 'gi://Fcitx?version=1.0' {
    import Fcitx from './fcitx-1.0.d.ts';
    export default Fcitx;
}

declare module 'gi://Fcitx' {
    import Fcitx10 from 'gi://Fcitx?version=1.0';
    export default Fcitx10;
}


