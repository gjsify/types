
declare module 'gi://win32?version=1.0' {
    const Win3210: typeof import('./win32-1.0.js').default
    export default Win3210;
}

declare module 'gi://win32' {
    const Win3210: typeof import('./win32-1.0.js').default
    export default Win3210;
}


