
import RestExtras10 from '@girs/restextras-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'RestExtras', ver?: '1.0'): typeof RestExtras10;
    }
}

export default NodeGtkGi;

