
import FolksEds from './folkseds-0.7.js';

declare global {
    export interface GjsGiImports {
        FolksEds: typeof FolksEds;
    }
}

export default GjsGiImports;


