
import MetaTest from './metatest-15.js';

declare global {
    export interface GjsGiImports {
        MetaTest: typeof MetaTest;
    }
}

export default GjsGiImports;


