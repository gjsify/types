
    import gi from 'node-gtk';
    const { require: giRequire } = gi;
    const GnomeKeyring = giRequire('GnomeKeyring', '1.0');
    export { GnomeKeyring };
    export default GnomeKeyring;





