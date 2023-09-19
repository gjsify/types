
import UnityExtras70 from '@girs/node-unityextras-7.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'UnityExtras', ver?: '7.0'): typeof UnityExtras70;
    }
}

export default NodeGtkGi;

