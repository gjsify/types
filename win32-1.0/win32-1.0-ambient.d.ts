
declare module 'gi://win32?version=1.0' {
    import win32 from './win32-1.0.d.ts';
    export default win32;
}

declare module 'gi://win32' {
    import Win3210 from 'gi://win32?version=1.0';
    export default Win3210;
}


