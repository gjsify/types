/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './rpmostree-1.0-ambient.d.ts';

/**
 * RpmOstree-1.0
 */

import type OSTree from '@girs/ostree-1.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace RpmOstree {
    /**
     * Release version component (e.g. 9 if %RPM_OSTREE_VERSION is 2017.9)
     */
    const RELEASE_VERSION: number;
    const VERSION: number;
    /**
     * Version encoded as a string, useful for printing and concatenation.
     */
    const VERSION_S: string;
    /**
     * Year version component (e.g. 2017 if %RPM_OSTREE_VERSION is 2017.9)
     */
    const YEAR_VERSION: number;
    /**
     * The `RPM_OSTREE_CHECK_VERSION` macro operates at compile time, whereas
     * this function operates at runtime.  The distinction is most useful for
     * things that are dynamic, such as scripting language callers.
     * @param required_year Major/year required
     * @param required_release Release version required
     * @returns %TRUE if current library has at least the requested version, %FALSE otherwise
     */
    function check_version(required_year: number, required_release: number): boolean;
    /**
     * Compute the RPM package delta between two commits.
     *
     * If there are multiple packages with the same name, they are dealt
     * with as follow:
     *   - if there are N pkgs of the same name in `orig_ref,` and 0 pkgs of the same name in
     *     `new_ref,` then there will be N entries in `out_removed` (and vice-versa for
     *     `new_ref/``out_added)`
     *   - if there are N pkgs of the same name in `orig_ref,` and M pkgs of the same name in
     *     `new_ref,` then there will be M entries in `out_modified_new,` where all M entries will
     *     be paired with the same arbitrary pkg coming from one of the N entries.
     * @param repo An OSTree repository
     * @param orig_ref Original ref (branch or commit)
     * @param new_ref New ref (branch or commit)
     * @param cancellable
     */
    function db_diff(
        repo: OSTree.Repo,
        orig_ref: string,
        new_ref: string,
        cancellable?: Gio.Cancellable | null,
    ): [boolean, Package[] | null, Package[] | null, Package[] | null, Package[] | null];
    /**
     * This function is identical to rpm_ostree_db_diff_ext(), but supports a `flags` argument to
     * further control behaviour. At least one of the `out` parameters must not be NULL.
     * @param repo An OSTree repository
     * @param orig_ref Original ref (branch or commit)
     * @param new_ref New ref (branch or commit)
     * @param flags Flags controlling diff behaviour
     * @param cancellable
     */
    function db_diff_ext(
        repo: OSTree.Repo,
        orig_ref: string,
        new_ref: string,
        flags: DbDiffExtFlags,
        cancellable?: Gio.Cancellable | null,
    ): [boolean, Package[] | null, Package[] | null, Package[] | null, Package[] | null];
    /**
     * Return all of the RPM packages present in the `ref` branch or commit
     * in `repo`.
     * @param repo An OSTree repository
     * @param ref A branch name or commit
     * @param cancellable Cancellable
     * @returns A query result, or %NULL on error
     */
    function db_query_all(repo: OSTree.Repo, ref: string, cancellable?: Gio.Cancellable | null): Package[];
    function get_basearch(): string;
    function varsubst_basearch(src: string): string;
    enum DbDiffExtFlags {
        NONE,
        ALLOW_NOENT,
    }
    module Package {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Package extends GObject.Object {
        static $gtype: GObject.GType<Package>;

        // Constructors of RpmOstree.Package

        constructor(properties?: Partial<Package.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Own methods of RpmOstree.Package

        /**
         * Compares two packages by name, epoch:version-release and architecture.
         * @param p2 Package
         * @returns an integer suitable for sorting functions; negative if @p1 should          sort before @p2 in name or version, 0 if equal, positive if @p1          should sort after @p2
         */
        cmp(p2: Package): number;
        get_arch(): string;
        get_evr(): string;
        get_name(): string;
        get_nevra(): string;
    }

    /**
     * Name of the imported GIR library
     * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
     */
    const __name__: string;
    /**
     * Version of the imported GIR library
     * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
     */
    const __version__: string;
}

export default RpmOstree;
// END
