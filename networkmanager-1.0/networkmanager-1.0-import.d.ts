

import NetworkManager10 from '@girs/networkmanager-1.0';

declare global {
    export interface GjsGiImports {
        NetworkManager: typeof NetworkManager10;
    }
}

export default GjsGiImports;


