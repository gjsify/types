import Rest10 from '@girs/rest-1.0';

declare global {
    export interface GjsGiImports {
        Rest: typeof Rest10;
    }
}

export default GjsGiImports;
