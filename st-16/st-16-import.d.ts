import St16 from '@girs/st-16';

declare global {
    export interface GjsGiImports {
        St: typeof St16;
    }
}

export default GjsGiImports;
