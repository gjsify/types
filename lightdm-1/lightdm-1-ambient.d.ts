
declare module 'gi://LightDM?version=1' {
    import LightDM from './lightdm-1.d.ts';
    export default LightDM;
}

declare module 'gi://LightDM' {
    import LightDM1 from 'gi://LightDM?version=1';
    export default LightDM1;
}


