
import JavaScriptCore40 from '@girs/javascriptcore-4.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'JavaScriptCore', ver?: '4.0'): typeof JavaScriptCore40;
    }
}

export default NodeGtkGi;

