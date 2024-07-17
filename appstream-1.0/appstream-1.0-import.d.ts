
import AppStream from './appstream-1.0.js';

declare global {
    export interface GjsGiImports {
        AppStream: typeof AppStream;
    }
}

export default GjsGiImports;


