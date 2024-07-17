
import Playerctl from './playerctl-2.0.js';

declare global {
    export interface GjsGiImports {
        Playerctl: typeof Playerctl;
    }
}

export default GjsGiImports;


