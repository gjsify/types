import St15 from '@girs/st-15';

declare global {
    export interface GjsGiImports {
        St: typeof St15;
    }
}

export default GjsGiImports;
