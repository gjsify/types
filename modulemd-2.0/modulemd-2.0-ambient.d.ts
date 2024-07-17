
declare module 'gi://Modulemd?version=2.0' {
    const Modulemd20: typeof import('./modulemd-2.0.js').default
    export default Modulemd20;
}

declare module 'gi://Modulemd' {
    const Modulemd20: typeof import('./modulemd-2.0.js').default
    export default Modulemd20;
}


