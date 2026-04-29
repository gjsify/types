declare module 'gi://Parquet?version=23.0' {
    import Parquet230 from '@girs/parquet-23.0';
    export default Parquet230;
}

declare module 'gi://Parquet' {
    import Parquet230 from 'gi://Parquet?version=23.0';
    export default Parquet230;
}
