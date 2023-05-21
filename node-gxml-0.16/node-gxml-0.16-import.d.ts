
import GXml016 from '@girs/node-gxml-0.16';

declare global {
    interface NodeGtkGi {
        require(ns: 'GXml', ver?: '0.16'): typeof GXml016;
    }
}

export default NodeGtkGi;

