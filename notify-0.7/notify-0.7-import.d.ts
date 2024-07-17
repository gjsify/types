
import Notify from './notify-0.7.js';

declare global {
    export interface GjsGiImports {
        Notify: typeof Notify;
    }
}

export default GjsGiImports;


