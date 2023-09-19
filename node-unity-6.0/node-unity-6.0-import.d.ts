
import Unity60 from '@girs/node-unity-6.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Unity', ver?: '6.0'): typeof Unity60;
    }
}

export default NodeGtkGi;

