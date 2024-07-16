
import GstPlayer from './gstplayer-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        GstPlayer: typeof GstPlayer;
    }
}

export default GjsGiImports;


