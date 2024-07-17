
import Unity from './unity-7.0.js';

declare global {
    export interface GjsGiImports {
        Unity: typeof Unity;
    }
}

export default GjsGiImports;


