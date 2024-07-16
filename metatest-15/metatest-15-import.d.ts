
import MetaTest from './metatest-15.d.ts';

declare global {
    export interface GjsGiImports {
        MetaTest: typeof MetaTest;
    }
}

export default GjsGiImports;


