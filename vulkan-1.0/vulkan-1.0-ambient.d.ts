
declare module 'gi://Vulkan?version=1.0' {
    import Vulkan from './vulkan-1.0.d.ts';
    export default Vulkan;
}

declare module 'gi://Vulkan' {
    import Vulkan10 from 'gi://Vulkan?version=1.0';
    export default Vulkan10;
}


