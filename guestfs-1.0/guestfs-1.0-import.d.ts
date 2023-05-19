

import Guestfs10 from '@girs/guestfs-1.0';

declare global {
    export interface GjsGiImports {
        Guestfs: typeof Guestfs10;
    }
}

export default GjsGiImports;


