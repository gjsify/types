
declare module 'gi://Gedit?version=3.0' {
    const Gedit30: typeof import('./gedit-3.0.js').default
    export default Gedit30;
}

declare module 'gi://Gedit' {
    const Gedit30: typeof import('./gedit-3.0.js').default
    export default Gedit30;
}


