
    import gi from 'node-gtk';
    const { require: giRequire } = gi;
    const PolkitAgent = giRequire('PolkitAgent', '1.0');
    export { PolkitAgent };
    export default PolkitAgent;



