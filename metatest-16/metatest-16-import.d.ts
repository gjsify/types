import MetaTest16 from '@girs/metatest-16';

declare global {
    export interface GjsGiImports {
        MetaTest: typeof MetaTest16;
    }
}

export default GjsGiImports;
