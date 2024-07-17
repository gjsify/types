
import GstVideo from './gstvideo-1.0.js';

declare global {
    export interface GjsGiImports {
        GstVideo: typeof GstVideo;
    }
}

export default GjsGiImports;


