
import GModule20 from '@girs/gmodule-2.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GModule', ver?: '2.0'): typeof GModule20;
    }
}

export default NodeGtkGi;

