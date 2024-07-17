
declare module 'gi://Parquet?version=1.0' {
    const Parquet10: typeof import('./parquet-1.0.js').default
    export default Parquet10;
}

declare module 'gi://Parquet' {
    const Parquet10: typeof import('./parquet-1.0.js').default
    export default Parquet10;
}


