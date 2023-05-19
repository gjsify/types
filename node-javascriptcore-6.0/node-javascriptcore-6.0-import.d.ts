
import JavaScriptCore60 from '@girs/javascriptcore-6.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'JavaScriptCore', ver?: '6.0'): typeof JavaScriptCore60;
    }
}

export default NodeGtkGi;

