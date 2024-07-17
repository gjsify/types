
import EvinceView from './evinceview-3.0.js';

declare global {
    export interface GjsGiImports {
        EvinceView: typeof EvinceView;
    }
}

export default GjsGiImports;


