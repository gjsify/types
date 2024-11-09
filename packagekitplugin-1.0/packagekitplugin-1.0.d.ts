/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

// Module dependencies
import type PackageKitGlib from '@girs/packagekitglib-1.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace PackageKitPlugin {
    /**
     * PackageKitPlugin-1.0
     */

    export namespace BackendJobSignal {
        export const $gtype: GObject.GType<BackendJobSignal>;
    }

    enum BackendJobSignal {
        ALLOW_CANCEL,
        DETAILS,
        ERROR_CODE,
        DISTRO_UPGRADE,
        FINISHED,
        PACKAGE,
        ITEM_PROGRESS,
        FILES,
        PERCENTAGE,
        REMAINING,
        SPEED,
        DOWNLOAD_SIZE_REMAINING,
        REPO_DETAIL,
        REPO_SIGNATURE_REQUIRED,
        EULA_REQUIRED,
        MEDIA_CHANGE_REQUIRED,
        REQUIRE_RESTART,
        STATUS_CHANGED,
        LOCKED_CHANGED,
        UPDATE_DETAIL,
        CATEGORY,
        LAST,
    }

    export namespace HintEnum {
        export const $gtype: GObject.GType<HintEnum>;
    }

    enum HintEnum {
        FALSE,
        TRUE,
        UNSET,
        INVALID,
        LAST,
    }

    export namespace PluginPhase {
        export const $gtype: GObject.GType<PluginPhase>;
    }

    enum PluginPhase {
        INIT,
        TRANSACTION_CONTENT_TYPES,
        TRANSACTION_RUN,
        TRANSACTION_STARTED,
        TRANSACTION_FINISHED_RESULTS,
        TRANSACTION_FINISHED_END,
        DESTROY,
        STATE_CHANGED,
        UNKNOWN,
    }

    export namespace TransactionState {
        export const $gtype: GObject.GType<TransactionState>;
    }

    enum TransactionState {
        NEW,
        WAITING_FOR_AUTH,
        COMMITTED,
        READY,
        RUNNING,
        FINISHED,
        UNKNOWN,
    }
    /**
     * The unknown percentage value
     */
    const BACKEND_PERCENTAGE_INVALID: number;
    const TRANSACTION_ALL_BACKEND_SIGNALS: number;
    const TRANSACTION_NO_BACKEND_SIGNALS: number;
    /**
     * Does not remove the directory itself, only the contents.
     * @param directory
     */
    function directory_remove_contents(directory: string): boolean;
    function get_resource(): Gio.Resource;
    function hint_enum_from_string(hint: string): HintEnum;
    function hint_enum_to_string(hint: HintEnum | null): string;
    function load_introspection(filename: string): Gio.DBusNodeInfo;
    function plugin_get_description(): string;
    /**
     * This function is a much safer way of doing strlen as it checks for NULL and
     * a stupidly long string.
     * @param text The text to check
     * @param len The maximum length of the string
     * @returns the length of the string, or len if the string is too long.
     */
    function strlen(text: string, len: number): number;
    /**
     * Converts a string into a signed integer value in a safe way.
     * @param text The text the convert
     * @param value The return numeric return value
     * @returns %TRUE if the string was converted correctly
     */
    function strtoint(text: string, value: number): boolean;
    /**
     * Converts a string into a unsigned integer value in a safe way.
     * @param text The text the convert
     * @param value The return numeric return value
     * @returns %TRUE if the string was converted correctly
     */
    function strtouint(text: string, value: number): boolean;
    /**
     * Converts a string into a unsigned integer value in a safe way.
     * @param text The text the convert
     * @param value The return numeric return value
     * @returns %TRUE if the string was converted correctly
     */
    function strtouint64(text: string, value: number): boolean;
    /**
     * This function is a much safer way of doing "if (strlen (text) == 0))"
     * as it does not rely on text being NULL terminated. It's also much
     * quicker as it only checks the first byte rather than scanning the whole
     * string just to verify it's not zero length.
     * @param text The text to check
     * @returns %TRUE if the string was converted correctly
     */
    function strzero(text: string): boolean;
    interface BackendFileChanged {
        (backend: Backend, data: any): void;
    }
    interface BackendJobThreadFunc {
        (job: BackendJob, params: GLib.Variant): void;
    }
    interface BackendJobVFunc {
        (job: BackendJob, object: any): void;
    }
    interface PluginFunc {
        (plugin: Plugin): void;
    }
    interface PluginGetActionFunc {
        (plugin: Plugin, transaction: Transaction, action_id: string): string;
    }
    interface PluginGetDescFunc {
        (): string;
    }
    interface PluginTransactionFunc {
        (plugin: Plugin, transaction: Transaction): void;
    }
    module Backend {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Backend extends GObject.Object {
        static $gtype: GObject.GType<Backend>;

        // Constructors

        constructor(properties?: Partial<Backend.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](conf: GLib.KeyFile): Backend;

        // Static methods

        static bool_to_string(value: boolean): string;
        static initialize(conf: GLib.KeyFile, backend: Backend): void;

        // Methods

        accept_eula(eula_id: string): void;
        cancel(job: BackendJob): void;
        depends_on(job: BackendJob, filters: PackageKitGlib.Bitfield, package_ids: string, recursive: boolean): void;
        destroy(): void;
        download_packages(job: BackendJob, package_ids: string, directory: string): void;
        get_accepted_eula_string(): string;
        get_author(): string;
        get_categories(job: BackendJob): void;
        get_description(): string;
        get_details(job: BackendJob, package_ids: string): void;
        get_details_local(job: BackendJob, files: string): void;
        get_distro_upgrades(job: BackendJob): void;
        get_files(job: BackendJob, package_ids: string): void;
        get_files_local(job: BackendJob, files: string): void;
        get_filters(): PackageKitGlib.Bitfield;
        get_groups(): PackageKitGlib.Bitfield;
        get_mime_types(): string[];
        get_name(): string;
        get_packages(job: BackendJob, filters: PackageKitGlib.Bitfield): void;
        get_repo_list(job: BackendJob, filters: PackageKitGlib.Bitfield): void;
        get_roles(): PackageKitGlib.Bitfield;
        get_update_detail(job: BackendJob, package_ids: string): void;
        get_updates(job: BackendJob, filters: PackageKitGlib.Bitfield): void;
        implement(role: PackageKitGlib.RoleEnum | null): void;
        install_files(job: BackendJob, transaction_flags: PackageKitGlib.Bitfield, full_paths: string): void;
        install_packages(job: BackendJob, transaction_flags: PackageKitGlib.Bitfield, package_ids: string): void;
        install_signature(
            job: BackendJob,
            type: PackageKitGlib.SigTypeEnum | null,
            key_id: string,
            package_id: string,
        ): void;
        is_eula_valid(eula_id: string): boolean;
        is_implemented(role: PackageKitGlib.RoleEnum | null): boolean;
        is_online(): boolean;
        /**
         * Responsible for initialising the external backend object.
         *
         * Typically this will involve taking database locks for exclusive package access.
         * This method should only be called from the engine, unless the backend object
         * is used in self-check code, in which case the lock and unlock will have to
         * be done manually.
         */
        load(): boolean;
        refresh_cache(job: BackendJob, force: boolean): void;
        remove_packages(
            job: BackendJob,
            transaction_flags: PackageKitGlib.Bitfield,
            package_ids: string,
            allow_deps: boolean,
            autoremove: boolean,
        ): void;
        repair_system(job: BackendJob, transaction_flags: PackageKitGlib.Bitfield): void;
        repo_enable(job: BackendJob, repo_id: string, enabled: boolean): void;
        repo_list_changed(): boolean;
        repo_remove(
            job: BackendJob,
            transaction_flags: PackageKitGlib.Bitfield,
            repo_id: string,
            autoremove: boolean,
        ): void;
        repo_set_data(job: BackendJob, repo_id: string, parameter: string, value: string): void;
        required_by(job: BackendJob, filters: PackageKitGlib.Bitfield, package_ids: string, recursive: boolean): void;
        reset_job(job: BackendJob): void;
        resolve(job: BackendJob, filters: PackageKitGlib.Bitfield, packages: string): void;
        search_details(job: BackendJob, filters: PackageKitGlib.Bitfield, search: string): void;
        search_files(job: BackendJob, filters: PackageKitGlib.Bitfield, search: string): void;
        search_groups(job: BackendJob, filters: PackageKitGlib.Bitfield, search: string): void;
        search_names(job: BackendJob, filters: PackageKitGlib.Bitfield, search: string): void;
        /**
         * This is called just before the threaded transaction method, and in
         * the newly created thread context. e.g.
         *
         * >>> desc->job_start(backend)
         *     (locked backend)
         * >>> desc->backend_method_we_want_to_run(backend)
         * <<< ::Package(PK_INFO_ENUM_INSTALLING,"hal;0.1.1;i386;fedora","Hardware Stuff")
         * >>> desc->job_stop(backend)
         *     (unlocked backend)
         * <<< ::Finished()
         *
         * or in the case of backend_method_we_want_to_run() failure:
         * >>> desc->job_start(backend)
         *     (locked backend)
         * >>> desc->backend_method_we_want_to_run(backend)
         * <<< ::ErrorCode(PK_ERROR_ENUM_FAILED_TO_FIND,"no package")
         * >>> desc->job_stop(backend)
         *     (unlocked backend)
         * <<< ::Finished()
         *
         * or in the case of job_start() failure:
         * >>> desc->job_start(backend)
         *     (failed to lock backend)
         * <<< ::ErrorCode(PK_ERROR_ENUM_FAILED_TO_LOCK,"no pid file")
         * >>> desc->job_stop(backend)
         * <<< ::Finished()
         *
         * It is *not* called for non-threaded backends, as multiple processes
         * would be inherently racy.
         * @param job
         */
        start_job(job: BackendJob): void;
        /**
         * Always run for each transaction, *even* when the job_start()
         * vfunc fails.
         *
         * This method has no return value as the ErrorCode should have already
         * been set.
         * @param job
         */
        stop_job(job: BackendJob): void;
        supports_parallelization(): boolean;
        thread_start(job: BackendJob, func: any): void;
        thread_stop(job: BackendJob, func: any): void;
        /**
         * Responsible for finalising the external backend object.
         *
         * Typically this will involve releasing database locks for any other access.
         * This method should only be called from the engine, unless the backend object
         * is used in self-check code, in which case it will have to be done manually.
         */
        unload(): boolean;
        update_packages(job: BackendJob, transaction_flags: PackageKitGlib.Bitfield, package_ids: string): void;
        watch_file(filename: string, func: BackendFileChanged): boolean;
        what_provides(job: BackendJob, filters: PackageKitGlib.Bitfield, search: string): void;
    }

    module BackendJob {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class BackendJob extends GObject.Object {
        static $gtype: GObject.GType<BackendJob>;

        // Constructors

        constructor(properties?: Partial<BackendJob.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](conf: GLib.KeyFile): BackendJob;

        // Methods

        category(parent_id: string, cat_id: string, name: string, summary: string, icon: string): void;
        details(
            package_id: string,
            summary: string,
            license: string,
            group: PackageKitGlib.GroupEnum | null,
            description: string,
            url: string,
            size: number,
        ): void;
        distro_upgrade(type: PackageKitGlib.DistroUpgradeEnum | null, name: string, summary: string): void;
        eula_required(eula_id: string, package_id: string, vendor_name: string, license_agreement: string): void;
        /**
         * package_id is NULL when we are using this as a calback from DownloadPackages
         * @param package_id
         * @param files
         */
        files(package_id: string, files: string): void;
        finished(): void;
        get_allow_cancel(): boolean;
        get_backend(): any;
        get_background(): HintEnum;
        /**
         * Gets the maximum cache age in seconds.
         * @returns the cache age in seconds, or 0 for unset or %G_MAXUINT for 'infinity'
         */
        get_cache_age(): number;
        get_cmdline(): string;
        get_exit_code(): PackageKitGlib.ExitEnum;
        get_frontend_socket(): string;
        get_interactive(): HintEnum;
        get_is_error_set(): boolean;
        get_is_finished(): boolean;
        get_locale(): string;
        get_locked(): boolean;
        get_no_proxy(): string;
        get_pac(): string;
        get_parameters(): GLib.Variant;
        get_proxy_ftp(): string;
        get_proxy_http(): string;
        get_proxy_https(): string;
        get_proxy_socks(): string;
        get_role(): PackageKitGlib.RoleEnum;
        get_runtime(): number;
        get_started(): boolean;
        get_transaction_flags(): PackageKitGlib.Bitfield;
        get_uid(): number;
        get_user_data(): any;
        get_vfunc_enabled(signal_kind: BackendJobSignal | null): boolean;
        has_set_error_code(): boolean;
        media_change_required(
            media_type: PackageKitGlib.MediaTypeEnum | null,
            media_id: string,
            media_text: string,
        ): void;
        not_implemented_yet(method: string): void;
        ['package'](info: PackageKitGlib.InfoEnum | null, package_id: string, summary: string): void;
        repo_detail(repo_id: string, description: string, enabled: boolean): void;
        repo_signature_required(
            package_id: string,
            repository_name: string,
            key_url: string,
            key_userid: string,
            key_id: string,
            key_fingerprint: string,
            key_timestamp: string,
            type: PackageKitGlib.SigTypeEnum | null,
        ): void;
        require_restart(restart: PackageKitGlib.RestartEnum | null, package_id: string): void;
        reset(): void;
        set_allow_cancel(allow_cancel: boolean): void;
        set_backend(backend: any): void;
        set_background(background: HintEnum | null): void;
        set_cache_age(cache_age: number): void;
        set_cmdline(cmdline: string): void;
        set_download_size_remaining(download_size_remaining: number): void;
        /**
         * Should only be used internally, or from PkRunner when setting CANCELLED.
         * @param exit
         */
        set_exit_code(exit: PackageKitGlib.ExitEnum | null): void;
        set_frontend_socket(frontend_socket: string): void;
        set_interactive(interactive: HintEnum | null): void;
        set_item_progress(package_id: string, status: PackageKitGlib.StatusEnum | null, percentage: number): void;
        set_locale(code: string): void;
        /**
         * Set if your backend job currently locks the cache, so no other tool will
         * have write  access on it. (read-only transactions will still be permitted)
         * @param locked
         */
        set_locked(locked: boolean): void;
        set_parameters(params: GLib.Variant): void;
        set_percentage(percentage: number): void;
        set_proxy(
            proxy_http: string,
            proxy_https: string,
            proxy_ftp: string,
            proxy_socks: string,
            no_proxy: string,
            pac: string,
        ): void;
        set_role(role: PackageKitGlib.RoleEnum | null): void;
        set_speed(speed: number): void;
        set_started(started: boolean): void;
        set_status(status: PackageKitGlib.StatusEnum | null): void;
        set_transaction_flags(transaction_flags: PackageKitGlib.Bitfield): void;
        set_uid(uid: number): void;
        set_user_data(user_data: any): void;
        /**
         * Connect backend
         * @param signal_kind Kind of the backend signal we want to connect
         * @param vfunc The function we want to call
         */
        set_vfunc(signal_kind: BackendJobSignal | null, vfunc: BackendJobVFunc): void;
        thread_create(func: BackendJobThreadFunc): boolean;
        update_detail(
            package_id: string,
            updates: string,
            obsoletes: string,
            vendor_urls: string,
            bugzilla_urls: string,
            cve_urls: string,
            restart: PackageKitGlib.RestartEnum | null,
            update_text: string,
            changelog: string,
            state: PackageKitGlib.UpdateStateEnum | null,
            issued: string,
            updated: string,
        ): void;
        use_background(): boolean;
    }

    module Transaction {
        // Signal callback interfaces

        interface Finished {
            (): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Transaction extends GObject.Object {
        static $gtype: GObject.GType<Transaction>;

        // Constructors

        constructor(properties?: Partial<Transaction.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](conf: GLib.KeyFile, introspection: Gio.DBusNodeInfo): Transaction;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'finished', callback: (_source: this) => void): number;
        connect_after(signal: 'finished', callback: (_source: this) => void): number;
        emit(signal: 'finished'): void;

        // Static methods

        static error_quark(): GLib.Quark;
        static state_to_string(state: TransactionState): string;

        // Methods

        /**
         * Designed to be used by plugins.
         * @param mime_type
         */
        add_supported_content_type(mime_type: string): void;
        cancel_bg(): void;
        get_backend_job(): BackendJob;
        get_conf(): GLib.KeyFile;
        get_full_paths(): string[];
        get_package_ids(): string[];
        get_results(): PackageKitGlib.Results;
        get_role(): PackageKitGlib.RoleEnum;
        get_state(): TransactionState;
        get_tid(): string;
        get_transaction_flags(): PackageKitGlib.Bitfield;
        get_uid(): number;
        get_values(): string[];
        is_exclusive(): boolean;
        is_finished_with_lock_required(): boolean;
        /**
         * Make this transaction exclusive.
         */
        make_exclusive(): void;
        reset_after_lock_error(): void;
        run(): boolean;
        set_backend(backend: Backend): void;
        set_full_paths(full_paths: string): void;
        set_package_ids(package_ids: string): void;
        /**
         * A transaction can have only one state at any time as it is processed.
         * Typically, these states will be:
         *
         * 1. 'new'
         * 2. 'waiting for auth'  <--- waiting for PolicyKit (optional)
         * 3. 'committed'	 <--- when the client sets the role
         * 4. 'ready'	     <--- when the transaction is ready to be run
         * 5. 'running'	   <--- where PkBackend gets used
         * 6. 'finished'
         * @param state
         */
        set_state(state: TransactionState | null): boolean;
        /**
         * Connect all backend_signals to the PkTransaction.
         * @param job
         */
        signals_reset(job: BackendJob): void;
        /**
         * Skip authorization checks.
         * NOTE: This is *only* for testing, do never
         * use it somewhere else!
         * @param skip_checks
         */
        skip_auth_checks(skip_checks: boolean): void;
    }

    type BackendClass = typeof Backend;
    type BackendJobClass = typeof BackendJob;
    abstract class BackendJobPrivate {
        static $gtype: GObject.GType<BackendJobPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class BackendPrivate {
        static $gtype: GObject.GType<BackendPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    class Plugin {
        static $gtype: GObject.GType<Plugin>;

        // Fields

        backend: Backend;
        job: BackendJob;

        // Constructors

        _init(...args: any[]): void;

        // Static methods

        static get_description(): string;

        // Methods

        destroy(): void;
        initialize(): void;
        state_changed(): void;
        transaction_content_types(transaction: Transaction): void;
        transaction_finished_end(transaction: Transaction): void;
        transaction_finished_results(transaction: Transaction): void;
        transaction_get_action(transaction: Transaction, action_id: string): string;
        transaction_run(transaction: Transaction): void;
        transaction_started(transaction: Transaction): void;
    }

    abstract class PluginPrivate {
        static $gtype: GObject.GType<PluginPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type TransactionClass = typeof Transaction;
    abstract class TransactionPrivate {
        static $gtype: GObject.GType<TransactionPrivate>;

        // Constructors

        _init(...args: any[]): void;
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

export default PackageKitPlugin;

// END
