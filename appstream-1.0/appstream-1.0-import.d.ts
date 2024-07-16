
import AppStream from './appstream-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        AppStream: typeof AppStream;
    }
}

export default GjsGiImports;


