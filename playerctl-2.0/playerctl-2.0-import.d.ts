import Playerctl20 from '@girs/playerctl-2.0';

declare global {
    export interface GjsGiImports {
        Playerctl: typeof Playerctl20;
    }
}

export default GjsGiImports;
