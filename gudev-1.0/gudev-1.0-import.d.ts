
import GUdev from './gudev-1.0.js';

declare global {
    export interface GjsGiImports {
        GUdev: typeof GUdev;
    }
}

export default GjsGiImports;


