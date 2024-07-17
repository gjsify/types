
declare module 'gi://Gspell?version=1' {
    const Gspell1: typeof import('./gspell-1.js').default
    export default Gspell1;
}

declare module 'gi://Gspell' {
    const Gspell1: typeof import('./gspell-1.js').default
    export default Gspell1;
}


