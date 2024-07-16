
declare module 'gi://Vgsl?version=1' {
    import Vgsl from './vgsl-1.d.ts';
    export default Vgsl;
}

declare module 'gi://Vgsl' {
    import Vgsl1 from 'gi://Vgsl?version=1';
    export default Vgsl1;
}


