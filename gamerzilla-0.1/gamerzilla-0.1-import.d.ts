
import Gamerzilla from './gamerzilla-0.1.js';

declare global {
    export interface GjsGiImports {
        Gamerzilla: typeof Gamerzilla;
    }
}

export default GjsGiImports;


