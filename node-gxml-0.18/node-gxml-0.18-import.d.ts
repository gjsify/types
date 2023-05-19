
import GXml018 from '@girs/gxml-0.18';

declare global {
    interface NodeGtkGi {
        require(ns: 'GXml', ver?: '0.18'): typeof GXml018;
    }
}

export default NodeGtkGi;

