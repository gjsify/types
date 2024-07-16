
import NetworkManager from './networkmanager-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        NetworkManager: typeof NetworkManager;
    }
}

export default GjsGiImports;


