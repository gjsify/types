declare module 'gi://Vgsl?version=1' {
    import Vgsl1 from '@girs/vgsl-1';
    export default Vgsl1;
}

declare module 'gi://Vgsl' {
    import Vgsl1 from 'gi://Vgsl?version=1';
    export default Vgsl1;
}
