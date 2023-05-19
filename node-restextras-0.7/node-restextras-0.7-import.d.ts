
import RestExtras07 from '@girs/restextras-0.7';

declare global {
    interface NodeGtkGi {
        require(ns: 'RestExtras', ver?: '0.7'): typeof RestExtras07;
    }
}

export default NodeGtkGi;

