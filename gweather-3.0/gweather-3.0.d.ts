
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
import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from 'cairo';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Atk from '@girs/atk-1.0';

export namespace GWeather {

    /**
     * GWeather-3.0
     */


    /**
     * @gir-type Enum
     */
    export namespace ConditionPhenomenon {
        export const $gtype: GObject.GType<ConditionPhenomenon>;
    }

    /**
     * The current or forecasted significant phenomenon.
     * @gir-type Enum
     */
    enum ConditionPhenomenon {
        /**
         * value not available
         */
        INVALID,
        /**
         * no significant phenomenon
         */
        NONE,
        DRIZZLE,
        RAIN,
        SNOW,
        SNOW_GRAINS,
        ICE_CRYSTALS,
        ICE_PELLETS,
        HAIL,
        SMALL_HAIL,
        UNKNOWN_PRECIPITATION,
        MIST,
        FOG,
        SMOKE,
        VOLCANIC_ASH,
        SAND,
        HAZE,
        SPRAY,
        DUST,
        SQUALL,
        SANDSTORM,
        DUSTSTORM,
        FUNNEL_CLOUD,
        TORNADO,
        DUST_WHIRLS,
        LAST,
    }


    /**
     * @gir-type Enum
     */
    export namespace ConditionQualifier {
        export const $gtype: GObject.GType<ConditionQualifier>;
    }

    /**
     * An additional modifier applied to a {@link GWeather.ConditionPhenomenon} to
     * describe the current or forecasted weather conditions.
     * The exact meaning of each qualifier is described at
     * http://www.weather.com/glossary/ and
     * http://www.crh.noaa.gov/arx/wx.tbl.php
     * @gir-type Enum
     */
    enum ConditionQualifier {
        /**
         * value not available
         */
        INVALID,
        /**
         * no qualifier for the phenomenon
         */
        NONE,
        /**
         * phenomenon happening in the proximity
         *                               of the location, not in the actual location
         */
        VICINITY,
        /**
         * phenomenon is light or predicted to be light
         */
        LIGHT,
        /**
         * phenomenon is moderate or predicted to be
         *                               moderate
         */
        MODERATE,
        /**
         * phenomenon is heavy or predicted to be heavy
         */
        HEAVY,
        /**
         * shallow fog (only valid with
         *                              {@link GWeather.ConditionPhenomenon.FOG})
         */
        SHALLOW,
        /**
         * patches of fog (only valid with
         *                              {@link GWeather.ConditionPhenomenon.FOG})
         */
        PATCHES,
        /**
         * partial fog (only valid with
         *                             {@link GWeather.ConditionPhenomenon.FOG})
         */
        PARTIAL,
        /**
         * phenomenon will be a thunderstorm
         *                                   and/or will include lightning
         */
        THUNDERSTORM,
        /**
         * phenomenon is blowing (valid with
         *                              {@link GWeather.ConditionPhenomenon.SNOW}, {@link GWeather.ConditionPhenomenon.SAND},
         *                              {@link GWeather.ConditionPhenomenon.SPRAY}, {@link GWeather.ConditionPhenomenon.DUST})
         */
        BLOWING,
        /**
         * phenomenon is heavy and involves showers
         */
        SHOWERS,
        /**
         * phenomenon is moving across (valid
         *                               with {@link GWeather.ConditionPhenomenon.SAND} and
         *                               {@link GWeather.ConditionPhenomenon.DUST})
         */
        DRIFTING,
        /**
         * phenomenon is freezing and involves ice
         */
        FREEZING,
        /**
         * maximum value of the enumeration.
         */
        LAST,
    }


    /**
     * @gir-type Enum
     */
    export namespace DistanceUnit {
        export const $gtype: GObject.GType<DistanceUnit>;
    }

    /**
     * The measure unit to use for sky visibility values, when retrieved
     * by `gweather_info_get_value_visibility()`.
     * @gir-type Enum
     */
    enum DistanceUnit {
        /**
         * invalid unit
         */
        INVALID,
        /**
         * the user preferred distance unit
         */
        DEFAULT,
        /**
         * meters
         */
        METERS,
        /**
         * kilometers (= 1000 meters)
         */
        KM,
        /**
         * miles
         */
        MILES,
    }


    /**
     * @gir-type Enum
     */
    export namespace LocationLevel {
        export const $gtype: GObject.GType<LocationLevel>;
    }

    /**
     * The size/scope of a particular {@link GWeather.Location}.
     * 
     * Locations form a hierarchy, with a {@link GWeather.LocationLevel.WORLD}
     * location at the top, divided into regions or countries, and so on.
     * Countries may or may not be divided into "adm1"s, and "adm1"s may
     * or may not be divided into "adm2"s. A city will have at least one,
     * and possibly several, weather stations inside it. Weather stations
     * will never appear outside of cities.
     * 
     * Building a database with `gweather_location_get_world()` will never
     * create detached instances, but deserializing might.
     * @gir-type Enum
     */
    enum LocationLevel {
        /**
         * A location representing the entire world.
         */
        WORLD,
        /**
         * A location representing a continent or
         * other top-level region.
         */
        REGION,
        /**
         * A location representing a "country" (or
         * other geographic unit that has an ISO-3166 country code)
         */
        COUNTRY,
        /**
         * A location representing a "first-level
         * administrative division"; ie, a state, province, or similar
         * division.
         */
        ADM1,
        /**
         * A location representing a city
         */
        CITY,
        /**
         * A location representing a
         * weather station.
         */
        WEATHER_STATION,
        /**
         * A location that is detached from the
         * database, for example because it was loaded from external storage
         * and could not be fully recovered. The parent of this location is
         * the nearest weather station.
         */
        DETACHED,
        /**
         * A location representing a named
         * or special timezone in the world, such as UTC
         */
        NAMED_TIMEZONE,
    }


    /**
     * @gir-type Enum
     */
    export namespace PressureUnit {
        export const $gtype: GObject.GType<PressureUnit>;
    }

    /**
     * The measure unit to use for atmospheric pressure values, when
     * retrieved by `gweather_info_get_value_pressure()`.
     * @gir-type Enum
     */
    enum PressureUnit {
        /**
         * invalid unit
         */
        INVALID,
        /**
         * the user preferred pressure unit
         */
        DEFAULT,
        /**
         * kiloPascal (* 10^3 Pa)
         */
        KPA,
        /**
         * hectoPascal (* 10^2 Pa); also known
         *                              as millibars, but formatted differently
         */
        HPA,
        /**
         * millibars; same as {@link GWeather.PressureUnit.HPA}
         */
        MB,
        /**
         * millimeters of mercury
         */
        MM_HG,
        /**
         * inches of mercury
         */
        INCH_HG,
        /**
         * atmospheres
         */
        ATM,
    }


    /**
     * @gir-type Enum
     */
    export namespace Sky {
        export const $gtype: GObject.GType<Sky>;
    }

    /**
     * The sky and cloud visibility. In general it is discouraged to
     * use this value directly to compute the forecast icon: applications
     * should instead use `gweather_info_get_icon_name()` or
     * `gweather_info_get_symbolic_icon_name()`.
     * @gir-type Enum
     */
    enum Sky {
        /**
         * value not available
         */
        INVALID,
        /**
         * sky completely clear, no clouds visible
         */
        CLEAR,
        /**
         * sky mostly clear, few clouds
         */
        BROKEN,
        /**
         * sky mostly clear, patches of clouds
         */
        SCATTERED,
        /**
         * few clouds, sky cloudy but patches of sky visible
         */
        FEW,
        /**
         * sky completely clouded, sun not visible
         */
        OVERCAST,
        /**
         * the maximum value for the enumeration
         */
        LAST,
    }


    /**
     * @gir-type Enum
     */
    export namespace SpeedUnit {
        export const $gtype: GObject.GType<SpeedUnit>;
    }

    /**
     * The measure unit to use for wind speed values, when retrieved by
     * `gweather_info_get_value_wind()`.
     * @gir-type Enum
     */
    enum SpeedUnit {
        /**
         * invalid unit
         */
        INVALID,
        /**
         * the user preferred speed unit
         */
        DEFAULT,
        /**
         * meters per second
         */
        MS,
        /**
         * kilometers per hour
         */
        KPH,
        /**
         * miles per hour
         */
        MPH,
        /**
         * knots
         */
        KNOTS,
        /**
         * Beaufort scale
         */
        BFT,
    }


    /**
     * @gir-type Enum
     */
    export namespace TemperatureUnit {
        export const $gtype: GObject.GType<TemperatureUnit>;
    }

    /**
     * The measure unit to use for temperature values, when retrieved by
     * the `gweather_info_get_value_temp()` family of functions.
     * @gir-type Enum
     */
    enum TemperatureUnit {
        /**
         * invalid unit
         */
        INVALID,
        /**
         * the user preferred temperature unit
         */
        DEFAULT,
        /**
         * Kelvin (absolute) temperature scale
         */
        KELVIN,
        /**
         * Celsius temperature scale
         */
        CENTIGRADE,
        /**
         * Fahrenheit temperature scale
         */
        FAHRENHEIT,
    }


    /**
     * @gir-type Enum
     */
    export namespace WindDirection {
        export const $gtype: GObject.GType<WindDirection>;
    }

    /**
     * The direction of the prevailing wind. Composite values
     * such as north-north-east indicate a direction between the
     * two component value (north and north-east).
     * @gir-type Enum
     */
    enum WindDirection {
        /**
         * value not available
         */
        INVALID,
        /**
         * variable throughout the day
         */
        VARIABLE,
        /**
         * north
         */
        N,
        /**
         * north-north-east
         */
        NNE,
        /**
         * north-east
         */
        NE,
        /**
         * east-north-east
         */
        ENE,
        /**
         * east
         */
        E,
        /**
         * east-south-east
         */
        ESE,
        /**
         * south-east
         */
        SE,
        /**
         * south-south-east
         */
        SSE,
        /**
         * south
         */
        S,
        /**
         * south-south-west
         */
        SSW,
        /**
         * south-west
         */
        SW,
        /**
         * west-south-west
         */
        WSW,
        /**
         * west
         */
        W,
        /**
         * west-north-west
         */
        WNW,
        /**
         * north-west
         */
        NW,
        /**
         * north-north-west
         */
        NNW,
        /**
         * maximum value for the enumeration
         */
        LAST,
    }


    const LOCATION_ENTRY_H: number;

    const TIMEZONE_MENU_H: number;

    /**
     * @param result 
     */
    function location_detect_nearest_city_finish(result: Gio.AsyncResult): Location;

    /**
     * Obtains the shared {@link GWeather.Location} of type {@link GWeather.LocationLevel.WORLD},
     * representing a hierarchy containing all of the locations from
     * Locations.xml.
     * 
     * Prior to version 40 no reference was returned.
     * @returns a {@link GWeather.LocationLevel.WORLD} location, or `null` if Locations.xml could not be found or could not be parsed.
     */
    function location_get_world(): Location | null;

    /**
     * Returns the location level as a string, useful for debugging
     * purposes.
     * @param level a {@link GWeather.LocationLevel}
     * @returns a string
     */
    function location_level_to_string(level: LocationLevel): string;

    /**
     * @param sky 
     */
    function sky_to_string(sky: Sky): string;

    /**
     * @param sky 
     * @param options 
     */
    function sky_to_string_full(sky: Sky, options: FormatOptions): string;

    /**
     * Creates a human-readable, localized representation of `unit`
     * @param unit a speed unit, or {@link GWeather.SpeedUnit.DEFAULT}
     */
    function speed_unit_to_string(unit: SpeedUnit): string;

    /**
     * Resolve `unit` into a real temperature unit, potentially considering
     * locale defaults.
     * @param unit a tempeature unit, or {@link GWeather.TemperatureUnit.DEFAULT}
     */
    function temperature_unit_to_real(unit: TemperatureUnit): TemperatureUnit;

    /**
     * Get the {@link GWeather.Timezone} for `tzid`.
     * 
     * Prior to version 40 no reference was returned.
     * @param tzid A timezone identifier, like "America/New_York" or "Europe/London"
     * @returns A {@link GWeather.Timezone}.
     * @since 3.12
     */
    function timezone_get_by_tzid(tzid: string): Timezone;

    /**
     * Gets the UTC timezone.
     * @returns a {@link GWeather.Timezone} for UTC, or `null` on error.
     */
    function timezone_get_utc(): Timezone;

    /**
     * @param wind 
     */
    function wind_direction_to_string(wind: WindDirection): string;

    /**
     * @param wind 
     * @param options 
     */
    function wind_direction_to_string_full(wind: WindDirection, options: FormatOptions): string;

    /**
     * @gir-type Callback
     */
    interface FilterFunc {
        (location: Location): boolean;
    }

    /**
     * @gir-type Flags
     */
    export namespace FormatOptions {
        export const $gtype: GObject.GType<FormatOptions>;
    }

    /**
     * Format options to influence the returned string of the
     * gweather_*_to_string_full() functions.
     * @gir-type Flags
     */
    enum FormatOptions {
        /**
         * The default string format
         */
        DEFAULT,
        /**
         * Capitalize as if the string
         *                                                  was starting a sentence
         */
        SENTENCE_CAPITALIZATION,
        /**
         * Capitalize as if the string was
         *                                            appearing within a sentence
         */
        NO_CAPITALIZATION,
    }


    /**
     * @gir-type Flags
     */
    export namespace Provider {
        export const $gtype: GObject.GType<Provider>;
    }

    /**
     * @gir-type Flags
     */
    enum Provider {
        /**
         * no provider, no weather information available
         */
        NONE,
        /**
         * METAR office, providing current conditions worldwide
         */
        METAR,
        /**
         * US weather office, providing 7 days of forecast
         */
        IWIN,
        /**
         * Yahoo Weather Service, removed in 3.27.1
         */
        YAHOO,
        /**
         * MET.no service, worldwide but requires attribution and a subscription to the [API users mailing-list](https://lists.met.no/mailman/listinfo/api-users).
         */
        MET_NO,
        /**
         * OpenWeatherMap, worldwide and possibly more reliable, but requires attribution and is limited in the number of queries
         */
        OWM,
        /**
         * enable all available providers
         */
        ALL,
    }


    namespace Info {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * This signal is emitted after the initial fetch of the weather
             * data from upstream services, and after every successful call
             * to `gweather_info_update`().
             * @signal
             * @run-first
             */
            updated: () => void;
            "notify::application-id": (pspec: GObject.ParamSpec) => void;
            "notify::contact-info": (pspec: GObject.ParamSpec) => void;
            "notify::enabled-providers": (pspec: GObject.ParamSpec) => void;
            "notify::location": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            application_id: string;
            applicationId: string;
            contact_info: string;
            contactInfo: string;
            enabled_providers: Provider;
            enabledProviders: Provider;
            location: Location;
        }
    }

    /**
     * {@link GWeather.Info} provides a handy way to access weather conditions
     * and forecasts from a {@link GWeather.Location}, aggregating multiple
     * different web services.
     * 
     * It includes also astronomical data such as sunrise times and
     * moon phases.
     * @gir-type Class
     */
    class Info extends GObject.Object {
        static $gtype: GObject.GType<Info>;

        // Properties
        get application_id(): string;
        set application_id(val: string);

        get applicationId(): string;
        set applicationId(val: string);

        get contact_info(): string;
        set contact_info(val: string);

        get contactInfo(): string;
        set contactInfo(val: string);

        get enabled_providers(): Provider;
        set enabled_providers(val: Provider);

        get enabledProviders(): Provider;
        set enabledProviders(val: Provider);

        get location(): Location;
        set location(val: Location);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Info.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Info.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](location: Location | null): Info;

        // Signals
        /** @signal */
        connect<K extends keyof Info.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Info.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Info.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Info.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Info.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Info.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Ensures that any data cached from the network is stored to disk.
         * Calling this is not necessary, as the cache will be saved when
         * the last reference to a {@link GWeather.Info} will be dropped.
         * On the other hand, it must be called if there is any chance that
         * the application will be closed without unreffing all objects, such
         * as when using a language binding that employs a GC.
         */
        static store_cache(): void;

        // Methods
        abort(): void;

        get_apparent(): string;

        /**
         * Get the [application ID](https://docs.flatpak.org/en/latest/conventions.html#application-ids)
         * of the application fetching the weather.
         * @returns the application ID
         */
        get_application_id(): string;

        /**
         * Some weather services require the application showing the
         * data to include an attribution text, possibly including links
         * to the service website.
         * This must be shown prominently toghether with the data.
         * @returns the required attribution text, in Pango          markup form, or `null` if not required
         */
        get_attribution(): string;

        get_conditions(): string;

        /**
         * Get the contact information of the application fetching the weather.
         * @returns the contact information
         */
        get_contact_info(): string;

        get_dew(): string;

        /**
         * Gets the bitmask of enabled {@link GWeather.Provider} weather
         * providers.
         */
        get_enabled_providers(): Provider;

        /**
         * @returns list of GWeatherInfo* objects for the forecast. The list is owned by the 'info' object thus is alive as long as the 'info'. The 'update' property is the date/time when the forecast info is used for.
         */
        get_forecast_list(): Info[];

        get_humidity(): string;

        get_icon_name(): string;

        get_location(): Location;

        get_location_name(): string;

        get_pressure(): string;

        /**
         * @returns what?
         */
        get_radar(): GdkPixbuf.PixbufAnimation;

        get_sky(): string;

        get_sunrise(): string;

        get_sunset(): string;

        get_symbolic_icon_name(): string;

        get_temp(): string;

        get_temp_max(): string;

        get_temp_min(): string;

        get_temp_summary(): string;

        /**
         * @returns gboolean indicating success or failure
         */
        get_upcoming_moonphases(): [boolean, number[]];

        get_update(): string;

        /**
         * @param unit the desired unit, as a {@link GWeather.TemperatureUnit}
         * @returns TRUE is `value` is valid, FALSE otherwise.
         */
        get_value_apparent(unit: TemperatureUnit): [boolean, number];

        /**
         * Fills out `phenomenon` and `qualifier` with current weather conditions.
         * @returns TRUE is out arguments are valid, FALSE otherwise.
         */
        get_value_conditions(): [boolean, ConditionPhenomenon, ConditionQualifier];

        /**
         * @param unit the desired unit, as a {@link GWeather.TemperatureUnit}
         * @returns TRUE is `value` is valid, FALSE otherwise.
         */
        get_value_dew(unit: TemperatureUnit): [boolean, number];

        /**
         * @returns TRUE is `value` is valid, FALSE otherwise.
         */
        get_value_moonphase(): [boolean, MoonPhase, MoonLatitude];

        /**
         * @param unit the desired unit, as a {@link GWeather.PressureUnit}
         * @returns TRUE if `value` is valid, FALSE otherwise.
         */
        get_value_pressure(unit: PressureUnit): [boolean, number];

        /**
         * Fills out `sky` with current sky conditions.
         * @returns TRUE is `sky` is valid, FALSE otherwise.
         */
        get_value_sky(): [boolean, Sky];

        /**
         * @returns TRUE is `value` is valid, FALSE otherwise.
         */
        get_value_sunrise(): [boolean, number];

        /**
         * @returns TRUE is `value` is valid, FALSE otherwise.
         */
        get_value_sunset(): [boolean, number];

        /**
         * @param unit the desired unit, as a {@link GWeather.TemperatureUnit}
         * @returns TRUE is `value` is valid, FALSE otherwise.
         */
        get_value_temp(unit: TemperatureUnit): [boolean, number];

        /**
         * @param unit the desired unit, as a {@link GWeather.TemperatureUnit}
         * @returns TRUE is `value` is valid, FALSE otherwise.
         */
        get_value_temp_max(unit: TemperatureUnit): [boolean, number];

        /**
         * @param unit the desired unit, as a {@link GWeather.TemperatureUnit}
         * @returns TRUE is `value` is valid, FALSE otherwise.
         */
        get_value_temp_min(unit: TemperatureUnit): [boolean, number];

        /**
         * Note that `value` may be 0 if `info` has not yet been updated.
         * @returns TRUE is `value` is valid, FALSE otherwise.
         */
        get_value_update(): [boolean, number];

        /**
         * @param unit the desired unit, as a {@link GWeather.DistanceUnit}
         * @returns TRUE if `value` is valid, FALSE otherwise.
         */
        get_value_visibility(unit: DistanceUnit): [boolean, number];

        /**
         * @param unit the desired unit, as a {@link GWeather.SpeedUnit}
         * @returns TRUE if `speed` and `direction` are valid, FALSE otherwise.
         */
        get_value_wind(unit: SpeedUnit): [boolean, number, WindDirection];

        get_visibility(): string;

        /**
         * @returns a summary for current weather conditions.
         */
        get_weather_summary(): string;

        get_wind(): string;

        /**
         * @returns Whether it is daytime (that is, if the sun is visible)   or not at the location and the point of time referred by `info`.   This is mostly equivalent to comparing the return value   of `gweather_info_get_value_sunrise()` and   `gweather_info_get_value_sunset()`, but it accounts also   for midnight sun and polar night, for locations within   the Artic and Antartic circles.
         */
        is_daytime(): boolean;

        is_valid(): boolean;

        network_error(): boolean;

        next_sun_event(): number;

        /**
         * Sets the [application ID](https://docs.flatpak.org/en/latest/conventions.html#application-ids)
         * of the application fetching the weather. It is a requirement
         * for using any of the online weather providers.
         * 
         * If the application uses {@link Gio.Application}, then the application ID
         * will be automatically filled in.
         * @param application_id the application ID to set
         */
        set_application_id(application_id: string): void;

        /**
         * Sets the contact information for the application fetching the
         * weather. It is a requirement for using any of the online
         * weather providers as it allows API providers to contact application
         * developers in case of terms of use breaches.
         * 
         * The contact information should be an email address, or the full
         * URL to an online contact form which weather providers can use
         * to contact the application developer. Avoid using bug tracker
         * URLs which require creating accounts.
         * @param contact_info the contact information for the application
         */
        set_contact_info(contact_info: string): void;

        /**
         * Sets the enabled providers for fetching the weather. Note
         * that it is up to the application developer to make sure that
         * the terms of use for each service are respected.
         * 
         * Online providers will not be enabled if the application ID is
         * not set to a valid value.
         * @param providers a bitmask of {@link GWeather.Provider}
         */
        set_enabled_providers(providers: Provider): void;

        /**
         * Changes `info` to report weather for `location`.
         * Note that this will clear any forecast or current conditions from
         * `info`, you must call `gweather_info_update()` to obtain the new data.
         * @param location a location for which weather is desired
         */
        set_location(location: Location | null): void;

        /**
         * Requests a reload of weather conditions and forecast data from
         * enabled network services.
         * This call does no synchronous IO: rather, the result is delivered
         * by emitting the {@link GWeather.Info.SignalSignatures.updated | GWeather.Info::updated} signal.
         * Note that if no network services are enabled, the signal will not
         * be emitted. See {@link GWeather.Info.enabled_providers} for details.
         */
        update(): void;
    }


    namespace LocationEntry {
        // Signal signatures
        interface SignalSignatures extends Gtk.SearchEntry.SignalSignatures {
            "notify::location": (pspec: GObject.ParamSpec) => void;
            "notify::show-named-timezones": (pspec: GObject.ParamSpec) => void;
            "notify::top": (pspec: GObject.ParamSpec) => void;
            "notify::activates-default": (pspec: GObject.ParamSpec) => void;
            "notify::attributes": (pspec: GObject.ParamSpec) => void;
            "notify::buffer": (pspec: GObject.ParamSpec) => void;
            "notify::caps-lock-warning": (pspec: GObject.ParamSpec) => void;
            "notify::completion": (pspec: GObject.ParamSpec) => void;
            "notify::cursor-position": (pspec: GObject.ParamSpec) => void;
            "notify::editable": (pspec: GObject.ParamSpec) => void;
            "notify::enable-emoji-completion": (pspec: GObject.ParamSpec) => void;
            "notify::has-frame": (pspec: GObject.ParamSpec) => void;
            "notify::im-module": (pspec: GObject.ParamSpec) => void;
            "notify::inner-border": (pspec: GObject.ParamSpec) => void;
            "notify::input-hints": (pspec: GObject.ParamSpec) => void;
            "notify::input-purpose": (pspec: GObject.ParamSpec) => void;
            "notify::invisible-char": (pspec: GObject.ParamSpec) => void;
            "notify::invisible-char-set": (pspec: GObject.ParamSpec) => void;
            "notify::max-length": (pspec: GObject.ParamSpec) => void;
            "notify::max-width-chars": (pspec: GObject.ParamSpec) => void;
            "notify::overwrite-mode": (pspec: GObject.ParamSpec) => void;
            "notify::placeholder-text": (pspec: GObject.ParamSpec) => void;
            "notify::populate-all": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-activatable": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-gicon": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-pixbuf": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-stock": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-storage-type": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::primary-icon-tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::progress-fraction": (pspec: GObject.ParamSpec) => void;
            "notify::progress-pulse-step": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-offset": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-activatable": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-gicon": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-name": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-pixbuf": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-stock": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-storage-type": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::secondary-icon-tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::selection-bound": (pspec: GObject.ParamSpec) => void;
            "notify::shadow-type": (pspec: GObject.ParamSpec) => void;
            "notify::show-emoji-icon": (pspec: GObject.ParamSpec) => void;
            "notify::tabs": (pspec: GObject.ParamSpec) => void;
            "notify::text": (pspec: GObject.ParamSpec) => void;
            "notify::text-length": (pspec: GObject.ParamSpec) => void;
            "notify::truncate-multiline": (pspec: GObject.ParamSpec) => void;
            "notify::visibility": (pspec: GObject.ParamSpec) => void;
            "notify::width-chars": (pspec: GObject.ParamSpec) => void;
            "notify::xalign": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.SearchEntry.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.CellEditable.ConstructorProps, Gtk.Editable.ConstructorProps {
            location: Location | null;
            show_named_timezones: boolean;
            showNamedTimezones: boolean;
            top: Location;
        }
    }

    /**
     * A subclass of {@link Gtk.SearchEntry} that provides autocompletion on
     * {@link GWeather.Location}<!-- -->s
     * @gir-type Class
     */
    class LocationEntry extends Gtk.SearchEntry implements Atk.ImplementorIface, Gtk.Buildable, Gtk.CellEditable, Gtk.Editable {
        static $gtype: GObject.GType<LocationEntry>;

        // Properties
        get location(): Location | null;
        set location(val: Location | null);

        /**
         * @construct-only
         */
        get show_named_timezones(): boolean;

        /**
         * @construct-only
         */
        get showNamedTimezones(): boolean;

        /**
         * @construct-only
         */
        set top(val: Location);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: LocationEntry.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<LocationEntry.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](top: Location): LocationEntry;

        // Conflicted with Gtk.SearchEntry.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof LocationEntry.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LocationEntry.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof LocationEntry.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, LocationEntry.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof LocationEntry.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<LocationEntry.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets the location that was set by a previous call to
         * `gweather_location_entry_set_location()` or was selected by the user.
         * @returns the selected location (which you must unref when you are done with it), or `null` if no location is selected.
         */
        get_location(): Location | null;

        /**
         * Checks whether or not `entry`'s text has been modified by the user.
         * Note that this does not mean that no location is associated with `entry`.
         * `gweather_location_entry_get_location()` should be used for this.
         * @returns `true` if `entry`'s text was modified by the user, or `false` if it's set to the default text of a location.
         */
        has_custom_text(): boolean;

        /**
         * Sets `entry`'s location to a city with the given `code`, and given
         * `city_name`, if non-`null`. If there is no matching city, sets
         * `entry`'s location to `null`.
         * @param city_name the city name, or `null`
         * @param code the METAR station code
         * @returns `true` if `entry`'s location could be set to a matching city, `false` otherwise.
         */
        set_city(city_name: string | null, code: string): boolean;

        /**
         * Sets `entry`'s location to `loc`, and updates the text of the
         * entry accordingly.
         * Note that if the database contains a location that compares
         * equal to `loc`, that will be chosen in place of `loc`.
         * @param loc a {@link GWeather.Location} in `entry`, or `null` to clear `entry`
         */
        set_location(loc: Location | null): void;
    }


    namespace TimezoneMenu {
        // Signal signatures
        interface SignalSignatures extends Gtk.ComboBox.SignalSignatures {
            "notify::top": (pspec: GObject.ParamSpec) => void;
            "notify::tzid": (pspec: GObject.ParamSpec) => void;
            "notify::active": (pspec: GObject.ParamSpec) => void;
            "notify::active-id": (pspec: GObject.ParamSpec) => void;
            "notify::add-tearoffs": (pspec: GObject.ParamSpec) => void;
            "notify::button-sensitivity": (pspec: GObject.ParamSpec) => void;
            "notify::cell-area": (pspec: GObject.ParamSpec) => void;
            "notify::column-span-column": (pspec: GObject.ParamSpec) => void;
            "notify::entry-text-column": (pspec: GObject.ParamSpec) => void;
            "notify::has-entry": (pspec: GObject.ParamSpec) => void;
            "notify::has-frame": (pspec: GObject.ParamSpec) => void;
            "notify::id-column": (pspec: GObject.ParamSpec) => void;
            "notify::model": (pspec: GObject.ParamSpec) => void;
            "notify::popup-fixed-width": (pspec: GObject.ParamSpec) => void;
            "notify::popup-shown": (pspec: GObject.ParamSpec) => void;
            "notify::row-span-column": (pspec: GObject.ParamSpec) => void;
            "notify::tearoff-title": (pspec: GObject.ParamSpec) => void;
            "notify::wrap-width": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::editing-canceled": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.ComboBox.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps, Gtk.CellEditable.ConstructorProps, Gtk.CellLayout.ConstructorProps {
            top: Location;
            tzid: string | null;
        }
    }

    /**
     * A {@link Gtk.ComboBox} subclass for choosing a {@link GWeather.Timezone}
     * @gir-type Class
     */
    class TimezoneMenu extends Gtk.ComboBox implements Atk.ImplementorIface, Gtk.Buildable, Gtk.CellEditable, Gtk.CellLayout {
        static $gtype: GObject.GType<TimezoneMenu>;

        // Properties
        /**
         * @construct-only
         */
        set top(val: Location);

        get tzid(): string | null;
        set tzid(val: string | null);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TimezoneMenu.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<TimezoneMenu.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](top: Location): TimezoneMenu;

        // Conflicted with Gtk.ComboBox.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof TimezoneMenu.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TimezoneMenu.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof TimezoneMenu.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TimezoneMenu.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof TimezoneMenu.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<TimezoneMenu.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets `menu`'s timezone id.
         * @returns `menu`'s tzid, or `null` if no timezone is selected.
         */
        get_tzid(): string | null;

        /**
         * Sets `menu` to the given `tzid`. If `tzid` is `null`, sets `menu` to
         * "Unknown".
         * @param tzid a tzdata id (eg, "America/New_York")
         */
        set_tzid(tzid: string | null): void;

        /**
         * Indicates whether editing on the cell has been canceled.
         * @since 2.20
         * @default false
          * @category Inherited from Gtk.CellEditable
         */
        get editing_canceled(): boolean;
        set editing_canceled(val: boolean);

        /**
         * Indicates whether editing on the cell has been canceled.
         * @since 2.20
         * @default false
          * @category Inherited from Gtk.CellEditable
         */
        get editingCanceled(): boolean;
        set editingCanceled(val: boolean);

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done} signal.
         */
        editing_done(): void;

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.remove_widget | Gtk.CellEditable::remove-widget} signal.
         */
        remove_widget(): void;

        /**
         * Begins editing on a `cell_editable`.
         * 
         * The {@link Gtk.CellRenderer} for the cell creates and returns a {@link Gtk.CellEditable} from
         * `gtk_cell_renderer_start_editing()`, configured for the {@link Gtk.CellRenderer} type.
         * 
         * `gtk_cell_editable_start_editing()` can then set up `cell_editable` suitably for
         * editing a cell, e.g. making the Esc key emit {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done}.
         * 
         * Note that the `cell_editable` is created on-demand for the current edit; its
         * lifetime is temporary and does not persist across other edits and/or cells.
         * @param event The {@link Gdk.Event} that began the editing process, or   `null` if editing was initiated programmatically
         */
        start_editing(event: Gdk.Event | null): void;

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done} signal.
         * @virtual
         */
        vfunc_editing_done(): void;

        /**
         * Emits the {@link Gtk.CellEditable.SignalSignatures.remove_widget | Gtk.CellEditable::remove-widget} signal.
         * @virtual
         */
        vfunc_remove_widget(): void;

        /**
         * Begins editing on a `cell_editable`.
         * 
         * The {@link Gtk.CellRenderer} for the cell creates and returns a {@link Gtk.CellEditable} from
         * `gtk_cell_renderer_start_editing()`, configured for the {@link Gtk.CellRenderer} type.
         * 
         * `gtk_cell_editable_start_editing()` can then set up `cell_editable` suitably for
         * editing a cell, e.g. making the Esc key emit {@link Gtk.CellEditable.SignalSignatures.editing_done | Gtk.CellEditable::editing-done}.
         * 
         * Note that the `cell_editable` is created on-demand for the current edit; its
         * lifetime is temporary and does not persist across other edits and/or cells.
         * @param event The {@link Gdk.Event} that began the editing process, or   `null` if editing was initiated programmatically
         * @virtual
         */
        vfunc_start_editing(event: Gdk.Event | null): void;

        /**
         * Adds an attribute mapping to the list in `cell_layout`.
         * 
         * The `column` is the column of the model to get a value from, and the
         * `attribute` is the parameter on `cell` to be set from the value. So for
         * example if column 2 of the model contains strings, you could have the
         * “text” attribute of a {@link Gtk.CellRendererText} get its values from column 2.
         * @param cell a {@link Gtk.CellRenderer}
         * @param attribute an attribute on the renderer
         * @param column the column position on the model to get the attribute from
         */
        add_attribute(cell: Gtk.CellRenderer, attribute: string, column: number): void;

        /**
         * Unsets all the mappings on all renderers on `cell_layout` and
         * removes all renderers from `cell_layout`.
         */
        clear(): void;

        /**
         * Clears all existing attributes previously set with
         * `gtk_cell_layout_set_attributes()`.
         * @param cell a {@link Gtk.CellRenderer} to clear the attribute mapping on
         */
        clear_attributes(cell: Gtk.CellRenderer): void;

        /**
         * Returns the underlying {@link Gtk.CellArea} which might be `cell_layout`
         * if called on a {@link Gtk.CellArea} or might be `null` if no {@link Gtk.CellArea}
         * is used by `cell_layout`.
         * @returns the cell area used by `cell_layout`, or `null` in case no cell area is used.
         */
        get_area(): Gtk.CellArea | null;

        /**
         * Returns the cell renderers which have been added to `cell_layout`.
         * @returns a list of cell renderers. The list, but not the renderers has     been newly allocated and should be freed with `g_list_free()`     when no longer needed.
         */
        get_cells(): Gtk.CellRenderer[];

        /**
         * Adds the `cell` to the end of `cell_layout`. If `expand` is `false`, then the
         * `cell` is allocated no more space than it needs. Any unused space is
         * divided evenly between cells for which `expand` is `true`.
         * 
         * Note that reusing the same cell renderer is not supported.
         * @param cell a {@link Gtk.CellRenderer}
         * @param expand `true` if `cell` is to be given extra space allocated to `cell_layout`
         */
        pack_end(cell: Gtk.CellRenderer, expand: boolean): void;

        /**
         * Packs the `cell` into the beginning of `cell_layout`. If `expand` is `false`,
         * then the `cell` is allocated no more space than it needs. Any unused space
         * is divided evenly between cells for which `expand` is `true`.
         * 
         * Note that reusing the same cell renderer is not supported.
         * @param cell a {@link Gtk.CellRenderer}
         * @param expand `true` if `cell` is to be given extra space allocated to `cell_layout`
         */
        pack_start(cell: Gtk.CellRenderer, expand: boolean): void;

        /**
         * Re-inserts `cell` at `position`.
         * 
         * Note that `cell` has already to be packed into `cell_layout`
         * for this to function properly.
         * @param cell a {@link Gtk.CellRenderer} to reorder
         * @param position new position to insert `cell` at
         */
        reorder(cell: Gtk.CellRenderer, position: number): void;

        /**
         * Sets the {@link Gtk.CellLayoutDataFunc} to use for `cell_layout`.
         * 
         * This function is used instead of the standard attributes mapping
         * for setting the column value, and should set the value of `cell_layout`’s
         * cell renderer(s) as appropriate.
         * 
         * `func` may be `null` to remove a previously set function.
         * @param cell a {@link Gtk.CellRenderer}
         * @param func the {@link Gtk.CellLayoutDataFunc} to use, or `null`
         */
        set_cell_data_func(cell: Gtk.CellRenderer, func: Gtk.CellLayoutDataFunc | null): void;

        /**
         * Adds an attribute mapping to the list in `cell_layout`.
         * 
         * The `column` is the column of the model to get a value from, and the
         * `attribute` is the parameter on `cell` to be set from the value. So for
         * example if column 2 of the model contains strings, you could have the
         * “text” attribute of a {@link Gtk.CellRendererText} get its values from column 2.
         * @param cell a {@link Gtk.CellRenderer}
         * @param attribute an attribute on the renderer
         * @param column the column position on the model to get the attribute from
         * @virtual
         */
        vfunc_add_attribute(cell: Gtk.CellRenderer, attribute: string, column: number): void;

        /**
         * Unsets all the mappings on all renderers on `cell_layout` and
         * removes all renderers from `cell_layout`.
         * @virtual
         */
        vfunc_clear(): void;

        /**
         * Clears all existing attributes previously set with
         * `gtk_cell_layout_set_attributes()`.
         * @param cell a {@link Gtk.CellRenderer} to clear the attribute mapping on
         * @virtual
         */
        vfunc_clear_attributes(cell: Gtk.CellRenderer): void;

        /**
         * Returns the underlying {@link Gtk.CellArea} which might be `cell_layout`
         * if called on a {@link Gtk.CellArea} or might be `null` if no {@link Gtk.CellArea}
         * is used by `cell_layout`.
         * @virtual
         */
        vfunc_get_area(): Gtk.CellArea | null;

        /**
         * Returns the cell renderers which have been added to `cell_layout`.
         * @virtual
         */
        vfunc_get_cells(): Gtk.CellRenderer[];

        /**
         * Adds the `cell` to the end of `cell_layout`. If `expand` is `false`, then the
         * `cell` is allocated no more space than it needs. Any unused space is
         * divided evenly between cells for which `expand` is `true`.
         * 
         * Note that reusing the same cell renderer is not supported.
         * @param cell a {@link Gtk.CellRenderer}
         * @param expand `true` if `cell` is to be given extra space allocated to `cell_layout`
         * @virtual
         */
        vfunc_pack_end(cell: Gtk.CellRenderer, expand: boolean): void;

        /**
         * Packs the `cell` into the beginning of `cell_layout`. If `expand` is `false`,
         * then the `cell` is allocated no more space than it needs. Any unused space
         * is divided evenly between cells for which `expand` is `true`.
         * 
         * Note that reusing the same cell renderer is not supported.
         * @param cell a {@link Gtk.CellRenderer}
         * @param expand `true` if `cell` is to be given extra space allocated to `cell_layout`
         * @virtual
         */
        vfunc_pack_start(cell: Gtk.CellRenderer, expand: boolean): void;

        /**
         * Re-inserts `cell` at `position`.
         * 
         * Note that `cell` has already to be packed into `cell_layout`
         * for this to function properly.
         * @param cell a {@link Gtk.CellRenderer} to reorder
         * @param position new position to insert `cell` at
         * @virtual
         */
        vfunc_reorder(cell: Gtk.CellRenderer, position: number): void;

        /**
         * Sets the {@link Gtk.CellLayoutDataFunc} to use for `cell_layout`.
         * 
         * This function is used instead of the standard attributes mapping
         * for setting the column value, and should set the value of `cell_layout`’s
         * cell renderer(s) as appropriate.
         * 
         * `func` may be `null` to remove a previously set function.
         * @param cell a {@link Gtk.CellRenderer}
         * @param func the {@link Gtk.CellLayoutDataFunc} to use, or `null`
         * @virtual
         */
        vfunc_set_cell_data_func(cell: Gtk.CellRenderer, func: Gtk.CellLayoutDataFunc | null): void;

        /**
         * Emits a {@link Gtk.Widget.SignalSignatures.child_notify | Gtk.Widget::child-notify} signal for the
         * [child property][child-properties] `child_property`
         * on `widget`.
         * 
         * This is the analogue of `g_object_notify()` for child properties.
         * 
         * Also see `gtk_container_child_notify()`.
         * @param child_property the name of a child property installed on the                  class of `widget`’s parent
         */
        child_notify(child_property: string): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Container.child_notify
        child_notify(...args: never[]): any;

        /**
         * Returns whether the widget should grab focus when it is clicked with the mouse.
         * See `gtk_widget_set_focus_on_click()`.
         * @returns `true` if the widget should grab focus when it is clicked with               the mouse.
         */
        get_focus_on_click(): boolean;

        /**
         * Sets whether the widget should grab focus when it is clicked with the mouse.
         * Making mouse clicks not grab focus is useful in places like toolbars where
         * you don’t want the keyboard focus removed from the main area of the
         * application.
         * @param focus_on_click whether the widget should grab focus when clicked with the mouse
         */
        set_focus_on_click(focus_on_click: boolean): void;
    }


    /**
     * A convenient way to describe the current or forecast
     * weather phenomenon, if significant, and its associated
     * modifier. If the value is not significant, the weather conditions
     * are described by `gweather_info_get_sky()` instead.
     * 
     * In general it is discouraged to use this value directly to compute
     * the forecast icon: applications should instead use
     * `gweather_info_get_icon_name()` or
     * `gweather_info_get_symbolic_icon_name()`.
     * @gir-type Struct
     */
    class Conditions {
        static $gtype: GObject.GType<Conditions>;

        // Fields
        significant: boolean;

        phenomenon: ConditionPhenomenon;

        qualifier: ConditionQualifier;

        // Methods
        to_string(): string;

        /**
         * @param options 
         */
        to_string_full(options: FormatOptions): string;
    }


    /**
     * @gir-type Alias
     */
    type InfoClass = typeof Info;

    /**
     * A {@link GWeather.Location} represents a "location" of some type known to
     * libgweather; anything from a single weather station to the entire
     * world. See {@link GWeather.LocationLevel} for information about how the
     * hierarchy of locations works.
     * @gir-type Struct
     */
    class Location {
        static $gtype: GObject.GType<Location>;

        // Constructors
        constructor(name: string, icao: string | null, latitude: number, longitude: number);

        static new_detached(name: string, icao: string | null, latitude: number, longitude: number): Location;

        // Static methods
        /**
         * @param result 
         */
        static detect_nearest_city_finish(result: Gio.AsyncResult): Location;

        /**
         * Obtains the shared {@link GWeather.Location} of type {@link GWeather.LocationLevel.WORLD},
         * representing a hierarchy containing all of the locations from
         * Locations.xml.
         * 
         * Prior to version 40 no reference was returned.
         */
        static get_world(): Location | null;

        // Methods
        /**
         * This call undoes the effect of `gweather_location_serialize()`, that
         * is, it turns a {@link GLib.Variant} into a {@link GWeather.Location}. The conversion
         * happens in the context of `world` (i.e, for a city or weather station,
         * the resulting location will be attached to a administrative division,
         * country and region as appropriate).
         * @param serialized the {@link GLib.Variant} representing the {@link GWeather.Location}
         * @returns the deserialized location.
         */
        deserialize(serialized: GLib.Variant): Location;

        /**
         * Initializes geocode reversing to find place for (`lat`, `lon`) coordinates. Calls the callback
         * function passed by user when the result is ready.
         * 
         * `loc` must be at most a {@link GWeather.LocationLevel.ADM1} location.
         * This restriction may be lifted in a future version.
         * @param lat Latitude, in degrees
         * @param lon Longitude, in degrees
         * @param cancellable optional, NULL to ignore
         * @param callback callback function for GAsyncReadyCallback argument for GAsyncResult
         */
        detect_nearest_city(lat: number, lon: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Compares two {@link GWeather.Location} and sees if they represent the same
         * place.
         * It is only legal to call this for cities, weather stations or
         * detached locations.
         * Note that this function only checks for geographical characteristics,
         * such as coordinates and METAR code. It is still possible that the two
         * locations belong to different worlds (in which case care must be
         * taken when passing them GWeatherLocationEntry and GWeatherInfo), or
         * if one is them is detached it could have a custom name.
         * @param two another {@link GWeather.Location}
         * @returns `true` if the two locations represent the same place as          far as libgweather can tell, and `false` otherwise.
         */
        equal(two: Location): boolean;

        /**
         * Retrieves the country identified by the specified ISO 3166 code,
         * if present in the database.
         * 
         * Prior to version 40 no reference was returned.
         * @param country_code a country code
         * @returns a country level {@link GWeather.Location}, or `null`.
         */
        find_by_country_code(country_code: string): Location;

        /**
         * Retrieves the weather station identifier by `station_code`.
         * Note that multiple instances of the same weather station can exist
         * in the database, and this function will return any of them, so this
         * not usually what you want.
         * 
         * See `gweather_location_deserialize()` to recover a stored {@link GWeather.Location}.
         * 
         * Prior to version 40 no reference was returned.
         * @param station_code a 4 letter METAR code
         * @returns a weather station level {@link GWeather.Location} for `station_code`,          or `null` if none exists in the database.
         */
        find_by_station_code(station_code: string): Location;

        /**
         * Finds the nearest city to the passed latitude and
         * longitude, among the descendants of `loc`.
         * 
         * `loc` must be at most a {@link GWeather.LocationLevel.ADM1} location.
         * This restriction may be lifted in a future version.
         * 
         * Note that this function does not check if (`lat`, `lon`) fall inside
         * `loc`, or are in the same region and timezone as the return value.
         * @param lat Latitude, in degrees
         * @param lon Longitude, in degrees
         * @returns the city closest to (`lat`, `lon`), in the          region or administrative district of `loc`.
         */
        find_nearest_city(lat: number, lon: number): Location;

        /**
         * Finds the nearest city to the passed latitude and
         * longitude, among the descendants of `loc`.
         * 
         * Supports the use of own filter function to filter out locations.
         * Geocoding should be done on the application side if needed.
         * 
         * `loc` must be at most a {@link GWeather.LocationLevel.ADM1} location.
         * This restriction may be lifted in a future version.
         * @param lat Latitude, in degrees
         * @param lon Longitude, in degrees
         * @param func returns true to continue check for                                       the location and false to filter the location out
         * @returns the city closest to (`lat`, `lon`), in the          region or administrative district of `loc` with validation of filter function.
         */
        find_nearest_city_full(lat: number, lon: number, func: FilterFunc | null): Location;

        /**
         * Frees the array of timezones returned by
         * `gweather_location_get_timezones()`.
         * @param zones an array returned from `gweather_location_get_timezones()`
         */
        free_timezones(zones: Timezone): void;

        /**
         * Gets an array of `loc`'s children; this is owned by `loc` and will
         * not remain valid if `loc` is freed.
         * @returns `loc`'s children. (May be empty, but will not be `null`.)
         */
        get_children(): Location[];

        /**
         * For a {@link GWeather.LocationLevel.CITY} or {@link GWeather.LocationLevel.DETACHED} location,
         * this is equivalent to `gweather_location_get_name()`.
         * For a {@link GWeather.LocationLevel.WEATHER_STATION} location, it is equivalent to
         * calling `gweather_location_get_name()` on the location's parent. For
         * other locations it will return `null`.
         * @returns `loc`'s city name, or `null`
         */
        get_city_name(): string | null;

        /**
         * Gets the METAR station code associated with a
         * {@link GWeather.LocationLevel.WEATHER_STATION} location.
         * @returns `loc`'s METAR station code, or `null`
         */
        get_code(): string | null;

        /**
         * Gets `loc`'s coordinates; you must check
         * `gweather_location_has_coords()` before calling this.
         */
        get_coords(): [number, number];

        /**
         * Gets the ISO 3166 country code of `loc` (or `null` if `loc` is a
         * region- or world-level location)
         * @returns `loc`'s country code (or `null` if `loc` is a region- or world-level location)
         */
        get_country(): string | null;

        /**
         * Gets the country name of loc.
         * For a {@link GWeather.LocationLevel.COUNTRY} location, this is equivalent to
         * `gweather_location_get_name()`.
         * For a {@link GWeather.LocationLevel.REGION} and GWEATHER_LOCATION_WORLD location it
         * will return `null`.
         * For other locations it will find the parent {@link GWeather.LocationLevel.COUNTRY}
         * and return its name.
         * @returns `loc`'s country name, or `null`
         */
        get_country_name(): string | null;

        /**
         * Determines the distance in kilometers between `loc` and `loc2`.
         * @param loc2 a second {@link GWeather.Location}
         * @returns the distance between `loc` and `loc2`.
         */
        get_distance(loc2: Location): number;

        /**
         * Gets `loc`'s English name.
         * @returns `loc`'s English name
         */
        get_english_name(): string;

        /**
         * Gets `loc`'s english "sort name", which is the english name after having
         * `g_utf8_normalize()` (with {@link GLib.NormalizeMode.ALL}) and `g_utf8_casefold()`
         * called on it. You can use this to sort locations, or to comparing
         * user input against a location name.
         * @returns `loc`'s English name for sorting
         */
        get_english_sort_name(): string;

        /**
         * Gets `loc`'s level, from {@link GWeather.LocationLevel.WORLD}, to
         * {@link GWeather.LocationLevel.WEATHER_STATION}.
         * @returns `loc`'s level
         */
        get_level(): LocationLevel;

        /**
         * Gets `loc`'s name, localized into the current language.
         * @returns `loc`'s name
         */
        get_name(): string;

        /**
         * Gets `loc`'s parent location.
         * 
         * Prior to version 40 no reference was returned.
         * @returns `loc`'s parent, or `null` if `loc` is a {@link GWeather.LocationLevel.WORLD} node.
         */
        get_parent(): Location | null;

        /**
         * Gets `loc`'s "sort name", which is the name after having
         * `g_utf8_normalize()` (with {@link GLib.NormalizeMode.ALL}) and `g_utf8_casefold()`
         * called on it. You can use this to sort locations, or to comparing
         * user input against a location name.
         * @returns `loc`'s sort name
         */
        get_sort_name(): string;

        /**
         * Gets the timezone associated with `loc`, if known.
         * 
         * The timezone is owned either by `loc` or by one of its parents.
         * FIXME.
         * @returns `loc`'s timezone, or `null`
         */
        get_timezone(): Timezone | null;

        /**
         * Gets the timezone associated with `loc`, if known, as a string.
         * 
         * The timezone string is owned either by `loc` or by one of its
         * parents, do not free it.
         * @returns `loc`'s timezone as a string, or `null`
         */
        get_timezone_str(): string | null;

        /**
         * Gets an array of all timezones associated with any location under
         * `loc`. You can use `gweather_location_free_timezones()` to free this
         * array.
         * @returns an array of timezones. May be empty but will not be `null`.
         */
        get_timezones(): Timezone[];

        /**
         * Checks if `loc` has valid latitude and longitude.
         * @returns `true` if `loc` has valid latitude and longitude.
         */
        has_coords(): boolean;

        /**
         * Allows iterating all children. Pass `null` to get the first child,
         * and any child to get the next one. Note that the reference to `child`
         * is taken, meaning iterating all children is as simple as:
         * 
         * 
         * ```c
         *   g_autoptr(GWeatherLocation) child = NULL;
         *   while ((child = gweather_location_next_child (location, child)))
         *     {
         *        // Do something with child
         *     }
         * ```
         * 
         * @param child The child
         * @returns The next child, or `null`
         */
        next_child(child: Location | null): Location | null;

        /**
         * Adds 1 to `loc`'s reference count.
         * @returns `loc`
         */
        ref(): Location;

        /**
         * Transforms a {@link GWeather.Location} into a {@link GLib.Variant}, in a way that
         * calling `gweather_location_deserialize()` will hold an equivalent
         * {@link GWeather.Location}.
         * The resulting variant can then be stored into GSettings or on disk.
         * This call is only valid for cities, weather stations and detached
         * locations.
         * The format of the resulting {@link GLib.Variant} is private to libgweather,
         * and it is subject to change. You should use the "v" format in GSettings,
         * to ensure maximum compatibility with future versions of the library.
         * @returns the serialization of `location`.
         */
        serialize(): GLib.Variant;

        /**
         * Subtracts 1 from `loc`'s reference count, and frees it if the
         * reference count reaches 0.
         */
        unref(): void;
    }


    /**
     * @gir-type Alias
     */
    type LocationEntryClass = typeof LocationEntry;

    /**
     * @gir-type Struct
     */
    abstract class LocationEntryPrivate {
        static $gtype: GObject.GType<LocationEntryPrivate>;
    }


    /**
     * A timezone.
     * 
     * Timezones are global to the GWeather world (as obtained by
     * `gweather_location_get_world()`); they can be gotten by passing
     * `gweather_timezone_get_by_tzid()` with a tzid like "America/New_York"
     * or "Europe/London".
     * @gir-type Struct
     */
    class Timezone {
        static $gtype: GObject.GType<Timezone>;

        // Static methods
        /**
         * Get the {@link GWeather.Timezone} for `tzid`.
         * 
         * Prior to version 40 no reference was returned.
         * @param tzid A timezone identifier, like "America/New_York" or "Europe/London"
         */
        static get_by_tzid(tzid: string): Timezone;

        /**
         * Gets the UTC timezone.
         */
        static get_utc(): Timezone;

        // Methods
        /**
         * Gets `zone`'s daylight/summer time offset from UTC, in minutes. Eg,
         * a value of 120 would indicate "GMT+2". This is only meaningful if
         * `gweather_timezone_has_dst()` returns `true`.
         * @returns `zone`'s daylight/summer time offset, in minutes
         */
        get_dst_offset(): number;

        /**
         * Gets `zone`'s name; a translated, user-presentable string.
         * 
         * Note that the returned name might not be unique among timezones,
         * and may not make sense to the user unless it is presented along
         * with the timezone's country's name (or in some context where the
         * country is obvious).
         * @returns `zone`'s name
         */
        get_name(): string;

        /**
         * Gets `zone`'s standard offset from UTC, in minutes. Eg, a value of
         * 120 would indicate "GMT+2".
         * @returns `zone`'s standard offset, in minutes
         */
        get_offset(): number;

        /**
         * Gets `zone`'s tzdata identifier, eg "America/New_York".
         * @returns `zone`'s tzid
         */
        get_tzid(): string;

        /**
         * Checks if `zone` observes daylight/summer time for part of the year.
         * @returns `true` if `zone` observes daylight/summer time.
         */
        has_dst(): boolean;

        /**
         * Adds 1 to `zone`'s reference count.
         * @returns `zone`
         */
        ref(): Timezone;

        /**
         * Subtracts 1 from `zone`'s reference count and frees it if it reaches 0.
         */
        unref(): void;
    }


    /**
     * @gir-type Alias
     */
    type TimezoneMenuClass = typeof TimezoneMenu;

    /**
     * The moon declension, in degrees.
     * @gir-type Alias
     */
    type MoonLatitude = number;

    /**
     * The current phase of the moon, represented as degrees,
     * where 0 is the new moon, 90 is the first quarter, etc.
     * @gir-type Alias
     */
    type MoonPhase = number;

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

export default GWeather;

// END
