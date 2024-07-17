
import BraseroBurn from './braseroburn-3.1.js';

declare global {
    export interface GjsGiImports {
        BraseroBurn: typeof BraseroBurn;
    }
}

export default GjsGiImports;


