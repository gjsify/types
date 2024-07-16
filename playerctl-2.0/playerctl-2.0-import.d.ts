
import Playerctl from './playerctl-2.0.d.ts';

declare global {
    export interface GjsGiImports {
        Playerctl: typeof Playerctl;
    }
}

export default GjsGiImports;


