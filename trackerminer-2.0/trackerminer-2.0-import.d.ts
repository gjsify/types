
import TrackerMiner from './trackerminer-2.0.d.ts';

declare global {
    export interface GjsGiImports {
        TrackerMiner: typeof TrackerMiner;
    }
}

export default GjsGiImports;


