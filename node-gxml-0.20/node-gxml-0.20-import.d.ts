
import GXml020 from '@girs/gxml-0.20';

declare global {
    interface NodeGtkGi {
        require(ns: 'GXml', ver?: '0.20'): typeof GXml020;
    }
}

export default NodeGtkGi;

