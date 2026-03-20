/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

import '@girs/gjs';

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

    /**
     * @gir-type Enum
     */
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

    /**
     * @gir-type Enum
     */
    enum HintEnum {
        FALSE,
        TRUE,
        UNSET,
        INVALID,
        LAST,
    }

    /**
     * @gir-type Enum
     */
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

    /**
     * @gir-type Enum
     */
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
    /**
     * @param hint
     */
    function hint_enum_from_string(hint: string): HintEnum;
    /**
     * @param hint
     */
    function hint_enum_to_string(hint: HintEnum | null): string;
    /**
     * @param filename
     */
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
     * @returns `true` if the string was converted correctly
     */
    function strtoint(text: string, value: number): boolean;
    /**
     * Converts a string into a unsigned integer value in a safe way.
     * @param text The text the convert
     * @param value The return numeric return value
     * @returns `true` if the string was converted correctly
     */
    function strtouint(text: string, value: number): boolean;
    /**
     * Converts a string into a unsigned integer value in a safe way.
     * @param text The text the convert
     * @param value The return numeric return value
     * @returns `true` if the string was converted correctly
     */
    function strtouint64(text: string, value: number): boolean;
    /**
     * This function is a much safer way of doing "if (strlen (text) == 0))"
     * as it does not rely on text being NULL terminated. It's also much
     * quicker as it only checks the first byte rather than scanning the whole
     * string just to verify it's not zero length.
     * @param text The text to check
     * @returns `true` if the string was converted correctly
     */
    function strzero(text: string): boolean;
    /**
     * @gir-type Callback
     */
    interface BackendFileChanged {
        (backend: Backend, data: any): void;
    }
    /**
     * @gir-type Callback
     */
    interface BackendJobThreadFunc {
        (job: BackendJob, params: GLib.Variant): void;
    }
    /**
     * @gir-type Callback
     */
    interface BackendJobVFunc {
        (job: BackendJob, object: any): void;
    }
    /**
     * @gir-type Callback
     */
    interface PluginFunc {
        (plugin: Plugin): void;
    }
    /**
     * @gir-type Callback
     */
    interface PluginGetActionFunc {
        (plugin: Plugin, transaction: Transaction, action_id: string): string;
    }
    /**
     * @gir-type Callback
     */
    interface PluginGetDescFunc {
        (): string;
    }
    /**
     * @gir-type Callback
     */
    interface PluginTransactionFunc {
        (plugin: Plugin, transaction: Transaction): void;
    }
    namespace Backend {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Backend extends GObject.Object {
        static $gtype: GObject.GType<Backend>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Backend.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Backend.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](conf: GLib.KeyFile): Backend;

        // Signals

        /** @signal */
        connect<K extends keyof Backend.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Backend.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Backend.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Backend.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Backend.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Backend.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * @param value
         */
        static bool_to_string(value: boolean): string;
        /**
         * @param conf
         * @param backend
         */
        static initialize(conf: GLib.KeyFile, backend: Backend): void;

        // Methods

        /**
         * @param eula_id
         */
        accept_eula(eula_id: string): void;
        /**
         * @param job
         */
        cancel(job: BackendJob): void;
        /**
         * @param job
         * @param filters
         * @param package_ids
         * @param recursive
         */
        depends_on(job: BackendJob, filters: PackageKitGlib.Bitfield, package_ids: string, recursive: boolean): void;
        destroy(): void;
        /**
         * @param job
         * @param package_ids
         * @param directory
         */
        download_packages(job: BackendJob, package_ids: string, directory: string): void;
        get_accepted_eula_string(): string;
        get_author(): string;
        /**
         * @param job
         */
        get_categories(job: BackendJob): void;
        get_description(): string;
        /**
         * @param job
         * @param package_ids
         */
        get_details(job: BackendJob, package_ids: string): void;
        /**
         * @param job
         * @param files
         */
        get_details_local(job: BackendJob, files: string): void;
        /**
         * @param job
         */
        get_distro_upgrades(job: BackendJob): void;
        /**
         * @param job
         * @param package_ids
         */
        get_files(job: BackendJob, package_ids: string): void;
        /**
         * @param job
         * @param files
         */
        get_files_local(job: BackendJob, files: string): void;
        get_filters(): PackageKitGlib.Bitfield;
        get_groups(): PackageKitGlib.Bitfield;
        get_mime_types(): string[];
        get_name(): string;
        /**
         * @param job
         * @param filters
         */
        get_packages(job: BackendJob, filters: PackageKitGlib.Bitfield): void;
        /**
         * @param job
         * @param filters
         */
        get_repo_list(job: BackendJob, filters: PackageKitGlib.Bitfield): void;
        get_roles(): PackageKitGlib.Bitfield;
        /**
         * @param job
         * @param package_ids
         */
        get_update_detail(job: BackendJob, package_ids: string): void;
        /**
         * @param job
         * @param filters
         */
        get_updates(job: BackendJob, filters: PackageKitGlib.Bitfield): void;
        /**
         * @param role
         */
        implement(role: PackageKitGlib.RoleEnum | null): void;
        /**
         * @param job
         * @param transaction_flags
         * @param full_paths
         */
        install_files(job: BackendJob, transaction_flags: PackageKitGlib.Bitfield, full_paths: string): void;
        /**
         * @param job
         * @param transaction_flags
         * @param package_ids
         */
        install_packages(job: BackendJob, transaction_flags: PackageKitGlib.Bitfield, package_ids: string): void;
        /**
         * @param job
         * @param type
         * @param key_id
         * @param package_id
         */
        install_signature(
            job: BackendJob,
            type: PackageKitGlib.SigTypeEnum | null,
            key_id: string,
            package_id: string,
        ): void;
        /**
         * @param eula_id
         */
        is_eula_valid(eula_id: string): boolean;
        /**
         * @param role
         */
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
        /**
         * @param job
         * @param force
         */
        refresh_cache(job: BackendJob, force: boolean): void;
        /**
         * @param job
         * @param transaction_flags
         * @param package_ids
         * @param allow_deps
         * @param autoremove
         */
        remove_packages(
            job: BackendJob,
            transaction_flags: PackageKitGlib.Bitfield,
            package_ids: string,
            allow_deps: boolean,
            autoremove: boolean,
        ): void;
        /**
         * @param job
         * @param transaction_flags
         */
        repair_system(job: BackendJob, transaction_flags: PackageKitGlib.Bitfield): void;
        /**
         * @param job
         * @param repo_id
         * @param enabled
         */
        repo_enable(job: BackendJob, repo_id: string, enabled: boolean): void;
        repo_list_changed(): boolean;
        /**
         * @param job
         * @param transaction_flags
         * @param repo_id
         * @param autoremove
         */
        repo_remove(
            job: BackendJob,
            transaction_flags: PackageKitGlib.Bitfield,
            repo_id: string,
            autoremove: boolean,
        ): void;
        /**
         * @param job
         * @param repo_id
         * @param parameter
         * @param value
         */
        repo_set_data(job: BackendJob, repo_id: string, parameter: string, value: string): void;
        /**
         * @param job
         * @param filters
         * @param package_ids
         * @param recursive
         */
        required_by(job: BackendJob, filters: PackageKitGlib.Bitfield, package_ids: string, recursive: boolean): void;
        /**
         * @param job
         */
        reset_job(job: BackendJob): void;
        /**
         * @param job
         * @param filters
         * @param packages
         */
        resolve(job: BackendJob, filters: PackageKitGlib.Bitfield, packages: string): void;
        /**
         * @param job
         * @param filters
         * @param search
         */
        search_details(job: BackendJob, filters: PackageKitGlib.Bitfield, search: string): void;
        /**
         * @param job
         * @param filters
         * @param search
         */
        search_files(job: BackendJob, filters: PackageKitGlib.Bitfield, search: string): void;
        /**
         * @param job
         * @param filters
         * @param search
         */
        search_groups(job: BackendJob, filters: PackageKitGlib.Bitfield, search: string): void;
        /**
         * @param job
         * @param filters
         * @param search
         */
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
         * or in the case of `backend_method_we_want_to_run()` failure:
         * >>> desc->job_start(backend)
         *     (locked backend)
         * >>> desc->backend_method_we_want_to_run(backend)
         * <<< ::ErrorCode(PK_ERROR_ENUM_FAILED_TO_FIND,"no package")
         * >>> desc->job_stop(backend)
         *     (unlocked backend)
         * <<< ::Finished()
         *
         * or in the case of `job_start()` failure:
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
         * Always run for each transaction, *even* when the `job_start()`
         * vfunc fails.
         *
         * This method has no return value as the ErrorCode should have already
         * been set.
         * @param job
         */
        stop_job(job: BackendJob): void;
        supports_parallelization(): boolean;
        /**
         * @param job
         * @param func
         */
        thread_start(job: BackendJob, func: any): void;
        /**
         * @param job
         * @param func
         */
        thread_stop(job: BackendJob, func: any): void;
        /**
         * Responsible for finalising the external backend object.
         *
         * Typically this will involve releasing database locks for any other access.
         * This method should only be called from the engine, unless the backend object
         * is used in self-check code, in which case it will have to be done manually.
         */
        unload(): boolean;
        /**
         * @param job
         * @param transaction_flags
         * @param package_ids
         */
        update_packages(job: BackendJob, transaction_flags: PackageKitGlib.Bitfield, package_ids: string): void;
        /**
         * @param filename
         * @param func
         */
        watch_file(filename: string, func: BackendFileChanged): boolean;
        /**
         * @param job
         * @param filters
         * @param search
         */
        what_provides(job: BackendJob, filters: PackageKitGlib.Bitfield, search: string): void;
    }

    namespace BackendJob {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class BackendJob extends GObject.Object {
        static $gtype: GObject.GType<BackendJob>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: BackendJob.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<BackendJob.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](conf: GLib.KeyFile): BackendJob;

        // Signals

        /** @signal */
        connect<K extends keyof BackendJob.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BackendJob.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof BackendJob.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BackendJob.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof BackendJob.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<BackendJob.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param parent_id
         * @param cat_id
         * @param name
         * @param summary
         * @param icon
         */
        category(parent_id: string, cat_id: string, name: string, summary: string, icon: string): void;
        /**
         * @param package_id
         * @param summary
         * @param license
         * @param group
         * @param description
         * @param url
         * @param size
         */
        details(
            package_id: string,
            summary: string,
            license: string,
            group: PackageKitGlib.GroupEnum | null,
            description: string,
            url: string,
            size: number,
        ): void;
        /**
         * @param type
         * @param name
         * @param summary
         */
        distro_upgrade(type: PackageKitGlib.DistroUpgradeEnum | null, name: string, summary: string): void;
        /**
         * @param eula_id
         * @param package_id
         * @param vendor_name
         * @param license_agreement
         */
        eula_required(eula_id: string, package_id: string, vendor_name: string, license_agreement: string): void;
        /**
         * package_id is NULL when we are using this as a calback from DownloadPackages
         * @param package_id
         * @param files
         */
        files(package_id: string, files: string): void;
        finished(): void;
        get_allow_cancel(): boolean;
        /**
         * @returns Associated PkBackend instance
         */
        get_backend(): any;
        get_background(): HintEnum;
        /**
         * Gets the maximum cache age in seconds.
         * @returns the cache age in seconds, or 0 for unset or `G_MAXUINT` for 'infinity'
         */
        get_cache_age(): number;
        get_cmdline(): string;
        get_exit_code(): PackageKitGlib.ExitEnum;
        /**
         * @returns session frontend_socket, e.g. /tmp/socket.345
         */
        get_frontend_socket(): string;
        get_interactive(): HintEnum;
        get_is_error_set(): boolean;
        get_is_finished(): boolean;
        /**
         * @returns session locale, e.g. en_GB
         */
        get_locale(): string;
        get_locked(): boolean;
        /**
         * @returns comma seporated value of proxy exlude string
         */
        get_no_proxy(): string;
        /**
         * @returns proxy PAC filename
         */
        get_pac(): string;
        get_parameters(): GLib.Variant;
        /**
         * @returns proxy string in the form username:password@server:port
         */
        get_proxy_ftp(): string;
        /**
         * @returns proxy string in the form username:password@server:port
         */
        get_proxy_http(): string;
        /**
         * @returns proxy string in the form username:password@server:port
         */
        get_proxy_https(): string;
        /**
         * @returns proxy string in the form username:password@server:port
         */
        get_proxy_socks(): string;
        get_role(): PackageKitGlib.RoleEnum;
        /**
         * @returns time running in ms
         */
        get_runtime(): number;
        get_started(): boolean;
        get_transaction_flags(): PackageKitGlib.Bitfield;
        get_uid(): number;
        /**
         * @returns Job user data
         */
        get_user_data(): any;
        /**
         * @param signal_kind
         */
        get_vfunc_enabled(signal_kind: BackendJobSignal | null): boolean;
        has_set_error_code(): boolean;
        /**
         * @param media_type
         * @param media_id
         * @param media_text
         */
        media_change_required(
            media_type: PackageKitGlib.MediaTypeEnum | null,
            media_id: string,
            media_text: string,
        ): void;
        /**
         * @param method
         */
        not_implemented_yet(method: string): void;
        /**
         * @param info
         * @param package_id
         * @param summary
         */
        ['package'](info: PackageKitGlib.InfoEnum | null, package_id: string, summary: string): void;
        /**
         * @param repo_id
         * @param description
         * @param enabled
         */
        repo_detail(repo_id: string, description: string, enabled: boolean): void;
        /**
         * @param package_id
         * @param repository_name
         * @param key_url
         * @param key_userid
         * @param key_id
         * @param key_fingerprint
         * @param key_timestamp
         * @param type
         */
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
        /**
         * @param restart
         * @param package_id
         */
        require_restart(restart: PackageKitGlib.RestartEnum | null, package_id: string): void;
        reset(): void;
        /**
         * @param allow_cancel
         */
        set_allow_cancel(allow_cancel: boolean): void;
        /**
         * @param backend
         */
        set_backend(backend: any): void;
        /**
         * @param background
         */
        set_background(background: HintEnum | null): void;
        /**
         * @param cache_age
         */
        set_cache_age(cache_age: number): void;
        /**
         * @param cmdline
         */
        set_cmdline(cmdline: string): void;
        /**
         * @param download_size_remaining
         */
        set_download_size_remaining(download_size_remaining: number): void;
        /**
         * Should only be used internally, or from PkRunner when setting CANCELLED.
         * @param exit
         */
        set_exit_code(exit: PackageKitGlib.ExitEnum | null): void;
        /**
         * @param frontend_socket
         */
        set_frontend_socket(frontend_socket: string): void;
        /**
         * @param interactive
         */
        set_interactive(interactive: HintEnum | null): void;
        /**
         * @param package_id
         * @param status
         * @param percentage
         */
        set_item_progress(package_id: string, status: PackageKitGlib.StatusEnum | null, percentage: number): void;
        /**
         * @param code
         */
        set_locale(code: string): void;
        /**
         * Set if your backend job currently locks the cache, so no other tool will
         * have write  access on it. (read-only transactions will still be permitted)
         * @param locked
         */
        set_locked(locked: boolean): void;
        /**
         * @param params
         */
        set_parameters(params: GLib.Variant): void;
        /**
         * @param percentage
         */
        set_percentage(percentage: number): void;
        /**
         * @param proxy_http
         * @param proxy_https
         * @param proxy_ftp
         * @param proxy_socks
         * @param no_proxy
         * @param pac
         */
        set_proxy(
            proxy_http: string,
            proxy_https: string,
            proxy_ftp: string,
            proxy_socks: string,
            no_proxy: string,
            pac: string,
        ): void;
        /**
         * @param role
         */
        set_role(role: PackageKitGlib.RoleEnum | null): void;
        /**
         * @param speed
         */
        set_speed(speed: number): void;
        /**
         * @param started
         */
        set_started(started: boolean): void;
        /**
         * @param status
         */
        set_status(status: PackageKitGlib.StatusEnum | null): void;
        /**
         * @param transaction_flags
         */
        set_transaction_flags(transaction_flags: PackageKitGlib.Bitfield): void;
        /**
         * @param uid
         */
        set_uid(uid: number): void;
        /**
         * @param user_data
         */
        set_user_data(user_data: any): void;
        /**
         * Connect backend
         * @param signal_kind Kind of the backend signal we want to connect
         * @param vfunc The function we want to call
         */
        set_vfunc(signal_kind: BackendJobSignal | null, vfunc: BackendJobVFunc): void;
        /**
         * @param func
         */
        thread_create(func: BackendJobThreadFunc): boolean;
        /**
         * @param package_id
         * @param updates
         * @param obsoletes
         * @param vendor_urls
         * @param bugzilla_urls
         * @param cve_urls
         * @param restart
         * @param update_text
         * @param changelog
         * @param state
         * @param issued
         * @param updated
         */
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

    namespace Transaction {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            finished: () => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Transaction extends GObject.Object {
        static $gtype: GObject.GType<Transaction>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Transaction.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Transaction.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](conf: GLib.KeyFile, introspection: Gio.DBusNodeInfo): Transaction;

        // Signals

        /** @signal */
        connect<K extends keyof Transaction.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Transaction.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Transaction.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Transaction.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Transaction.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Transaction.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static error_quark(): GLib.Quark;
        /**
         * @param state
         */
        static state_to_string(state: TransactionState): string;

        // Methods

        /**
         * Designed to be used by plugins.
         * @param mime_type
         */
        add_supported_content_type(mime_type: string): void;
        cancel_bg(): void;
        /**
         * @returns Current PkBackendJob for this transaction
         */
        get_backend_job(): BackendJob;
        /**
         * @returns GKeyFile of this transaction
         */
        get_conf(): GLib.KeyFile;
        /**
         * @returns Cached paths
         */
        get_full_paths(): string[];
        /**
         * @returns Cached package-ids
         */
        get_package_ids(): string[];
        /**
         * @returns Results of the transaction
         */
        get_results(): PackageKitGlib.Results;
        get_role(): PackageKitGlib.RoleEnum;
        get_state(): TransactionState;
        get_tid(): string;
        /**
         * @returns transaction flags for the transaction
         */
        get_transaction_flags(): PackageKitGlib.Bitfield;
        get_uid(): number;
        /**
         * @returns Cached values
         */
        get_values(): string[];
        is_exclusive(): boolean;
        is_finished_with_lock_required(): boolean;
        /**
         * Make this transaction exclusive.
         */
        make_exclusive(): void;
        reset_after_lock_error(): void;
        run(): boolean;
        /**
         * @param backend
         */
        set_backend(backend: Backend): void;
        /**
         * @param full_paths
         */
        set_full_paths(full_paths: string): void;
        /**
         * @param package_ids
         */
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

    /**
     * @gir-type Alias
     */
    type BackendClass = typeof Backend;
    /**
     * @gir-type Alias
     */
    type BackendJobClass = typeof BackendJob;
    /**
     * @gir-type Struct
     */
    abstract class BackendJobPrivate {
        static $gtype: GObject.GType<BackendJobPrivate>;
    }

    /**
     * @gir-type Struct
     */
    abstract class BackendPrivate {
        static $gtype: GObject.GType<BackendPrivate>;
    }

    /**
     * @gir-type Struct
     */
    class Plugin {
        static $gtype: GObject.GType<Plugin>;

        // Fields

        backend: Backend;
        job: BackendJob;

        // Static methods

        static get_description(): string;

        // Methods

        destroy(): void;
        initialize(): void;
        state_changed(): void;
        /**
         * @param transaction
         */
        transaction_content_types(transaction: Transaction): void;
        /**
         * @param transaction
         */
        transaction_finished_end(transaction: Transaction): void;
        /**
         * @param transaction
         */
        transaction_finished_results(transaction: Transaction): void;
        /**
         * @param transaction
         * @param action_id
         */
        transaction_get_action(transaction: Transaction, action_id: string): string;
        /**
         * @param transaction
         */
        transaction_run(transaction: Transaction): void;
        /**
         * @param transaction
         */
        transaction_started(transaction: Transaction): void;
    }

    /**
     * @gir-type Struct
     */
    abstract class PluginPrivate {
        static $gtype: GObject.GType<PluginPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type TransactionClass = typeof Transaction;
    /**
     * @gir-type Struct
     */
    abstract class TransactionPrivate {
        static $gtype: GObject.GType<TransactionPrivate>;
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
