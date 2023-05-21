
import Unity70 from '@girs/node-unity-7.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Unity', ver?: '7.0'): typeof Unity70;
    }
}

export default NodeGtkGi;

