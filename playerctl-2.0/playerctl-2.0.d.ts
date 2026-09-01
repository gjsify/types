
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
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace Playerctl {

    /**
     * Playerctl-2.0
     */


    /**
     * @gir-type Enum
     */
    export namespace LoopStatus {
        export const $gtype: GObject.GType<LoopStatus>;
    }

    /**
     * Loop status enumeration for a {@link Playerctl.Player}
     * @gir-type Enum
     */
    enum LoopStatus {
        /**
         * The playback will stop when there are no more tracks to play.
         */
        NONE = 0,
        /**
         * The current track will start again from the beginning once it has
         * finished playing.
         */
        TRACK = 1,
        /**
         * The playback loops through a list of tracks.
         */
        PLAYLIST = 2,
    }


    /**
     * @gir-type Enum
     */
    export namespace PlaybackStatus {
        export const $gtype: GObject.GType<PlaybackStatus>;
    }

    /**
     * Playback status enumeration for a {@link Playerctl.Player}
     * @gir-type Enum
     */
    enum PlaybackStatus {
        /**
         * A track is currently playing.
         */
        PLAYING = 0,
        /**
         * A track is currently paused.
         */
        PAUSED = 1,
        /**
         * There is no track currently playing.
         */
        STOPPED = 2,
    }


    /**
     * @gir-type Enum
     */
    export namespace Source {
        export const $gtype: GObject.GType<Source>;
    }

    /**
     * The source of the name used to control the player.
     * @gir-type Enum
     */
    enum Source {
        /**
         * Only for unitialized players. Source will be chosen automatically.
         */
        NONE = 0,
        /**
         * The player is on the DBus session bus.
         */
        DBUS_SESSION = 1,
        /**
         * The player is on the DBus system bus.
         */
        DBUS_SYSTEM = 2,
    }


    /**
     * Lists all the players that can be controlled by Playerctl.
     * @returns A list of player names.
     * @throws GLib.Error
     */
    function list_players(): PlayerName[];

    namespace Player {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when the player has disconnected and will no longer respond to
             * queries and commands.
             * @signal
             * @run-first
             */
            exit: () => void;
            /**
             * Emitted when the loop status changes.
             * @signal
             * @detailed
             * @run-first
             */
            "loop-status": (loop_status: LoopStatus) => void;
            /**
             * Emitted when the metadata for the currently playing track changes.
             * @signal
             * @run-first
             */
            metadata: (metadata: GLib.Variant) => void;
            /**
             * Emitted when the player pauses.
             * @signal
             * @deprecated since 2.0.0: Use the "playback-status::paused" signal instead.
             * @run-first
             */
            pause: () => void;
            /**
             * Emitted when the player begins to play.
             * @signal
             * @deprecated since 2.0.0: Use the "playback-status::playing" signal instead.
             * @run-first
             */
            play: () => void;
            /**
             * Emitted when the playback status changes. Detail will be "playing",
             * "paused", or "stopped" which you can listen to by connecting to the
             * "playback-status::[STATUS]" signal.
             * @signal
             * @detailed
             * @run-first
             */
            "playback-status": (playback_status: PlaybackStatus) => void;
            /**
             * Emitted when the track changes position unexpectedly or begins in a
             * position other than the beginning. Otherwise, position is assumed to
             * progress normally.
             * @signal
             * @run-first
             */
            seeked: (position: number) => void;
            /**
             * Emitted when the shuffle status changes.
             * @signal
             * @run-first
             */
            shuffle: (shuffle_status: boolean) => void;
            /**
             * Emitted when the player stops.
             * @signal
             * @deprecated since 2.0.0: Use the "playback-status::stopped" signal instead.
             * @run-first
             */
            stop: () => void;
            /**
             * Emitted when the volume of the player changes.
             * @signal
             * @run-first
             */
            volume: (volume: number) => void;
            "notify::can-control": (pspec: GObject.ParamSpec) => void;
            "notify::can-go-next": (pspec: GObject.ParamSpec) => void;
            "notify::can-go-previous": (pspec: GObject.ParamSpec) => void;
            "notify::can-pause": (pspec: GObject.ParamSpec) => void;
            "notify::can-play": (pspec: GObject.ParamSpec) => void;
            "notify::can-seek": (pspec: GObject.ParamSpec) => void;
            "notify::loop-status": (pspec: GObject.ParamSpec) => void;
            "notify::metadata": (pspec: GObject.ParamSpec) => void;
            "notify::playback-status": (pspec: GObject.ParamSpec) => void;
            "notify::player-instance": (pspec: GObject.ParamSpec) => void;
            "notify::player-name": (pspec: GObject.ParamSpec) => void;
            "notify::position": (pspec: GObject.ParamSpec) => void;
            "notify::shuffle": (pspec: GObject.ParamSpec) => void;
            "notify::source": (pspec: GObject.ParamSpec) => void;
            "notify::status": (pspec: GObject.ParamSpec) => void;
            "notify::volume": (pspec: GObject.ParamSpec) => void;
            /**
             * Emitted when the loop status changes.
             * @signal
             * @detailed
             * @run-first
             */
            "loop-status::can-control": (loop_status: LoopStatus) => void;
            /**
             * Emitted when the loop status changes.
             * @signal
             * @detailed
             * @run-first
             */
            "loop-status::can-go-next": (loop_status: LoopStatus) => void;
            /**
             * Emitted when the loop status changes.
             * @signal
             * @detailed
             * @run-first
             */
            "loop-status::can-go-previous": (loop_status: LoopStatus) => void;
            /**
             * Emitted when the loop status changes.
             * @signal
             * @detailed
             * @run-first
             */
            "loop-status::can-pause": (loop_status: LoopStatus) => void;
            /**
             * Emitted when the loop status changes.
             * @signal
             * @detailed
             * @run-first
             */
            "loop-status::can-play": (loop_status: LoopStatus) => void;
            /**
             * Emitted when the loop status changes.
             * @signal
             * @detailed
             * @run-first
             */
            "loop-status::can-seek": (loop_status: LoopStatus) => void;
            /**
             * Emitted when the loop status changes.
             * @signal
             * @detailed
             * @run-first
             */
            "loop-status::loop-status": (loop_status: LoopStatus) => void;
            /**
             * Emitted when the loop status changes.
             * @signal
             * @detailed
             * @run-first
             */
            "loop-status::metadata": (loop_status: LoopStatus) => void;
            /**
             * Emitted when the loop status changes.
             * @signal
             * @detailed
             * @run-first
             */
            "loop-status::playback-status": (loop_status: LoopStatus) => void;
            /**
             * Emitted when the loop status changes.
             * @signal
             * @detailed
             * @run-first
             */
            "loop-status::player-instance": (loop_status: LoopStatus) => void;
            /**
             * Emitted when the loop status changes.
             * @signal
             * @detailed
             * @run-first
             */
            "loop-status::player-name": (loop_status: LoopStatus) => void;
            /**
             * Emitted when the loop status changes.
             * @signal
             * @detailed
             * @run-first
             */
            "loop-status::position": (loop_status: LoopStatus) => void;
            /**
             * Emitted when the loop status changes.
             * @signal
             * @detailed
             * @run-first
             */
            "loop-status::shuffle": (loop_status: LoopStatus) => void;
            /**
             * Emitted when the loop status changes.
             * @signal
             * @detailed
             * @run-first
             */
            "loop-status::source": (loop_status: LoopStatus) => void;
            /**
             * Emitted when the loop status changes.
             * @signal
             * @detailed
             * @run-first
             */
            "loop-status::status": (loop_status: LoopStatus) => void;
            /**
             * Emitted when the loop status changes.
             * @signal
             * @detailed
             * @run-first
             */
            "loop-status::volume": (loop_status: LoopStatus) => void;
            [key: `loop-status::${string}`]: (loop_status: LoopStatus) => void;
            /**
             * Emitted when the playback status changes. Detail will be "playing",
             * "paused", or "stopped" which you can listen to by connecting to the
             * "playback-status::[STATUS]" signal.
             * @signal
             * @detailed
             * @run-first
             */
            "playback-status::can-control": (playback_status: PlaybackStatus) => void;
            /**
             * Emitted when the playback status changes. Detail will be "playing",
             * "paused", or "stopped" which you can listen to by connecting to the
             * "playback-status::[STATUS]" signal.
             * @signal
             * @detailed
             * @run-first
             */
            "playback-status::can-go-next": (playback_status: PlaybackStatus) => void;
            /**
             * Emitted when the playback status changes. Detail will be "playing",
             * "paused", or "stopped" which you can listen to by connecting to the
             * "playback-status::[STATUS]" signal.
             * @signal
             * @detailed
             * @run-first
             */
            "playback-status::can-go-previous": (playback_status: PlaybackStatus) => void;
            /**
             * Emitted when the playback status changes. Detail will be "playing",
             * "paused", or "stopped" which you can listen to by connecting to the
             * "playback-status::[STATUS]" signal.
             * @signal
             * @detailed
             * @run-first
             */
            "playback-status::can-pause": (playback_status: PlaybackStatus) => void;
            /**
             * Emitted when the playback status changes. Detail will be "playing",
             * "paused", or "stopped" which you can listen to by connecting to the
             * "playback-status::[STATUS]" signal.
             * @signal
             * @detailed
             * @run-first
             */
            "playback-status::can-play": (playback_status: PlaybackStatus) => void;
            /**
             * Emitted when the playback status changes. Detail will be "playing",
             * "paused", or "stopped" which you can listen to by connecting to the
             * "playback-status::[STATUS]" signal.
             * @signal
             * @detailed
             * @run-first
             */
            "playback-status::can-seek": (playback_status: PlaybackStatus) => void;
            /**
             * Emitted when the playback status changes. Detail will be "playing",
             * "paused", or "stopped" which you can listen to by connecting to the
             * "playback-status::[STATUS]" signal.
             * @signal
             * @detailed
             * @run-first
             */
            "playback-status::loop-status": (playback_status: PlaybackStatus) => void;
            /**
             * Emitted when the playback status changes. Detail will be "playing",
             * "paused", or "stopped" which you can listen to by connecting to the
             * "playback-status::[STATUS]" signal.
             * @signal
             * @detailed
             * @run-first
             */
            "playback-status::metadata": (playback_status: PlaybackStatus) => void;
            /**
             * Emitted when the playback status changes. Detail will be "playing",
             * "paused", or "stopped" which you can listen to by connecting to the
             * "playback-status::[STATUS]" signal.
             * @signal
             * @detailed
             * @run-first
             */
            "playback-status::playback-status": (playback_status: PlaybackStatus) => void;
            /**
             * Emitted when the playback status changes. Detail will be "playing",
             * "paused", or "stopped" which you can listen to by connecting to the
             * "playback-status::[STATUS]" signal.
             * @signal
             * @detailed
             * @run-first
             */
            "playback-status::player-instance": (playback_status: PlaybackStatus) => void;
            /**
             * Emitted when the playback status changes. Detail will be "playing",
             * "paused", or "stopped" which you can listen to by connecting to the
             * "playback-status::[STATUS]" signal.
             * @signal
             * @detailed
             * @run-first
             */
            "playback-status::player-name": (playback_status: PlaybackStatus) => void;
            /**
             * Emitted when the playback status changes. Detail will be "playing",
             * "paused", or "stopped" which you can listen to by connecting to the
             * "playback-status::[STATUS]" signal.
             * @signal
             * @detailed
             * @run-first
             */
            "playback-status::position": (playback_status: PlaybackStatus) => void;
            /**
             * Emitted when the playback status changes. Detail will be "playing",
             * "paused", or "stopped" which you can listen to by connecting to the
             * "playback-status::[STATUS]" signal.
             * @signal
             * @detailed
             * @run-first
             */
            "playback-status::shuffle": (playback_status: PlaybackStatus) => void;
            /**
             * Emitted when the playback status changes. Detail will be "playing",
             * "paused", or "stopped" which you can listen to by connecting to the
             * "playback-status::[STATUS]" signal.
             * @signal
             * @detailed
             * @run-first
             */
            "playback-status::source": (playback_status: PlaybackStatus) => void;
            /**
             * Emitted when the playback status changes. Detail will be "playing",
             * "paused", or "stopped" which you can listen to by connecting to the
             * "playback-status::[STATUS]" signal.
             * @signal
             * @detailed
             * @run-first
             */
            "playback-status::status": (playback_status: PlaybackStatus) => void;
            /**
             * Emitted when the playback status changes. Detail will be "playing",
             * "paused", or "stopped" which you can listen to by connecting to the
             * "playback-status::[STATUS]" signal.
             * @signal
             * @detailed
             * @run-first
             */
            "playback-status::volume": (playback_status: PlaybackStatus) => void;
            [key: `playback-status::${string}`]: (playback_status: PlaybackStatus) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            can_control: boolean;
            canControl: boolean;
            can_go_next: boolean;
            canGoNext: boolean;
            can_go_previous: boolean;
            canGoPrevious: boolean;
            can_pause: boolean;
            canPause: boolean;
            can_play: boolean;
            canPlay: boolean;
            can_seek: boolean;
            canSeek: boolean;
            loop_status: LoopStatus;
            loopStatus: LoopStatus;
            metadata: GLib.Variant;
            playback_status: PlaybackStatus;
            playbackStatus: PlaybackStatus;
            player_instance: string;
            playerInstance: string;
            player_name: string;
            playerName: string;
            position: bigint | number;
            shuffle: boolean;
            source: Source;
            status: string;
            volume: number;
        }
    }

    /**
     * @gir-type Class
     */
    class Player extends GObject.Object {
        static $gtype: GObject.GType<Player>;

        // Properties
        /**
         * @read-only
         * @default false
         */
        get can_control(): boolean;

        /**
         * @read-only
         * @default false
         */
        get canControl(): boolean;

        /**
         * @read-only
         * @default false
         */
        get can_go_next(): boolean;

        /**
         * @read-only
         * @default false
         */
        get canGoNext(): boolean;

        /**
         * @read-only
         * @default false
         */
        get can_go_previous(): boolean;

        /**
         * @read-only
         * @default false
         */
        get canGoPrevious(): boolean;

        /**
         * @read-only
         * @default false
         */
        get can_pause(): boolean;

        /**
         * @read-only
         * @default false
         */
        get canPause(): boolean;

        /**
         * @read-only
         * @default false
         */
        get can_play(): boolean;

        /**
         * @read-only
         * @default false
         */
        get canPlay(): boolean;

        /**
         * @read-only
         * @default false
         */
        get can_seek(): boolean;

        /**
         * @read-only
         * @default false
         */
        get canSeek(): boolean;

        /**
         * @read-only
         * @default Playerctl.LoopStatus.NONE
         */
        get loop_status(): LoopStatus;

        /**
         * @read-only
         * @default Playerctl.LoopStatus.NONE
         */
        get loopStatus(): LoopStatus;

        /**
         * @read-only
         */
        get metadata(): GLib.Variant;

        /**
         * @read-only
         * @default Playerctl.PlaybackStatus.STOPPED
         */
        get playback_status(): PlaybackStatus;

        /**
         * @read-only
         * @default Playerctl.PlaybackStatus.STOPPED
         */
        get playbackStatus(): PlaybackStatus;

        /**
         * @construct-only
         * @default null
         */
        get player_instance(): string;

        /**
         * @construct-only
         * @default null
         */
        get playerInstance(): string;

        /**
         * @construct-only
         * @default null
         */
        get player_name(): string;

        /**
         * @construct-only
         * @default null
         */
        get playerName(): string;

        /**
         * @read-only
         * @default 0
         */
        get position(): number;

        /**
         * @read-only
         * @default false
         */
        get shuffle(): boolean;

        /**
         * @construct-only
         * @default Playerctl.Source.NONE
         */
        get source(): Source;

        /**
         * The playback status of the player as a string
         * @deprecated since 2.0.0: Use the "playback-status" signal instead.
         * @read-only
         * @default null
         */
        get status(): string;

        /**
         * @default 0
         */
        get volume(): number;
        set volume(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Player.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Player.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](player_name: string | null): Player;

        static new_for_source(player_name: string | null, source: Source): Player;

        static new_from_name(player_name: PlayerName): Player;

        // Signals
        /** @signal */
        connect<K extends keyof Player.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Player.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Player.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Player.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Player.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Player.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets the album from the metadata of the current track, or NULL if
         * no track is playing.
         * @returns The album from the metadata of the current track
         * @throws GLib.Error
         */
        get_album(): string;

        /**
         * Gets the artist from the metadata of the current track, or NULL if no
         * track is playing.
         * @returns The artist from the metadata of the current track
         * @throws GLib.Error
         */
        get_artist(): string;

        /**
         * Gets the position of the current track in microseconds ignoring the property
         * cache.
         * @throws GLib.Error
         */
        get_position(): number;

        /**
         * Gets the title from the metadata of the current track, or NULL if
         * no track is playing.
         * @returns The title from the metadata of the current track
         * @throws GLib.Error
         */
        get_title(): string;

        /**
         * Command the player to go to the next track
         * @throws GLib.Error
         */
        next(): void;

        /**
         * A convenience function for bindings to subscribe to an event with a callback
         * @param event the event to subscribe to
         * @param callback the callback to run on the event
         * @deprecated since 2.0.0: Use `g_object_connect()` to listen to events.
         * @throws GLib.Error
         */
        on(event: string, callback: GObject.Closure): void;

        /**
         * Command the player to open given URI
         * @param uri the URI to open, either a file name or an external URL
         * @throws GLib.Error
         */
        open(uri: string): void;

        /**
         * Command the player to pause
         * @throws GLib.Error
         */
        pause(): void;

        /**
         * Command the player to play
         * @throws GLib.Error
         */
        play(): void;

        /**
         * Command the player to play if it is paused or pause if it is playing
         * @throws GLib.Error
         */
        play_pause(): void;

        /**
         * Command the player to go to the previous track
         * @throws GLib.Error
         */
        previous(): void;

        /**
         * Gets the given property from the metadata of the current track. If property
         * is null, prints all the metadata properties. Returns NULL if no track is
         * playing.
         * @param property the property from the metadata to print
         * @returns The artist from the metadata of the current track
         * @throws GLib.Error
         */
        print_metadata_prop(property: string | null): string;

        /**
         * Command the player to seek forward by offset given in microseconds.
         * @param offset the offset to seek forward to in microseconds
         * @throws GLib.Error
         */
        seek(offset: bigint | number): void;

        /**
         * Set the loop status of the player. Can be set to either None, Track, or Playlist.
         * @param status the requested {@link Playerctl.LoopStatus} to set the player to
         * @throws GLib.Error
         */
        set_loop_status(status: LoopStatus): void;

        /**
         * Sets the absolute position of the current track to the given position in microseconds.
         * @param position The absolute position in the track to set as the position
         * @throws GLib.Error
         */
        set_position(position: bigint | number): void;

        /**
         * Request to set the shuffle state of the player, either on or off.
         * @param shuffle whether to enable shuffle
         * @throws GLib.Error
         */
        set_shuffle(shuffle: boolean): void;

        /**
         * Sets the volume level for the player from 0.0 for no volume to 1.0 for
         * maximum volume. Passing negative numbers should set the volume to 0.0.
         * @param volume the volume level from 0.0 to 1.0
         * @throws GLib.Error
         */
        set_volume(volume: number): void;

        /**
         * Command the player to stop
         * @throws GLib.Error
         */
        stop(): void;
    }


    namespace PlayerManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when a new name has appeared and is available to connect to. Use
             * `playerctl_player_new_from_name()` to connect to the player and
             * `playerctl_player_manager_manage_player()` to add it to the managed list of
             * players.
             * @signal
             * @run-last
             */
            "name-appeared": (name: PlayerName) => void;
            /**
             * Emitted when the name has vanished and is no longer available to be
             * controlled by playerctl. If the player is managed, it will automatically
             * be removed from the list of players and the
             * {@link Playerctl.PlayerManager.SignalSignatures.player_vanished | Playerctl.PlayerManager::player-vanished} signal will be emitted
             * automatically.
             * @signal
             * @run-first
             */
            "name-vanished": (name: PlayerName) => void;
            /**
             * Emitted when a new player will be managed by this manager through a call
             * to `playerctl_player_manager_manage_player()`.
             * @signal
             * @run-first
             */
            "player-appeared": (player: Player) => void;
            /**
             * Emitted when a player has disconnected and will no longer be managed by
             * this manager. The player is removed from the list of players
             * automatically.
             * @signal
             * @run-first
             */
            "player-vanished": (player: Player) => void;
            "notify::player-names": (pspec: GObject.ParamSpec) => void;
            "notify::players": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            player_names: PlayerName[];
            playerNames: PlayerName[];
            players: Player[];
        }
    }

    /**
     * @gir-type Class
     */
    class PlayerManager extends GObject.Object {
        static $gtype: GObject.GType<PlayerManager>;

        // Properties
        /**
         * A list of fully qualified player names that are currently available to control.
         * @read-only
         */
        get player_names(): PlayerName[];

        /**
         * A list of fully qualified player names that are currently available to control.
         * @read-only
         */
        get playerNames(): PlayerName[];

        /**
         * A list of players that are currently connected and managed by this class.
         * @read-only
         */
        get players(): Player[];

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PlayerManager.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<PlayerManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): PlayerManager;

        // Signals
        /** @signal */
        connect<K extends keyof PlayerManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlayerManager.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PlayerManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PlayerManager.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PlayerManager.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PlayerManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Add the given player to the list of managed players. Takes a reference to
         * the player (so you can unref it after you call this function). The player
         * will automatically be unreffed and removed from the list of
         * {@link Playerctl.PlayerManager.players} when
         * it disconnects and the {@link Playerctl.PlayerManager.SignalSignatures.player_vanished | Playerctl.PlayerManager::player-vanished} signal will
         * be emitted on the manager.
         * @param player A {@link Playerctl.Player} to manage
         */
        manage_player(player: Player): void;

        /**
         * Moves the player to the top of the list of {@link Playerctl.PlayerManager.players}. If this manager has a
         * sort function set with `playerctl_player_manager_set_sort_func()`, the list of
         * players will be sorted afterward, but will be on top of equal players in the
         * sorted order.
         * @param player A {@link Playerctl.Player} in the list of {@link Playerctl.PlayerManager.players}
         */
        move_player_to_top(player: Player): void;

        /**
         * Keeps the {@link Playerctl.PlayerManager.players} list of this manager in sorted order which is useful
         * for using this list as a priority queue.
         * @param sort_func The compare function to be used to sort the {@link Playerctl.PlayerManager.players}.
         */
        set_sort_func(sort_func: GLib.CompareDataFunc): void;
    }


    /**
     * @gir-type Alias
     */
    type PlayerClass = typeof Player;

    /**
     * @gir-type Alias
     */
    type PlayerManagerClass = typeof PlayerManager;

    /**
     * @gir-type Struct
     */
    abstract class PlayerManagerPrivate {
        static $gtype: GObject.GType<PlayerManagerPrivate>;
    }


    /**
     * Event container for when names of players appear or disapear as the
     * controllable media player applications open and close.
     * @gir-type Struct
     */
    class PlayerName {
        static $gtype: GObject.GType<PlayerName>;

        // Fields
        name: string;

        instance: string;

        source: Source;

        // Methods
        /**
         * Creates a dynamically allocated name name container as a copy of
         * `name`.
         * @returns a newly-allocated copy of `name`
         */
        copy(): PlayerName;

        /**
         * Frees `name`. If `name` is `null`, it simply returns.
         */
        free(): void;
    }


    /**
     * @gir-type Struct
     */
    abstract class PlayerPrivate {
        static $gtype: GObject.GType<PlayerPrivate>;
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

export default Playerctl;

// END
