
declare module 'gi://GtkSource?version=5' {
    import GtkSource from './gtksource-5.d.ts';
    export default GtkSource;
}

declare module 'gi://GtkSource' {
    import GtkSource5 from 'gi://GtkSource?version=5';
    export default GtkSource5;
}


