declare module 'gi://CudaGst?version=1.0' {
    import CudaGst10 from '@girs/cudagst-1.0';
    export default CudaGst10;
}

declare module 'gi://CudaGst' {
    import CudaGst10 from 'gi://CudaGst?version=1.0';
    export default CudaGst10;
}
