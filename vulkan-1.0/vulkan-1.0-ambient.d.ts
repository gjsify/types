
declare module 'gi://Vulkan?version=1.0' {
    const Vulkan10: typeof import('./vulkan-1.0.js').default
    export default Vulkan10;
}

declare module 'gi://Vulkan' {
    const Vulkan10: typeof import('./vulkan-1.0.js').default
    export default Vulkan10;
}


