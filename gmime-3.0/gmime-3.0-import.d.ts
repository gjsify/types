
import GMime from './gmime-3.0.js';

declare global {
    export interface GjsGiImports {
        GMime: typeof GMime;
    }
}

export default GjsGiImports;


