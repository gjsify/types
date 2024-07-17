
import Guestfs from './guestfs-1.0.js';

declare global {
    export interface GjsGiImports {
        Guestfs: typeof Guestfs;
    }
}

export default GjsGiImports;


