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
import type Json from '@girs/json-1.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace Ipuz {
    /**
     * Ipuz-1.0
     */

    /**
     * @gir-type Enum
     */
    export namespace AcrosticLabelMode {
        export const $gtype: GObject.GType<AcrosticLabelMode>;
    }

    /**
     * Indicates how to label each cell when calling {@link Ipuz.Acrostic.fix_labels}
     * @gir-type Enum
     */
    enum AcrosticLabelMode {
        /**
         * Sets a number for each cell
         */
        NUMBERS,
        /**
         * Sets a number and the clue letter for every cell
         */
        NUMBERS_CLUES,
    }

    /**
     * @gir-type Enum
     */
    export namespace AcrosticSyncDirection {
        export const $gtype: GObject.GType<AcrosticSyncDirection>;
    }

    /**
     * Indicates which direction to sync the puzzle when called by
     * {@link Ipuz.Acrostic.fix_quote} and
     * {@link Ipuz.Acrostic.fix_source}. If the method is passed
     * `STRING_TO_PUZZLE`, then we use the string as a source to update
     * the grid and clues. If the argument is `PUZZLE_TO_STRING` then the
     * grid and clues are untouched, and the current source and quote
     * strings are calculated.
     * @gir-type Enum
     */
    enum AcrosticSyncDirection {
        /**
         * syncs from the string property to the puzzle
         */
        STRING_TO_PUZZLE,
        /**
         * syncs from the puzzle to the string property
         */
        PUZZLE_TO_STRING,
    }

    /**
     * @gir-type Enum
     */
    export namespace ArrowwordArrow {
        export const $gtype: GObject.GType<ArrowwordArrow>;
    }

    /**
     * @gir-type Enum
     */
    enum ArrowwordArrow {
        NONE,
        RIGHT,
        RIGHT_DOWN,
        DOWN,
        DOWN_RIGHT,
        LEFT_DOWN,
        UP_RIGHT,
    }

    /**
     * @gir-type Enum
     */
    export namespace ArrowwordPlacement {
        export const $gtype: GObject.GType<ArrowwordPlacement>;
    }

    /**
     * @gir-type Enum
     */
    enum ArrowwordPlacement {
        FILL,
        TOP,
        BOTTOM,
    }

    /**
     * @gir-type Enum
     */
    export namespace CellType {
        export const $gtype: GObject.GType<CellType>;
    }

    /**
     * Indicates the type and behavior of a given {@link Ipuz.Cell}.
     * @gir-type Enum
     */
    enum CellType {
        /**
         * A regular light cell
         */
        NORMAL,
        /**
         * A block
         */
        BLOCK,
        /**
         * An omitted cell
         */
        NULL,
    }

    /**
     * @gir-type Enum
     */
    export namespace ClueDirection {
        export const $gtype: GObject.GType<ClueDirection>;
    }

    /**
     * Possible directions for a clue.
     *
     * ::: warning
     *     It's possible to have puzzles with directions with values that
     *     extend beyond {@link Ipuz.ClueDirection.CUSTOM}. As a result,
     *     it's never meaningful to `switch()` on this value from C code.
     * @gir-type Enum
     */
    enum ClueDirection {
        /**
         * No direction. Used for errors, and to indicate unset {@link Ipuz.ClueId}
         */
        NONE,
        /**
         * Across clues
         */
        ACROSS,
        /**
         * Down clues
         */
        DOWN,
        /**
         * Diagonal clues which go down and to the right
         */
        DIAGONAL,
        /**
         * Diagonal clues which go up and to the right
         */
        DIAGONAL_UP,
        /**
         * Diagonal clues which go down and to the left
         */
        DIAGONAL_DOWN_LEFT,
        /**
         * Diagonal clues which go up and to the left
         */
        DIAGONAL_UP_LEFT,
        /**
         * Clues for explicitly-specified zones
         */
        ZONES,
        /**
         * Pre-ordered clues (usually alphabetical)
         */
        CLUES,
        /**
         * Clues that aren't shown to the user
         */
        HIDDEN,
        /**
         * Start of the range of custom directions
         */
        CUSTOM,
    }

    /**
     * @gir-type Enum
     */
    export namespace CluePlacement {
        export const $gtype: GObject.GType<CluePlacement>;
    }

    /**
     * Indication of where to physically place the clues on a playing
     * board compared to the grid.
     * @gir-type Enum
     */
    enum CluePlacement {
        /**
         * Auto place clues
         */
        NULL,
        /**
         * Put clues before the puzzle
         */
        BEFORE,
        /**
         * Put clues after the puzzle
         */
        AFTER,
        /**
         * Put clues in blocks adjacent to entry
         */
        BLOCKS,
    }

    /**
     * @gir-type Enum
     */
    export namespace Deliminator {
        export const $gtype: GObject.GType<Deliminator>;
    }

    /**
     * A deliminator is a hint in a puzzle grid about the nature of a cell
     * or word. This enum indicates the type of deliminator that should be
     * used for a given location in the grid.
     * @gir-type Enum
     */
    enum Deliminator {
        /**
         * A word break. Represented by the space character
         */
        WORD_BREAK,
        /**
         * A period. Represented by `.`
         */
        PERIOD,
        /**
         * A dash. Represented by `-`
         */
        DASH,
        /**
         * An apostrophe. Represented by `'`
         */
        APOSTROPHE,
        /**
         * The following word is capitalized. Represented by `*`
         */
        ALLCAPS,
        /**
         * The letter is capitalized. Represented by `^`
         */
        CAPITALIZED,
        /**
         * The following word is foreign, slang, dialect, obsolete, archaic. Represented by `+`
         */
        FOREIGN,
    }

    /**
     * @gir-type Enum
     */
    export namespace GridCheckType {
        export const $gtype: GObject.GType<GridCheckType>;
    }

    /**
     * Operation passed to {@link Ipuz.Grid.check_cell}.
     * @gir-type Enum
     */
    enum GridCheckType {
        /**
         * Changes guesses at coord to be a good blank initial value based on cell
         */
        INITIALIZE_GUESS,
        /**
         * The cell at coord can take a user guess
         */
        GUESSABLE,
        /**
         * Indicates that the cell in guesses is appropriate to the puzzle type. For example, in crosswords it indicates they have the same cell_type
         */
        GUESSES_VALID,
        /**
         * The player attempted a guess at coord
         */
        GUESS_MADE,
        /**
         * Guesses is in a winning state at coord
         */
        GUESS_CORRECT,
    }

    /**
     * Error codes when creating an {@link Ipuz.Puzzle}.
     * @gir-type Struct
     */
    class PuzzleError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        /**
         * puzzle not a well formed ipuz file
         */
        static INVALID_FILE: number;
        /**
         * ipuz file was in an unsupported version
         */
        static WRONG_VERSION: number;
        /**
         * ipuz file stored an unsupported puzzle kind
         */
        static UNSUPPORTED_KIND: number;

        // Constructors

        constructor(options: { message: string; code: number });

        // Static methods

        static quark(): GLib.Quark;
    }

    /**
     * @gir-type Enum
     */
    export namespace PuzzleKind {
        export const $gtype: GObject.GType<PuzzleKind>;
    }

    /**
     * Represents a type of puzzle. This enum can be used in switch
     * statements.
     *
     * This is stored as the *kind* tag in an ipuz file.
     * @gir-type Enum
     */
    enum PuzzleKind {
        /**
         * An acrostic puzzle
         */
        ACROSTIC,
        /**
         * An arrowword puzzle
         */
        ARROWWORD,
        /**
         * A barred puzzle
         */
        BARRED,
        /**
         * A crossword puzzle
         */
        CROSSWORD,
        /**
         * A cryptic crossword puzzle
         */
        CRYPTIC,
        /**
         * A filippine puzzle
         */
        FILIPPINE,
        /**
         * A nonogram puzzle
         */
        NONOGRAM,
        /**
         * A color nonogram puzzle
         */
        NONOGRAM_COLOR,
        /**
         * Puzzle type not supported by libipuz
         */
        UNKNOWN,
    }

    /**
     * @gir-type Enum
     */
    export namespace StyleDivided {
        export const $gtype: GObject.GType<StyleDivided>;
    }

    /**
     * Specifies how a cell should be divided.
     * @gir-type Enum
     */
    enum StyleDivided {
        /**
         * No division
         */
        NONE,
        /**
         * A horizontal line "-"
         */
        HORIZ,
        /**
         * A vertical line "|"
         */
        VERT,
        /**
         * A slash from lower left to upper right "/"
         */
        UP_RIGHT,
        /**
         * A slash from upper left to lower right "\"
         */
        UP_LEFT,
        /**
         * Horizontal and vertical lines dividing the cell into quarters "+"
         */
        PLUS,
        /**
         * Two diagonal slashes dividing the cell into four triangles "x"
         */
        CROSS,
    }

    /**
     * @gir-type Enum
     */
    export namespace StyleShape {
        export const $gtype: GObject.GType<StyleShape>;
    }

    /**
     * Specifies a background shape to be drawn in an
     * {@link Ipuz.Cell}. Shapes like the circle and square are expected
     * to be hollow, as to contain the text in the cell.
     * @gir-type Enum
     */
    enum StyleShape {
        /**
         * No shape specified
         */
        NONE,
        /**
         * A circle
         */
        CIRCLE,
        /**
         * A left arrow
         */
        ARROW_LEFT,
        /**
         * A right arrow
         */
        ARROW_RIGHT,
        /**
         * An up arrow
         */
        ARROW_UP,
        /**
         * A down arrow
         */
        ARROW_DOWN,
        /**
         * A triangle facing left
         */
        TRIANGLE_LEFT,
        /**
         * A triangle facing right
         */
        TRIANGLE_RIGHT,
        /**
         * A triangle facing up
         */
        TRIANGLE_UP,
        /**
         * A triangle facing down
         */
        TRIANGLE_DOWN,
        /**
         * A diamond
         */
        DIAMOND,
        /**
         * A club
         */
        CLUB,
        /**
         * A heart
         */
        HEART,
        /**
         * A spade
         */
        SPADE,
        /**
         * A star
         */
        STAR,
        /**
         * A square
         */
        SQUARE,
        /**
         * A rhombus
         */
        RHOMBUS,
        /**
         * A slash
         */
        SLASH,
        /**
         * A backslash
         */
        BACKSLASH,
        /**
         * An "X" through the cell
         */
        X,
    }

    /**
     * @gir-type Enum
     */
    export namespace Symmetry {
        export const $gtype: GObject.GType<Symmetry>;
    }

    /**
     * Mode of symmetry between cells in a gridded puzzle.
     * @gir-type Enum
     */
    enum Symmetry {
        /**
         * Freeform grid
         */
        NONE,
        /**
         * 180° Rotational Symmetry around the center
         */
        ROTATIONAL_HALF,
        /**
         * 90° Rotational Symmetry around the center
         */
        ROTATIONAL_QUARTER,
        /**
         * Symmetry across the horizontal center line
         */
        HORIZONTAL,
        /**
         * Symmetry across the vertical center line
         */
        VERTICAL,
        /**
         * Symmetry across the horizontal and vertical center lines
         */
        MIRRORED,
        /**
         * Symmetry across the diagonal from upper left to lower right. Only works on square boards.
         */
        MIRRORED_DIAGONAL,
        /**
         * Symmetry across the diagonal from lower left to upper right. Only works on square boards.
         */
        MIRRORED_DIAGONAL_UP_RIGHT,
    }

    /**
     * @gir-type Enum
     */
    export namespace SymmetryOffset {
        export const $gtype: GObject.GType<SymmetryOffset>;
    }

    /**
     * Offset off the mode of symmetry.
     *
     * Some symmetries have four points of symmetry, others two. When
     * trying to calculate the symmetry, this detail can be used to
     * indicate which one is being requested.
     *
     * The following types can have four points of symmetry:
     * {@link Ipuz.Symmetry.ROTATIONAL_QUARTER} and
     * {@link Ipuz.Symmetry.MIRRORED}.
     * @gir-type Enum
     */
    enum SymmetryOffset {
        /**
         * Opposite cell across the mode of symmetry
         */
        OPPOSITE,
        /**
         * Clockwise adjacent point
         */
        CW_ADJACENT,
        /**
         * Counter-clockwise adjacent point
         */
        CCW_ADJACENT,
    }

    /**
     * @gir-type Enum
     */
    export namespace Verbosity {
        export const $gtype: GObject.GType<Verbosity>;
    }

    /**
     * @gir-type Enum
     */
    enum Verbosity {
        STANDARD,
        SPARSE,
    }

    /**
     * Maximum normalized character count that a quote can be set to in an
     * acrostic puzzle.
     */
    const ACROSTIC_MAX_QUOTE_STR_LENGTH: number;
    /**
     * String to pass to {@link Ipuz.Puzzle.get_style} to acquire the
     * left style of an {@link Ipuz.Barred} instance.
     */
    const BARRED_STYLE_L: string;
    /**
     * String to pass to {@link Ipuz.Puzzle.get_style} to acquire the top
     * style of an {@link Ipuz.Barred} instance.
     */
    const BARRED_STYLE_T: string;
    /**
     * String to pass to {@link Ipuz.Puzzle.get_style} to acquire the
     * top-left style of an {@link Ipuz.Barred} instance.
     */
    const BARRED_STYLE_TL: string;
    /**
     * Style mark representing the bottom of the cell. Used for comparison
     * within a {@link Ipuz.StyleForeachMarkFunc} callback.
     */
    const STYLE_MARK_BOTTOM: number;
    /**
     * Style mark representing the center column of the cell. Used for
     * comparison within a {@link Ipuz.StyleForeachMarkFunc} callback.
     */
    const STYLE_MARK_CENTER_COL: number;
    /**
     * Style mark representing the center row of the cell. Used for
     * comparison within a {@link Ipuz.StyleForeachMarkFunc} callback.
     */
    const STYLE_MARK_CENTER_ROW: number;
    /**
     * Style mark representing the left of the cell. Used for comparison
     * within a {@link Ipuz.StyleForeachMarkFunc} callback.
     */
    const STYLE_MARK_LEFT: number;
    /**
     * Style mark representing the right of the cell. Used for comparison
     * within a {@link Ipuz.StyleForeachMarkFunc} callback.
     */
    const STYLE_MARK_RIGHT: number;
    /**
     * Style mark representing the top of the cell. Used for comparison
     * within a {@link Ipuz.StyleForeachMarkFunc} callback.
     */
    const STYLE_MARK_TOP: number;
    /**
     * Creates a new character set by deserializing from a string.
     *
     * As an example:
     *
     * ```C
     * IpuzCharset *alphabet;
     *
     * alphabet = ipuz_charset_deserialize ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
     * ```
     * @param str String serialization of a character set, as returned by `ipuz_charset_serialize()`.
     * @returns a newly allocated {@link Ipuz.Charset}
     */
    function charset_deserialize(str: string): Charset;
    /**
     * Returns the direction represented by `str`
     * @param str A string
     * @returns the direction returns: by `str`
     */
    function clue_direction_from_string(str: string): ClueDirection;
    /**
     * Returns the direction orthoganol to `direction` if it is directional.
     *
     * For example, the orthoganol direction to
     * {@link Ipuz.ClueDirection.DOWN} is {@link Ipuz.ClueDirection.ACROSS}
     * .
     * @param direction The {@link Ipuz.ClueDirection} to evaluate
     * @returns The direction orthoganol to `direction`
     */
    function clue_direction_switch(direction: ClueDirection | null): ClueDirection;
    /**
     * Returns a string representation of `direction`.
     * @param direction An {@link Ipuz.ClueDirection}
     * @returns a string representation of `direction`.
     */
    function clue_direction_to_string(direction: ClueDirection | null): string;
    /**
     * @param c
     */
    function enumeration_valid_char(c: number): boolean;
    /**
     * @param src
     */
    function html_to_markup(src: string): string;
    function puzzle_error_quark(): GLib.Quark;
    /**
     * @param gtype
     */
    function puzzle_kind_from_gtype(gtype: GObject.GType): PuzzleKind;
    /**
     * @param kind
     */
    function puzzle_kind_to_gtype(kind: PuzzleKind | null): GObject.GType;
    /**
     * Returns a lowercase name of the kind field. The returned string is
     * not translated. This function is intended for debugging or
     * serializing, and is not meant for user display.
     * @param kind An [enum@
     * @returns A lowercase name of the kind field
     */
    function puzzle_kind_to_string(kind: PuzzleKind | null): string;
    /**
     * @param shapebg
     */
    function style_shape_get_display_name(shapebg: StyleShape | null): string;
    /**
     * @param side
     */
    function style_side_opposite(side: StyleSides | null): StyleSides;
    /**
     * @param sides
     */
    function style_sides_flip_horiz(sides: StyleSides | null): StyleSides;
    /**
     * @param sides
     */
    function style_sides_flip_vert(sides: StyleSides | null): StyleSides;
    /**
     * @param sides
     */
    function style_sides_rotate_180(sides: StyleSides | null): StyleSides;
    /**
     * @param sides
     */
    function style_sides_rotate_lt(sides: StyleSides | null): StyleSides;
    /**
     * @param sides
     */
    function style_sides_rotate_rt(sides: StyleSides | null): StyleSides;
    /**
     * Calculates the coordinate opposite of `coord` as defined by
     * `symmetry` and `symmetry_offset`. If `symmetry` is quarter rotational,
     * multiple calls to this function must be made.
     *
     * Note, this calculation is done independent of any puzzle
     * conditions.
     * @param coord An {@link Ipuz.CellCoord} `mirror_coord` (out): Location to set to the mirror of `coord`
     * @param mirror_coord
     * @param puzzle_width width of the puzzle
     * @param puzzle_height height of the puzzle
     * @param symmetry Symmetry of the puzzle
     * @param symmetry_offset mode of the symmetry to calculate
     */
    function symmetry_calculate(
        coord: CellCoord,
        mirror_coord: CellCoord,
        puzzle_width: number,
        puzzle_height: number,
        symmetry: Symmetry | null,
        symmetry_offset: SymmetryOffset | null,
    ): void;
    /**
     * @gir-type Callback
     */
    interface ArrowwordForeachBlocksFunc {
        (
            arrowword: Arrowword,
            block_coord: CellCoord,
            clue: Clue,
            placement: ArrowwordPlacement,
            arrow: ArrowwordArrow,
        ): void;
    }
    /**
     * @gir-type Callback
     */
    interface CluesForeachClueFunc {
        (clues: Clues, direction: ClueDirection, clue: Clue, clue_id: ClueId): void;
    }
    /**
     * @gir-type Callback
     */
    interface EnumerationForeachDelimFunc {
        (enumeration: Enumeration, delim: Deliminator, grid_offset: number, final_word: boolean): void;
    }
    /**
     * @gir-type Callback
     */
    interface GridForeachCellFunc {
        (grid: Grid, cell: Cell, coord: CellCoord, guesses: Guesses): void;
    }
    /**
     * @gir-type Callback
     */
    interface PuzzleForeachStyleFunc {
        (puzzle: Puzzle, style: Style, style_name: string): void;
    }
    /**
     * @gir-type Callback
     */
    interface StyleForeachMarkFunc {
        (style: Style, mark: StyleMark, label: string): void;
    }
    /**
     * @gir-type Flags
     */
    export namespace PuzzleFlags {
        export const $gtype: GObject.GType<PuzzleFlags>;
    }

    /**
     * Flags that specifying information about a puzzle
     * @gir-type Flags
     */
    enum PuzzleFlags {
        /**
         * Uses custom extensions to the ipuz spec
         */
        USES_EXTENSIONS,
        /**
         * Includes the solution
         */
        HAS_SOLUTION,
        /**
         * Has a checksum
         */
        HAS_CHECKSUM,
        /**
         * Has clues
         */
        HAS_CLUES,
        /**
         * Has guesses already within the ipuz file
         */
        HAS_SAVED,
        /**
         * Solution contains characters not present in the charset
         */
        INVALID_CHARS,
        /**
         * Puzzle exhibits spec bug where origin is interpreted as 1,1
         */
        HAS_ORIGIN_BUG,
    }

    /**
     * @gir-type Flags
     */
    export namespace StyleMark {
        export const $gtype: GObject.GType<StyleMark>;
    }

    /**
     * Specifies where a given mark should be locate within the
     * cell. These can be combined to indicate multiple locations.
     * @gir-type Flags
     */
    enum StyleMark {
        /**
         * Top Left
         */
        TL,
        /**
         * Top
         */
        T,
        /**
         * Top Right
         */
        TR,
        /**
         * Left
         */
        L,
        /**
         * Center
         */
        C,
        /**
         * Right
         */
        R,
        /**
         * Bottom Left
         */
        BL,
        /**
         * Bottom
         */
        B,
        /**
         * Bottom Right
         */
        BR,
    }

    /**
     * @gir-type Flags
     */
    export namespace StyleSides {
        export const $gtype: GObject.GType<StyleSides>;
    }

    /**
     * Specifies which sides a border decoration (such as *barred* or
     * *dotted*) is referring to. These can be combined to indicate
     * multiple sides at once.
     * @gir-type Flags
     */
    enum StyleSides {
        /**
         * Top
         */
        TOP,
        /**
         * Right
         */
        RIGHT,
        /**
         * Bottom
         */
        BOTTOM,
        /**
         * Left
         */
        LEFT,
        /**
         * Top Left
         */
        TOP_LEFT,
        /**
         * Bottom Right
         */
        BOTTOM_RIGHT,
    }

    namespace Acrostic {
        // Signal signatures
        interface SignalSignatures extends Crossword.SignalSignatures {
            'notify::normalized-quote': (pspec: GObject.ParamSpec) => void;
            'notify::normalized-source': (pspec: GObject.ParamSpec) => void;
            'notify::quote': (pspec: GObject.ParamSpec) => void;
            'notify::source': (pspec: GObject.ParamSpec) => void;
            'notify::clue-placement': (pspec: GObject.ParamSpec) => void;
            'notify::show-enumerations': (pspec: GObject.ParamSpec) => void;
            'notify::guesses': (pspec: GObject.ParamSpec) => void;
            'notify::height': (pspec: GObject.ParamSpec) => void;
            'notify::width': (pspec: GObject.ParamSpec) => void;
            'notify::annotation': (pspec: GObject.ParamSpec) => void;
            'notify::author': (pspec: GObject.ParamSpec) => void;
            'notify::block': (pspec: GObject.ParamSpec) => void;
            'notify::charset': (pspec: GObject.ParamSpec) => void;
            'notify::charset-str': (pspec: GObject.ParamSpec) => void;
            'notify::copyright': (pspec: GObject.ParamSpec) => void;
            'notify::date': (pspec: GObject.ParamSpec) => void;
            'notify::difficulty': (pspec: GObject.ParamSpec) => void;
            'notify::editor': (pspec: GObject.ParamSpec) => void;
            'notify::empty': (pspec: GObject.ParamSpec) => void;
            'notify::explanation': (pspec: GObject.ParamSpec) => void;
            'notify::intro': (pspec: GObject.ParamSpec) => void;
            'notify::license': (pspec: GObject.ParamSpec) => void;
            'notify::locale': (pspec: GObject.ParamSpec) => void;
            'notify::notes': (pspec: GObject.ParamSpec) => void;
            'notify::origin': (pspec: GObject.ParamSpec) => void;
            'notify::publication': (pspec: GObject.ParamSpec) => void;
            'notify::publisher': (pspec: GObject.ParamSpec) => void;
            'notify::puzzle-kind': (pspec: GObject.ParamSpec) => void;
            'notify::styles': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::uniqueid': (pspec: GObject.ParamSpec) => void;
            'notify::url': (pspec: GObject.ParamSpec) => void;
            'notify::version': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Crossword.ConstructorProps, Clues.ConstructorProps {
            normalized_quote: string;
            normalizedQuote: string;
            normalized_source: string;
            normalizedSource: string;
            quote: string;
            source: string;
        }
    }

    /**
     * An acrostic is a quote-based word puzzle. It consists of two parts:
     * a grid containing a quote, and a list of clues. Each cell in the
     * grid has a label and corresponds to one of the cells in a clue. The
     * puzzle can be solved by a combination of guessing words in the
     * quote and solving the clues.
     *
     * ![Example of an acrostic](acrostic.png)
     * _Example of a solved acrostic_
     *
     * Entering a guess in either the grid or clue will also guess in its
     * corresponding cell. For example. in the example above, the _**A**_
     * at the cursor is being guessed at cell _**152A**_, which is present
     * in both the clues and the grid.
     *
     * As an additional solving aid, the first letter of all the solved
     * clues spells out the title and/or author of the work. This
     * _acrostic_ hint gives the puzzle kind its name. In the example
     * above, the first letter of each answer spells out _**David
     * Halberstam / The Amateurs**_, which is the author and title of the
     * work the quote came from.
     *
     * ::: note
     *     When working with acrostics, we use the term _**quote**_ to
     *     refer to the original material that the acrostic uses and can
     *     be read in the grid. The term _**source**_  refers to
     *     the author or the work that the quote comes from. The source
     *     determines the number of clues in the puzzle, as well as the
     *     first letter of the answer to each clue.
     *
     * # Representation
     *
     * ## Grid
     *
     * Similar to a crossword, the {@link Ipuz.CellType} is used to
     * determine whether an {@link Ipuz.Cell} is a block or
     * guessable. Within a cell, the label and solution fields are
     * used. An {@link Ipuz.CellType.NULL} cell could indicate a shaped
     * acrostic, though that is traditionally not used. Similarly, styles
     * are possible but also non-traditional.
     *
     * There is an {@link Ipuz.Acrostic.quote} property that
     * corresponds to the solution of the grid. This property can be used
     * to provide a user-visible description of the quote. The solution of
     * the grid is constrained to the {@link Ipuz.Puzzle.charset} of
     * the puzzle.
     *
     * The quote property and grid can be kept in sync with each other
     * through {@link Ipuz.Acrostic.fix_quote}.
     *
     * ## Clues
     *
     * The clues are all of direction
     * {@link Ipuz.ClueDirection.CLUES}. Unlike crosswords, the cells of
     * each clue are not consecutive, but are placed arbitrarily across
     * the grid. When being rendered, the label of the cells of each clue
     * should be extracted from the source clue.
     *
     * In addition, there is an {@link Ipuz.Acrostic.source} property
     * that corresponds to the first letter of each clue. It spells out
     * the source of the quote — some combination of the author or title.
     *
     * The source property and clues can be kept in sync with each other
     * through {@link Ipuz.Acrostic.fix_source}.
     *
     * In addition to the clues, there is a special _quote clue_ that
     * represents the full grid. See {@link Ipuz.Acrostic.get_quote_clue}
     * for more details.
     *
     *
     * ::: note
     *     In acrostic puzzles, the clues and the grid are tightly
     *     intertwined. Unlike crosswords where it's possible to figure
     *     out the length of a clue from it's number, clues need to have
     *     cells to be valid.
     *
     * ## Guesses
     *
     * Only {@link Ipuz.CellType.NORMAL} cells are considered with an
     * {@link Ipuz.Guesses}. The string there will be compared to the
     * solution field.
     *
     * Acrostic puzzles also support using a checksum instead of having a
     * solution.
     *
     * # Editing
     *
     * Acrostics are particularly complex to work with when editing
     * them. There are multiple constraints that must be satisfied in
     * order to have a well-formed puzzle, and it's quite possible to
     * break these constraints through small changes. As a result, there's
     * no meaningful, stable `fix_all()` function for acrostics. Instead,
     * constructing an acrostic requires the following steps:
     *
     * 1. Set the quote with {@link Ipuz.Acrostic.set_quote} and then fix
     *    it with {@link Ipuz.Acrostic.fix_quote}. This will change the
     *    grid to match the acrostic. It will also clear any clues that may
     *    previously have existed on the puzzle.
     * 1. Set the source with {@link Ipuz.Acrostic.set_source} then fix
     *    it with {@link Ipuz.Acrostic.fix_source}. That will set the
     *    number of clues to the number of letters.
     * 1. Update the answers with either
     *    {@link Ipuz.Acrostic.set_clue_answer} or
     *    {@link Ipuz.Acrostic.set_clue_answers}. These work by mapping
     *    available cells from the source grid to the clue. Note that
     *    actually determining answers for a puzzle is quite tricky and
     *    outside the scope of libipuz.
     * 1. Update the labels of the puzzle to match the clue with
     *    {@link Ipuz.Acrostic.fix_labels}. This should called once each
     *    answer has been set and every cell is used.
     *
     * It is possible to create the puzzle manually directly through
     * {@link Ipuz.Grid} and {@link Ipuz.Clues}, though it's a lot of
     * work.
     *
     * ## Example Editing
     *
     * Here's an example of the above workflow:
     *
     * ```C
     * IpuzPuzzle *acrostic;
     * const gchar *quote =
     *   "The time has come, the Walrus said, "
     *   "To talk of many things: "
     *   "Of shoes — and ships — and sealing-wax — "
     *   "Of cabbages — and kings — "
     *   "And why the sea is boiling hot — "
     *   "And whether pigs have wings.";
     * const gchar *source = "Lewis Carroll";
     *
     * // Note, generating the answers is outside the scope of libipuz
     * g_autoptr (GArray) answers = generate_answers (quote, source);
     *
     * acrostic = ipuz_acrostic_new ();
     * ipuz_acrostic_set_quote (IPUZ_ACROSTIC (acrostic), quote);
     * ipuz_acrostic_set_source (IPUZ_ACROSTIC (acrostic), source);
     *
     * // Change the grid to match the quote and label it correctly
     * ipuz_acrostic_fix_quote (IPUZ_ACROSTIC (acrostic),
     *                          IPUZ_ACROSTIC_SYNC_STRING_TO_PUZZLE);
     *
     * // Change the clue count to match the source
     * ipuz_acrostic_fix_source (IPUZ_ACROSTIC (acrostic),
     *                           IPUZ_ACROSTIC_SYNC_STRING_TO_PUZZLE);
     *
     * // Set answers to all clues. Answers is a GArray of strings,
     * // collectively containing each letter in quote
     * ipuz_acrostic_set_clue_answers (IPUZ_ACROSTIC (acrostic), answers);
     *
     * // update the labels to match the clues
     * ipuz_acrostic_fix_labels (IPUZ_ACROSTIC (acrostic),
     *                           IPUZ_ACROSTIC_LABEL_NUMBERS_CLUES);
     * ```
     *
     * This will generate the following grid:
     *
     * ![Grid generated by the code example](acrostic-grid.png)
     * _Grid generated by the code example_
     * @gir-type Class
     */
    class Acrostic extends Crossword implements Clues {
        static $gtype: GObject.GType<Acrostic>;

        // Properties

        /**
         * String representing the quote of the puzzle. This is built from
         * the grid and contains no punctuation. Every character in this
         * string is also in the {@link Ipuz.Puzzle.charset}.
         * @read-only
         */
        get normalized_quote(): string;
        /**
         * String representing the quote of the puzzle. This is built from
         * the grid and contains no punctuation. Every character in this
         * string is also in the {@link Ipuz.Puzzle.charset}.
         * @read-only
         */
        get normalizedQuote(): string;
        /**
         * String representing the author and/or title of the quote. It is
         * built from the clues and contains no punctuation or
         * spacing. Every character in this string is also in the
         * {@link Ipuz.Puzzle.charset}.
         * @read-only
         */
        get normalized_source(): string;
        /**
         * String representing the author and/or title of the quote. It is
         * built from the clues and contains no punctuation or
         * spacing. Every character in this string is also in the
         * {@link Ipuz.Puzzle.charset}.
         * @read-only
         */
        get normalizedSource(): string;
        /**
         * Human readable string representing the quote of the puzzle.
         *
         * ::: note
         *     This string has to be set by the puzzle author and is stored
         *     in a libipuz extension to the ipuz file format.
         */
        get quote(): string;
        set quote(val: string);
        /**
         * Human readable string representing the author and/or title of the quote.
         *
         * ::: note
         *     This string has to be set by the puzzle author and is stored
         *     in a libipuz extension to the ipuz file format.
         */
        get source(): string;
        set source(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Acrostic.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Acrostic.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Acrostic;

        // Signals

        /** @signal */
        connect<K extends keyof Acrostic.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Acrostic.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Acrostic.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Acrostic.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Acrostic.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Acrostic.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        clear_clue_answers(): void;
        /**
         * Updates the labels or numbers of the cells in the grid to be
         * accurate. If `label_mode` is
         * {@link Ipuz.AcrosticLabelMode.NUMBERS_CLUES} then it will set a
         * label with each cell with the cell number as well as the clue
         * associated with it. On the other hand if `label_mode` is
         * {@link Ipuz.AcrosticLabelMode.NUMBERS} then it will just set the
         * number of each cell to be the index of the cell in the grid.
         *
         * This method is generally called after every call to
         * {@link Ipuz.Acrostic.set_clue_answers}.
         * @param label_mode How to fix the labels
         */
        fix_labels(label_mode: AcrosticLabelMode | null): void;
        /**
         * Syncs the grid and the quote string, in the direction of
         * `sync_direction`.
         *
         * This will either generate a new quote string based on the grid, or
         * generate a new grid based on the quote string depending on the
         * `sync_direction`.
         *
         * When building the grid from the string, only characters that exist
         * in {@link Ipuz.Puzzle.charset} are considered. Every other run
         * of unrecognized characters will be consensed to a single block.
         *
         * As an example:
         * ```c
         * acrostic = ipuz_acrostic_new ();
         * ipuz_acrostic_set_quote (acrostic,
         *    "They were careless people, Tom and Daisy- they smashed "
         *    "up things and creatures and then retreated back into "
         *    "their money or their vast carelessness or whatever it "
         *    "was that kept them together, and let other people clean"
         *    "up the mess they had made");
         * ipuz_acrostic_fix_quote (acrostic, IPUZ_ACROSTIC_SYNC_STRING_TO_PUZZLE);
         * ```
         * Will create the following grid:
         *
         * ![Generated grid](acrostic-gatsby.png)
         *
         * ::: warning
         *     When generating a grid from the quote, all eexisting clues will
         *     be removed from the puzzle. This is precautionary — clues don't
         *     really exist independent from the grid and a change in the grid
         *     will likely make many clues invalid.
         * @param sync_direction direction to sync the quote
         */
        fix_quote(sync_direction: AcrosticSyncDirection | null): void;
        /**
         * Makes sure that clues and source string are in sync.
         *
         * This will either generate a new source string based on the answers
         * in the clues, or generate the right number of clues based on the
         * `sync_direction`.
         *
         * When syncing from string to puzzle, only characters that exist in
         * {@link Ipuz.Puzzle.charset} are considered.
         *
         * ::: warning
         *     When syncing from puzzle to string, no punctuation or spacing
         *     can be implied from the clues. If there's already a human
         *     readable string that exists, it will be overwritten with a less
         *     clear one.
         * @param sync_direction direction to sync the source
         */
        fix_source(sync_direction: AcrosticSyncDirection | null): void;
        /**
         * @param coord
         */
        get_guess_string(coord: CellCoord): string;
        /**
         * Returns the normalized quote of `self`. Every character here exists
         * in {@link Ipuz.Puzzle.charset}, and spells out the phrase in the
         * grid.
         * @returns the normalized quote of `self`
         */
        get_normalized_quote(): string | null;
        /**
         * Returns the normalized source of `self`. Every character here exists
         * in {@link Ipuz.Puzzle.charset}, and spells out the first letter
         * of each clue.
         * @returns the normalized source of `self`
         */
        get_normalized_source(): string | null;
        /**
         * Returns the quote of `self` as a displayable string.
         * @returns the quote of `self`
         */
        get_quote(): string | null;
        /**
         * Returns the quote clue associated with the acrostic.
         *
         * The quote clue is a clue whose cells are all the characters of the
         * quote in the grid, and can be used to iterate a cursor through the
         * puzzle. It should not be displayed as a separate clue and cannot be
         * explicity set. It is included when saving an acrostic, to provide
         * compatibility with players that just play crossword puzzles.
         * @returns the quote clue associated with the acrostic
         */
        get_quote_clue(): Clue | null;
        /**
         * Returns the source of `self` as a displayable string.
         * @returns the source of `self`
         */
        get_source(): string | null;
        /**
         * Initializes `self` to make sure that at least the first letter of
         * every clue matches the source string, if present. This method is
         * intended to be used in an interactive editor to set up the clues
         * for the first time.
         */
        initialize_answers(): void;
        /**
         * @param index
         * @param answer
         */
        set_clue_answer(index: number, answer: string): boolean;
        /**
         * This will map the cells of the clues in `self` to cells in the grid.
         *
         * For this method to work:
         *
         * 1. Every character in the grid must be included exactly once in the
         *    strings in answers, and vice versa
         * 1. The first letter of each answer in the array must match the
         *    source string
         *
         * If these conditions are met then this will randomly pick an
         * appropriate cell for each clue and set it on the cells of each
         * clue, and `true` will be returned.
         *
         * ::: note
         *     Generating the array of answers is actually quite hard and
         *     outside the scope of libipuz. It can also be quite
         *     computationally expensive, depending on the length of the
         *     quote.
         * @param answers An array of answers to the clues
         * @returns `true`, if it could map every character in answers to a cell
         */
        set_clue_answers(answers: string[]): boolean;
        /**
         * Sets the quote of the puzzle. This is a human-displayable
         * representation of the grid.
         *
         * This string is saved and restored when loading and saving to disk.
         *
         * If `quote_str` differs from the grid layout of `self`, it can be
         * reconciled by calling {@link Ipuz.Acrostic.fix_quote}.
         *
         * ::: note
         *     `quote_str` must be less than {@link Ipuz.ACROSTIC_MAX_QUOTE_STR_LENGTH}
         *     characters long once reconciled with the
         *     {@link Ipuz.Puzzle.charset}. It will be truncated if too
         *     long.
         * @param quote_str the quote string of the puzzle
         */
        set_quote(quote_str: string): void;
        /**
         * Sets the source of the puzzle. Traditionally it is some combination
         * of the author and the title of the work. This is a
         * human-displayable representation.
         *
         * This string is saved and restored when loading and saving to disk.
         *
         * If length of `source_str` differs from the number of clues of `self`,
         * it can be reconciled by calling {@link Ipuz.Acrostic.fix_source}.
         *
         * As an example:
         * ```c
         * ipuz_acrostic_set_source (acrostic, "Persuasion / Jane Austen");
         * ipuz_acrostic_fix_source (acrostic, IPUZ_ACROSTIC_SYNC_STRING_TO_PUZZLE);
         * ```
         * Results in a puzzle with twenty clues. The first letter of the
         * answer of each clue is expected to start with the letter `P`, then
         * `E`, then `R`, etc.
         *
         * ::: note
         *     Every letter in the source needs to also be found in the quote
         *     for the puzzle to be solveable. This function will not double
         *     check that as it can be called independently from
         *     {@link Ipuz.Acrostic.set_quote}.
         * @param source_str the source string of the puzzle
         */
        set_source(source_str: string): void;
        /**
         * The {@link Ipuz.Guesses} associated with the grid.
         * @category Inherited from Ipuz.Grid
         */
        get guesses(): Guesses;
        set guesses(val: Guesses);
        /**
         * Number of rows in the grid.
         * @category Inherited from Ipuz.Grid
         */
        get height(): number;
        set height(val: number);
        /**
         * Number of columns in the grid.
         * @category Inherited from Ipuz.Grid
         */
        get width(): number;
        set width(val: number);
        /**
         * Adds a new clue set to `clues`. This clue set will be in the
         * direction of `direction`, and will be empty. If `label` is set, then
         * it will set the label of the newly created clue set.
         *
         * The return value of this function is the direction of the newly
         * added clue set, and should be used to access the clue set going
         * forward. Most of the time, the returned direction will be identical
         * to `direction`. However, should you add multiple cluesets of the
         * same direction but different labels, then the returned direction
         * will be a new value starting at {@link Ipuz.ClueDirection.CUSTOM}.
         *
         * If a clue set already exists with an identical `direction` or label,
         * then a new clue set won't be created and
         * {@link Ipuz.ClueDirection.NONE} will be returned.
         * @param direction the direction of the newly added clue set
         * @param label an optional label for the newly added clue set
         * @returns the direction of the newly created clue set, or {@link Ipuz.ClueDirection.NONE}
         */
        add_clue_set(direction: ClueDirection | null, label?: string | null): ClueDirection;
        /**
         * Removes all the clues and clue sets of `clues`.
         */
        clear_clue_sets(): void;
        /**
         * Returns `true` if `clue` has a user guess for every cell. If all the
         * user guesses are correct, then `correct` is set to `true` as well.
         * @param clue The clue to inspect
         * @returns `true`, if the clue has guesses for every cell
         */
        clue_guessed(clue: Clue): [boolean, boolean];
        /**
         * Returns the direction of the clueset at `index`.
         *
         * This can be used in conjunction with
         * {@link Ipuz.Clues.get_n_clue_sets} to iterate through all the
         * directions in `clues`. This is the only place in the API where an
         * index is used, as opposed to a direction.
         * @param index the index of the clueset to lookup.
         * @returns The direction of the clueset indexed by `index`
         */
        clue_set_get_dir(index: number): ClueDirection;
        /**
         * Returns the label of the clueset at `direction`.
         *
         * This label can be used as a user visible discription the clue set.
         * @param direction the direction of the clue set
         * @returns The label of the clueset at `direction`
         */
        clue_set_get_label(direction: ClueDirection | null): string;
        /**
         * Returns the next clue set visible in `clues` after `direction`.
         *
         * For example, if called on a regular crossword with a `direction` of
         * {@link Ipuz.ClueDirection.ACROSS}, this would return
         * {@link Ipuz.ClueDirection.DOWN}.
         *
         * If `wrap` is `true` then this will wrap around to the beginning when
         * at the last visible clue sets, otherwise it will return
         * {@link Ipuz.ClueDirection.NONE}.
         *
         * Note that any clue sets of type {@link Ipuz.ClueDirection.HIDDEN}
         * will be skipped by this function.
         * @param direction A direction
         * @param wrap Whether to wrap around
         * @returns The next direction logically in `clues`, or {@link Ipuz.ClueDirection.NONE}
         */
        clue_set_next_direction(direction: ClueDirection | null, wrap: boolean): ClueDirection;
        /**
         * Returns the previous clue set visible in `clues` after `direction`.
         *
         * For example, if called on a regular crossword with a `direction` of
         * {@link Ipuz.ClueDirection.DOWN}, this would return
         * {@link Ipuz.ClueDirection.ACROSS}.
         *
         * If `wrap` is `true` then this will wrap around to the end when at the
         * first visible clue sets, otherwise it will return
         * {@link Ipuz.ClueDirection.NONE}.
         *
         * Note that any clue sets of type {@link Ipuz.ClueDirection.HIDDEN}
         * will be skipped by this function.
         * @param direction A direction
         * @param wrap Whether to wrap around
         * @returns The previous direction logically in `clues`, or {@link Ipuz.ClueDirection.NONE}
         */
        clue_set_prev_direction(direction: ClueDirection | null, wrap: boolean): ClueDirection;
        /**
         * [ RETHINK THIS FUNCTION. CANT WE GET IT FROM THE CELL?]
         * @param direction
         * @param coord
         */
        find_clue_by_coord(direction: ClueDirection | null, coord: CellCoord): Clue;
        /**
         * Searches for and returns the clue with `direction` and `label`.
         * @param direction The direction to search
         * @param label The label to look for
         * @returns The clue with `direction` and `label`, or `null`
         */
        find_clue_by_label(direction: ClueDirection | null, label: string): Clue | null;
        /**
         * Searches for and returns the clue with `direction` and `number`.
         *
         * This is different from the {@link Ipuz.ClueId} which uses the
         * index to refer to a clue. As an example the clue _2dn_ could be
         * have a clue id with an index of 0.
         * @param direction The direction to search
         * @param number The number to look for
         * @returns The clue with `direction` and `number`, or `null`
         */
        find_clue_by_number(direction: ClueDirection | null, number: number): Clue | null;
        /**
         * Calls `func` for each {@link Ipuz.Clue} in `clues`.
         * @param func The function to call for each clue
         */
        foreach_clue(func: CluesForeachClueFunc): void;
        /**
         * Returns the clue at `clue_id`, or `null`.
         * @param clue_id An id of a clue
         * @returns A clue at `clue_id`
         */
        get_clue_by_id(clue_id: ClueId): Clue | null;
        /**
         * Returns a string containing the solution of the puzzle for a given
         * clue. This string will have '?' characters embedded within it if
         * there are cells without solutions set yet.
         * @param clue_id An {@link Ipuz.ClueId} to get the clue string for
         * @returns The solution for the puzzle for `clue_id`. Returns `null` if `clue_id` points to an invalid clue
         */
        get_clue_string_by_id(clue_id: ClueId): string | null;
        /**
         * Returns an array of all clues in the direction of `direction`.
         * @param direction The direction of clues to search
         * @returns an array of all clues in the direction of `direction`
         */
        get_clues(direction: ClueDirection | null): Clue[];
        /**
         * Returns a string containing the guess in the puzzle for a given
         * clue. This string will have '?' characters embedded within it if
         * there are cells not completely filled out.
         * @param clue_id An {@link Ipuz.ClueId} to get the guesses string for
         * @returns The guesses for the puzzle for `clue_id`. Returns `null` if `clue_id` points to an invalid clue
         */
        get_guess_string_by_id(clue_id: ClueId): string | null;
        /**
         * Finds the {@link Ipuz.ClueId} of `clue` within `clues`.
         *
         * If `clue` doesn't exist in `clues`, then `false` is returned and
         * `clue_id`'s direction is set to {@link Ipuz.ClueDirection.NONE}.
         * @param clue The {@link Ipuz.Clue} to search for
         * @returns `true`, if `clue_id` was set to the id of `clue`
         */
        get_id_by_clue(clue: Clue | null): [boolean, ClueId];
        /**
         * Returns the number of clue sets associated with `clues`.
         * @returns The number of clue sets associated with `clues`
         */
        get_n_clue_sets(): number;
        /**
         * Returns the number of clues in `direction`.
         * @param direction The direction of clues to count
         * @returns The number of clues in `direction`
         */
        get_n_clues(direction: ClueDirection | null): number;
        /**
         * Removes `clue` from `clues`. The clue will also be unlinked from the
         * grid.
         * @param clue A clue to remove
         */
        remove_clue(clue: Clue): void;
        /**
         * Removes the clue set in the direction of `direction`. All the clues
         * associated with that clue set will be unreffed.
         * @param direction the direction of the clue set to remove
         */
        remove_clue_set(direction: ClueDirection | null): void;
        /**
         * Unlinks `clue` from the grid. That is to say, any of the cells that
         * `clue` pointed to will no longer refer to it.
         * @param clue A clue to remove
         */
        unlink_clue(clue: Clue): void;
        /**
         * Adds a new clue set to `clues`. This clue set will be in the
         * direction of `direction`, and will be empty. If `label` is set, then
         * it will set the label of the newly created clue set.
         *
         * The return value of this function is the direction of the newly
         * added clue set, and should be used to access the clue set going
         * forward. Most of the time, the returned direction will be identical
         * to `direction`. However, should you add multiple cluesets of the
         * same direction but different labels, then the returned direction
         * will be a new value starting at {@link Ipuz.ClueDirection.CUSTOM}.
         *
         * If a clue set already exists with an identical `direction` or label,
         * then a new clue set won't be created and
         * {@link Ipuz.ClueDirection.NONE} will be returned.
         * @param direction the direction of the newly added clue set
         * @param label an optional label for the newly added clue set
         * @virtual
         */
        vfunc_add_clue_set(direction: ClueDirection, label?: string | null): ClueDirection;
        /**
         * Removes all the clues and clue sets of `clues`.
         * @virtual
         */
        vfunc_clear_clue_sets(): void;
        /**
         * Returns `true` if `clue` has a user guess for every cell. If all the
         * user guesses are correct, then `correct` is set to `true` as well.
         * @param clue The clue to inspect
         * @virtual
         */
        vfunc_clue_guessed(clue: Clue): [boolean, boolean];
        /**
         * Returns the direction of the clueset at `index`.
         *
         * This can be used in conjunction with
         * {@link Ipuz.Clues.get_n_clue_sets} to iterate through all the
         * directions in `clues`. This is the only place in the API where an
         * index is used, as opposed to a direction.
         * @param index the index of the clueset to lookup.
         * @virtual
         */
        vfunc_clue_set_get_dir(index: number): ClueDirection;
        /**
         * Returns the label of the clueset at `direction`.
         *
         * This label can be used as a user visible discription the clue set.
         * @param direction the direction of the clue set
         * @virtual
         */
        vfunc_clue_set_get_label(direction: ClueDirection): string;
        /**
         * [ RETHINK THIS FUNCTION. CANT WE GET IT FROM THE CELL?]
         * @param direction
         * @param coord
         * @virtual
         */
        vfunc_find_clue_by_coord(direction: ClueDirection, coord: CellCoord): Clue;
        /**
         * Searches for and returns the clue with `direction` and `label`.
         * @param direction The direction to search
         * @param label The label to look for
         * @virtual
         */
        vfunc_find_clue_by_label(direction: ClueDirection, label: string): Clue | null;
        /**
         * Searches for and returns the clue with `direction` and `number`.
         *
         * This is different from the {@link Ipuz.ClueId} which uses the
         * index to refer to a clue. As an example the clue _2dn_ could be
         * have a clue id with an index of 0.
         * @param direction The direction to search
         * @param number The number to look for
         * @virtual
         */
        vfunc_find_clue_by_number(direction: ClueDirection, number: number): Clue | null;
        /**
         * Calls `func` for each {@link Ipuz.Clue} in `clues`.
         * @param func The function to call for each clue
         * @virtual
         */
        vfunc_foreach_clue(func: CluesForeachClueFunc): void;
        /**
         * Returns the clue at `clue_id`, or `null`.
         * @param clue_id An id of a clue
         * @virtual
         */
        vfunc_get_clue_by_id(clue_id: ClueId): Clue | null;
        /**
         * Returns a string containing the solution of the puzzle for a given
         * clue. This string will have '?' characters embedded within it if
         * there are cells without solutions set yet.
         * @param clue_id An {@link Ipuz.ClueId} to get the clue string for
         * @virtual
         */
        vfunc_get_clue_string_by_id(clue_id: ClueId): string | null;
        /**
         * Returns an array of all clues in the direction of `direction`.
         * @param direction The direction of clues to search
         * @virtual
         */
        vfunc_get_clues(direction: ClueDirection): Clue[];
        /**
         * Returns a string containing the guess in the puzzle for a given
         * clue. This string will have '?' characters embedded within it if
         * there are cells not completely filled out.
         * @param clue_id An {@link Ipuz.ClueId} to get the guesses string for
         * @virtual
         */
        vfunc_get_guess_string_by_id(clue_id: ClueId): string | null;
        /**
         * Finds the {@link Ipuz.ClueId} of `clue` within `clues`.
         *
         * If `clue` doesn't exist in `clues`, then `false` is returned and
         * `clue_id`'s direction is set to {@link Ipuz.ClueDirection.NONE}.
         * @param clue The {@link Ipuz.Clue} to search for
         * @virtual
         */
        vfunc_get_id_by_clue(clue: Clue | null): [boolean, ClueId];
        /**
         * Returns the number of clue sets associated with `clues`.
         * @virtual
         */
        vfunc_get_n_clue_sets(): number;
        /**
         * Returns the number of clues in `direction`.
         * @param direction The direction of clues to count
         * @virtual
         */
        vfunc_get_n_clues(direction: ClueDirection): number;
        /**
         * Removes `clue` from `clues`. The clue will also be unlinked from the
         * grid.
         * @param clue A clue to remove
         * @virtual
         */
        vfunc_remove_clue(clue: Clue): void;
        /**
         * Removes the clue set in the direction of `direction`. All the clues
         * associated with that clue set will be unreffed.
         * @param direction the direction of the clue set to remove
         * @virtual
         */
        vfunc_remove_clue_set(direction: ClueDirection): void;
        /**
         * Unlinks `clue` from the grid. That is to say, any of the cells that
         * `clue` pointed to will no longer refer to it.
         * @param clue A clue to remove
         * @virtual
         */
        vfunc_unlink_clue(clue: Clue): void;
        /**
         * Invokes the operation determined by `check_type` on `cell` and
         * `guesses` at `coord`.
         *
         * This function allows subclasses to specify puzzle-specific
         * behavior. For example, if `check_type` is `IPUZ_GRID_GUESSABLE`, then
         * it will return `true` if the cell can accept a users's guess (eg. is
         * not a block or null with crosswords, etc).
         *
         * This function is used by {@link Ipuz.Grid} to maintain consistency
         * of the puzzle in its operations. Subclasses should implement this
         * method in order to define their behavior. It is not expected that
         * most users will ever need to call this function.
         *
         * See {@link Ipuz.GridCheckType} for more information on the specific
         * operations.
         *
         * ::: note
         *     Some of the operation types can modify either guesses or cell.
         * @param cell A cell to check
         * @param coord The coordinate of `cell`
         * @param guesses The guesses to check
         * @param check_type The operation to perform at `coord`
         * @returns `true`, if the condition determined by %check_type is met
         */
        check_cell(cell: Cell, coord: CellCoord, guesses: Guesses, check_type: GridCheckType | null): boolean;
        /**
         * Invokes the operation determined by `check_type` on the stride guess
         * determined by `direction` and `index`.
         *
         * This function allows subclasses to specify puzzle-specific
         * behavior. Unlike {@link Ipuz.Grid.check_cell}, this function is
         * optional for puzzles as most puzzles don't use stride guesses. A
         * default handler is provided that just returns `false`.
         *
         * This function is used by {@link Ipuz.Grid} to maintain consistency
         * of the puzzle in its operations. Subclasses should implement this
         * method in order to define their behavior. It is not expected that
         * most users will ever need to call this function.
         *
         * See {@link Ipuz.GridCheckType} for more information on the specific
         * operations.
         *
         * ::: note
         *     Some of the operation types can modify either guesses or cell.
         * @param direction
         * @param index
         * @param guesses The guesses to check
         * @param check_type The operation to perform at `coord`
         * @returns `true`, if the condition determined by %check_type is met
         */
        check_stride(
            direction: ClueDirection | null,
            index: number,
            guesses: Guesses,
            check_type: GridCheckType | null,
        ): boolean;
        /**
         * Creates a fresh {@link Ipuz.Guesses}. It will be initialized to
         * the current state of the grid.
         *
         * The guessses can be used to solve the puzzle, and as such, its
         * format is puzzle-type dependent. See each puzzle's *Guesses*
         * section for more information on the format.
         *
         * Note that this method won't change the internal guesses of self. If
         * that is desired, you should pair this with
         * {@link Ipuz.Grid.set_guesses}. As an example:
         *
         * ```C
         * g_autoptr (IpuzGuesses) guesses;
         *
         * guesses = ipuz_grid_create_guesses (grid);
         * ipuz_grid_set_guesses (grid, guesses);
         * ```
         * @returns A new {@link Ipuz.Guesses} matching `self`
         */
        create_guesses(): Guesses;
        /**
         * Fixes the guesses associated with `self`. The result will be a
         * playable {@link Ipuz.Guesses} struct.
         *
         * ::: note
         *     This method will try to keep any guesses on cells intact. If a
         *     fresh playing grid is desired, then it's recommended to call
         *     {@link Ipuz.Grid.create_guesses}, and then attach it to `self`
         *     with {@link IpuzGrid.set_guesses}.
         */
        fix_guesses(): void;
        /**
         * Calls `func` for each {@link Ipuz.Cell} in `self`.
         * @param func The function to call for each cell
         */
        foreach_cell(func: GridForeachCellFunc): void;
        /**
         * Retrieves the cell at `coord`. If the coordinates are
         * outside the bounds of the grid then `null` will be returned.
         *
         * The coordinate system of the `self` is similar to that of a spreadsheet. The
         * origin is the upper left corner. Row's increase vertically downward, and
         * columns increase horizontally.
         * @param coord Coordinates for the cell.
         * @returns The cell at `coord`.
         */
        get_cell(coord: CellCoord): Cell | null;
        /**
         * Returns the {@link Ipuz.Guesses} associated with `self`.
         * @returns The {@link Ipuz.Guesses} associated with `self`
         */
        get_guesses(): Guesses;
        /**
         * Returns the number of rows in `self`.
         * @returns The height of `self`
         */
        get_height(): number;
        /**
         * Returns the number of columns in `self`.
         * @returns The width of `self`
         */
        get_width(): number;
        /**
         * Resizes `self` to the new size.
         *
         * If one of the dimensions is larger than before, the new cells will
         * be filled in with puzzle-appropriate default values.
         *
         * This function will not adjust its internal {@link Ipuz.Guesses}
         * object to match the new size. That can be done by a separate call
         * to {@link Ipuz.Grid.fix_guesses}.
         * @param new_width The new width
         * @param new_height The new height
         */
        resize(new_width: number, new_height: number): void;
        /**
         * Sets `guesses` for `self`. If there's a mismatch in the cell types
         * between `guesses` and `self` then `false` is returned. `guesses` will
         * be set regardless of the return value.
         *
         * Mismatches can be fixed by calling {@link Ipuz.Grid.fix_guesses}.
         * @param guesses The {@link Ipuz.Guesses} to set on self
         * @returns `true`, if guesses matches `self`
         */
        set_guesses(guesses?: Guesses | null): boolean;
        /**
         * Invokes the operation determined by `check_type` on `cell` and
         * `guesses` at `coord`.
         *
         * This function allows subclasses to specify puzzle-specific
         * behavior. For example, if `check_type` is `IPUZ_GRID_GUESSABLE`, then
         * it will return `true` if the cell can accept a users's guess (eg. is
         * not a block or null with crosswords, etc).
         *
         * This function is used by {@link Ipuz.Grid} to maintain consistency
         * of the puzzle in its operations. Subclasses should implement this
         * method in order to define their behavior. It is not expected that
         * most users will ever need to call this function.
         *
         * See {@link Ipuz.GridCheckType} for more information on the specific
         * operations.
         *
         * ::: note
         *     Some of the operation types can modify either guesses or cell.
         * @param cell A cell to check
         * @param coord The coordinate of `cell`
         * @param guesses The guesses to check
         * @param check_type The operation to perform at `coord`
         * @virtual
         */
        vfunc_check_cell(cell: Cell, coord: CellCoord, guesses: Guesses, check_type: GridCheckType): boolean;
        /**
         * Invokes the operation determined by `check_type` on the stride guess
         * determined by `direction` and `index`.
         *
         * This function allows subclasses to specify puzzle-specific
         * behavior. Unlike {@link Ipuz.Grid.check_cell}, this function is
         * optional for puzzles as most puzzles don't use stride guesses. A
         * default handler is provided that just returns `false`.
         *
         * This function is used by {@link Ipuz.Grid} to maintain consistency
         * of the puzzle in its operations. Subclasses should implement this
         * method in order to define their behavior. It is not expected that
         * most users will ever need to call this function.
         *
         * See {@link Ipuz.GridCheckType} for more information on the specific
         * operations.
         *
         * ::: note
         *     Some of the operation types can modify either guesses or cell.
         * @param direction
         * @param index
         * @param guesses The guesses to check
         * @param check_type The operation to perform at `coord`
         * @virtual
         */
        vfunc_check_stride(
            direction: ClueDirection,
            index: number,
            guesses: Guesses,
            check_type: GridCheckType,
        ): boolean;
    }

    namespace Arrowword {
        // Signal signatures
        interface SignalSignatures extends Crossword.SignalSignatures {
            'notify::clue-placement': (pspec: GObject.ParamSpec) => void;
            'notify::show-enumerations': (pspec: GObject.ParamSpec) => void;
            'notify::guesses': (pspec: GObject.ParamSpec) => void;
            'notify::height': (pspec: GObject.ParamSpec) => void;
            'notify::width': (pspec: GObject.ParamSpec) => void;
            'notify::annotation': (pspec: GObject.ParamSpec) => void;
            'notify::author': (pspec: GObject.ParamSpec) => void;
            'notify::block': (pspec: GObject.ParamSpec) => void;
            'notify::charset': (pspec: GObject.ParamSpec) => void;
            'notify::charset-str': (pspec: GObject.ParamSpec) => void;
            'notify::copyright': (pspec: GObject.ParamSpec) => void;
            'notify::date': (pspec: GObject.ParamSpec) => void;
            'notify::difficulty': (pspec: GObject.ParamSpec) => void;
            'notify::editor': (pspec: GObject.ParamSpec) => void;
            'notify::empty': (pspec: GObject.ParamSpec) => void;
            'notify::explanation': (pspec: GObject.ParamSpec) => void;
            'notify::intro': (pspec: GObject.ParamSpec) => void;
            'notify::license': (pspec: GObject.ParamSpec) => void;
            'notify::locale': (pspec: GObject.ParamSpec) => void;
            'notify::notes': (pspec: GObject.ParamSpec) => void;
            'notify::origin': (pspec: GObject.ParamSpec) => void;
            'notify::publication': (pspec: GObject.ParamSpec) => void;
            'notify::publisher': (pspec: GObject.ParamSpec) => void;
            'notify::puzzle-kind': (pspec: GObject.ParamSpec) => void;
            'notify::styles': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::uniqueid': (pspec: GObject.ParamSpec) => void;
            'notify::url': (pspec: GObject.ParamSpec) => void;
            'notify::version': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Crossword.ConstructorProps, Clues.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Arrowword extends Crossword implements Clues {
        static $gtype: GObject.GType<Arrowword>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Arrowword.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Arrowword.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Arrowword.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Arrowword.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Arrowword.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Arrowword.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Arrowword.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Arrowword.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Calls `func` on each block in `self`.
         * @param func The function to call for each block
         */
        foreach_blocks(func: ArrowwordForeachBlocksFunc): void;
        print(): void;
        /**
         * The {@link Ipuz.Guesses} associated with the grid.
         * @category Inherited from Ipuz.Grid
         */
        get guesses(): Guesses;
        set guesses(val: Guesses);
        /**
         * Number of rows in the grid.
         * @category Inherited from Ipuz.Grid
         */
        get height(): number;
        set height(val: number);
        /**
         * Number of columns in the grid.
         * @category Inherited from Ipuz.Grid
         */
        get width(): number;
        set width(val: number);
        /**
         * Adds a new clue set to `clues`. This clue set will be in the
         * direction of `direction`, and will be empty. If `label` is set, then
         * it will set the label of the newly created clue set.
         *
         * The return value of this function is the direction of the newly
         * added clue set, and should be used to access the clue set going
         * forward. Most of the time, the returned direction will be identical
         * to `direction`. However, should you add multiple cluesets of the
         * same direction but different labels, then the returned direction
         * will be a new value starting at {@link Ipuz.ClueDirection.CUSTOM}.
         *
         * If a clue set already exists with an identical `direction` or label,
         * then a new clue set won't be created and
         * {@link Ipuz.ClueDirection.NONE} will be returned.
         * @param direction the direction of the newly added clue set
         * @param label an optional label for the newly added clue set
         * @returns the direction of the newly created clue set, or {@link Ipuz.ClueDirection.NONE}
         */
        add_clue_set(direction: ClueDirection | null, label?: string | null): ClueDirection;
        /**
         * Removes all the clues and clue sets of `clues`.
         */
        clear_clue_sets(): void;
        /**
         * Returns `true` if `clue` has a user guess for every cell. If all the
         * user guesses are correct, then `correct` is set to `true` as well.
         * @param clue The clue to inspect
         * @returns `true`, if the clue has guesses for every cell
         */
        clue_guessed(clue: Clue): [boolean, boolean];
        /**
         * Returns the direction of the clueset at `index`.
         *
         * This can be used in conjunction with
         * {@link Ipuz.Clues.get_n_clue_sets} to iterate through all the
         * directions in `clues`. This is the only place in the API where an
         * index is used, as opposed to a direction.
         * @param index the index of the clueset to lookup.
         * @returns The direction of the clueset indexed by `index`
         */
        clue_set_get_dir(index: number): ClueDirection;
        /**
         * Returns the label of the clueset at `direction`.
         *
         * This label can be used as a user visible discription the clue set.
         * @param direction the direction of the clue set
         * @returns The label of the clueset at `direction`
         */
        clue_set_get_label(direction: ClueDirection | null): string;
        /**
         * Returns the next clue set visible in `clues` after `direction`.
         *
         * For example, if called on a regular crossword with a `direction` of
         * {@link Ipuz.ClueDirection.ACROSS}, this would return
         * {@link Ipuz.ClueDirection.DOWN}.
         *
         * If `wrap` is `true` then this will wrap around to the beginning when
         * at the last visible clue sets, otherwise it will return
         * {@link Ipuz.ClueDirection.NONE}.
         *
         * Note that any clue sets of type {@link Ipuz.ClueDirection.HIDDEN}
         * will be skipped by this function.
         * @param direction A direction
         * @param wrap Whether to wrap around
         * @returns The next direction logically in `clues`, or {@link Ipuz.ClueDirection.NONE}
         */
        clue_set_next_direction(direction: ClueDirection | null, wrap: boolean): ClueDirection;
        /**
         * Returns the previous clue set visible in `clues` after `direction`.
         *
         * For example, if called on a regular crossword with a `direction` of
         * {@link Ipuz.ClueDirection.DOWN}, this would return
         * {@link Ipuz.ClueDirection.ACROSS}.
         *
         * If `wrap` is `true` then this will wrap around to the end when at the
         * first visible clue sets, otherwise it will return
         * {@link Ipuz.ClueDirection.NONE}.
         *
         * Note that any clue sets of type {@link Ipuz.ClueDirection.HIDDEN}
         * will be skipped by this function.
         * @param direction A direction
         * @param wrap Whether to wrap around
         * @returns The previous direction logically in `clues`, or {@link Ipuz.ClueDirection.NONE}
         */
        clue_set_prev_direction(direction: ClueDirection | null, wrap: boolean): ClueDirection;
        /**
         * [ RETHINK THIS FUNCTION. CANT WE GET IT FROM THE CELL?]
         * @param direction
         * @param coord
         */
        find_clue_by_coord(direction: ClueDirection | null, coord: CellCoord): Clue;
        /**
         * Searches for and returns the clue with `direction` and `label`.
         * @param direction The direction to search
         * @param label The label to look for
         * @returns The clue with `direction` and `label`, or `null`
         */
        find_clue_by_label(direction: ClueDirection | null, label: string): Clue | null;
        /**
         * Searches for and returns the clue with `direction` and `number`.
         *
         * This is different from the {@link Ipuz.ClueId} which uses the
         * index to refer to a clue. As an example the clue _2dn_ could be
         * have a clue id with an index of 0.
         * @param direction The direction to search
         * @param number The number to look for
         * @returns The clue with `direction` and `number`, or `null`
         */
        find_clue_by_number(direction: ClueDirection | null, number: number): Clue | null;
        /**
         * Calls `func` for each {@link Ipuz.Clue} in `clues`.
         * @param func The function to call for each clue
         */
        foreach_clue(func: CluesForeachClueFunc): void;
        /**
         * Returns the clue at `clue_id`, or `null`.
         * @param clue_id An id of a clue
         * @returns A clue at `clue_id`
         */
        get_clue_by_id(clue_id: ClueId): Clue | null;
        /**
         * Returns a string containing the solution of the puzzle for a given
         * clue. This string will have '?' characters embedded within it if
         * there are cells without solutions set yet.
         * @param clue_id An {@link Ipuz.ClueId} to get the clue string for
         * @returns The solution for the puzzle for `clue_id`. Returns `null` if `clue_id` points to an invalid clue
         */
        get_clue_string_by_id(clue_id: ClueId): string | null;
        /**
         * Returns an array of all clues in the direction of `direction`.
         * @param direction The direction of clues to search
         * @returns an array of all clues in the direction of `direction`
         */
        get_clues(direction: ClueDirection | null): Clue[];
        /**
         * Returns a string containing the guess in the puzzle for a given
         * clue. This string will have '?' characters embedded within it if
         * there are cells not completely filled out.
         * @param clue_id An {@link Ipuz.ClueId} to get the guesses string for
         * @returns The guesses for the puzzle for `clue_id`. Returns `null` if `clue_id` points to an invalid clue
         */
        get_guess_string_by_id(clue_id: ClueId): string | null;
        /**
         * Finds the {@link Ipuz.ClueId} of `clue` within `clues`.
         *
         * If `clue` doesn't exist in `clues`, then `false` is returned and
         * `clue_id`'s direction is set to {@link Ipuz.ClueDirection.NONE}.
         * @param clue The {@link Ipuz.Clue} to search for
         * @returns `true`, if `clue_id` was set to the id of `clue`
         */
        get_id_by_clue(clue: Clue | null): [boolean, ClueId];
        /**
         * Returns the number of clue sets associated with `clues`.
         * @returns The number of clue sets associated with `clues`
         */
        get_n_clue_sets(): number;
        /**
         * Returns the number of clues in `direction`.
         * @param direction The direction of clues to count
         * @returns The number of clues in `direction`
         */
        get_n_clues(direction: ClueDirection | null): number;
        /**
         * Removes `clue` from `clues`. The clue will also be unlinked from the
         * grid.
         * @param clue A clue to remove
         */
        remove_clue(clue: Clue): void;
        /**
         * Removes the clue set in the direction of `direction`. All the clues
         * associated with that clue set will be unreffed.
         * @param direction the direction of the clue set to remove
         */
        remove_clue_set(direction: ClueDirection | null): void;
        /**
         * Unlinks `clue` from the grid. That is to say, any of the cells that
         * `clue` pointed to will no longer refer to it.
         * @param clue A clue to remove
         */
        unlink_clue(clue: Clue): void;
        /**
         * Adds a new clue set to `clues`. This clue set will be in the
         * direction of `direction`, and will be empty. If `label` is set, then
         * it will set the label of the newly created clue set.
         *
         * The return value of this function is the direction of the newly
         * added clue set, and should be used to access the clue set going
         * forward. Most of the time, the returned direction will be identical
         * to `direction`. However, should you add multiple cluesets of the
         * same direction but different labels, then the returned direction
         * will be a new value starting at {@link Ipuz.ClueDirection.CUSTOM}.
         *
         * If a clue set already exists with an identical `direction` or label,
         * then a new clue set won't be created and
         * {@link Ipuz.ClueDirection.NONE} will be returned.
         * @param direction the direction of the newly added clue set
         * @param label an optional label for the newly added clue set
         * @virtual
         */
        vfunc_add_clue_set(direction: ClueDirection, label?: string | null): ClueDirection;
        /**
         * Removes all the clues and clue sets of `clues`.
         * @virtual
         */
        vfunc_clear_clue_sets(): void;
        /**
         * Returns `true` if `clue` has a user guess for every cell. If all the
         * user guesses are correct, then `correct` is set to `true` as well.
         * @param clue The clue to inspect
         * @virtual
         */
        vfunc_clue_guessed(clue: Clue): [boolean, boolean];
        /**
         * Returns the direction of the clueset at `index`.
         *
         * This can be used in conjunction with
         * {@link Ipuz.Clues.get_n_clue_sets} to iterate through all the
         * directions in `clues`. This is the only place in the API where an
         * index is used, as opposed to a direction.
         * @param index the index of the clueset to lookup.
         * @virtual
         */
        vfunc_clue_set_get_dir(index: number): ClueDirection;
        /**
         * Returns the label of the clueset at `direction`.
         *
         * This label can be used as a user visible discription the clue set.
         * @param direction the direction of the clue set
         * @virtual
         */
        vfunc_clue_set_get_label(direction: ClueDirection): string;
        /**
         * [ RETHINK THIS FUNCTION. CANT WE GET IT FROM THE CELL?]
         * @param direction
         * @param coord
         * @virtual
         */
        vfunc_find_clue_by_coord(direction: ClueDirection, coord: CellCoord): Clue;
        /**
         * Searches for and returns the clue with `direction` and `label`.
         * @param direction The direction to search
         * @param label The label to look for
         * @virtual
         */
        vfunc_find_clue_by_label(direction: ClueDirection, label: string): Clue | null;
        /**
         * Searches for and returns the clue with `direction` and `number`.
         *
         * This is different from the {@link Ipuz.ClueId} which uses the
         * index to refer to a clue. As an example the clue _2dn_ could be
         * have a clue id with an index of 0.
         * @param direction The direction to search
         * @param number The number to look for
         * @virtual
         */
        vfunc_find_clue_by_number(direction: ClueDirection, number: number): Clue | null;
        /**
         * Calls `func` for each {@link Ipuz.Clue} in `clues`.
         * @param func The function to call for each clue
         * @virtual
         */
        vfunc_foreach_clue(func: CluesForeachClueFunc): void;
        /**
         * Returns the clue at `clue_id`, or `null`.
         * @param clue_id An id of a clue
         * @virtual
         */
        vfunc_get_clue_by_id(clue_id: ClueId): Clue | null;
        /**
         * Returns a string containing the solution of the puzzle for a given
         * clue. This string will have '?' characters embedded within it if
         * there are cells without solutions set yet.
         * @param clue_id An {@link Ipuz.ClueId} to get the clue string for
         * @virtual
         */
        vfunc_get_clue_string_by_id(clue_id: ClueId): string | null;
        /**
         * Returns an array of all clues in the direction of `direction`.
         * @param direction The direction of clues to search
         * @virtual
         */
        vfunc_get_clues(direction: ClueDirection): Clue[];
        /**
         * Returns a string containing the guess in the puzzle for a given
         * clue. This string will have '?' characters embedded within it if
         * there are cells not completely filled out.
         * @param clue_id An {@link Ipuz.ClueId} to get the guesses string for
         * @virtual
         */
        vfunc_get_guess_string_by_id(clue_id: ClueId): string | null;
        /**
         * Finds the {@link Ipuz.ClueId} of `clue` within `clues`.
         *
         * If `clue` doesn't exist in `clues`, then `false` is returned and
         * `clue_id`'s direction is set to {@link Ipuz.ClueDirection.NONE}.
         * @param clue The {@link Ipuz.Clue} to search for
         * @virtual
         */
        vfunc_get_id_by_clue(clue: Clue | null): [boolean, ClueId];
        /**
         * Returns the number of clue sets associated with `clues`.
         * @virtual
         */
        vfunc_get_n_clue_sets(): number;
        /**
         * Returns the number of clues in `direction`.
         * @param direction The direction of clues to count
         * @virtual
         */
        vfunc_get_n_clues(direction: ClueDirection): number;
        /**
         * Removes `clue` from `clues`. The clue will also be unlinked from the
         * grid.
         * @param clue A clue to remove
         * @virtual
         */
        vfunc_remove_clue(clue: Clue): void;
        /**
         * Removes the clue set in the direction of `direction`. All the clues
         * associated with that clue set will be unreffed.
         * @param direction the direction of the clue set to remove
         * @virtual
         */
        vfunc_remove_clue_set(direction: ClueDirection): void;
        /**
         * Unlinks `clue` from the grid. That is to say, any of the cells that
         * `clue` pointed to will no longer refer to it.
         * @param clue A clue to remove
         * @virtual
         */
        vfunc_unlink_clue(clue: Clue): void;
        /**
         * Invokes the operation determined by `check_type` on `cell` and
         * `guesses` at `coord`.
         *
         * This function allows subclasses to specify puzzle-specific
         * behavior. For example, if `check_type` is `IPUZ_GRID_GUESSABLE`, then
         * it will return `true` if the cell can accept a users's guess (eg. is
         * not a block or null with crosswords, etc).
         *
         * This function is used by {@link Ipuz.Grid} to maintain consistency
         * of the puzzle in its operations. Subclasses should implement this
         * method in order to define their behavior. It is not expected that
         * most users will ever need to call this function.
         *
         * See {@link Ipuz.GridCheckType} for more information on the specific
         * operations.
         *
         * ::: note
         *     Some of the operation types can modify either guesses or cell.
         * @param cell A cell to check
         * @param coord The coordinate of `cell`
         * @param guesses The guesses to check
         * @param check_type The operation to perform at `coord`
         * @returns `true`, if the condition determined by %check_type is met
         */
        check_cell(cell: Cell, coord: CellCoord, guesses: Guesses, check_type: GridCheckType | null): boolean;
        /**
         * Invokes the operation determined by `check_type` on the stride guess
         * determined by `direction` and `index`.
         *
         * This function allows subclasses to specify puzzle-specific
         * behavior. Unlike {@link Ipuz.Grid.check_cell}, this function is
         * optional for puzzles as most puzzles don't use stride guesses. A
         * default handler is provided that just returns `false`.
         *
         * This function is used by {@link Ipuz.Grid} to maintain consistency
         * of the puzzle in its operations. Subclasses should implement this
         * method in order to define their behavior. It is not expected that
         * most users will ever need to call this function.
         *
         * See {@link Ipuz.GridCheckType} for more information on the specific
         * operations.
         *
         * ::: note
         *     Some of the operation types can modify either guesses or cell.
         * @param direction
         * @param index
         * @param guesses The guesses to check
         * @param check_type The operation to perform at `coord`
         * @returns `true`, if the condition determined by %check_type is met
         */
        check_stride(
            direction: ClueDirection | null,
            index: number,
            guesses: Guesses,
            check_type: GridCheckType | null,
        ): boolean;
        /**
         * Creates a fresh {@link Ipuz.Guesses}. It will be initialized to
         * the current state of the grid.
         *
         * The guessses can be used to solve the puzzle, and as such, its
         * format is puzzle-type dependent. See each puzzle's *Guesses*
         * section for more information on the format.
         *
         * Note that this method won't change the internal guesses of self. If
         * that is desired, you should pair this with
         * {@link Ipuz.Grid.set_guesses}. As an example:
         *
         * ```C
         * g_autoptr (IpuzGuesses) guesses;
         *
         * guesses = ipuz_grid_create_guesses (grid);
         * ipuz_grid_set_guesses (grid, guesses);
         * ```
         * @returns A new {@link Ipuz.Guesses} matching `self`
         */
        create_guesses(): Guesses;
        /**
         * Fixes the guesses associated with `self`. The result will be a
         * playable {@link Ipuz.Guesses} struct.
         *
         * ::: note
         *     This method will try to keep any guesses on cells intact. If a
         *     fresh playing grid is desired, then it's recommended to call
         *     {@link Ipuz.Grid.create_guesses}, and then attach it to `self`
         *     with {@link IpuzGrid.set_guesses}.
         */
        fix_guesses(): void;
        /**
         * Calls `func` for each {@link Ipuz.Cell} in `self`.
         * @param func The function to call for each cell
         */
        foreach_cell(func: GridForeachCellFunc): void;
        /**
         * Retrieves the cell at `coord`. If the coordinates are
         * outside the bounds of the grid then `null` will be returned.
         *
         * The coordinate system of the `self` is similar to that of a spreadsheet. The
         * origin is the upper left corner. Row's increase vertically downward, and
         * columns increase horizontally.
         * @param coord Coordinates for the cell.
         * @returns The cell at `coord`.
         */
        get_cell(coord: CellCoord): Cell | null;
        /**
         * Returns the {@link Ipuz.Guesses} associated with `self`.
         * @returns The {@link Ipuz.Guesses} associated with `self`
         */
        get_guesses(): Guesses;
        /**
         * Returns the number of rows in `self`.
         * @returns The height of `self`
         */
        get_height(): number;
        /**
         * Returns the number of columns in `self`.
         * @returns The width of `self`
         */
        get_width(): number;
        /**
         * Resizes `self` to the new size.
         *
         * If one of the dimensions is larger than before, the new cells will
         * be filled in with puzzle-appropriate default values.
         *
         * This function will not adjust its internal {@link Ipuz.Guesses}
         * object to match the new size. That can be done by a separate call
         * to {@link Ipuz.Grid.fix_guesses}.
         * @param new_width The new width
         * @param new_height The new height
         */
        resize(new_width: number, new_height: number): void;
        /**
         * Sets `guesses` for `self`. If there's a mismatch in the cell types
         * between `guesses` and `self` then `false` is returned. `guesses` will
         * be set regardless of the return value.
         *
         * Mismatches can be fixed by calling {@link Ipuz.Grid.fix_guesses}.
         * @param guesses The {@link Ipuz.Guesses} to set on self
         * @returns `true`, if guesses matches `self`
         */
        set_guesses(guesses?: Guesses | null): boolean;
        /**
         * Invokes the operation determined by `check_type` on `cell` and
         * `guesses` at `coord`.
         *
         * This function allows subclasses to specify puzzle-specific
         * behavior. For example, if `check_type` is `IPUZ_GRID_GUESSABLE`, then
         * it will return `true` if the cell can accept a users's guess (eg. is
         * not a block or null with crosswords, etc).
         *
         * This function is used by {@link Ipuz.Grid} to maintain consistency
         * of the puzzle in its operations. Subclasses should implement this
         * method in order to define their behavior. It is not expected that
         * most users will ever need to call this function.
         *
         * See {@link Ipuz.GridCheckType} for more information on the specific
         * operations.
         *
         * ::: note
         *     Some of the operation types can modify either guesses or cell.
         * @param cell A cell to check
         * @param coord The coordinate of `cell`
         * @param guesses The guesses to check
         * @param check_type The operation to perform at `coord`
         * @virtual
         */
        vfunc_check_cell(cell: Cell, coord: CellCoord, guesses: Guesses, check_type: GridCheckType): boolean;
        /**
         * Invokes the operation determined by `check_type` on the stride guess
         * determined by `direction` and `index`.
         *
         * This function allows subclasses to specify puzzle-specific
         * behavior. Unlike {@link Ipuz.Grid.check_cell}, this function is
         * optional for puzzles as most puzzles don't use stride guesses. A
         * default handler is provided that just returns `false`.
         *
         * This function is used by {@link Ipuz.Grid} to maintain consistency
         * of the puzzle in its operations. Subclasses should implement this
         * method in order to define their behavior. It is not expected that
         * most users will ever need to call this function.
         *
         * See {@link Ipuz.GridCheckType} for more information on the specific
         * operations.
         *
         * ::: note
         *     Some of the operation types can modify either guesses or cell.
         * @param direction
         * @param index
         * @param guesses The guesses to check
         * @param check_type The operation to perform at `coord`
         * @virtual
         */
        vfunc_check_stride(
            direction: ClueDirection,
            index: number,
            guesses: Guesses,
            check_type: GridCheckType,
        ): boolean;
    }

    namespace Barred {
        // Signal signatures
        interface SignalSignatures extends Crossword.SignalSignatures {
            'notify::clue-placement': (pspec: GObject.ParamSpec) => void;
            'notify::show-enumerations': (pspec: GObject.ParamSpec) => void;
            'notify::guesses': (pspec: GObject.ParamSpec) => void;
            'notify::height': (pspec: GObject.ParamSpec) => void;
            'notify::width': (pspec: GObject.ParamSpec) => void;
            'notify::annotation': (pspec: GObject.ParamSpec) => void;
            'notify::author': (pspec: GObject.ParamSpec) => void;
            'notify::block': (pspec: GObject.ParamSpec) => void;
            'notify::charset': (pspec: GObject.ParamSpec) => void;
            'notify::charset-str': (pspec: GObject.ParamSpec) => void;
            'notify::copyright': (pspec: GObject.ParamSpec) => void;
            'notify::date': (pspec: GObject.ParamSpec) => void;
            'notify::difficulty': (pspec: GObject.ParamSpec) => void;
            'notify::editor': (pspec: GObject.ParamSpec) => void;
            'notify::empty': (pspec: GObject.ParamSpec) => void;
            'notify::explanation': (pspec: GObject.ParamSpec) => void;
            'notify::intro': (pspec: GObject.ParamSpec) => void;
            'notify::license': (pspec: GObject.ParamSpec) => void;
            'notify::locale': (pspec: GObject.ParamSpec) => void;
            'notify::notes': (pspec: GObject.ParamSpec) => void;
            'notify::origin': (pspec: GObject.ParamSpec) => void;
            'notify::publication': (pspec: GObject.ParamSpec) => void;
            'notify::publisher': (pspec: GObject.ParamSpec) => void;
            'notify::puzzle-kind': (pspec: GObject.ParamSpec) => void;
            'notify::styles': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::uniqueid': (pspec: GObject.ParamSpec) => void;
            'notify::url': (pspec: GObject.ParamSpec) => void;
            'notify::version': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Crossword.ConstructorProps, Clues.ConstructorProps {}
    }

    /**
     * A crossword puzzle with lines between words instead of
     * blocks. Their clues tend to be cryptic in nature and often exhibit
     * symmetry.
     *
     * <picture>
     * <source srcset="barred-dark.png" media="(prefers-color-scheme: dark)" />
     * <img src="barred.png" alt="barred" />
     * </picture>
     * _Example of a barred puzzle_
     *
     * Barred puzzles inherit from {@link Ipuz.Crossword} and can use all
     * of the methods associated with that class. In particular, the
     * `_fix()` methods will take bars under consideration when working
     * with the grid.
     *
     * # Representation
     *
     * Barred puzzles are not explicitly defined in the ipuz spec. As a
     * result, libipuz has an additional
     * {@link Ipuz.Puzzle.puzzle_kind} field available as a libipuz
     * extension.
     *
     * When saving, libipuz adds the `https://libipuz.org/barred#1` tag to
     * the kind field, as well as the `http://ipuz.org/crossword#1`
     * tag. This will keep compatibility with other implementations, but
     * allow libipuz to identify these puzzles. In practice, barred
     * puzzles act like crosswords when being solved and can be treated as
     * such. However the additional _kind_ tag lets libipuz load those
     * puzzles into a {@link Ipuz.Barred} object which provides additional
     * editing capabilities.
     *
     * ## Grid
     *
     * Barred puzzles use an {@link Ipuz.Style} with
     * {@link Ipuz.StyleSides} set to indicate lines in the puzzle. As a
     * result, many cells in the puzzle will have a style attached to
     * them. Typically, only {@link Ipuz.CellType.NORMAL} cells are found
     * within a barred crossword. Blocks and null cells are possible, but
     * non-traditional.
     *
     * A barred puzzle will create three named styles that can be used to
     * modify the grid. These styles are empty other than a side set. They
     * can be looked up using {@link Ipuz.Puzzle.get_style} with the
     * following constants:
     *
     *  * {@link Ipuz.BARRED_STYLE_L}
     *  * {@link Ipuz.BARRED_STYLE_T}
     *  * {@link Ipuz.BARRED_STYLE_TL}
     *
     * These styles set a side on the left, top, and top-left of a cell
     * respectively. When building the grid's shape, these are used to
     * fill out the overall shape of the grid. There's no need for right,
     * bottom, and bottom-right borders as that effect can be had by
     * setting the above styles on a neighbooring cell. See
     * {@link Ipuz.Barred.set_cell_bars} for more information.
     *
     * It's possible for users of the cell to reuse these styles — or
     * provide their own. For example, you could set a style with a border
     * on the top and with the answer circled. The `_fix()` functions will
     * recognize and preserve that.
     *
     * ## Clues
     *
     * Clues with {@link Ipuz.Barred} objects are the same as with
     * {@link Ipuz.Crossword}, and can be accessed through the
     * {@link Ipuz.Clues} interface.
     *
     * ## Guesses
     *
     * Guesses with {@link Ipuz.Barred} objects are identical to
     * {@link Ipuz.Crossword}.
     *
     * # Editing
     *
     * Editing a barred puzzle can be done with a combination of
     * {@link Ipuz.Barred.set_cell_bars} and the {@link Ipuz.Crossword}
     * `_fix()` functions. One thing to call out is that
     * {@link Ipuz.Crossword.fix_styles} will convert all styles that
     * only contain bars to the internal styles.
     *
     * ::: note
     *     It's also worth pointing out that filling a barred grid with
     *     letters is even harder then filling a standard
     *     crossword. Solving this is outside the scope of libipuz.
     * @gir-type Class
     */
    class Barred extends Crossword implements Clues {
        static $gtype: GObject.GType<Barred>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Barred.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Barred.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Barred;

        // Signals

        /** @signal */
        connect<K extends keyof Barred.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Barred.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Barred.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Barred.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Barred.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Barred.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Calculate the sides of a cell after toggling one of its sides while
         * taking symmetry into account. For most of the cells on the grid
         * this just changes the `side`. However, the center line of symmetry
         * and the center square need special handling as toggling those cells
         * will modify multiple sides.
         * @param coord The cell to be toggled
         * @param side The side to be toggled. This must be a single value
         * @param symmetry The symmetry to respect
         * @returns The new sides of the cell at `coord`
         */
        calculate_side_toggle(coord: CellCoord, side: StyleSides | null, symmetry: Symmetry | null): StyleSides;
        /**
         * Returns the orientation of any bars set around the cell at
         * `coord`. This function will inspect the style at `coord` — as well as
         * any neighboring cells — in order to calculate this value.
         * @param coord Coordinate of the cell to inspect
         * @returns The orientation of any bars set around the cell at `coord`
         */
        get_cell_bars(coord: CellCoord): StyleSides;
        /**
         * Sets the cell at `coord` to have bars as determined by `sides`. Note
         * that if `sides` contains {@link Ipuz.StyleSides.RIGHT}, then this
         * will be implemented by setting the left side of the cell to the
         * right of `coord`. A similar pattern occurs when `sides` contains
         * {@link Ipuz.StyleSides.BOTTOM}.
         *
         * Returns `true` if the the cell at `coord` has new sides.
         * @param coord Coordinate of the cell to change
         * @param sides The location of the bars to be set. May contain multiple values ORed together.
         * @returns `true`, if the cell at `coord` has new sides
         */
        set_cell_bars(coord: CellCoord, sides: StyleSides | null): boolean;
        /**
         * The {@link Ipuz.Guesses} associated with the grid.
         * @category Inherited from Ipuz.Grid
         */
        get guesses(): Guesses;
        set guesses(val: Guesses);
        /**
         * Number of rows in the grid.
         * @category Inherited from Ipuz.Grid
         */
        get height(): number;
        set height(val: number);
        /**
         * Number of columns in the grid.
         * @category Inherited from Ipuz.Grid
         */
        get width(): number;
        set width(val: number);
        /**
         * Adds a new clue set to `clues`. This clue set will be in the
         * direction of `direction`, and will be empty. If `label` is set, then
         * it will set the label of the newly created clue set.
         *
         * The return value of this function is the direction of the newly
         * added clue set, and should be used to access the clue set going
         * forward. Most of the time, the returned direction will be identical
         * to `direction`. However, should you add multiple cluesets of the
         * same direction but different labels, then the returned direction
         * will be a new value starting at {@link Ipuz.ClueDirection.CUSTOM}.
         *
         * If a clue set already exists with an identical `direction` or label,
         * then a new clue set won't be created and
         * {@link Ipuz.ClueDirection.NONE} will be returned.
         * @param direction the direction of the newly added clue set
         * @param label an optional label for the newly added clue set
         * @returns the direction of the newly created clue set, or {@link Ipuz.ClueDirection.NONE}
         */
        add_clue_set(direction: ClueDirection | null, label?: string | null): ClueDirection;
        /**
         * Removes all the clues and clue sets of `clues`.
         */
        clear_clue_sets(): void;
        /**
         * Returns `true` if `clue` has a user guess for every cell. If all the
         * user guesses are correct, then `correct` is set to `true` as well.
         * @param clue The clue to inspect
         * @returns `true`, if the clue has guesses for every cell
         */
        clue_guessed(clue: Clue): [boolean, boolean];
        /**
         * Returns the direction of the clueset at `index`.
         *
         * This can be used in conjunction with
         * {@link Ipuz.Clues.get_n_clue_sets} to iterate through all the
         * directions in `clues`. This is the only place in the API where an
         * index is used, as opposed to a direction.
         * @param index the index of the clueset to lookup.
         * @returns The direction of the clueset indexed by `index`
         */
        clue_set_get_dir(index: number): ClueDirection;
        /**
         * Returns the label of the clueset at `direction`.
         *
         * This label can be used as a user visible discription the clue set.
         * @param direction the direction of the clue set
         * @returns The label of the clueset at `direction`
         */
        clue_set_get_label(direction: ClueDirection | null): string;
        /**
         * Returns the next clue set visible in `clues` after `direction`.
         *
         * For example, if called on a regular crossword with a `direction` of
         * {@link Ipuz.ClueDirection.ACROSS}, this would return
         * {@link Ipuz.ClueDirection.DOWN}.
         *
         * If `wrap` is `true` then this will wrap around to the beginning when
         * at the last visible clue sets, otherwise it will return
         * {@link Ipuz.ClueDirection.NONE}.
         *
         * Note that any clue sets of type {@link Ipuz.ClueDirection.HIDDEN}
         * will be skipped by this function.
         * @param direction A direction
         * @param wrap Whether to wrap around
         * @returns The next direction logically in `clues`, or {@link Ipuz.ClueDirection.NONE}
         */
        clue_set_next_direction(direction: ClueDirection | null, wrap: boolean): ClueDirection;
        /**
         * Returns the previous clue set visible in `clues` after `direction`.
         *
         * For example, if called on a regular crossword with a `direction` of
         * {@link Ipuz.ClueDirection.DOWN}, this would return
         * {@link Ipuz.ClueDirection.ACROSS}.
         *
         * If `wrap` is `true` then this will wrap around to the end when at the
         * first visible clue sets, otherwise it will return
         * {@link Ipuz.ClueDirection.NONE}.
         *
         * Note that any clue sets of type {@link Ipuz.ClueDirection.HIDDEN}
         * will be skipped by this function.
         * @param direction A direction
         * @param wrap Whether to wrap around
         * @returns The previous direction logically in `clues`, or {@link Ipuz.ClueDirection.NONE}
         */
        clue_set_prev_direction(direction: ClueDirection | null, wrap: boolean): ClueDirection;
        /**
         * [ RETHINK THIS FUNCTION. CANT WE GET IT FROM THE CELL?]
         * @param direction
         * @param coord
         */
        find_clue_by_coord(direction: ClueDirection | null, coord: CellCoord): Clue;
        /**
         * Searches for and returns the clue with `direction` and `label`.
         * @param direction The direction to search
         * @param label The label to look for
         * @returns The clue with `direction` and `label`, or `null`
         */
        find_clue_by_label(direction: ClueDirection | null, label: string): Clue | null;
        /**
         * Searches for and returns the clue with `direction` and `number`.
         *
         * This is different from the {@link Ipuz.ClueId} which uses the
         * index to refer to a clue. As an example the clue _2dn_ could be
         * have a clue id with an index of 0.
         * @param direction The direction to search
         * @param number The number to look for
         * @returns The clue with `direction` and `number`, or `null`
         */
        find_clue_by_number(direction: ClueDirection | null, number: number): Clue | null;
        /**
         * Calls `func` for each {@link Ipuz.Clue} in `clues`.
         * @param func The function to call for each clue
         */
        foreach_clue(func: CluesForeachClueFunc): void;
        /**
         * Returns the clue at `clue_id`, or `null`.
         * @param clue_id An id of a clue
         * @returns A clue at `clue_id`
         */
        get_clue_by_id(clue_id: ClueId): Clue | null;
        /**
         * Returns a string containing the solution of the puzzle for a given
         * clue. This string will have '?' characters embedded within it if
         * there are cells without solutions set yet.
         * @param clue_id An {@link Ipuz.ClueId} to get the clue string for
         * @returns The solution for the puzzle for `clue_id`. Returns `null` if `clue_id` points to an invalid clue
         */
        get_clue_string_by_id(clue_id: ClueId): string | null;
        /**
         * Returns an array of all clues in the direction of `direction`.
         * @param direction The direction of clues to search
         * @returns an array of all clues in the direction of `direction`
         */
        get_clues(direction: ClueDirection | null): Clue[];
        /**
         * Returns a string containing the guess in the puzzle for a given
         * clue. This string will have '?' characters embedded within it if
         * there are cells not completely filled out.
         * @param clue_id An {@link Ipuz.ClueId} to get the guesses string for
         * @returns The guesses for the puzzle for `clue_id`. Returns `null` if `clue_id` points to an invalid clue
         */
        get_guess_string_by_id(clue_id: ClueId): string | null;
        /**
         * Finds the {@link Ipuz.ClueId} of `clue` within `clues`.
         *
         * If `clue` doesn't exist in `clues`, then `false` is returned and
         * `clue_id`'s direction is set to {@link Ipuz.ClueDirection.NONE}.
         * @param clue The {@link Ipuz.Clue} to search for
         * @returns `true`, if `clue_id` was set to the id of `clue`
         */
        get_id_by_clue(clue: Clue | null): [boolean, ClueId];
        /**
         * Returns the number of clue sets associated with `clues`.
         * @returns The number of clue sets associated with `clues`
         */
        get_n_clue_sets(): number;
        /**
         * Returns the number of clues in `direction`.
         * @param direction The direction of clues to count
         * @returns The number of clues in `direction`
         */
        get_n_clues(direction: ClueDirection | null): number;
        /**
         * Removes `clue` from `clues`. The clue will also be unlinked from the
         * grid.
         * @param clue A clue to remove
         */
        remove_clue(clue: Clue): void;
        /**
         * Removes the clue set in the direction of `direction`. All the clues
         * associated with that clue set will be unreffed.
         * @param direction the direction of the clue set to remove
         */
        remove_clue_set(direction: ClueDirection | null): void;
        /**
         * Unlinks `clue` from the grid. That is to say, any of the cells that
         * `clue` pointed to will no longer refer to it.
         * @param clue A clue to remove
         */
        unlink_clue(clue: Clue): void;
        /**
         * Adds a new clue set to `clues`. This clue set will be in the
         * direction of `direction`, and will be empty. If `label` is set, then
         * it will set the label of the newly created clue set.
         *
         * The return value of this function is the direction of the newly
         * added clue set, and should be used to access the clue set going
         * forward. Most of the time, the returned direction will be identical
         * to `direction`. However, should you add multiple cluesets of the
         * same direction but different labels, then the returned direction
         * will be a new value starting at {@link Ipuz.ClueDirection.CUSTOM}.
         *
         * If a clue set already exists with an identical `direction` or label,
         * then a new clue set won't be created and
         * {@link Ipuz.ClueDirection.NONE} will be returned.
         * @param direction the direction of the newly added clue set
         * @param label an optional label for the newly added clue set
         * @virtual
         */
        vfunc_add_clue_set(direction: ClueDirection, label?: string | null): ClueDirection;
        /**
         * Removes all the clues and clue sets of `clues`.
         * @virtual
         */
        vfunc_clear_clue_sets(): void;
        /**
         * Returns `true` if `clue` has a user guess for every cell. If all the
         * user guesses are correct, then `correct` is set to `true` as well.
         * @param clue The clue to inspect
         * @virtual
         */
        vfunc_clue_guessed(clue: Clue): [boolean, boolean];
        /**
         * Returns the direction of the clueset at `index`.
         *
         * This can be used in conjunction with
         * {@link Ipuz.Clues.get_n_clue_sets} to iterate through all the
         * directions in `clues`. This is the only place in the API where an
         * index is used, as opposed to a direction.
         * @param index the index of the clueset to lookup.
         * @virtual
         */
        vfunc_clue_set_get_dir(index: number): ClueDirection;
        /**
         * Returns the label of the clueset at `direction`.
         *
         * This label can be used as a user visible discription the clue set.
         * @param direction the direction of the clue set
         * @virtual
         */
        vfunc_clue_set_get_label(direction: ClueDirection): string;
        /**
         * [ RETHINK THIS FUNCTION. CANT WE GET IT FROM THE CELL?]
         * @param direction
         * @param coord
         * @virtual
         */
        vfunc_find_clue_by_coord(direction: ClueDirection, coord: CellCoord): Clue;
        /**
         * Searches for and returns the clue with `direction` and `label`.
         * @param direction The direction to search
         * @param label The label to look for
         * @virtual
         */
        vfunc_find_clue_by_label(direction: ClueDirection, label: string): Clue | null;
        /**
         * Searches for and returns the clue with `direction` and `number`.
         *
         * This is different from the {@link Ipuz.ClueId} which uses the
         * index to refer to a clue. As an example the clue _2dn_ could be
         * have a clue id with an index of 0.
         * @param direction The direction to search
         * @param number The number to look for
         * @virtual
         */
        vfunc_find_clue_by_number(direction: ClueDirection, number: number): Clue | null;
        /**
         * Calls `func` for each {@link Ipuz.Clue} in `clues`.
         * @param func The function to call for each clue
         * @virtual
         */
        vfunc_foreach_clue(func: CluesForeachClueFunc): void;
        /**
         * Returns the clue at `clue_id`, or `null`.
         * @param clue_id An id of a clue
         * @virtual
         */
        vfunc_get_clue_by_id(clue_id: ClueId): Clue | null;
        /**
         * Returns a string containing the solution of the puzzle for a given
         * clue. This string will have '?' characters embedded within it if
         * there are cells without solutions set yet.
         * @param clue_id An {@link Ipuz.ClueId} to get the clue string for
         * @virtual
         */
        vfunc_get_clue_string_by_id(clue_id: ClueId): string | null;
        /**
         * Returns an array of all clues in the direction of `direction`.
         * @param direction The direction of clues to search
         * @virtual
         */
        vfunc_get_clues(direction: ClueDirection): Clue[];
        /**
         * Returns a string containing the guess in the puzzle for a given
         * clue. This string will have '?' characters embedded within it if
         * there are cells not completely filled out.
         * @param clue_id An {@link Ipuz.ClueId} to get the guesses string for
         * @virtual
         */
        vfunc_get_guess_string_by_id(clue_id: ClueId): string | null;
        /**
         * Finds the {@link Ipuz.ClueId} of `clue` within `clues`.
         *
         * If `clue` doesn't exist in `clues`, then `false` is returned and
         * `clue_id`'s direction is set to {@link Ipuz.ClueDirection.NONE}.
         * @param clue The {@link Ipuz.Clue} to search for
         * @virtual
         */
        vfunc_get_id_by_clue(clue: Clue | null): [boolean, ClueId];
        /**
         * Returns the number of clue sets associated with `clues`.
         * @virtual
         */
        vfunc_get_n_clue_sets(): number;
        /**
         * Returns the number of clues in `direction`.
         * @param direction The direction of clues to count
         * @virtual
         */
        vfunc_get_n_clues(direction: ClueDirection): number;
        /**
         * Removes `clue` from `clues`. The clue will also be unlinked from the
         * grid.
         * @param clue A clue to remove
         * @virtual
         */
        vfunc_remove_clue(clue: Clue): void;
        /**
         * Removes the clue set in the direction of `direction`. All the clues
         * associated with that clue set will be unreffed.
         * @param direction the direction of the clue set to remove
         * @virtual
         */
        vfunc_remove_clue_set(direction: ClueDirection): void;
        /**
         * Unlinks `clue` from the grid. That is to say, any of the cells that
         * `clue` pointed to will no longer refer to it.
         * @param clue A clue to remove
         * @virtual
         */
        vfunc_unlink_clue(clue: Clue): void;
        /**
         * Invokes the operation determined by `check_type` on `cell` and
         * `guesses` at `coord`.
         *
         * This function allows subclasses to specify puzzle-specific
         * behavior. For example, if `check_type` is `IPUZ_GRID_GUESSABLE`, then
         * it will return `true` if the cell can accept a users's guess (eg. is
         * not a block or null with crosswords, etc).
         *
         * This function is used by {@link Ipuz.Grid} to maintain consistency
         * of the puzzle in its operations. Subclasses should implement this
         * method in order to define their behavior. It is not expected that
         * most users will ever need to call this function.
         *
         * See {@link Ipuz.GridCheckType} for more information on the specific
         * operations.
         *
         * ::: note
         *     Some of the operation types can modify either guesses or cell.
         * @param cell A cell to check
         * @param coord The coordinate of `cell`
         * @param guesses The guesses to check
         * @param check_type The operation to perform at `coord`
         * @returns `true`, if the condition determined by %check_type is met
         */
        check_cell(cell: Cell, coord: CellCoord, guesses: Guesses, check_type: GridCheckType | null): boolean;
        /**
         * Invokes the operation determined by `check_type` on the stride guess
         * determined by `direction` and `index`.
         *
         * This function allows subclasses to specify puzzle-specific
         * behavior. Unlike {@link Ipuz.Grid.check_cell}, this function is
         * optional for puzzles as most puzzles don't use stride guesses. A
         * default handler is provided that just returns `false`.
         *
         * This function is used by {@link Ipuz.Grid} to maintain consistency
         * of the puzzle in its operations. Subclasses should implement this
         * method in order to define their behavior. It is not expected that
         * most users will ever need to call this function.
         *
         * See {@link Ipuz.GridCheckType} for more information on the specific
         * operations.
         *
         * ::: note
         *     Some of the operation types can modify either guesses or cell.
         * @param direction
         * @param index
         * @param guesses The guesses to check
         * @param check_type The operation to perform at `coord`
         * @returns `true`, if the condition determined by %check_type is met
         */
        check_stride(
            direction: ClueDirection | null,
            index: number,
            guesses: Guesses,
            check_type: GridCheckType | null,
        ): boolean;
        /**
         * Creates a fresh {@link Ipuz.Guesses}. It will be initialized to
         * the current state of the grid.
         *
         * The guessses can be used to solve the puzzle, and as such, its
         * format is puzzle-type dependent. See each puzzle's *Guesses*
         * section for more information on the format.
         *
         * Note that this method won't change the internal guesses of self. If
         * that is desired, you should pair this with
         * {@link Ipuz.Grid.set_guesses}. As an example:
         *
         * ```C
         * g_autoptr (IpuzGuesses) guesses;
         *
         * guesses = ipuz_grid_create_guesses (grid);
         * ipuz_grid_set_guesses (grid, guesses);
         * ```
         * @returns A new {@link Ipuz.Guesses} matching `self`
         */
        create_guesses(): Guesses;
        /**
         * Fixes the guesses associated with `self`. The result will be a
         * playable {@link Ipuz.Guesses} struct.
         *
         * ::: note
         *     This method will try to keep any guesses on cells intact. If a
         *     fresh playing grid is desired, then it's recommended to call
         *     {@link Ipuz.Grid.create_guesses}, and then attach it to `self`
         *     with {@link IpuzGrid.set_guesses}.
         */
        fix_guesses(): void;
        /**
         * Calls `func` for each {@link Ipuz.Cell} in `self`.
         * @param func The function to call for each cell
         */
        foreach_cell(func: GridForeachCellFunc): void;
        /**
         * Retrieves the cell at `coord`. If the coordinates are
         * outside the bounds of the grid then `null` will be returned.
         *
         * The coordinate system of the `self` is similar to that of a spreadsheet. The
         * origin is the upper left corner. Row's increase vertically downward, and
         * columns increase horizontally.
         * @param coord Coordinates for the cell.
         * @returns The cell at `coord`.
         */
        get_cell(coord: CellCoord): Cell | null;
        /**
         * Returns the {@link Ipuz.Guesses} associated with `self`.
         * @returns The {@link Ipuz.Guesses} associated with `self`
         */
        get_guesses(): Guesses;
        /**
         * Returns the number of rows in `self`.
         * @returns The height of `self`
         */
        get_height(): number;
        /**
         * Returns the number of columns in `self`.
         * @returns The width of `self`
         */
        get_width(): number;
        /**
         * Resizes `self` to the new size.
         *
         * If one of the dimensions is larger than before, the new cells will
         * be filled in with puzzle-appropriate default values.
         *
         * This function will not adjust its internal {@link Ipuz.Guesses}
         * object to match the new size. That can be done by a separate call
         * to {@link Ipuz.Grid.fix_guesses}.
         * @param new_width The new width
         * @param new_height The new height
         */
        resize(new_width: number, new_height: number): void;
        /**
         * Sets `guesses` for `self`. If there's a mismatch in the cell types
         * between `guesses` and `self` then `false` is returned. `guesses` will
         * be set regardless of the return value.
         *
         * Mismatches can be fixed by calling {@link Ipuz.Grid.fix_guesses}.
         * @param guesses The {@link Ipuz.Guesses} to set on self
         * @returns `true`, if guesses matches `self`
         */
        set_guesses(guesses?: Guesses | null): boolean;
        /**
         * Invokes the operation determined by `check_type` on `cell` and
         * `guesses` at `coord`.
         *
         * This function allows subclasses to specify puzzle-specific
         * behavior. For example, if `check_type` is `IPUZ_GRID_GUESSABLE`, then
         * it will return `true` if the cell can accept a users's guess (eg. is
         * not a block or null with crosswords, etc).
         *
         * This function is used by {@link Ipuz.Grid} to maintain consistency
         * of the puzzle in its operations. Subclasses should implement this
         * method in order to define their behavior. It is not expected that
         * most users will ever need to call this function.
         *
         * See {@link Ipuz.GridCheckType} for more information on the specific
         * operations.
         *
         * ::: note
         *     Some of the operation types can modify either guesses or cell.
         * @param cell A cell to check
         * @param coord The coordinate of `cell`
         * @param guesses The guesses to check
         * @param check_type The operation to perform at `coord`
         * @virtual
         */
        vfunc_check_cell(cell: Cell, coord: CellCoord, guesses: Guesses, check_type: GridCheckType): boolean;
        /**
         * Invokes the operation determined by `check_type` on the stride guess
         * determined by `direction` and `index`.
         *
         * This function allows subclasses to specify puzzle-specific
         * behavior. Unlike {@link Ipuz.Grid.check_cell}, this function is
         * optional for puzzles as most puzzles don't use stride guesses. A
         * default handler is provided that just returns `false`.
         *
         * This function is used by {@link Ipuz.Grid} to maintain consistency
         * of the puzzle in its operations. Subclasses should implement this
         * method in order to define their behavior. It is not expected that
         * most users will ever need to call this function.
         *
         * See {@link Ipuz.GridCheckType} for more information on the specific
         * operations.
         *
         * ::: note
         *     Some of the operation types can modify either guesses or cell.
         * @param direction
         * @param index
         * @param guesses The guesses to check
         * @param check_type The operation to perform at `coord`
         * @virtual
         */
        vfunc_check_stride(
            direction: ClueDirection,
            index: number,
            guesses: Guesses,
            check_type: GridCheckType,
        ): boolean;
    }

    namespace Crossword {
        // Signal signatures
        interface SignalSignatures extends Grid.SignalSignatures {
            'notify::clue-placement': (pspec: GObject.ParamSpec) => void;
            'notify::show-enumerations': (pspec: GObject.ParamSpec) => void;
            'notify::guesses': (pspec: GObject.ParamSpec) => void;
            'notify::height': (pspec: GObject.ParamSpec) => void;
            'notify::width': (pspec: GObject.ParamSpec) => void;
            'notify::annotation': (pspec: GObject.ParamSpec) => void;
            'notify::author': (pspec: GObject.ParamSpec) => void;
            'notify::block': (pspec: GObject.ParamSpec) => void;
            'notify::charset': (pspec: GObject.ParamSpec) => void;
            'notify::charset-str': (pspec: GObject.ParamSpec) => void;
            'notify::copyright': (pspec: GObject.ParamSpec) => void;
            'notify::date': (pspec: GObject.ParamSpec) => void;
            'notify::difficulty': (pspec: GObject.ParamSpec) => void;
            'notify::editor': (pspec: GObject.ParamSpec) => void;
            'notify::empty': (pspec: GObject.ParamSpec) => void;
            'notify::explanation': (pspec: GObject.ParamSpec) => void;
            'notify::intro': (pspec: GObject.ParamSpec) => void;
            'notify::license': (pspec: GObject.ParamSpec) => void;
            'notify::locale': (pspec: GObject.ParamSpec) => void;
            'notify::notes': (pspec: GObject.ParamSpec) => void;
            'notify::origin': (pspec: GObject.ParamSpec) => void;
            'notify::publication': (pspec: GObject.ParamSpec) => void;
            'notify::publisher': (pspec: GObject.ParamSpec) => void;
            'notify::puzzle-kind': (pspec: GObject.ParamSpec) => void;
            'notify::styles': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::uniqueid': (pspec: GObject.ParamSpec) => void;
            'notify::url': (pspec: GObject.ParamSpec) => void;
            'notify::version': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Grid.ConstructorProps, Clues.ConstructorProps {
            clue_placement: CluePlacement;
            cluePlacement: CluePlacement;
            show_enumerations: boolean;
            showEnumerations: boolean;
        }
    }

    /**
     * Crosswords are a word puzzle consisting of a grid of open cells and
     * blocks into which answers are written. It has clues in both the
     * *Across* and *Down* directions to lead the solver to the
     * answer. Crosswords are frequently symmetric, and use numbers to
     * identify clues.
     *
     * The {@link Ipuz.Crossword} class is intended to model **Standard
     * Crosswords**. These are also sometimes known as **American
     * Crosswords** or **Traditional Crosswords**.
     *
     * <picture>
     * <source srcset="crossword-dark.png" media="(prefers-color-scheme: dark)" />
     * <img src="crossword.png" alt="crossword" />
     * </picture>
     * _Example of a crossword puzzle_
     *
     * As a matter of convention, standard crosswords tend to have shorter
     * clues and denser grids. The example above is a good representative
     * example of what a dense grid could look like. It also features
     * cells with {@link Ipuz.Style}s to set circles around some of the
     * letters.
     *
     * # Representation
     *
     * ## Grid
     *
     * Crosswords are built with a grid of {@link Ipuz.Cell}s. These can
     * be accessed through the parent class of {@link IpuzGrid}. The
     * `cell_type` of the cell determines how the cell is interpreted:
     *
     * * <img style="vertical-align:middle; display: inline" src="cell-normal.png"/> {@link Ipuz.CellType.NORMAL} — A _normal_ light cell. This contains a solution for the player to figure out and fill in.
     * * <img style="vertical-align:middle; display: inline" src="cell-block.png"/>  {@link Ipuz.CellType.BLOCK} — A _block_. This will separate clues and contains no letters.
     * * <img style="vertical-align:middle; display: inline" src="cell-null.png"/>   {@link Ipuz.CellType.NULL} — An _null_ cell. Similar to blocks, it also separates clues and contains no letters. However, it is omitted during rendering
     *
     * ::: note
     *     A null cell can be used to make a shaped puzzle. This is less
     *     common than regular crosswords. But as an interesting sidenote,
     *     that the very [first
     *     crossword](https://gitlab.gnome.org/jrb/libipuz/-/blob/master/libipuz/tests/first-crossword.ipuz?ref_type=heads)
     *     was shaped and uses nulls to render correctly.
     *
     * ## Clues
     *
     * Clues can be accessed through the {@link Ipuz.Clues} interface. In
     * general, {@link Ipuz.Enumeration}s are not used with these
     * clues. As a result, {@link Ipuz.Crossword.show_enumerations} is
     * `false` by default.
     *
     * While not required, it's generally a good idea to store the
     * coordinates associated with a clue. If it doesn't exist, they can
     * be inferred using {@link Ipuz.Crossword.fix_clues}.
     *
     * ## Guesses
     *
     * When used with an {@link Ipuz.Guesses} object, guesses are tested
     * against the solution of the cell to indicate a block was guessed
     * correctly. Block and null cells are mirrored in the guesses but are
     * generally ignored.
     *
     * ## Variants
     *
     * The {@link Ipuz.Crossword} class was written to model standard
     * crosswords and its `_fix()` functions enforce those
     * conventions. However, it's possible to use this class to represent
     * variants of the standard crossword. Common ones (such as
     * {@link Ipuz.Arrowword} and {@link Ipuz.Barred}) have dedicated
     * subclasses for them. Others can be done by manually modifying the
     * puzzle.
     *
     * As some examples:
     *
     *  * **Cross figures:** Use strings of numbers instead of letters
     *  * **Rebus crosswords:**  multi-character words in the solution field of cells
     *
     * # Editing
     *
     * The {@link Ipuz.Crossword} class has five different fix functions
     * to help maintain conventions.
     *
     * * {@link Ipuz.Crossword.fix_symmetry}: Makes the grid symmetric with respect to `cell_type`.
     * * {@link Ipuz.Crossword.fix_numbering}: Updates the numbering of cells to match clue numbers
     * * {@link Ipuz.Crossword.fix_clues}: Makes sure a clue exists for each number
     * * {@link Ipuz.Crossword.fix_enumerations}: Makes sure an enumeration for each clue exists
     * * {@link Ipuz.Crossword.fix_styles}: Removes unused styles
     *
     * In addition, there is a {@link Ipuz.Crossword.fix_all} method that
     * will call these all sequentially. It is not available to language
     * bindings.
     * @gir-type Class
     */
    class Crossword extends Grid implements Clues {
        static $gtype: GObject.GType<Crossword>;

        // Properties

        /**
         * An indication of how to display the clues relative to the grid.
         */
        get clue_placement(): CluePlacement;
        set clue_placement(val: CluePlacement);
        /**
         * An indication of how to display the clues relative to the grid.
         */
        get cluePlacement(): CluePlacement;
        set cluePlacement(val: CluePlacement);
        /**
         * Whether the puzzle should be displayed with enumerations.
         */
        get show_enumerations(): boolean;
        set show_enumerations(val: boolean);
        /**
         * Whether the puzzle should be displayed with enumerations.
         */
        get showEnumerations(): boolean;
        set showEnumerations(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Crossword.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Crossword.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Crossword;

        // Signals

        /** @signal */
        connect<K extends keyof Crossword.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Crossword.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Crossword.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Crossword.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Crossword.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Crossword.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Checks the cell at `dest_coord` to see if it's the symmetric
         * opposite of the cell at `src_coord`. For normal crosswords, this
         * just checks that the `cell_type` is the same, and symmetry is
         * largely ignored. However, for barred crosswords this implementation
         * is quite complex as it needs to rotate and adjust the bars.
         * @param src_coord The source coord to mirror
         * @param dest_coord The dest coord to mirrored
         * @param symmetry The symmetry to be observed
         * @param symmetry_offset The symmetry offset to be observed
         * @virtual
         */
        vfunc_check_mirror(
            src_coord: CellCoord,
            dest_coord: CellCoord,
            symmetry: Symmetry,
            symmetry_offset: SymmetryOffset,
        ): boolean;
        /**
         * Returns `true` if the down clue crossing `coord` can be continued
         * down.
         *
         * This can be used to navigate a crossword. Sub-classes can provide
         * their own implementation to help indicate the extents of clues.
         * @param coord A coord to test
         * @virtual
         */
        vfunc_clue_continues_down(coord: CellCoord): boolean;
        /**
         * Returns `true` if the down clue crossing `coord` can be continued left.
         *
         * This can be used to navigate a crossword. Sub-classes can provide
         * their own implementation to help indicate the extents of clues.
         * @param coord A coord to test
         * @virtual
         */
        vfunc_clue_continues_left(coord: CellCoord): boolean;
        /**
         * Returns `true` if the down clue crossing `coord` can be continued
         * right.
         *
         * This can be used to navigate a crossword. Sub-classes can provide
         * their own implementation to help indicate the extents of clues.
         * @param coord A coord to test
         * @virtual
         */
        vfunc_clue_continues_right(coord: CellCoord): boolean;
        /**
         * Returns `true` if the down clue crossing `coord` can be continued up.
         *
         * This can be used to navigate a crossword. Sub-classes can provide
         * their own implementation to help indicate the extents of clues.
         * @param coord A coord to test
         * @virtual
         */
        vfunc_clue_continues_up(coord: CellCoord): boolean;
        /**
         * Ensures that there are {@link Ipuz.Clue}s for every sequenctial
         * run of across or down normal cells of two or more. This will
         * potentially add or remove existing clues as necessary.
         *
         * This method will do its best to persist clues where possible. It
         * does that by keeping track of the cells that the prior clues used,
         * and copying over their answers to any new cells occupying the same
         * location. The oldclues will be unreffed by `self`, and should not be
         * considered useful after this has been run.
         *
         * {@link Ipuz.Crossword.fix_numbering} should be called prior to
         * calling this function, as this uses the existing numbering to
         * annotate the created clues.
         *
         * In addition, subclasses of {@link Ipuz.Crossword} may do further
         * fixups.
         * @virtual
         */
        vfunc_fix_clues(): void;
        /**
         * Ensures that every clue has an enumeration if
         * {@link Ipuz.Crossword.show_enumerations} is set to `true`. If not
         * set already set, an enumeration the apparent length of the clue
         * will be created.
         *
         * In addition, subclasses of {@link Ipuz.Crossword} may do further
         * fixups.
         * @virtual
         */
        vfunc_fix_enumerations(): void;
        /**
         * Goes through all the normal cells in the grid and calculates the
         * numbers for clues. This will clear any existing numbers or labels
         * associated with cells.
         *
         * In addition, subclasses of {@link Ipuz.Crossword} may do further
         * fixups.
         * @virtual
         */
        vfunc_fix_numbering(): void;
        /**
         * Clears empty {@link Ipuz.Style}s from all the cells in `self`. See
         * {@link Ipuz.Style.is_empty} for more information on empty styles.
         *
         * In addition, subclasses of {@link Ipuz.Crossword} may do further
         * fixups.
         * @virtual
         */
        vfunc_fix_styles(): void;
        /**
         * Enforce the board symmetry of the cells in `summetry_coords` in the
         * direction of `symmetry`. That is to say, go through each cell in
         * `symmetry_coords` and make sure that the appropriate cell at the
         * point(s) of symmetry have the same {@link Ipuz.CellType}.
         *
         * In addition, subclasses of {@link Ipuz.Crossword} may do further
         * fixups.
         * @param symmetry the symmetry condition to enforce
         * @param symmetry_coords A {@link GLib.Array} of `IpuzCellCoords`
         * @virtual
         */
        vfunc_fix_symmetry(symmetry: Symmetry, symmetry_coords: CellCoord[]): void;
        /**
         * Makes the cell at `dest_coord` match the appearance of the cell at
         * `src_coord` while maintaining symmetry. For normal crosswords, this
         * just matches their `cell_type` and symmetry is largely
         * ignored. However, for barred crosswords this implementation is
         * quite complex as it needs to rotate and adjust the bars to keep
         * symmetry.
         * @param src_coord The source coord to mirror
         * @param dest_coord The dest coord to mirrored
         * @param symmetry The symmetry to be observed
         * @param symmetry_offset The symmetry offset to be observed
         * @virtual
         */
        vfunc_mirror_cell(
            src_coord: CellCoord,
            dest_coord: CellCoord,
            symmetry: Symmetry,
            symmetry_offset: SymmetryOffset,
        ): void;

        // Methods

        /**
         * Checks the cell at `dest_coord` to see if it's the symmetric
         * opposite of the cell at `src_coord`. For normal crosswords, this
         * just checks that the `cell_type` is the same, and symmetry is
         * largely ignored. However, for barred crosswords this implementation
         * is quite complex as it needs to rotate and adjust the bars.
         * @param src_coord The source coord to mirror
         * @param dest_coord The dest coord to mirrored
         * @param symmetry The symmetry to be observed
         * @param symmetry_offset The symmetry offset to be observed
         * @returns `true`, if the cell at `dest_coord` is the mirror of that at `src_coord`
         */
        check_mirror(
            src_coord: CellCoord,
            dest_coord: CellCoord,
            symmetry: Symmetry | null,
            symmetry_offset: SymmetryOffset | null,
        ): boolean;
        /**
         * Returns `true` if the down clue crossing `coord` can be continued
         * down.
         *
         * This can be used to navigate a crossword. Sub-classes can provide
         * their own implementation to help indicate the extents of clues.
         * @param coord A coord to test
         * @returns `true`, if the down clue crossing with `coord` can be continued down
         */
        clue_continues_down(coord: CellCoord): boolean;
        /**
         * Returns `true` if the down clue crossing `coord` can be continued left.
         *
         * This can be used to navigate a crossword. Sub-classes can provide
         * their own implementation to help indicate the extents of clues.
         * @param coord A coord to test
         * @returns `true`, if the down clue crossing with `coord` can be continued left
         */
        clue_continues_left(coord: CellCoord): boolean;
        /**
         * Returns `true` if the down clue crossing `coord` can be continued
         * right.
         *
         * This can be used to navigate a crossword. Sub-classes can provide
         * their own implementation to help indicate the extents of clues.
         * @param coord A coord to test
         * @returns `true`, if the down clue crossing with `coord` can be continued right.
         */
        clue_continues_right(coord: CellCoord): boolean;
        /**
         * Returns `true` if the down clue crossing `coord` can be continued up.
         *
         * This can be used to navigate a crossword. Sub-classes can provide
         * their own implementation to help indicate the extents of clues.
         * @param coord A coord to test
         * @returns `true`, if the down clue crossing with `coord` can be continued up
         */
        clue_continues_up(coord: CellCoord): boolean;
        /**
         * Ensures that there are {@link Ipuz.Clue}s for every sequenctial
         * run of across or down normal cells of two or more. This will
         * potentially add or remove existing clues as necessary.
         *
         * This method will do its best to persist clues where possible. It
         * does that by keeping track of the cells that the prior clues used,
         * and copying over their answers to any new cells occupying the same
         * location. The oldclues will be unreffed by `self`, and should not be
         * considered useful after this has been run.
         *
         * {@link Ipuz.Crossword.fix_numbering} should be called prior to
         * calling this function, as this uses the existing numbering to
         * annotate the created clues.
         *
         * In addition, subclasses of {@link Ipuz.Crossword} may do further
         * fixups.
         */
        fix_clues(): void;
        /**
         * Ensures that every clue has an enumeration if
         * {@link Ipuz.Crossword.show_enumerations} is set to `true`. If not
         * set already set, an enumeration the apparent length of the clue
         * will be created.
         *
         * In addition, subclasses of {@link Ipuz.Crossword} may do further
         * fixups.
         */
        fix_enumerations(): void;
        /**
         * Goes through all the normal cells in the grid and calculates the
         * numbers for clues. This will clear any existing numbers or labels
         * associated with cells.
         *
         * In addition, subclasses of {@link Ipuz.Crossword} may do further
         * fixups.
         */
        fix_numbering(): void;
        /**
         * Clears empty {@link Ipuz.Style}s from all the cells in `self`. See
         * {@link Ipuz.Style.is_empty} for more information on empty styles.
         *
         * In addition, subclasses of {@link Ipuz.Crossword} may do further
         * fixups.
         */
        fix_styles(): void;
        /**
         * Enforce the board symmetry of the cells in `summetry_coords` in the
         * direction of `symmetry`. That is to say, go through each cell in
         * `symmetry_coords` and make sure that the appropriate cell at the
         * point(s) of symmetry have the same {@link Ipuz.CellType}.
         *
         * In addition, subclasses of {@link Ipuz.Crossword} may do further
         * fixups.
         * @param symmetry the symmetry condition to enforce
         * @param symmetry_coords A {@link GLib.Array} of `IpuzCellCoords`
         */
        fix_symmetry(symmetry: Symmetry | null, symmetry_coords: CellCoord[]): void;
        /**
         * Returns an indication of how to display the clues relative to the grid.
         * @returns An indication of how to display the clues relative to the grid
         */
        get_clue_placement(): CluePlacement;
        /**
         * Returns `true` if `self` should be displayed with enumerations.
         * @returns `true` if `self` should be displayed with enumerations.
         */
        get_show_enumerations(): boolean;
        /**
         * Returns an {@link Ipuz.Charset} consisting of all the characters
         * in the puzzle.
         * @returns An {@link Ipuz.Charset} consisting of all the characters in the puzzle
         */
        get_solution_chars(): Charset;
        /**
         * Calculates the apparent symmetry of `self` based on the grid.
         *
         * Note, there can be multiple valid calculations for a given grid. As
         * a simple example, we can't say anything at all about the symmetry
         * for a blank square board as that could be every possible
         * symmetry. This function returns the most specific symmetry that
         * matches.
         * @returns The apparent symmetry of the puzzle
         */
        get_symmetry(): Symmetry;
        /**
         * Makes the cell at `dest_coord` match the appearance of the cell at
         * `src_coord` while maintaining symmetry. For normal crosswords, this
         * just matches their `cell_type` and symmetry is largely
         * ignored. However, for barred crosswords this implementation is
         * quite complex as it needs to rotate and adjust the bars to keep
         * symmetry.
         * @param src_coord The source coord to mirror
         * @param dest_coord The dest coord to mirrored
         * @param symmetry The symmetry to be observed
         * @param symmetry_offset The symmetry offset to be observed
         */
        mirror_cell(
            src_coord: CellCoord,
            dest_coord: CellCoord,
            symmetry: Symmetry | null,
            symmetry_offset: SymmetryOffset | null,
        ): void;
        /**
         * Prints out a text version of `self` to the terminal for debugging
         * purposes.
         */
        print(): void;
        /**
         * Sets an indication of how to display the clues relative to the grid.
         * @param clue_placement The placement of the clues
         */
        set_clue_placement(clue_placement: CluePlacement | null): void;
        /**
         * Sets whether `self` should be displayed with enumerations.
         * @param show_enumerations whether `self` should be displayed with enumerations
         */
        set_show_enumerations(show_enumerations: boolean): void;
        /**
         * The {@link Ipuz.Guesses} associated with the grid.
         * @category Inherited from Ipuz.Grid
         */
        get guesses(): Guesses;
        set guesses(val: Guesses);
        /**
         * Number of rows in the grid.
         * @category Inherited from Ipuz.Grid
         */
        get height(): number;
        set height(val: number);
        /**
         * Number of columns in the grid.
         * @category Inherited from Ipuz.Grid
         */
        get width(): number;
        set width(val: number);
        /**
         * Adds a new clue set to `clues`. This clue set will be in the
         * direction of `direction`, and will be empty. If `label` is set, then
         * it will set the label of the newly created clue set.
         *
         * The return value of this function is the direction of the newly
         * added clue set, and should be used to access the clue set going
         * forward. Most of the time, the returned direction will be identical
         * to `direction`. However, should you add multiple cluesets of the
         * same direction but different labels, then the returned direction
         * will be a new value starting at {@link Ipuz.ClueDirection.CUSTOM}.
         *
         * If a clue set already exists with an identical `direction` or label,
         * then a new clue set won't be created and
         * {@link Ipuz.ClueDirection.NONE} will be returned.
         * @param direction the direction of the newly added clue set
         * @param label an optional label for the newly added clue set
         * @returns the direction of the newly created clue set, or {@link Ipuz.ClueDirection.NONE}
         */
        add_clue_set(direction: ClueDirection | null, label?: string | null): ClueDirection;
        /**
         * Removes all the clues and clue sets of `clues`.
         */
        clear_clue_sets(): void;
        /**
         * Returns `true` if `clue` has a user guess for every cell. If all the
         * user guesses are correct, then `correct` is set to `true` as well.
         * @param clue The clue to inspect
         * @returns `true`, if the clue has guesses for every cell
         */
        clue_guessed(clue: Clue): [boolean, boolean];
        /**
         * Returns the direction of the clueset at `index`.
         *
         * This can be used in conjunction with
         * {@link Ipuz.Clues.get_n_clue_sets} to iterate through all the
         * directions in `clues`. This is the only place in the API where an
         * index is used, as opposed to a direction.
         * @param index the index of the clueset to lookup.
         * @returns The direction of the clueset indexed by `index`
         */
        clue_set_get_dir(index: number): ClueDirection;
        /**
         * Returns the label of the clueset at `direction`.
         *
         * This label can be used as a user visible discription the clue set.
         * @param direction the direction of the clue set
         * @returns The label of the clueset at `direction`
         */
        clue_set_get_label(direction: ClueDirection | null): string;
        /**
         * Returns the next clue set visible in `clues` after `direction`.
         *
         * For example, if called on a regular crossword with a `direction` of
         * {@link Ipuz.ClueDirection.ACROSS}, this would return
         * {@link Ipuz.ClueDirection.DOWN}.
         *
         * If `wrap` is `true` then this will wrap around to the beginning when
         * at the last visible clue sets, otherwise it will return
         * {@link Ipuz.ClueDirection.NONE}.
         *
         * Note that any clue sets of type {@link Ipuz.ClueDirection.HIDDEN}
         * will be skipped by this function.
         * @param direction A direction
         * @param wrap Whether to wrap around
         * @returns The next direction logically in `clues`, or {@link Ipuz.ClueDirection.NONE}
         */
        clue_set_next_direction(direction: ClueDirection | null, wrap: boolean): ClueDirection;
        /**
         * Returns the previous clue set visible in `clues` after `direction`.
         *
         * For example, if called on a regular crossword with a `direction` of
         * {@link Ipuz.ClueDirection.DOWN}, this would return
         * {@link Ipuz.ClueDirection.ACROSS}.
         *
         * If `wrap` is `true` then this will wrap around to the end when at the
         * first visible clue sets, otherwise it will return
         * {@link Ipuz.ClueDirection.NONE}.
         *
         * Note that any clue sets of type {@link Ipuz.ClueDirection.HIDDEN}
         * will be skipped by this function.
         * @param direction A direction
         * @param wrap Whether to wrap around
         * @returns The previous direction logically in `clues`, or {@link Ipuz.ClueDirection.NONE}
         */
        clue_set_prev_direction(direction: ClueDirection | null, wrap: boolean): ClueDirection;
        /**
         * [ RETHINK THIS FUNCTION. CANT WE GET IT FROM THE CELL?]
         * @param direction
         * @param coord
         */
        find_clue_by_coord(direction: ClueDirection | null, coord: CellCoord): Clue;
        /**
         * Searches for and returns the clue with `direction` and `label`.
         * @param direction The direction to search
         * @param label The label to look for
         * @returns The clue with `direction` and `label`, or `null`
         */
        find_clue_by_label(direction: ClueDirection | null, label: string): Clue | null;
        /**
         * Searches for and returns the clue with `direction` and `number`.
         *
         * This is different from the {@link Ipuz.ClueId} which uses the
         * index to refer to a clue. As an example the clue _2dn_ could be
         * have a clue id with an index of 0.
         * @param direction The direction to search
         * @param number The number to look for
         * @returns The clue with `direction` and `number`, or `null`
         */
        find_clue_by_number(direction: ClueDirection | null, number: number): Clue | null;
        /**
         * Calls `func` for each {@link Ipuz.Clue} in `clues`.
         * @param func The function to call for each clue
         */
        foreach_clue(func: CluesForeachClueFunc): void;
        /**
         * Returns the clue at `clue_id`, or `null`.
         * @param clue_id An id of a clue
         * @returns A clue at `clue_id`
         */
        get_clue_by_id(clue_id: ClueId): Clue | null;
        /**
         * Returns a string containing the solution of the puzzle for a given
         * clue. This string will have '?' characters embedded within it if
         * there are cells without solutions set yet.
         * @param clue_id An {@link Ipuz.ClueId} to get the clue string for
         * @returns The solution for the puzzle for `clue_id`. Returns `null` if `clue_id` points to an invalid clue
         */
        get_clue_string_by_id(clue_id: ClueId): string | null;
        /**
         * Returns an array of all clues in the direction of `direction`.
         * @param direction The direction of clues to search
         * @returns an array of all clues in the direction of `direction`
         */
        get_clues(direction: ClueDirection | null): Clue[];
        /**
         * Returns a string containing the guess in the puzzle for a given
         * clue. This string will have '?' characters embedded within it if
         * there are cells not completely filled out.
         * @param clue_id An {@link Ipuz.ClueId} to get the guesses string for
         * @returns The guesses for the puzzle for `clue_id`. Returns `null` if `clue_id` points to an invalid clue
         */
        get_guess_string_by_id(clue_id: ClueId): string | null;
        /**
         * Finds the {@link Ipuz.ClueId} of `clue` within `clues`.
         *
         * If `clue` doesn't exist in `clues`, then `false` is returned and
         * `clue_id`'s direction is set to {@link Ipuz.ClueDirection.NONE}.
         * @param clue The {@link Ipuz.Clue} to search for
         * @returns `true`, if `clue_id` was set to the id of `clue`
         */
        get_id_by_clue(clue: Clue | null): [boolean, ClueId];
        /**
         * Returns the number of clue sets associated with `clues`.
         * @returns The number of clue sets associated with `clues`
         */
        get_n_clue_sets(): number;
        /**
         * Returns the number of clues in `direction`.
         * @param direction The direction of clues to count
         * @returns The number of clues in `direction`
         */
        get_n_clues(direction: ClueDirection | null): number;
        /**
         * Removes `clue` from `clues`. The clue will also be unlinked from the
         * grid.
         * @param clue A clue to remove
         */
        remove_clue(clue: Clue): void;
        /**
         * Removes the clue set in the direction of `direction`. All the clues
         * associated with that clue set will be unreffed.
         * @param direction the direction of the clue set to remove
         */
        remove_clue_set(direction: ClueDirection | null): void;
        /**
         * Unlinks `clue` from the grid. That is to say, any of the cells that
         * `clue` pointed to will no longer refer to it.
         * @param clue A clue to remove
         */
        unlink_clue(clue: Clue): void;
        /**
         * Adds a new clue set to `clues`. This clue set will be in the
         * direction of `direction`, and will be empty. If `label` is set, then
         * it will set the label of the newly created clue set.
         *
         * The return value of this function is the direction of the newly
         * added clue set, and should be used to access the clue set going
         * forward. Most of the time, the returned direction will be identical
         * to `direction`. However, should you add multiple cluesets of the
         * same direction but different labels, then the returned direction
         * will be a new value starting at {@link Ipuz.ClueDirection.CUSTOM}.
         *
         * If a clue set already exists with an identical `direction` or label,
         * then a new clue set won't be created and
         * {@link Ipuz.ClueDirection.NONE} will be returned.
         * @param direction the direction of the newly added clue set
         * @param label an optional label for the newly added clue set
         * @virtual
         */
        vfunc_add_clue_set(direction: ClueDirection, label?: string | null): ClueDirection;
        /**
         * Removes all the clues and clue sets of `clues`.
         * @virtual
         */
        vfunc_clear_clue_sets(): void;
        /**
         * Returns `true` if `clue` has a user guess for every cell. If all the
         * user guesses are correct, then `correct` is set to `true` as well.
         * @param clue The clue to inspect
         * @virtual
         */
        vfunc_clue_guessed(clue: Clue): [boolean, boolean];
        /**
         * Returns the direction of the clueset at `index`.
         *
         * This can be used in conjunction with
         * {@link Ipuz.Clues.get_n_clue_sets} to iterate through all the
         * directions in `clues`. This is the only place in the API where an
         * index is used, as opposed to a direction.
         * @param index the index of the clueset to lookup.
         * @virtual
         */
        vfunc_clue_set_get_dir(index: number): ClueDirection;
        /**
         * Returns the label of the clueset at `direction`.
         *
         * This label can be used as a user visible discription the clue set.
         * @param direction the direction of the clue set
         * @virtual
         */
        vfunc_clue_set_get_label(direction: ClueDirection): string;
        /**
         * [ RETHINK THIS FUNCTION. CANT WE GET IT FROM THE CELL?]
         * @param direction
         * @param coord
         * @virtual
         */
        vfunc_find_clue_by_coord(direction: ClueDirection, coord: CellCoord): Clue;
        /**
         * Searches for and returns the clue with `direction` and `label`.
         * @param direction The direction to search
         * @param label The label to look for
         * @virtual
         */
        vfunc_find_clue_by_label(direction: ClueDirection, label: string): Clue | null;
        /**
         * Searches for and returns the clue with `direction` and `number`.
         *
         * This is different from the {@link Ipuz.ClueId} which uses the
         * index to refer to a clue. As an example the clue _2dn_ could be
         * have a clue id with an index of 0.
         * @param direction The direction to search
         * @param number The number to look for
         * @virtual
         */
        vfunc_find_clue_by_number(direction: ClueDirection, number: number): Clue | null;
        /**
         * Calls `func` for each {@link Ipuz.Clue} in `clues`.
         * @param func The function to call for each clue
         * @virtual
         */
        vfunc_foreach_clue(func: CluesForeachClueFunc): void;
        /**
         * Returns the clue at `clue_id`, or `null`.
         * @param clue_id An id of a clue
         * @virtual
         */
        vfunc_get_clue_by_id(clue_id: ClueId): Clue | null;
        /**
         * Returns a string containing the solution of the puzzle for a given
         * clue. This string will have '?' characters embedded within it if
         * there are cells without solutions set yet.
         * @param clue_id An {@link Ipuz.ClueId} to get the clue string for
         * @virtual
         */
        vfunc_get_clue_string_by_id(clue_id: ClueId): string | null;
        /**
         * Returns an array of all clues in the direction of `direction`.
         * @param direction The direction of clues to search
         * @virtual
         */
        vfunc_get_clues(direction: ClueDirection): Clue[];
        /**
         * Returns a string containing the guess in the puzzle for a given
         * clue. This string will have '?' characters embedded within it if
         * there are cells not completely filled out.
         * @param clue_id An {@link Ipuz.ClueId} to get the guesses string for
         * @virtual
         */
        vfunc_get_guess_string_by_id(clue_id: ClueId): string | null;
        /**
         * Finds the {@link Ipuz.ClueId} of `clue` within `clues`.
         *
         * If `clue` doesn't exist in `clues`, then `false` is returned and
         * `clue_id`'s direction is set to {@link Ipuz.ClueDirection.NONE}.
         * @param clue The {@link Ipuz.Clue} to search for
         * @virtual
         */
        vfunc_get_id_by_clue(clue: Clue | null): [boolean, ClueId];
        /**
         * Returns the number of clue sets associated with `clues`.
         * @virtual
         */
        vfunc_get_n_clue_sets(): number;
        /**
         * Returns the number of clues in `direction`.
         * @param direction The direction of clues to count
         * @virtual
         */
        vfunc_get_n_clues(direction: ClueDirection): number;
        /**
         * Removes `clue` from `clues`. The clue will also be unlinked from the
         * grid.
         * @param clue A clue to remove
         * @virtual
         */
        vfunc_remove_clue(clue: Clue): void;
        /**
         * Removes the clue set in the direction of `direction`. All the clues
         * associated with that clue set will be unreffed.
         * @param direction the direction of the clue set to remove
         * @virtual
         */
        vfunc_remove_clue_set(direction: ClueDirection): void;
        /**
         * Unlinks `clue` from the grid. That is to say, any of the cells that
         * `clue` pointed to will no longer refer to it.
         * @param clue A clue to remove
         * @virtual
         */
        vfunc_unlink_clue(clue: Clue): void;
        /**
         * Invokes the operation determined by `check_type` on `cell` and
         * `guesses` at `coord`.
         *
         * This function allows subclasses to specify puzzle-specific
         * behavior. For example, if `check_type` is `IPUZ_GRID_GUESSABLE`, then
         * it will return `true` if the cell can accept a users's guess (eg. is
         * not a block or null with crosswords, etc).
         *
         * This function is used by {@link Ipuz.Grid} to maintain consistency
         * of the puzzle in its operations. Subclasses should implement this
         * method in order to define their behavior. It is not expected that
         * most users will ever need to call this function.
         *
         * See {@link Ipuz.GridCheckType} for more information on the specific
         * operations.
         *
         * ::: note
         *     Some of the operation types can modify either guesses or cell.
         * @param cell A cell to check
         * @param coord The coordinate of `cell`
         * @param guesses The guesses to check
         * @param check_type The operation to perform at `coord`
         * @returns `true`, if the condition determined by %check_type is met
         */
        check_cell(cell: Cell, coord: CellCoord, guesses: Guesses, check_type: GridCheckType | null): boolean;
        /**
         * Invokes the operation determined by `check_type` on the stride guess
         * determined by `direction` and `index`.
         *
         * This function allows subclasses to specify puzzle-specific
         * behavior. Unlike {@link Ipuz.Grid.check_cell}, this function is
         * optional for puzzles as most puzzles don't use stride guesses. A
         * default handler is provided that just returns `false`.
         *
         * This function is used by {@link Ipuz.Grid} to maintain consistency
         * of the puzzle in its operations. Subclasses should implement this
         * method in order to define their behavior. It is not expected that
         * most users will ever need to call this function.
         *
         * See {@link Ipuz.GridCheckType} for more information on the specific
         * operations.
         *
         * ::: note
         *     Some of the operation types can modify either guesses or cell.
         * @param direction
         * @param index
         * @param guesses The guesses to check
         * @param check_type The operation to perform at `coord`
         * @returns `true`, if the condition determined by %check_type is met
         */
        check_stride(
            direction: ClueDirection | null,
            index: number,
            guesses: Guesses,
            check_type: GridCheckType | null,
        ): boolean;
        /**
         * Creates a fresh {@link Ipuz.Guesses}. It will be initialized to
         * the current state of the grid.
         *
         * The guessses can be used to solve the puzzle, and as such, its
         * format is puzzle-type dependent. See each puzzle's *Guesses*
         * section for more information on the format.
         *
         * Note that this method won't change the internal guesses of self. If
         * that is desired, you should pair this with
         * {@link Ipuz.Grid.set_guesses}. As an example:
         *
         * ```C
         * g_autoptr (IpuzGuesses) guesses;
         *
         * guesses = ipuz_grid_create_guesses (grid);
         * ipuz_grid_set_guesses (grid, guesses);
         * ```
         * @returns A new {@link Ipuz.Guesses} matching `self`
         */
        create_guesses(): Guesses;
        /**
         * Fixes the guesses associated with `self`. The result will be a
         * playable {@link Ipuz.Guesses} struct.
         *
         * ::: note
         *     This method will try to keep any guesses on cells intact. If a
         *     fresh playing grid is desired, then it's recommended to call
         *     {@link Ipuz.Grid.create_guesses}, and then attach it to `self`
         *     with {@link IpuzGrid.set_guesses}.
         */
        fix_guesses(): void;
        /**
         * Calls `func` for each {@link Ipuz.Cell} in `self`.
         * @param func The function to call for each cell
         */
        foreach_cell(func: GridForeachCellFunc): void;
        /**
         * Retrieves the cell at `coord`. If the coordinates are
         * outside the bounds of the grid then `null` will be returned.
         *
         * The coordinate system of the `self` is similar to that of a spreadsheet. The
         * origin is the upper left corner. Row's increase vertically downward, and
         * columns increase horizontally.
         * @param coord Coordinates for the cell.
         * @returns The cell at `coord`.
         */
        get_cell(coord: CellCoord): Cell | null;
        /**
         * Returns the {@link Ipuz.Guesses} associated with `self`.
         * @returns The {@link Ipuz.Guesses} associated with `self`
         */
        get_guesses(): Guesses;
        /**
         * Returns the number of rows in `self`.
         * @returns The height of `self`
         */
        get_height(): number;
        /**
         * Returns the number of columns in `self`.
         * @returns The width of `self`
         */
        get_width(): number;
        /**
         * Resizes `self` to the new size.
         *
         * If one of the dimensions is larger than before, the new cells will
         * be filled in with puzzle-appropriate default values.
         *
         * This function will not adjust its internal {@link Ipuz.Guesses}
         * object to match the new size. That can be done by a separate call
         * to {@link Ipuz.Grid.fix_guesses}.
         * @param new_width The new width
         * @param new_height The new height
         */
        resize(new_width: number, new_height: number): void;
        /**
         * Sets `guesses` for `self`. If there's a mismatch in the cell types
         * between `guesses` and `self` then `false` is returned. `guesses` will
         * be set regardless of the return value.
         *
         * Mismatches can be fixed by calling {@link Ipuz.Grid.fix_guesses}.
         * @param guesses The {@link Ipuz.Guesses} to set on self
         * @returns `true`, if guesses matches `self`
         */
        set_guesses(guesses?: Guesses | null): boolean;
        /**
         * Invokes the operation determined by `check_type` on `cell` and
         * `guesses` at `coord`.
         *
         * This function allows subclasses to specify puzzle-specific
         * behavior. For example, if `check_type` is `IPUZ_GRID_GUESSABLE`, then
         * it will return `true` if the cell can accept a users's guess (eg. is
         * not a block or null with crosswords, etc).
         *
         * This function is used by {@link Ipuz.Grid} to maintain consistency
         * of the puzzle in its operations. Subclasses should implement this
         * method in order to define their behavior. It is not expected that
         * most users will ever need to call this function.
         *
         * See {@link Ipuz.GridCheckType} for more information on the specific
         * operations.
         *
         * ::: note
         *     Some of the operation types can modify either guesses or cell.
         * @param cell A cell to check
         * @param coord The coordinate of `cell`
         * @param guesses The guesses to check
         * @param check_type The operation to perform at `coord`
         * @virtual
         */
        vfunc_check_cell(cell: Cell, coord: CellCoord, guesses: Guesses, check_type: GridCheckType): boolean;
        /**
         * Invokes the operation determined by `check_type` on the stride guess
         * determined by `direction` and `index`.
         *
         * This function allows subclasses to specify puzzle-specific
         * behavior. Unlike {@link Ipuz.Grid.check_cell}, this function is
         * optional for puzzles as most puzzles don't use stride guesses. A
         * default handler is provided that just returns `false`.
         *
         * This function is used by {@link Ipuz.Grid} to maintain consistency
         * of the puzzle in its operations. Subclasses should implement this
         * method in order to define their behavior. It is not expected that
         * most users will ever need to call this function.
         *
         * See {@link Ipuz.GridCheckType} for more information on the specific
         * operations.
         *
         * ::: note
         *     Some of the operation types can modify either guesses or cell.
         * @param direction
         * @param index
         * @param guesses The guesses to check
         * @param check_type The operation to perform at `coord`
         * @virtual
         */
        vfunc_check_stride(
            direction: ClueDirection,
            index: number,
            guesses: Guesses,
            check_type: GridCheckType,
        ): boolean;
    }

    namespace Cryptic {
        // Signal signatures
        interface SignalSignatures extends Crossword.SignalSignatures {
            'notify::clue-placement': (pspec: GObject.ParamSpec) => void;
            'notify::show-enumerations': (pspec: GObject.ParamSpec) => void;
            'notify::guesses': (pspec: GObject.ParamSpec) => void;
            'notify::height': (pspec: GObject.ParamSpec) => void;
            'notify::width': (pspec: GObject.ParamSpec) => void;
            'notify::annotation': (pspec: GObject.ParamSpec) => void;
            'notify::author': (pspec: GObject.ParamSpec) => void;
            'notify::block': (pspec: GObject.ParamSpec) => void;
            'notify::charset': (pspec: GObject.ParamSpec) => void;
            'notify::charset-str': (pspec: GObject.ParamSpec) => void;
            'notify::copyright': (pspec: GObject.ParamSpec) => void;
            'notify::date': (pspec: GObject.ParamSpec) => void;
            'notify::difficulty': (pspec: GObject.ParamSpec) => void;
            'notify::editor': (pspec: GObject.ParamSpec) => void;
            'notify::empty': (pspec: GObject.ParamSpec) => void;
            'notify::explanation': (pspec: GObject.ParamSpec) => void;
            'notify::intro': (pspec: GObject.ParamSpec) => void;
            'notify::license': (pspec: GObject.ParamSpec) => void;
            'notify::locale': (pspec: GObject.ParamSpec) => void;
            'notify::notes': (pspec: GObject.ParamSpec) => void;
            'notify::origin': (pspec: GObject.ParamSpec) => void;
            'notify::publication': (pspec: GObject.ParamSpec) => void;
            'notify::publisher': (pspec: GObject.ParamSpec) => void;
            'notify::puzzle-kind': (pspec: GObject.ParamSpec) => void;
            'notify::styles': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::uniqueid': (pspec: GObject.ParamSpec) => void;
            'notify::url': (pspec: GObject.ParamSpec) => void;
            'notify::version': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Crossword.ConstructorProps, Clues.ConstructorProps {}
    }

    /**
     * Cryptics are a crossword variant featuring cryptic clues.
     *
     * <picture>
     * <source srcset="cryptic-dark.png" media="(prefers-color-scheme: dark)" />
     * <img src="cryptic.png" alt="cryptic" />
     * </picture>
     * _Example of a cryptic puzzle_
     *
     * Cryptic crosswords traditionally have lattice-like grids with fewer
     * — but longer — answers. It uses [cryptic
     * clues](https://en.wikipedia.org/wiki/Cryptic_crossword), which use
     * wordplay to give additional information when solving them. As a
     * result, the dense grid of words are not neccessary. These
     * crosswords are sometimes known as **British Crosswords**.
     *
     * Similar to {@link Ipuz.Crossword}s, cryptics are frequently
     * symmetric and use numbered clues.
     *
     * # Representation
     *
     * When saving, libipuz adds the tag
     * `http://ipuz.org/crossword/crypticcrossword#1` to the kind field,
     * as well as `http://ipuz.org/crossword#1`. This allows libipuz to
     * identify these puzzle types. In practice, cryptic puzzles act like
     * crosswords when being solved and can be treated as such. However
     * the additional _kind_ tag lets libipuz load those puzzles into a
     * {@link Ipuz.Cryptic} object, which lets developers differentiate
     * them.
     *
     * ## Grid
     *
     * The grid with {@link Ipuz.Cryptic} objects is identical to
     * {@link Ipuz.Crossword}.
     *
     * ## Clues
     *
     * Clues with {@link Ipuz.Cryptic} objects are mostly the same as with
     * {@link Ipuz.Crossword}, and can be accessed through the
     * {@link Ipuz.Clues} interface.
     *
     * One minor difference between cryptics and regular crosswords is the
     * common usage of {@link Ipuz.Enumeration} to give additional hints
     * to the answer. As a result, {@link Ipuz.Cryptic.new} will enable
     * {@link Ipuz.Crossword.show_enumerations} by default.
     *
     * ## Guesses
     *
     * Guesses with {@link Ipuz.Cryptic} objects are identical to
     * {@link Ipuz.Crossword}.
     *
     * # Editing
     *
     * Editing {@link Ipuz.Cryptic} objects is the identical to
     * {@link Ipuz.Crossword}.
     * @gir-type Class
     */
    class Cryptic extends Crossword implements Clues {
        static $gtype: GObject.GType<Cryptic>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Cryptic.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Cryptic.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Cryptic;

        // Signals

        /** @signal */
        connect<K extends keyof Cryptic.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cryptic.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Cryptic.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Cryptic.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Cryptic.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Cryptic.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
        /**
         * The {@link Ipuz.Guesses} associated with the grid.
         * @category Inherited from Ipuz.Grid
         */
        get guesses(): Guesses;
        set guesses(val: Guesses);
        /**
         * Number of rows in the grid.
         * @category Inherited from Ipuz.Grid
         */
        get height(): number;
        set height(val: number);
        /**
         * Number of columns in the grid.
         * @category Inherited from Ipuz.Grid
         */
        get width(): number;
        set width(val: number);
        /**
         * Adds a new clue set to `clues`. This clue set will be in the
         * direction of `direction`, and will be empty. If `label` is set, then
         * it will set the label of the newly created clue set.
         *
         * The return value of this function is the direction of the newly
         * added clue set, and should be used to access the clue set going
         * forward. Most of the time, the returned direction will be identical
         * to `direction`. However, should you add multiple cluesets of the
         * same direction but different labels, then the returned direction
         * will be a new value starting at {@link Ipuz.ClueDirection.CUSTOM}.
         *
         * If a clue set already exists with an identical `direction` or label,
         * then a new clue set won't be created and
         * {@link Ipuz.ClueDirection.NONE} will be returned.
         * @param direction the direction of the newly added clue set
         * @param label an optional label for the newly added clue set
         * @returns the direction of the newly created clue set, or {@link Ipuz.ClueDirection.NONE}
         */
        add_clue_set(direction: ClueDirection | null, label?: string | null): ClueDirection;
        /**
         * Removes all the clues and clue sets of `clues`.
         */
        clear_clue_sets(): void;
        /**
         * Returns `true` if `clue` has a user guess for every cell. If all the
         * user guesses are correct, then `correct` is set to `true` as well.
         * @param clue The clue to inspect
         * @returns `true`, if the clue has guesses for every cell
         */
        clue_guessed(clue: Clue): [boolean, boolean];
        /**
         * Returns the direction of the clueset at `index`.
         *
         * This can be used in conjunction with
         * {@link Ipuz.Clues.get_n_clue_sets} to iterate through all the
         * directions in `clues`. This is the only place in the API where an
         * index is used, as opposed to a direction.
         * @param index the index of the clueset to lookup.
         * @returns The direction of the clueset indexed by `index`
         */
        clue_set_get_dir(index: number): ClueDirection;
        /**
         * Returns the label of the clueset at `direction`.
         *
         * This label can be used as a user visible discription the clue set.
         * @param direction the direction of the clue set
         * @returns The label of the clueset at `direction`
         */
        clue_set_get_label(direction: ClueDirection | null): string;
        /**
         * Returns the next clue set visible in `clues` after `direction`.
         *
         * For example, if called on a regular crossword with a `direction` of
         * {@link Ipuz.ClueDirection.ACROSS}, this would return
         * {@link Ipuz.ClueDirection.DOWN}.
         *
         * If `wrap` is `true` then this will wrap around to the beginning when
         * at the last visible clue sets, otherwise it will return
         * {@link Ipuz.ClueDirection.NONE}.
         *
         * Note that any clue sets of type {@link Ipuz.ClueDirection.HIDDEN}
         * will be skipped by this function.
         * @param direction A direction
         * @param wrap Whether to wrap around
         * @returns The next direction logically in `clues`, or {@link Ipuz.ClueDirection.NONE}
         */
        clue_set_next_direction(direction: ClueDirection | null, wrap: boolean): ClueDirection;
        /**
         * Returns the previous clue set visible in `clues` after `direction`.
         *
         * For example, if called on a regular crossword with a `direction` of
         * {@link Ipuz.ClueDirection.DOWN}, this would return
         * {@link Ipuz.ClueDirection.ACROSS}.
         *
         * If `wrap` is `true` then this will wrap around to the end when at the
         * first visible clue sets, otherwise it will return
         * {@link Ipuz.ClueDirection.NONE}.
         *
         * Note that any clue sets of type {@link Ipuz.ClueDirection.HIDDEN}
         * will be skipped by this function.
         * @param direction A direction
         * @param wrap Whether to wrap around
         * @returns The previous direction logically in `clues`, or {@link Ipuz.ClueDirection.NONE}
         */
        clue_set_prev_direction(direction: ClueDirection | null, wrap: boolean): ClueDirection;
        /**
         * [ RETHINK THIS FUNCTION. CANT WE GET IT FROM THE CELL?]
         * @param direction
         * @param coord
         */
        find_clue_by_coord(direction: ClueDirection | null, coord: CellCoord): Clue;
        /**
         * Searches for and returns the clue with `direction` and `label`.
         * @param direction The direction to search
         * @param label The label to look for
         * @returns The clue with `direction` and `label`, or `null`
         */
        find_clue_by_label(direction: ClueDirection | null, label: string): Clue | null;
        /**
         * Searches for and returns the clue with `direction` and `number`.
         *
         * This is different from the {@link Ipuz.ClueId} which uses the
         * index to refer to a clue. As an example the clue _2dn_ could be
         * have a clue id with an index of 0.
         * @param direction The direction to search
         * @param number The number to look for
         * @returns The clue with `direction` and `number`, or `null`
         */
        find_clue_by_number(direction: ClueDirection | null, number: number): Clue | null;
        /**
         * Calls `func` for each {@link Ipuz.Clue} in `clues`.
         * @param func The function to call for each clue
         */
        foreach_clue(func: CluesForeachClueFunc): void;
        /**
         * Returns the clue at `clue_id`, or `null`.
         * @param clue_id An id of a clue
         * @returns A clue at `clue_id`
         */
        get_clue_by_id(clue_id: ClueId): Clue | null;
        /**
         * Returns a string containing the solution of the puzzle for a given
         * clue. This string will have '?' characters embedded within it if
         * there are cells without solutions set yet.
         * @param clue_id An {@link Ipuz.ClueId} to get the clue string for
         * @returns The solution for the puzzle for `clue_id`. Returns `null` if `clue_id` points to an invalid clue
         */
        get_clue_string_by_id(clue_id: ClueId): string | null;
        /**
         * Returns an array of all clues in the direction of `direction`.
         * @param direction The direction of clues to search
         * @returns an array of all clues in the direction of `direction`
         */
        get_clues(direction: ClueDirection | null): Clue[];
        /**
         * Returns a string containing the guess in the puzzle for a given
         * clue. This string will have '?' characters embedded within it if
         * there are cells not completely filled out.
         * @param clue_id An {@link Ipuz.ClueId} to get the guesses string for
         * @returns The guesses for the puzzle for `clue_id`. Returns `null` if `clue_id` points to an invalid clue
         */
        get_guess_string_by_id(clue_id: ClueId): string | null;
        /**
         * Finds the {@link Ipuz.ClueId} of `clue` within `clues`.
         *
         * If `clue` doesn't exist in `clues`, then `false` is returned and
         * `clue_id`'s direction is set to {@link Ipuz.ClueDirection.NONE}.
         * @param clue The {@link Ipuz.Clue} to search for
         * @returns `true`, if `clue_id` was set to the id of `clue`
         */
        get_id_by_clue(clue: Clue | null): [boolean, ClueId];
        /**
         * Returns the number of clue sets associated with `clues`.
         * @returns The number of clue sets associated with `clues`
         */
        get_n_clue_sets(): number;
        /**
         * Returns the number of clues in `direction`.
         * @param direction The direction of clues to count
         * @returns The number of clues in `direction`
         */
        get_n_clues(direction: ClueDirection | null): number;
        /**
         * Removes `clue` from `clues`. The clue will also be unlinked from the
         * grid.
         * @param clue A clue to remove
         */
        remove_clue(clue: Clue): void;
        /**
         * Removes the clue set in the direction of `direction`. All the clues
         * associated with that clue set will be unreffed.
         * @param direction the direction of the clue set to remove
         */
        remove_clue_set(direction: ClueDirection | null): void;
        /**
         * Unlinks `clue` from the grid. That is to say, any of the cells that
         * `clue` pointed to will no longer refer to it.
         * @param clue A clue to remove
         */
        unlink_clue(clue: Clue): void;
        /**
         * Adds a new clue set to `clues`. This clue set will be in the
         * direction of `direction`, and will be empty. If `label` is set, then
         * it will set the label of the newly created clue set.
         *
         * The return value of this function is the direction of the newly
         * added clue set, and should be used to access the clue set going
         * forward. Most of the time, the returned direction will be identical
         * to `direction`. However, should you add multiple cluesets of the
         * same direction but different labels, then the returned direction
         * will be a new value starting at {@link Ipuz.ClueDirection.CUSTOM}.
         *
         * If a clue set already exists with an identical `direction` or label,
         * then a new clue set won't be created and
         * {@link Ipuz.ClueDirection.NONE} will be returned.
         * @param direction the direction of the newly added clue set
         * @param label an optional label for the newly added clue set
         * @virtual
         */
        vfunc_add_clue_set(direction: ClueDirection, label?: string | null): ClueDirection;
        /**
         * Removes all the clues and clue sets of `clues`.
         * @virtual
         */
        vfunc_clear_clue_sets(): void;
        /**
         * Returns `true` if `clue` has a user guess for every cell. If all the
         * user guesses are correct, then `correct` is set to `true` as well.
         * @param clue The clue to inspect
         * @virtual
         */
        vfunc_clue_guessed(clue: Clue): [boolean, boolean];
        /**
         * Returns the direction of the clueset at `index`.
         *
         * This can be used in conjunction with
         * {@link Ipuz.Clues.get_n_clue_sets} to iterate through all the
         * directions in `clues`. This is the only place in the API where an
         * index is used, as opposed to a direction.
         * @param index the index of the clueset to lookup.
         * @virtual
         */
        vfunc_clue_set_get_dir(index: number): ClueDirection;
        /**
         * Returns the label of the clueset at `direction`.
         *
         * This label can be used as a user visible discription the clue set.
         * @param direction the direction of the clue set
         * @virtual
         */
        vfunc_clue_set_get_label(direction: ClueDirection): string;
        /**
         * [ RETHINK THIS FUNCTION. CANT WE GET IT FROM THE CELL?]
         * @param direction
         * @param coord
         * @virtual
         */
        vfunc_find_clue_by_coord(direction: ClueDirection, coord: CellCoord): Clue;
        /**
         * Searches for and returns the clue with `direction` and `label`.
         * @param direction The direction to search
         * @param label The label to look for
         * @virtual
         */
        vfunc_find_clue_by_label(direction: ClueDirection, label: string): Clue | null;
        /**
         * Searches for and returns the clue with `direction` and `number`.
         *
         * This is different from the {@link Ipuz.ClueId} which uses the
         * index to refer to a clue. As an example the clue _2dn_ could be
         * have a clue id with an index of 0.
         * @param direction The direction to search
         * @param number The number to look for
         * @virtual
         */
        vfunc_find_clue_by_number(direction: ClueDirection, number: number): Clue | null;
        /**
         * Calls `func` for each {@link Ipuz.Clue} in `clues`.
         * @param func The function to call for each clue
         * @virtual
         */
        vfunc_foreach_clue(func: CluesForeachClueFunc): void;
        /**
         * Returns the clue at `clue_id`, or `null`.
         * @param clue_id An id of a clue
         * @virtual
         */
        vfunc_get_clue_by_id(clue_id: ClueId): Clue | null;
        /**
         * Returns a string containing the solution of the puzzle for a given
         * clue. This string will have '?' characters embedded within it if
         * there are cells without solutions set yet.
         * @param clue_id An {@link Ipuz.ClueId} to get the clue string for
         * @virtual
         */
        vfunc_get_clue_string_by_id(clue_id: ClueId): string | null;
        /**
         * Returns an array of all clues in the direction of `direction`.
         * @param direction The direction of clues to search
         * @virtual
         */
        vfunc_get_clues(direction: ClueDirection): Clue[];
        /**
         * Returns a string containing the guess in the puzzle for a given
         * clue. This string will have '?' characters embedded within it if
         * there are cells not completely filled out.
         * @param clue_id An {@link Ipuz.ClueId} to get the guesses string for
         * @virtual
         */
        vfunc_get_guess_string_by_id(clue_id: ClueId): string | null;
        /**
         * Finds the {@link Ipuz.ClueId} of `clue` within `clues`.
         *
         * If `clue` doesn't exist in `clues`, then `false` is returned and
         * `clue_id`'s direction is set to {@link Ipuz.ClueDirection.NONE}.
         * @param clue The {@link Ipuz.Clue} to search for
         * @virtual
         */
        vfunc_get_id_by_clue(clue: Clue | null): [boolean, ClueId];
        /**
         * Returns the number of clue sets associated with `clues`.
         * @virtual
         */
        vfunc_get_n_clue_sets(): number;
        /**
         * Returns the number of clues in `direction`.
         * @param direction The direction of clues to count
         * @virtual
         */
        vfunc_get_n_clues(direction: ClueDirection): number;
        /**
         * Removes `clue` from `clues`. The clue will also be unlinked from the
         * grid.
         * @param clue A clue to remove
         * @virtual
         */
        vfunc_remove_clue(clue: Clue): void;
        /**
         * Removes the clue set in the direction of `direction`. All the clues
         * associated with that clue set will be unreffed.
         * @param direction the direction of the clue set to remove
         * @virtual
         */
        vfunc_remove_clue_set(direction: ClueDirection): void;
        /**
         * Unlinks `clue` from the grid. That is to say, any of the cells that
         * `clue` pointed to will no longer refer to it.
         * @param clue A clue to remove
         * @virtual
         */
        vfunc_unlink_clue(clue: Clue): void;
        /**
         * Invokes the operation determined by `check_type` on `cell` and
         * `guesses` at `coord`.
         *
         * This function allows subclasses to specify puzzle-specific
         * behavior. For example, if `check_type` is `IPUZ_GRID_GUESSABLE`, then
         * it will return `true` if the cell can accept a users's guess (eg. is
         * not a block or null with crosswords, etc).
         *
         * This function is used by {@link Ipuz.Grid} to maintain consistency
         * of the puzzle in its operations. Subclasses should implement this
         * method in order to define their behavior. It is not expected that
         * most users will ever need to call this function.
         *
         * See {@link Ipuz.GridCheckType} for more information on the specific
         * operations.
         *
         * ::: note
         *     Some of the operation types can modify either guesses or cell.
         * @param cell A cell to check
         * @param coord The coordinate of `cell`
         * @param guesses The guesses to check
         * @param check_type The operation to perform at `coord`
         * @returns `true`, if the condition determined by %check_type is met
         */
        check_cell(cell: Cell, coord: CellCoord, guesses: Guesses, check_type: GridCheckType | null): boolean;
        /**
         * Invokes the operation determined by `check_type` on the stride guess
         * determined by `direction` and `index`.
         *
         * This function allows subclasses to specify puzzle-specific
         * behavior. Unlike {@link Ipuz.Grid.check_cell}, this function is
         * optional for puzzles as most puzzles don't use stride guesses. A
         * default handler is provided that just returns `false`.
         *
         * This function is used by {@link Ipuz.Grid} to maintain consistency
         * of the puzzle in its operations. Subclasses should implement this
         * method in order to define their behavior. It is not expected that
         * most users will ever need to call this function.
         *
         * See {@link Ipuz.GridCheckType} for more information on the specific
         * operations.
         *
         * ::: note
         *     Some of the operation types can modify either guesses or cell.
         * @param direction
         * @param index
         * @param guesses The guesses to check
         * @param check_type The operation to perform at `coord`
         * @returns `true`, if the condition determined by %check_type is met
         */
        check_stride(
            direction: ClueDirection | null,
            index: number,
            guesses: Guesses,
            check_type: GridCheckType | null,
        ): boolean;
        /**
         * Creates a fresh {@link Ipuz.Guesses}. It will be initialized to
         * the current state of the grid.
         *
         * The guessses can be used to solve the puzzle, and as such, its
         * format is puzzle-type dependent. See each puzzle's *Guesses*
         * section for more information on the format.
         *
         * Note that this method won't change the internal guesses of self. If
         * that is desired, you should pair this with
         * {@link Ipuz.Grid.set_guesses}. As an example:
         *
         * ```C
         * g_autoptr (IpuzGuesses) guesses;
         *
         * guesses = ipuz_grid_create_guesses (grid);
         * ipuz_grid_set_guesses (grid, guesses);
         * ```
         * @returns A new {@link Ipuz.Guesses} matching `self`
         */
        create_guesses(): Guesses;
        /**
         * Fixes the guesses associated with `self`. The result will be a
         * playable {@link Ipuz.Guesses} struct.
         *
         * ::: note
         *     This method will try to keep any guesses on cells intact. If a
         *     fresh playing grid is desired, then it's recommended to call
         *     {@link Ipuz.Grid.create_guesses}, and then attach it to `self`
         *     with {@link IpuzGrid.set_guesses}.
         */
        fix_guesses(): void;
        /**
         * Calls `func` for each {@link Ipuz.Cell} in `self`.
         * @param func The function to call for each cell
         */
        foreach_cell(func: GridForeachCellFunc): void;
        /**
         * Retrieves the cell at `coord`. If the coordinates are
         * outside the bounds of the grid then `null` will be returned.
         *
         * The coordinate system of the `self` is similar to that of a spreadsheet. The
         * origin is the upper left corner. Row's increase vertically downward, and
         * columns increase horizontally.
         * @param coord Coordinates for the cell.
         * @returns The cell at `coord`.
         */
        get_cell(coord: CellCoord): Cell | null;
        /**
         * Returns the {@link Ipuz.Guesses} associated with `self`.
         * @returns The {@link Ipuz.Guesses} associated with `self`
         */
        get_guesses(): Guesses;
        /**
         * Returns the number of rows in `self`.
         * @returns The height of `self`
         */
        get_height(): number;
        /**
         * Returns the number of columns in `self`.
         * @returns The width of `self`
         */
        get_width(): number;
        /**
         * Resizes `self` to the new size.
         *
         * If one of the dimensions is larger than before, the new cells will
         * be filled in with puzzle-appropriate default values.
         *
         * This function will not adjust its internal {@link Ipuz.Guesses}
         * object to match the new size. That can be done by a separate call
         * to {@link Ipuz.Grid.fix_guesses}.
         * @param new_width The new width
         * @param new_height The new height
         */
        resize(new_width: number, new_height: number): void;
        /**
         * Sets `guesses` for `self`. If there's a mismatch in the cell types
         * between `guesses` and `self` then `false` is returned. `guesses` will
         * be set regardless of the return value.
         *
         * Mismatches can be fixed by calling {@link Ipuz.Grid.fix_guesses}.
         * @param guesses The {@link Ipuz.Guesses} to set on self
         * @returns `true`, if guesses matches `self`
         */
        set_guesses(guesses?: Guesses | null): boolean;
        /**
         * Invokes the operation determined by `check_type` on `cell` and
         * `guesses` at `coord`.
         *
         * This function allows subclasses to specify puzzle-specific
         * behavior. For example, if `check_type` is `IPUZ_GRID_GUESSABLE`, then
         * it will return `true` if the cell can accept a users's guess (eg. is
         * not a block or null with crosswords, etc).
         *
         * This function is used by {@link Ipuz.Grid} to maintain consistency
         * of the puzzle in its operations. Subclasses should implement this
         * method in order to define their behavior. It is not expected that
         * most users will ever need to call this function.
         *
         * See {@link Ipuz.GridCheckType} for more information on the specific
         * operations.
         *
         * ::: note
         *     Some of the operation types can modify either guesses or cell.
         * @param cell A cell to check
         * @param coord The coordinate of `cell`
         * @param guesses The guesses to check
         * @param check_type The operation to perform at `coord`
         * @virtual
         */
        vfunc_check_cell(cell: Cell, coord: CellCoord, guesses: Guesses, check_type: GridCheckType): boolean;
        /**
         * Invokes the operation determined by `check_type` on the stride guess
         * determined by `direction` and `index`.
         *
         * This function allows subclasses to specify puzzle-specific
         * behavior. Unlike {@link Ipuz.Grid.check_cell}, this function is
         * optional for puzzles as most puzzles don't use stride guesses. A
         * default handler is provided that just returns `false`.
         *
         * This function is used by {@link Ipuz.Grid} to maintain consistency
         * of the puzzle in its operations. Subclasses should implement this
         * method in order to define their behavior. It is not expected that
         * most users will ever need to call this function.
         *
         * See {@link Ipuz.GridCheckType} for more information on the specific
         * operations.
         *
         * ::: note
         *     Some of the operation types can modify either guesses or cell.
         * @param direction
         * @param index
         * @param guesses The guesses to check
         * @param check_type The operation to perform at `coord`
         * @virtual
         */
        vfunc_check_stride(
            direction: ClueDirection,
            index: number,
            guesses: Guesses,
            check_type: GridCheckType,
        ): boolean;
    }

    namespace Filippine {
        // Signal signatures
        interface SignalSignatures extends Crossword.SignalSignatures {
            'notify::clue-placement': (pspec: GObject.ParamSpec) => void;
            'notify::show-enumerations': (pspec: GObject.ParamSpec) => void;
            'notify::guesses': (pspec: GObject.ParamSpec) => void;
            'notify::height': (pspec: GObject.ParamSpec) => void;
            'notify::width': (pspec: GObject.ParamSpec) => void;
            'notify::annotation': (pspec: GObject.ParamSpec) => void;
            'notify::author': (pspec: GObject.ParamSpec) => void;
            'notify::block': (pspec: GObject.ParamSpec) => void;
            'notify::charset': (pspec: GObject.ParamSpec) => void;
            'notify::charset-str': (pspec: GObject.ParamSpec) => void;
            'notify::copyright': (pspec: GObject.ParamSpec) => void;
            'notify::date': (pspec: GObject.ParamSpec) => void;
            'notify::difficulty': (pspec: GObject.ParamSpec) => void;
            'notify::editor': (pspec: GObject.ParamSpec) => void;
            'notify::empty': (pspec: GObject.ParamSpec) => void;
            'notify::explanation': (pspec: GObject.ParamSpec) => void;
            'notify::intro': (pspec: GObject.ParamSpec) => void;
            'notify::license': (pspec: GObject.ParamSpec) => void;
            'notify::locale': (pspec: GObject.ParamSpec) => void;
            'notify::notes': (pspec: GObject.ParamSpec) => void;
            'notify::origin': (pspec: GObject.ParamSpec) => void;
            'notify::publication': (pspec: GObject.ParamSpec) => void;
            'notify::publisher': (pspec: GObject.ParamSpec) => void;
            'notify::puzzle-kind': (pspec: GObject.ParamSpec) => void;
            'notify::styles': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::uniqueid': (pspec: GObject.ParamSpec) => void;
            'notify::url': (pspec: GObject.ParamSpec) => void;
            'notify::version': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Crossword.ConstructorProps, Clues.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Filippine extends Crossword implements Clues {
        static $gtype: GObject.GType<Filippine>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Filippine.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Filippine.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Filippine.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Filippine.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Filippine.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Filippine.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Filippine.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Filippine.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
        /**
         * The {@link Ipuz.Guesses} associated with the grid.
         * @category Inherited from Ipuz.Grid
         */
        get guesses(): Guesses;
        set guesses(val: Guesses);
        /**
         * Number of rows in the grid.
         * @category Inherited from Ipuz.Grid
         */
        get height(): number;
        set height(val: number);
        /**
         * Number of columns in the grid.
         * @category Inherited from Ipuz.Grid
         */
        get width(): number;
        set width(val: number);
        /**
         * Adds a new clue set to `clues`. This clue set will be in the
         * direction of `direction`, and will be empty. If `label` is set, then
         * it will set the label of the newly created clue set.
         *
         * The return value of this function is the direction of the newly
         * added clue set, and should be used to access the clue set going
         * forward. Most of the time, the returned direction will be identical
         * to `direction`. However, should you add multiple cluesets of the
         * same direction but different labels, then the returned direction
         * will be a new value starting at {@link Ipuz.ClueDirection.CUSTOM}.
         *
         * If a clue set already exists with an identical `direction` or label,
         * then a new clue set won't be created and
         * {@link Ipuz.ClueDirection.NONE} will be returned.
         * @param direction the direction of the newly added clue set
         * @param label an optional label for the newly added clue set
         * @returns the direction of the newly created clue set, or {@link Ipuz.ClueDirection.NONE}
         */
        add_clue_set(direction: ClueDirection | null, label?: string | null): ClueDirection;
        /**
         * Removes all the clues and clue sets of `clues`.
         */
        clear_clue_sets(): void;
        /**
         * Returns `true` if `clue` has a user guess for every cell. If all the
         * user guesses are correct, then `correct` is set to `true` as well.
         * @param clue The clue to inspect
         * @returns `true`, if the clue has guesses for every cell
         */
        clue_guessed(clue: Clue): [boolean, boolean];
        /**
         * Returns the direction of the clueset at `index`.
         *
         * This can be used in conjunction with
         * {@link Ipuz.Clues.get_n_clue_sets} to iterate through all the
         * directions in `clues`. This is the only place in the API where an
         * index is used, as opposed to a direction.
         * @param index the index of the clueset to lookup.
         * @returns The direction of the clueset indexed by `index`
         */
        clue_set_get_dir(index: number): ClueDirection;
        /**
         * Returns the label of the clueset at `direction`.
         *
         * This label can be used as a user visible discription the clue set.
         * @param direction the direction of the clue set
         * @returns The label of the clueset at `direction`
         */
        clue_set_get_label(direction: ClueDirection | null): string;
        /**
         * Returns the next clue set visible in `clues` after `direction`.
         *
         * For example, if called on a regular crossword with a `direction` of
         * {@link Ipuz.ClueDirection.ACROSS}, this would return
         * {@link Ipuz.ClueDirection.DOWN}.
         *
         * If `wrap` is `true` then this will wrap around to the beginning when
         * at the last visible clue sets, otherwise it will return
         * {@link Ipuz.ClueDirection.NONE}.
         *
         * Note that any clue sets of type {@link Ipuz.ClueDirection.HIDDEN}
         * will be skipped by this function.
         * @param direction A direction
         * @param wrap Whether to wrap around
         * @returns The next direction logically in `clues`, or {@link Ipuz.ClueDirection.NONE}
         */
        clue_set_next_direction(direction: ClueDirection | null, wrap: boolean): ClueDirection;
        /**
         * Returns the previous clue set visible in `clues` after `direction`.
         *
         * For example, if called on a regular crossword with a `direction` of
         * {@link Ipuz.ClueDirection.DOWN}, this would return
         * {@link Ipuz.ClueDirection.ACROSS}.
         *
         * If `wrap` is `true` then this will wrap around to the end when at the
         * first visible clue sets, otherwise it will return
         * {@link Ipuz.ClueDirection.NONE}.
         *
         * Note that any clue sets of type {@link Ipuz.ClueDirection.HIDDEN}
         * will be skipped by this function.
         * @param direction A direction
         * @param wrap Whether to wrap around
         * @returns The previous direction logically in `clues`, or {@link Ipuz.ClueDirection.NONE}
         */
        clue_set_prev_direction(direction: ClueDirection | null, wrap: boolean): ClueDirection;
        /**
         * [ RETHINK THIS FUNCTION. CANT WE GET IT FROM THE CELL?]
         * @param direction
         * @param coord
         */
        find_clue_by_coord(direction: ClueDirection | null, coord: CellCoord): Clue;
        /**
         * Searches for and returns the clue with `direction` and `label`.
         * @param direction The direction to search
         * @param label The label to look for
         * @returns The clue with `direction` and `label`, or `null`
         */
        find_clue_by_label(direction: ClueDirection | null, label: string): Clue | null;
        /**
         * Searches for and returns the clue with `direction` and `number`.
         *
         * This is different from the {@link Ipuz.ClueId} which uses the
         * index to refer to a clue. As an example the clue _2dn_ could be
         * have a clue id with an index of 0.
         * @param direction The direction to search
         * @param number The number to look for
         * @returns The clue with `direction` and `number`, or `null`
         */
        find_clue_by_number(direction: ClueDirection | null, number: number): Clue | null;
        /**
         * Calls `func` for each {@link Ipuz.Clue} in `clues`.
         * @param func The function to call for each clue
         */
        foreach_clue(func: CluesForeachClueFunc): void;
        /**
         * Returns the clue at `clue_id`, or `null`.
         * @param clue_id An id of a clue
         * @returns A clue at `clue_id`
         */
        get_clue_by_id(clue_id: ClueId): Clue | null;
        /**
         * Returns a string containing the solution of the puzzle for a given
         * clue. This string will have '?' characters embedded within it if
         * there are cells without solutions set yet.
         * @param clue_id An {@link Ipuz.ClueId} to get the clue string for
         * @returns The solution for the puzzle for `clue_id`. Returns `null` if `clue_id` points to an invalid clue
         */
        get_clue_string_by_id(clue_id: ClueId): string | null;
        /**
         * Returns an array of all clues in the direction of `direction`.
         * @param direction The direction of clues to search
         * @returns an array of all clues in the direction of `direction`
         */
        get_clues(direction: ClueDirection | null): Clue[];
        /**
         * Returns a string containing the guess in the puzzle for a given
         * clue. This string will have '?' characters embedded within it if
         * there are cells not completely filled out.
         * @param clue_id An {@link Ipuz.ClueId} to get the guesses string for
         * @returns The guesses for the puzzle for `clue_id`. Returns `null` if `clue_id` points to an invalid clue
         */
        get_guess_string_by_id(clue_id: ClueId): string | null;
        /**
         * Finds the {@link Ipuz.ClueId} of `clue` within `clues`.
         *
         * If `clue` doesn't exist in `clues`, then `false` is returned and
         * `clue_id`'s direction is set to {@link Ipuz.ClueDirection.NONE}.
         * @param clue The {@link Ipuz.Clue} to search for
         * @returns `true`, if `clue_id` was set to the id of `clue`
         */
        get_id_by_clue(clue: Clue | null): [boolean, ClueId];
        /**
         * Returns the number of clue sets associated with `clues`.
         * @returns The number of clue sets associated with `clues`
         */
        get_n_clue_sets(): number;
        /**
         * Returns the number of clues in `direction`.
         * @param direction The direction of clues to count
         * @returns The number of clues in `direction`
         */
        get_n_clues(direction: ClueDirection | null): number;
        /**
         * Removes `clue` from `clues`. The clue will also be unlinked from the
         * grid.
         * @param clue A clue to remove
         */
        remove_clue(clue: Clue): void;
        /**
         * Removes the clue set in the direction of `direction`. All the clues
         * associated with that clue set will be unreffed.
         * @param direction the direction of the clue set to remove
         */
        remove_clue_set(direction: ClueDirection | null): void;
        /**
         * Unlinks `clue` from the grid. That is to say, any of the cells that
         * `clue` pointed to will no longer refer to it.
         * @param clue A clue to remove
         */
        unlink_clue(clue: Clue): void;
        /**
         * Adds a new clue set to `clues`. This clue set will be in the
         * direction of `direction`, and will be empty. If `label` is set, then
         * it will set the label of the newly created clue set.
         *
         * The return value of this function is the direction of the newly
         * added clue set, and should be used to access the clue set going
         * forward. Most of the time, the returned direction will be identical
         * to `direction`. However, should you add multiple cluesets of the
         * same direction but different labels, then the returned direction
         * will be a new value starting at {@link Ipuz.ClueDirection.CUSTOM}.
         *
         * If a clue set already exists with an identical `direction` or label,
         * then a new clue set won't be created and
         * {@link Ipuz.ClueDirection.NONE} will be returned.
         * @param direction the direction of the newly added clue set
         * @param label an optional label for the newly added clue set
         * @virtual
         */
        vfunc_add_clue_set(direction: ClueDirection, label?: string | null): ClueDirection;
        /**
         * Removes all the clues and clue sets of `clues`.
         * @virtual
         */
        vfunc_clear_clue_sets(): void;
        /**
         * Returns `true` if `clue` has a user guess for every cell. If all the
         * user guesses are correct, then `correct` is set to `true` as well.
         * @param clue The clue to inspect
         * @virtual
         */
        vfunc_clue_guessed(clue: Clue): [boolean, boolean];
        /**
         * Returns the direction of the clueset at `index`.
         *
         * This can be used in conjunction with
         * {@link Ipuz.Clues.get_n_clue_sets} to iterate through all the
         * directions in `clues`. This is the only place in the API where an
         * index is used, as opposed to a direction.
         * @param index the index of the clueset to lookup.
         * @virtual
         */
        vfunc_clue_set_get_dir(index: number): ClueDirection;
        /**
         * Returns the label of the clueset at `direction`.
         *
         * This label can be used as a user visible discription the clue set.
         * @param direction the direction of the clue set
         * @virtual
         */
        vfunc_clue_set_get_label(direction: ClueDirection): string;
        /**
         * [ RETHINK THIS FUNCTION. CANT WE GET IT FROM THE CELL?]
         * @param direction
         * @param coord
         * @virtual
         */
        vfunc_find_clue_by_coord(direction: ClueDirection, coord: CellCoord): Clue;
        /**
         * Searches for and returns the clue with `direction` and `label`.
         * @param direction The direction to search
         * @param label The label to look for
         * @virtual
         */
        vfunc_find_clue_by_label(direction: ClueDirection, label: string): Clue | null;
        /**
         * Searches for and returns the clue with `direction` and `number`.
         *
         * This is different from the {@link Ipuz.ClueId} which uses the
         * index to refer to a clue. As an example the clue _2dn_ could be
         * have a clue id with an index of 0.
         * @param direction The direction to search
         * @param number The number to look for
         * @virtual
         */
        vfunc_find_clue_by_number(direction: ClueDirection, number: number): Clue | null;
        /**
         * Calls `func` for each {@link Ipuz.Clue} in `clues`.
         * @param func The function to call for each clue
         * @virtual
         */
        vfunc_foreach_clue(func: CluesForeachClueFunc): void;
        /**
         * Returns the clue at `clue_id`, or `null`.
         * @param clue_id An id of a clue
         * @virtual
         */
        vfunc_get_clue_by_id(clue_id: ClueId): Clue | null;
        /**
         * Returns a string containing the solution of the puzzle for a given
         * clue. This string will have '?' characters embedded within it if
         * there are cells without solutions set yet.
         * @param clue_id An {@link Ipuz.ClueId} to get the clue string for
         * @virtual
         */
        vfunc_get_clue_string_by_id(clue_id: ClueId): string | null;
        /**
         * Returns an array of all clues in the direction of `direction`.
         * @param direction The direction of clues to search
         * @virtual
         */
        vfunc_get_clues(direction: ClueDirection): Clue[];
        /**
         * Returns a string containing the guess in the puzzle for a given
         * clue. This string will have '?' characters embedded within it if
         * there are cells not completely filled out.
         * @param clue_id An {@link Ipuz.ClueId} to get the guesses string for
         * @virtual
         */
        vfunc_get_guess_string_by_id(clue_id: ClueId): string | null;
        /**
         * Finds the {@link Ipuz.ClueId} of `clue` within `clues`.
         *
         * If `clue` doesn't exist in `clues`, then `false` is returned and
         * `clue_id`'s direction is set to {@link Ipuz.ClueDirection.NONE}.
         * @param clue The {@link Ipuz.Clue} to search for
         * @virtual
         */
        vfunc_get_id_by_clue(clue: Clue | null): [boolean, ClueId];
        /**
         * Returns the number of clue sets associated with `clues`.
         * @virtual
         */
        vfunc_get_n_clue_sets(): number;
        /**
         * Returns the number of clues in `direction`.
         * @param direction The direction of clues to count
         * @virtual
         */
        vfunc_get_n_clues(direction: ClueDirection): number;
        /**
         * Removes `clue` from `clues`. The clue will also be unlinked from the
         * grid.
         * @param clue A clue to remove
         * @virtual
         */
        vfunc_remove_clue(clue: Clue): void;
        /**
         * Removes the clue set in the direction of `direction`. All the clues
         * associated with that clue set will be unreffed.
         * @param direction the direction of the clue set to remove
         * @virtual
         */
        vfunc_remove_clue_set(direction: ClueDirection): void;
        /**
         * Unlinks `clue` from the grid. That is to say, any of the cells that
         * `clue` pointed to will no longer refer to it.
         * @param clue A clue to remove
         * @virtual
         */
        vfunc_unlink_clue(clue: Clue): void;
        /**
         * Invokes the operation determined by `check_type` on `cell` and
         * `guesses` at `coord`.
         *
         * This function allows subclasses to specify puzzle-specific
         * behavior. For example, if `check_type` is `IPUZ_GRID_GUESSABLE`, then
         * it will return `true` if the cell can accept a users's guess (eg. is
         * not a block or null with crosswords, etc).
         *
         * This function is used by {@link Ipuz.Grid} to maintain consistency
         * of the puzzle in its operations. Subclasses should implement this
         * method in order to define their behavior. It is not expected that
         * most users will ever need to call this function.
         *
         * See {@link Ipuz.GridCheckType} for more information on the specific
         * operations.
         *
         * ::: note
         *     Some of the operation types can modify either guesses or cell.
         * @param cell A cell to check
         * @param coord The coordinate of `cell`
         * @param guesses The guesses to check
         * @param check_type The operation to perform at `coord`
         * @returns `true`, if the condition determined by %check_type is met
         */
        check_cell(cell: Cell, coord: CellCoord, guesses: Guesses, check_type: GridCheckType | null): boolean;
        /**
         * Invokes the operation determined by `check_type` on the stride guess
         * determined by `direction` and `index`.
         *
         * This function allows subclasses to specify puzzle-specific
         * behavior. Unlike {@link Ipuz.Grid.check_cell}, this function is
         * optional for puzzles as most puzzles don't use stride guesses. A
         * default handler is provided that just returns `false`.
         *
         * This function is used by {@link Ipuz.Grid} to maintain consistency
         * of the puzzle in its operations. Subclasses should implement this
         * method in order to define their behavior. It is not expected that
         * most users will ever need to call this function.
         *
         * See {@link Ipuz.GridCheckType} for more information on the specific
         * operations.
         *
         * ::: note
         *     Some of the operation types can modify either guesses or cell.
         * @param direction
         * @param index
         * @param guesses The guesses to check
         * @param check_type The operation to perform at `coord`
         * @returns `true`, if the condition determined by %check_type is met
         */
        check_stride(
            direction: ClueDirection | null,
            index: number,
            guesses: Guesses,
            check_type: GridCheckType | null,
        ): boolean;
        /**
         * Creates a fresh {@link Ipuz.Guesses}. It will be initialized to
         * the current state of the grid.
         *
         * The guessses can be used to solve the puzzle, and as such, its
         * format is puzzle-type dependent. See each puzzle's *Guesses*
         * section for more information on the format.
         *
         * Note that this method won't change the internal guesses of self. If
         * that is desired, you should pair this with
         * {@link Ipuz.Grid.set_guesses}. As an example:
         *
         * ```C
         * g_autoptr (IpuzGuesses) guesses;
         *
         * guesses = ipuz_grid_create_guesses (grid);
         * ipuz_grid_set_guesses (grid, guesses);
         * ```
         * @returns A new {@link Ipuz.Guesses} matching `self`
         */
        create_guesses(): Guesses;
        /**
         * Fixes the guesses associated with `self`. The result will be a
         * playable {@link Ipuz.Guesses} struct.
         *
         * ::: note
         *     This method will try to keep any guesses on cells intact. If a
         *     fresh playing grid is desired, then it's recommended to call
         *     {@link Ipuz.Grid.create_guesses}, and then attach it to `self`
         *     with {@link IpuzGrid.set_guesses}.
         */
        fix_guesses(): void;
        /**
         * Calls `func` for each {@link Ipuz.Cell} in `self`.
         * @param func The function to call for each cell
         */
        foreach_cell(func: GridForeachCellFunc): void;
        /**
         * Retrieves the cell at `coord`. If the coordinates are
         * outside the bounds of the grid then `null` will be returned.
         *
         * The coordinate system of the `self` is similar to that of a spreadsheet. The
         * origin is the upper left corner. Row's increase vertically downward, and
         * columns increase horizontally.
         * @param coord Coordinates for the cell.
         * @returns The cell at `coord`.
         */
        get_cell(coord: CellCoord): Cell | null;
        /**
         * Returns the {@link Ipuz.Guesses} associated with `self`.
         * @returns The {@link Ipuz.Guesses} associated with `self`
         */
        get_guesses(): Guesses;
        /**
         * Returns the number of rows in `self`.
         * @returns The height of `self`
         */
        get_height(): number;
        /**
         * Returns the number of columns in `self`.
         * @returns The width of `self`
         */
        get_width(): number;
        /**
         * Resizes `self` to the new size.
         *
         * If one of the dimensions is larger than before, the new cells will
         * be filled in with puzzle-appropriate default values.
         *
         * This function will not adjust its internal {@link Ipuz.Guesses}
         * object to match the new size. That can be done by a separate call
         * to {@link Ipuz.Grid.fix_guesses}.
         * @param new_width The new width
         * @param new_height The new height
         */
        resize(new_width: number, new_height: number): void;
        /**
         * Sets `guesses` for `self`. If there's a mismatch in the cell types
         * between `guesses` and `self` then `false` is returned. `guesses` will
         * be set regardless of the return value.
         *
         * Mismatches can be fixed by calling {@link Ipuz.Grid.fix_guesses}.
         * @param guesses The {@link Ipuz.Guesses} to set on self
         * @returns `true`, if guesses matches `self`
         */
        set_guesses(guesses?: Guesses | null): boolean;
        /**
         * Invokes the operation determined by `check_type` on `cell` and
         * `guesses` at `coord`.
         *
         * This function allows subclasses to specify puzzle-specific
         * behavior. For example, if `check_type` is `IPUZ_GRID_GUESSABLE`, then
         * it will return `true` if the cell can accept a users's guess (eg. is
         * not a block or null with crosswords, etc).
         *
         * This function is used by {@link Ipuz.Grid} to maintain consistency
         * of the puzzle in its operations. Subclasses should implement this
         * method in order to define their behavior. It is not expected that
         * most users will ever need to call this function.
         *
         * See {@link Ipuz.GridCheckType} for more information on the specific
         * operations.
         *
         * ::: note
         *     Some of the operation types can modify either guesses or cell.
         * @param cell A cell to check
         * @param coord The coordinate of `cell`
         * @param guesses The guesses to check
         * @param check_type The operation to perform at `coord`
         * @virtual
         */
        vfunc_check_cell(cell: Cell, coord: CellCoord, guesses: Guesses, check_type: GridCheckType): boolean;
        /**
         * Invokes the operation determined by `check_type` on the stride guess
         * determined by `direction` and `index`.
         *
         * This function allows subclasses to specify puzzle-specific
         * behavior. Unlike {@link Ipuz.Grid.check_cell}, this function is
         * optional for puzzles as most puzzles don't use stride guesses. A
         * default handler is provided that just returns `false`.
         *
         * This function is used by {@link Ipuz.Grid} to maintain consistency
         * of the puzzle in its operations. Subclasses should implement this
         * method in order to define their behavior. It is not expected that
         * most users will ever need to call this function.
         *
         * See {@link Ipuz.GridCheckType} for more information on the specific
         * operations.
         *
         * ::: note
         *     Some of the operation types can modify either guesses or cell.
         * @param direction
         * @param index
         * @param guesses The guesses to check
         * @param check_type The operation to perform at `coord`
         * @virtual
         */
        vfunc_check_stride(
            direction: ClueDirection,
            index: number,
            guesses: Guesses,
            check_type: GridCheckType,
        ): boolean;
    }

    namespace Grid {
        // Signal signatures
        interface SignalSignatures extends Puzzle.SignalSignatures {
            'notify::guesses': (pspec: GObject.ParamSpec) => void;
            'notify::height': (pspec: GObject.ParamSpec) => void;
            'notify::width': (pspec: GObject.ParamSpec) => void;
            'notify::annotation': (pspec: GObject.ParamSpec) => void;
            'notify::author': (pspec: GObject.ParamSpec) => void;
            'notify::block': (pspec: GObject.ParamSpec) => void;
            'notify::charset': (pspec: GObject.ParamSpec) => void;
            'notify::charset-str': (pspec: GObject.ParamSpec) => void;
            'notify::copyright': (pspec: GObject.ParamSpec) => void;
            'notify::date': (pspec: GObject.ParamSpec) => void;
            'notify::difficulty': (pspec: GObject.ParamSpec) => void;
            'notify::editor': (pspec: GObject.ParamSpec) => void;
            'notify::empty': (pspec: GObject.ParamSpec) => void;
            'notify::explanation': (pspec: GObject.ParamSpec) => void;
            'notify::intro': (pspec: GObject.ParamSpec) => void;
            'notify::license': (pspec: GObject.ParamSpec) => void;
            'notify::locale': (pspec: GObject.ParamSpec) => void;
            'notify::notes': (pspec: GObject.ParamSpec) => void;
            'notify::origin': (pspec: GObject.ParamSpec) => void;
            'notify::publication': (pspec: GObject.ParamSpec) => void;
            'notify::publisher': (pspec: GObject.ParamSpec) => void;
            'notify::puzzle-kind': (pspec: GObject.ParamSpec) => void;
            'notify::styles': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::uniqueid': (pspec: GObject.ParamSpec) => void;
            'notify::url': (pspec: GObject.ParamSpec) => void;
            'notify::version': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Puzzle.ConstructorProps {
            guesses: Guesses;
            height: number;
            width: number;
        }
    }

    /**
     * {@link Ipuz.Grid} is the base class for all grid-like puzzles. It
     * is used to access the {@link Ipuz.Cell} of a given puzzle kind,
     * and is indexed by {@link Ipuz.CellCoord}.
     *
     * ## Guesses
     *
     * One can associate an {@link Ipuz.Guesses} with a grid through
     * {@link Ipuz.Grid.set_guesses}. The guesses struct is mainly
     * intended to represent a user play-through of a game, though can be
     * used to store other information per-cell as well.
     *
     * Here's an example of how you would create and set the guesses on a
     * grid.
     *
     * ```C
     * g_autoptr (IpuzGuesses) guesses;
     *
     * guesses = ipuz_grid_create_guesses (grid);
     * ipuz_grid_set_guesses (grid, guesses);
     * ```
     *
     * If you're using guesses with a grid that's being edited, you should
     * use {@link Ipuz.Grid.fix_guesses} to keep them in sync. As an
     * example:
     *
     * ```C
     * g_autoptr (IpuzGuesses) guesses;
     *
     * guesses = ipuz_grid_create_guesses (grid);
     * ipuz_grid_set_guesses (grid, guesses);
     *
     * ...
     *
     * ipuz_grid_resize (grid, new_width, new_height);
     * ipuz_grid_fix_guesses (grid);
     * // guesses is updated to match grid
     *
     * g_assert_cmpint (ipuz_guesses_get_width (guesses), ==, new_width);
     * ```
     * @gir-type Class
     */
    class Grid extends Puzzle {
        static $gtype: GObject.GType<Grid>;

        // Properties

        /**
         * The {@link Ipuz.Guesses} associated with the grid.
         */
        get guesses(): Guesses;
        set guesses(val: Guesses);
        /**
         * Number of rows in the grid.
         */
        get height(): number;
        set height(val: number);
        /**
         * Number of columns in the grid.
         */
        get width(): number;
        set width(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Grid.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Grid.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Grid.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Grid.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Grid.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Grid.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Grid.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Grid.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Invokes the operation determined by `check_type` on `cell` and
         * `guesses` at `coord`.
         *
         * This function allows subclasses to specify puzzle-specific
         * behavior. For example, if `check_type` is `IPUZ_GRID_GUESSABLE`, then
         * it will return `true` if the cell can accept a users's guess (eg. is
         * not a block or null with crosswords, etc).
         *
         * This function is used by {@link Ipuz.Grid} to maintain consistency
         * of the puzzle in its operations. Subclasses should implement this
         * method in order to define their behavior. It is not expected that
         * most users will ever need to call this function.
         *
         * See {@link Ipuz.GridCheckType} for more information on the specific
         * operations.
         *
         * ::: note
         *     Some of the operation types can modify either guesses or cell.
         * @param cell A cell to check
         * @param coord The coordinate of `cell`
         * @param guesses The guesses to check
         * @param check_type The operation to perform at `coord`
         * @virtual
         */
        vfunc_check_cell(cell: Cell, coord: CellCoord, guesses: Guesses, check_type: GridCheckType): boolean;
        /**
         * Invokes the operation determined by `check_type` on the stride guess
         * determined by `direction` and `index`.
         *
         * This function allows subclasses to specify puzzle-specific
         * behavior. Unlike {@link Ipuz.Grid.check_cell}, this function is
         * optional for puzzles as most puzzles don't use stride guesses. A
         * default handler is provided that just returns `false`.
         *
         * This function is used by {@link Ipuz.Grid} to maintain consistency
         * of the puzzle in its operations. Subclasses should implement this
         * method in order to define their behavior. It is not expected that
         * most users will ever need to call this function.
         *
         * See {@link Ipuz.GridCheckType} for more information on the specific
         * operations.
         *
         * ::: note
         *     Some of the operation types can modify either guesses or cell.
         * @param direction
         * @param index
         * @param guesses The guesses to check
         * @param check_type The operation to perform at `coord`
         * @virtual
         */
        vfunc_check_stride(
            direction: ClueDirection,
            index: number,
            guesses: Guesses,
            check_type: GridCheckType,
        ): boolean;

        // Methods

        /**
         * Invokes the operation determined by `check_type` on `cell` and
         * `guesses` at `coord`.
         *
         * This function allows subclasses to specify puzzle-specific
         * behavior. For example, if `check_type` is `IPUZ_GRID_GUESSABLE`, then
         * it will return `true` if the cell can accept a users's guess (eg. is
         * not a block or null with crosswords, etc).
         *
         * This function is used by {@link Ipuz.Grid} to maintain consistency
         * of the puzzle in its operations. Subclasses should implement this
         * method in order to define their behavior. It is not expected that
         * most users will ever need to call this function.
         *
         * See {@link Ipuz.GridCheckType} for more information on the specific
         * operations.
         *
         * ::: note
         *     Some of the operation types can modify either guesses or cell.
         * @param cell A cell to check
         * @param coord The coordinate of `cell`
         * @param guesses The guesses to check
         * @param check_type The operation to perform at `coord`
         * @returns `true`, if the condition determined by %check_type is met
         */
        check_cell(cell: Cell, coord: CellCoord, guesses: Guesses, check_type: GridCheckType | null): boolean;
        /**
         * Invokes the operation determined by `check_type` on the stride guess
         * determined by `direction` and `index`.
         *
         * This function allows subclasses to specify puzzle-specific
         * behavior. Unlike {@link Ipuz.Grid.check_cell}, this function is
         * optional for puzzles as most puzzles don't use stride guesses. A
         * default handler is provided that just returns `false`.
         *
         * This function is used by {@link Ipuz.Grid} to maintain consistency
         * of the puzzle in its operations. Subclasses should implement this
         * method in order to define their behavior. It is not expected that
         * most users will ever need to call this function.
         *
         * See {@link Ipuz.GridCheckType} for more information on the specific
         * operations.
         *
         * ::: note
         *     Some of the operation types can modify either guesses or cell.
         * @param direction
         * @param index
         * @param guesses The guesses to check
         * @param check_type The operation to perform at `coord`
         * @returns `true`, if the condition determined by %check_type is met
         */
        check_stride(
            direction: ClueDirection | null,
            index: number,
            guesses: Guesses,
            check_type: GridCheckType | null,
        ): boolean;
        /**
         * Creates a fresh {@link Ipuz.Guesses}. It will be initialized to
         * the current state of the grid.
         *
         * The guessses can be used to solve the puzzle, and as such, its
         * format is puzzle-type dependent. See each puzzle's *Guesses*
         * section for more information on the format.
         *
         * Note that this method won't change the internal guesses of self. If
         * that is desired, you should pair this with
         * {@link Ipuz.Grid.set_guesses}. As an example:
         *
         * ```C
         * g_autoptr (IpuzGuesses) guesses;
         *
         * guesses = ipuz_grid_create_guesses (grid);
         * ipuz_grid_set_guesses (grid, guesses);
         * ```
         * @returns A new {@link Ipuz.Guesses} matching `self`
         */
        create_guesses(): Guesses;
        /**
         * Fixes the guesses associated with `self`. The result will be a
         * playable {@link Ipuz.Guesses} struct.
         *
         * ::: note
         *     This method will try to keep any guesses on cells intact. If a
         *     fresh playing grid is desired, then it's recommended to call
         *     {@link Ipuz.Grid.create_guesses}, and then attach it to `self`
         *     with {@link IpuzGrid.set_guesses}.
         */
        fix_guesses(): void;
        /**
         * Calls `func` for each {@link Ipuz.Cell} in `self`.
         * @param func The function to call for each cell
         */
        foreach_cell(func: GridForeachCellFunc): void;
        /**
         * Retrieves the cell at `coord`. If the coordinates are
         * outside the bounds of the grid then `null` will be returned.
         *
         * The coordinate system of the `self` is similar to that of a spreadsheet. The
         * origin is the upper left corner. Row's increase vertically downward, and
         * columns increase horizontally.
         * @param coord Coordinates for the cell.
         * @returns The cell at `coord`.
         */
        get_cell(coord: CellCoord): Cell | null;
        /**
         * Returns the {@link Ipuz.Guesses} associated with `self`.
         * @returns The {@link Ipuz.Guesses} associated with `self`
         */
        get_guesses(): Guesses;
        /**
         * Returns the number of rows in `self`.
         * @returns The height of `self`
         */
        get_height(): number;
        /**
         * Returns the number of columns in `self`.
         * @returns The width of `self`
         */
        get_width(): number;
        /**
         * Resizes `self` to the new size.
         *
         * If one of the dimensions is larger than before, the new cells will
         * be filled in with puzzle-appropriate default values.
         *
         * This function will not adjust its internal {@link Ipuz.Guesses}
         * object to match the new size. That can be done by a separate call
         * to {@link Ipuz.Grid.fix_guesses}.
         * @param new_width The new width
         * @param new_height The new height
         */
        resize(new_width: number, new_height: number): void;
        /**
         * Sets `guesses` for `self`. If there's a mismatch in the cell types
         * between `guesses` and `self` then `false` is returned. `guesses` will
         * be set regardless of the return value.
         *
         * Mismatches can be fixed by calling {@link Ipuz.Grid.fix_guesses}.
         * @param guesses The {@link Ipuz.Guesses} to set on self
         * @returns `true`, if guesses matches `self`
         */
        set_guesses(guesses?: Guesses | null): boolean;
    }

    namespace Nonogram {
        // Signal signatures
        interface SignalSignatures extends Grid.SignalSignatures {
            'notify::space': (pspec: GObject.ParamSpec) => void;
            'notify::guesses': (pspec: GObject.ParamSpec) => void;
            'notify::height': (pspec: GObject.ParamSpec) => void;
            'notify::width': (pspec: GObject.ParamSpec) => void;
            'notify::annotation': (pspec: GObject.ParamSpec) => void;
            'notify::author': (pspec: GObject.ParamSpec) => void;
            'notify::block': (pspec: GObject.ParamSpec) => void;
            'notify::charset': (pspec: GObject.ParamSpec) => void;
            'notify::charset-str': (pspec: GObject.ParamSpec) => void;
            'notify::copyright': (pspec: GObject.ParamSpec) => void;
            'notify::date': (pspec: GObject.ParamSpec) => void;
            'notify::difficulty': (pspec: GObject.ParamSpec) => void;
            'notify::editor': (pspec: GObject.ParamSpec) => void;
            'notify::empty': (pspec: GObject.ParamSpec) => void;
            'notify::explanation': (pspec: GObject.ParamSpec) => void;
            'notify::intro': (pspec: GObject.ParamSpec) => void;
            'notify::license': (pspec: GObject.ParamSpec) => void;
            'notify::locale': (pspec: GObject.ParamSpec) => void;
            'notify::notes': (pspec: GObject.ParamSpec) => void;
            'notify::origin': (pspec: GObject.ParamSpec) => void;
            'notify::publication': (pspec: GObject.ParamSpec) => void;
            'notify::publisher': (pspec: GObject.ParamSpec) => void;
            'notify::puzzle-kind': (pspec: GObject.ParamSpec) => void;
            'notify::styles': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::uniqueid': (pspec: GObject.ParamSpec) => void;
            'notify::url': (pspec: GObject.ParamSpec) => void;
            'notify::version': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Grid.ConstructorProps {
            space: string;
        }
    }

    /**
     * A nonogram is a picture-based logic puzzle in which the player uses
     * hints on the edge of the puzzle to reveal a picture.
     *
     * ![Example of a nonogram](nonogram.svg)
     * _Example of a solved nonogram_
     *
     * Nonograms can either be monochrome or have color groups. Monochrome
     * puzzles are more common, but both are suppported. Color nonograms
     * are represented by {@link Ipuz.NonogramColor}, which is a subclass
     * of {@link Ipuz.Nonogram}.
     *
     * ::: warning
     *     Nonogram puzzles are currently a libipuz-only extension. As
     *     such, it's not currently expected that other programs will be
     *     able to parse them.
     *
     * # Representation
     *
     * The {@link Ipuz.CellType} is used to determine whether an
     * {@link Ipuz.Cell} is filled in or blank. If it's a `BLOCK`, then
     * it's filled in, while `NORMAL` indicates a blank cell. A `null` cell
     * could indicate a shaped puzzle, though is not traditionally used
     * with nonograms. In addition, the `solution` field is set to
     * {@link Ipuz.Puzzle.block}, though can generally be ignored with
     * monochromatic puzzles.
     *
     * The cell's {@link Ipuz.Style} is set by default to a background of
     * black, although puzzle authors can override it.
     *
     * Other fields in the cell are undefined.
     *
     * See {@link Ipuz.NonogramColor} for information on how color
     * nonograms are represented.
     *
     * ## Guesses
     *
     * Nonograms use the following convention with an
     * {@link Ipuz.Guesses} struct to record player progress solving a
     * puzzle in its grid:
     *
     *  * A guess of {@link Ipuz.Puzzle.block} is used to indicate a
     *    block was guessed correctly. This defaults to the string `"#"`
     *  * A guess of {@link Ipuz.Nonogram.space} is used to indicate
     *    that a cell has been eliminated as a possible block. This
     *    defaults to the string `"."`.
     *  * A guess of `null` is used to indicate that the player has yet to
     *    determine if a cell is a block or not.
     *
     * {@link Ipuz.Nonogram} also uses the stride_guess of the guesses
     * struct to keep track of whether the cells for the number hints have
     * been found. This is required for nonogram implementations that let
     * the user manually cross off numbers.
     *
     * The stride guess should be a UTF-8 string with the same number of
     * characters as the number of hints in that row/column. By
     * convention, it uses the {@link Ipuz.Puzzle.block} and
     * {@link Ipuz.Puzzle.empty} properties to indicate if a number has
     * been crossed off or not.
     *
     * To make it easier to work with the stride, the following
     * convenience functions are provided:
     *
     * * {@link Ipuz.Nonogram.set_count_crossed_off}
     * * {@link Ipuz.Nonogram.get_count_crossed_off}
     *
     * ### Guesses Example
     *
     * For example, consider the following row being guessed from a
     * nonogram puzzle:
     *
     * ![Example of a nonogram guess row](nonogram-guesses-row.png)
     * _A row guessed from a nonogram_
     *
     * In this example, the guess strings in the row would be set to:
     * ```C
     * [ NULL, ".", NULL, ".", "#", "#", "#", "#", ".", NULL ]
     * ```
     *
     * And the `stride_guess` for that row would be:
     *
     * ```
     * // The stride guesses are 1 and 4 in this example
     * "0#"
     * ```
     *
     * This indicates that the blocks for the number `4` have been found
     * and should be rendered as being eliminated.
     *
     * ## Editing
     *
     * Nonograms have one fix function —
     * {@link Ipuz.Nonogram.fix_clues}. This should be called after any
     * changes to block polarity or grouping. It will update the internal
     * clues and styles.
     *
     * Note that not every grid can be uniquely solved as a nonogram. Some
     * nonogram puzzles can result in multiple valid solutions. When
     * creating a nonogram, care must be taken to be sure it's solvable.
     * @gir-type Class
     */
    class Nonogram extends Grid {
        static $gtype: GObject.GType<Nonogram>;

        // Properties

        /**
         * The text value that represents a space in the saved file
         *
         * This value is used to indicate a the user eliminated the
         * possibility of a block in a cell. It is not recommended to change
         * this value, as it is written to the save file.
         *
         * This string must be only be one unicode character long, and defaults to `"."`
         */
        get space(): string;
        set space(val: string);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Nonogram.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Nonogram.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Nonogram;

        // Signals

        /** @signal */
        connect<K extends keyof Nonogram.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Nonogram.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Nonogram.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Nonogram.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Nonogram.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Nonogram.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Fixes the clues of `self` to match the current grid state.
         *
         * This function will recalculate the clues and internal groups for a
         * nonogram. It should be called every time the cells in the grid
         * changes.
         */
        fix_clues(): void;
        /**
         * Returns all the cells that are set to `group`. For monochrome
         * nonograms, the group should be {@link Ipuz.Puzzle.block}.
         * @param group A group to get the cells of
         * @returns the cells associated with group
         */
        get_cells_by_group(group: string): CellCoordArray;
        /**
         * Returns an array containing the run of {@link Ipuz.NonogramClue}
         * indicated by `index` and `direction`.
         *
         * As an example, consider the second row of the example at
         * {@link Ipuz.Nonogram}:
         *
         * ![Nonogram row](nonogram-row.png)
         *
         * It will be represented by an array with four
         * {@link Ipuz.NonogramClue} structs. The `count` of the clues will be
         * `[5, 4, 3, 3]`, and the `group` of all four clues will be
         * {@link Ipuz.Puzzle.block}.
         *
         * ```C
         * GArray *row;
         * IpuzNonogramClue clue_segment;
         *
         * row = ipuz_nonogram_get_clues (nonogram, 1, IPUZ_CLUE_DIRECTION_ACROSS);
         * g_assert_cmpint (row->len, ==, 4);
         *
         * clue_segment = g_array_index (row, IpuzNonogramClue, 2);
         * g_assert_cmping (clue_segment.index, ==, 3);
         * g_assert_cmpstr (clue_segment.group, ==,
         *                  ipuz_puzzle_get_block (IPUZ_PUZZLE (nonogram)));
         * ```
         *
         * ::: note
         *     This function will return an empty array — and not `null` — if
         *     the puzzle has no blocks in the indicated row or column.
         * @param direction Direction of the clues
         * @param index Index of the row or column
         * @returns An array containing the run of {@link Ipuz.NonogramClue} segments
         */
        get_clues(direction: ClueDirection | null, index: number): NonogramClue[];
        /**
         * Returns `true` if the number identified by the arguments should be
         * crossed off. This function is essentially a wrapper around parsing
         * the `stride_guess` directly.
         * @param direction Direction of the clues
         * @param index Index of the row or column
         * @param count_index The index of the number within those clues to set
         * @returns `true`, if the number identified by the arguments should be crossed off
         */
        get_count_crossed_off(direction: ClueDirection | null, index: number, count_index: number): boolean;
        /**
         * Returns the group at `index`.
         *
         * This function can be used with {@link Ipuz.Nonogram.get_n_groups}
         * to iterate through all the groups in a puzzle. As an example, the
         * following code snippet will print out all the groups in a color
         * nonogram as well as their color.
         *
         * ```C
         * for (guint i = 0; i < ipuz_nonogram_get_n_groups (nonogram); i++)
         *   {
         *     const gchar *group;
         *     IpuzStyle *style;
         *
         *     group = ipuz_nonogram_get_group (nonogram, i);
         *     style = ipuz_puzzle_get_style (IPUZ_PUZZLE (nonogram), group);
         *     g_assert (style); // guard against invalid nonogram files
         *     g_print ("group %s has a color of %s\n", group,
         *              ipuz_style_get_bg_color (style));
         *   }
         * ```
         * @param index the index of a group
         * @returns the group at `index`.
         */
        get_group(index: number): string;
        /**
         * Returns the number of different groups within `self`.
         *
         * For a non-blank monochrome nonogram, this is expected to be 1. For
         * {@link Ipuz.NonogramColor} objects, this will be the number of
         * different distinct group identifiers.
         *
         * See {@link Ipuz.Nonogram.get_group} for an example of this
         * function being used.
         * @returns The number of different groups within `self`
         */
        get_n_groups(): number;
        /**
         * Returns the text value that represents a _space_ in
         * {@link Ipuz.Guesses}. That is to say, a cell that has been
         * eliminated from possibly being a block.
         * @returns The text value that represents a space in guesses.
         */
        get_space(): string;
        /**
         * Prints `self` to stdout. This method is meant to be used for
         * debugging.
         */
        print(): void;
        /**
         * Crosses off a number within the guesses in the
         * {@link Ipuz.Guesses} associated with `self`.
         *
         * As the player solves the puzzle, they will want to reflect their
         * success in guessing values by crossing off the numbers. This state
         * is stored in the `stride_guess`. This function is essentially a
         * wrapper around parsing the `stride_guess` directly.
         *
         * As an example, consider the second row of the example at
         * {@link Ipuz.Nonogram}:
         *
         * ![Nonogram row](nonogram-row.png)
         *
         * ```C
         * // The row stride is initially "0000" at the start
         *
         * ipuz_nonogram_set_count_crossed_off (nonogram,
         *                                      IPUZ_CLUE_DIRECTION_ACROSS, 1, // Second row
         *                                      1,                             // Second number
         *                                      TRUE);
         *
         * // The row stride is now "0#00" to reflect that the second number (a four)
         * // has been crossed off.
         * ```
         * @param direction Direction of the clues
         * @param index Index of the row or column
         * @param count_index The index of the number within those clues to set
         * @param crossed_off whether to cross off the number
         */
        set_count_crossed_off(
            direction: ClueDirection | null,
            index: number,
            count_index: number,
            crossed_off: boolean,
        ): void;
        /**
         * Sets the text value that represents a _space_. That is to say, a
         * cell that has been eliminated from possibly being a block.
         *
         * This value is used to indicate space cells in {@link Ipuz.Guesses}
         * and when saving the puzzle. It is not recommended to change this
         * value, as other implementations may expect it to be `"."`.
         *
         * `space` must be only be one unicode character long.
         * @param space The text value that represents a block in the guesse file
         */
        set_space(space: string): void;
    }

    namespace NonogramColor {
        // Signal signatures
        interface SignalSignatures extends Nonogram.SignalSignatures {
            'notify::space': (pspec: GObject.ParamSpec) => void;
            'notify::guesses': (pspec: GObject.ParamSpec) => void;
            'notify::height': (pspec: GObject.ParamSpec) => void;
            'notify::width': (pspec: GObject.ParamSpec) => void;
            'notify::annotation': (pspec: GObject.ParamSpec) => void;
            'notify::author': (pspec: GObject.ParamSpec) => void;
            'notify::block': (pspec: GObject.ParamSpec) => void;
            'notify::charset': (pspec: GObject.ParamSpec) => void;
            'notify::charset-str': (pspec: GObject.ParamSpec) => void;
            'notify::copyright': (pspec: GObject.ParamSpec) => void;
            'notify::date': (pspec: GObject.ParamSpec) => void;
            'notify::difficulty': (pspec: GObject.ParamSpec) => void;
            'notify::editor': (pspec: GObject.ParamSpec) => void;
            'notify::empty': (pspec: GObject.ParamSpec) => void;
            'notify::explanation': (pspec: GObject.ParamSpec) => void;
            'notify::intro': (pspec: GObject.ParamSpec) => void;
            'notify::license': (pspec: GObject.ParamSpec) => void;
            'notify::locale': (pspec: GObject.ParamSpec) => void;
            'notify::notes': (pspec: GObject.ParamSpec) => void;
            'notify::origin': (pspec: GObject.ParamSpec) => void;
            'notify::publication': (pspec: GObject.ParamSpec) => void;
            'notify::publisher': (pspec: GObject.ParamSpec) => void;
            'notify::puzzle-kind': (pspec: GObject.ParamSpec) => void;
            'notify::styles': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::uniqueid': (pspec: GObject.ParamSpec) => void;
            'notify::url': (pspec: GObject.ParamSpec) => void;
            'notify::version': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Nonogram.ConstructorProps {}
    }

    /**
     * A color nonogram puzzle.
     *
     * A nonogram is a picture-based logic puzzle in which the player uses
     * hints on the edge of the puzzle to reveal a picture. Unlike a more
     * traditional monochrome nonogram, color nonograms use different
     * colors with its hints to reveal a multi-colored image.
     *
     * # Representation
     *
     * The {@link Ipuz.CellType} is used to determine whether a cell is
     * filled in or blank. If it's a `BLOCK`, then it's filled in, while
     * `NORMAL` indicates a blank cell. A `null` cell could indicate a
     * shaped puzzle, though is not traditionally used with nonograms.
     *
     * With color nonograms, if the cell is a block then the solution
     * field is set to a string to indicate which grouping the cell
     * belongs to. This grouping is also reflected in the
     * {@link Ipuz.NonogramClue} segments. All other fields of
     * {@link Ipuz.Cell} (such as number and label) are ignored.
     *
     * Color nonograms are expected to have a style with the same
     * style_name as the group to indicate the color to be used with a
     * given group. All other fields of the style are undefined. If a
     * style with that name doesn't exist, apps can choose an arbitrary
     * color to define that group.
     *
     * ## Representation Examples
     *
     * For example, here's a simple example of a color nonogram puzzle's
     * on-disk representation. In this example, there are two different
     * colors in use.
     *
     * ```json
     *  {
     *     "version": "http://ipuz.org/v2",
     *     "kind": [ "https://libipuz.org/nonogram#1", "https://libipuz.org/nonogram/colornonogram#1" ],
     *     "dimensions": { "width": 3, "height": 3 },
     *     "styles": {
     *         "A": {"color": "#f8e45c" },
     *         "B": {"color": "#813d9c" }
     *     },
     *     "puzzle": [ [ 0 , "A",  0  ],
     *                 ["A", "B", "B" ],
     *                 ["B" , 0 , "A" ] ]
     * }
     * ```
     *
     * Here's an example of working with the styles:
     *
     * ```C
     * static void
     * paint_cell (IpuzPuzzle    *puzzle,
     *             IpuzCellCoord *coord)
     * {
     *   IpuzCell *cell;
     *
     *   cell = ipuz_grid_get_cell (IPUZ_GRID (puzzle), coord);
     *
     *   if (ipuz_cell_get_cell_type (cell) == IPUZ_CELL_BLOCK)
     *     {
     *        IpuzStyle *style;
     *
     *        style = ipuz_cell_get_style (cell);
     *
     *        // If a puzzle doesn't have a style defined, then pick a random one for that group
     *        if (style == NULL)
     *          style = get_default_style (ipuz_cell_get_solution (cell));
     *
     *        // Do something with the color
     *        paint_block_at_coord (coord, ipuz_style_get_bg_color (style));
     *     }
     * }
     * ```
     *
     * Note that {@link Ipuz.Puzzle.get_style} can also return the style
     * for a style_group. This is useful when matching to a group with a
     * {@link Ipuz.NonogramClue}.
     *
     * ## Guesses
     *
     * {@link Ipuz.NonogramColor} objects follow a similar convention to
     * regular nonograms to record player progress in solving a puzzle.
     *
     *  * A guess of a block uses the style name to indicate
     *  * A guess of {@link Ipuz.Nonogram.space} is used to indicate
     *    that a cell has been eliminated as a possible block. This
     *    defaults to the string `"."`.
     *  * A guess of `null` is used to indicate that the player has yet to
     *    determine if a cell is a block or not.
     *
     * In addition, {@link Ipuz.NonogramColor} uses the stride_guess of
     * the guesses struct to keep track of whether the cells for the
     * number hints have been found. This is required for puzzle games
     * that let the user manually cross off numbers. See
     * {@link Ipuz.Nonogram} for full details.
     * @gir-type Class
     */
    class NonogramColor extends Nonogram {
        static $gtype: GObject.GType<NonogramColor>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: NonogramColor.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<NonogramColor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): NonogramColor;

        // Signals

        /** @signal */
        connect<K extends keyof NonogramColor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, NonogramColor.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof NonogramColor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, NonogramColor.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof NonogramColor.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<NonogramColor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace Puzzle {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::annotation': (pspec: GObject.ParamSpec) => void;
            'notify::author': (pspec: GObject.ParamSpec) => void;
            'notify::block': (pspec: GObject.ParamSpec) => void;
            'notify::charset': (pspec: GObject.ParamSpec) => void;
            'notify::charset-str': (pspec: GObject.ParamSpec) => void;
            'notify::copyright': (pspec: GObject.ParamSpec) => void;
            'notify::date': (pspec: GObject.ParamSpec) => void;
            'notify::difficulty': (pspec: GObject.ParamSpec) => void;
            'notify::editor': (pspec: GObject.ParamSpec) => void;
            'notify::empty': (pspec: GObject.ParamSpec) => void;
            'notify::explanation': (pspec: GObject.ParamSpec) => void;
            'notify::intro': (pspec: GObject.ParamSpec) => void;
            'notify::license': (pspec: GObject.ParamSpec) => void;
            'notify::locale': (pspec: GObject.ParamSpec) => void;
            'notify::notes': (pspec: GObject.ParamSpec) => void;
            'notify::origin': (pspec: GObject.ParamSpec) => void;
            'notify::publication': (pspec: GObject.ParamSpec) => void;
            'notify::publisher': (pspec: GObject.ParamSpec) => void;
            'notify::puzzle-kind': (pspec: GObject.ParamSpec) => void;
            'notify::styles': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::uniqueid': (pspec: GObject.ParamSpec) => void;
            'notify::url': (pspec: GObject.ParamSpec) => void;
            'notify::version': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            annotation: string;
            author: string;
            block: string;
            charset: Charset;
            charset_str: string;
            charsetStr: string;
            copyright: string;
            date: string;
            difficulty: string;
            editor: string;
            empty: string;
            explanation: string;
            intro: string;
            license: string;
            locale: string;
            notes: string;
            origin: string;
            publication: string;
            publisher: string;
            puzzle_kind: PuzzleKind;
            puzzleKind: PuzzleKind;
            styles: GLib.HashTable<any, any>;
            title: string;
            uniqueid: string;
            url: string;
            version: string;
        }
    }

    /**
     * {@link Ipuz.Puzzle} is the base class for all puzzles that libipuz
     * supports. It contains the common puzzle metadata that all puzzle
     * kinds share.
     *
     * The {@link Ipuz.Puzzle} also stores global {@link Ipuz.Style}s that are
     * shared among most puzzle kinds.
     *
     * ::: info
     *     We refer to puzzle _**kinds**_ instead of puzzle _**types**_
     *     throughout the documentation when talking about puzzles. This
     *     is to match the terminology used in the ipuz spec, as well as
     *     to avoid confusion with {@link GObject.Type} and C types.
     *
     * # Using {@link Ipuz.Puzzle}
     *
     * The {@link Ipuz.Puzzle} API is the expected way to load a new puzzle from
     * data. For example:
     *
     * ```C
     * gboolean
     * load_puzzle (const gchar *filename)
     * {
     *   g_autoptr (IpuzPuzzle) puzzle = NULL;
     *   g_autoptr (GError) error = NULL;
     *
     *   puzzle = ipuz_puzzle_new_from_file (filename, &error);
     *   if (error != NULL)
     *     {
     *       g_critical ("Unable to load %s: %s\n", filename, error->message);
     *       return FALSE;
     *     }
     *
     *   // Do something with the puzzle
     *   if (ipuz_puzzle_get_puzzle_kind (puzzle) == IPUZ_PUZZLE_CRYPTIC)
     *     g_print ("Puzzle %s is a cryptic crossword\n", filename);
     *
     *   return TRUE;
     * }
     * ```
     *
     * It is also possible to create a new puzzle from scratch using
     * {@link GObject.Object.new}. However, a standalone
     * {@link Ipuz.Puzzle} is not supported or meaningful:
     *
     * ```C
     * crossword = g_object_new (IPUZ_TYPE_CROSSWORD, NULL);
     *
     * // Do something with the crossword
     * fill_in_crossword (crossword, my_data);
     *
     * // Don't do this:
     * puzzle = g_object_new (IPUZ_TYPE_PUZZLE, NULL);
     * ```
     *
     * ## String handling
     *
     * The [Ipuz spec](https://libipuz.org/ipuz-spec.html) specifies
     * certain tags are *HTML text* and not just a plain string. For those
     * values, we sill convert them into
     * [PangoMarkup](https://docs.gtk.org/Pango/pango_markup.html) on
     * parsing them so that they can be used by GTK. Those tags must be
     * set as valid `PangoMarkup` as well.
     *
     * See the [Text Handling](text-handling.html) section for additional
     * information.
     *
     * ## Subclassing
     *
     * There is currently no way to write a standalone subclass of
     * {@link Ipuz.Puzzle} that can be loaded from disk through
     * {@link Ipuz.Puzzle.new_from_file}. The parsing code is only
     * internally available to libipuz.
     *
     * It is possible to inherit classes {@link Ipuz.Grid} and manually
     * set the grid and fields.
     *
     * If you have written an interesting puzzle type, please consider
     * submiting it to libipuz (or the upstream spec).
     * @gir-type Class
     */
    class Puzzle extends GObject.Object {
        static $gtype: GObject.GType<Puzzle>;

        // Properties

        /**
         * Non-displayed annotation.
         */
        get annotation(): string;
        set annotation(val: string);
        /**
         * Author of the puzzle.
         *
         * **Note:** This property can be styled with
         * [PangoMarkup](https://docs.gtk.org/Pango/pango_markup.html). See
         * the [Text Handling](text-handling.html) section for additional
         * information.
         */
        get author(): string;
        set author(val: string);
        /**
         * The text value that represents a block in the saved file
         *
         * This value is used to indicate block squares when saving the
         * puzzle. It is not recommended to change this value, as other
         * implementations may expect it to be `#`.
         *
         * This must be only be one unicode character long.
         */
        get block(): string;
        set block(val: string);
        /**
         * Characters that can be entered in the puzzle.  Setting this
         * explicitly will override the charset defined by
         * {@link Ipuz.Puzzle.locale}.
         *
         * Having a charset that doesn't match the characters of the
         * solution of `self` may cause problems for tools that use the
         * puzzle.
         *
         * Updating this value will also keep {@link Ipuz.Puzzle.charset_str}
         * in sync.
         */
        get charset(): Charset;
        set charset(val: Charset);
        /**
         * Characters that can be entered in the puzzle, in string form.
         * Setting this explicitly will override the charset defined by
         * {@link Ipuz.Puzzle.locale}.
         *
         * Having a charset that doesn't match the characters of the
         * solution of `self` may cause problems for tools that use the
         * puzzle.
         *
         * Updating this value will also keep {@link Ipuz.Puzzle.charset}
         * in sync.
         */
        get charset_str(): string;
        set charset_str(val: string);
        /**
         * Characters that can be entered in the puzzle, in string form.
         * Setting this explicitly will override the charset defined by
         * {@link Ipuz.Puzzle.locale}.
         *
         * Having a charset that doesn't match the characters of the
         * solution of `self` may cause problems for tools that use the
         * puzzle.
         *
         * Updating this value will also keep {@link Ipuz.Puzzle.charset}
         * in sync.
         */
        get charsetStr(): string;
        set charsetStr(val: string);
        /**
         * Copyright information for the puzzle.
         *
         * As an example: `"© 2024 Yoyodyne, Inc"`.
         *
         * Additional licence information can be included in the
         * {@link Ipuz.Puzzle.license} property.
         */
        get copyright(): string;
        set copyright(val: string);
        /**
         * Date of puzzle or publication date.
         */
        get date(): string;
        set date(val: string);
        /**
         * Difficulty of the puzzle. Advisory only, as there is no standard for difficulty.
         */
        get difficulty(): string;
        set difficulty(val: string);
        /**
         * Editor of the puzzle.
         *
         * **Note:** This property can be styled with
         * [PangoMarkup](https://docs.gtk.org/Pango/pango_markup.html). See
         * the [Text Handling](text-handling.html) section for additional
         * information.
         */
        get editor(): string;
        set editor(val: string);
        /**
         * Text value that represents an empty cell.
         *
         * This value is used to indicate empty cells when saving the
         * puzzle. It is not recommended to change this value.
         */
        get empty(): string;
        set empty(val: string);
        /**
         * Text to be displayed after a successful solve.
         *
         * **Note:** This property can be styled with
         * [PangoMarkup](https://docs.gtk.org/Pango/pango_markup.html). See
         * the [Text Handling](text-handling.html) section for additional
         * information.
         */
        get explanation(): string;
        set explanation(val: string);
        /**
         * Text displayed above the puzzle.
         *
         * **Note:** This property can be styled with
         * [PangoMarkup](https://docs.gtk.org/Pango/pango_markup.html). See
         * the [Text Handling](text-handling.html) section for additional
         * information.
         */
        get intro(): string;
        set intro(val: string);
        /**
         * License of the puzzle.
         *
         * The license is expected to be a recognized description of a
         * well-known license, and not the full text of the license. The
         * description should come from the [SPDX License
         * List](https://spdx.org/licenses/) when applicable. Otherwise, a
         * URL is recommended for a custom or proprietary license.
         *
         * Example license strings:
         *
         * ```
         * "CC-BY-SA-2.0"
         * "https://www.example.com/licensing.html"
         * ```
         *
         *
         * This is a libipuz-only extension to the ipuz spec.
         */
        get license(): string;
        set license(val: string);
        /**
         * Locale of the puzzle.
         *
         * The can be used for filtering by the language of the puzzle for
         * users in applications. It also changes the default
         * {@link Ipuz.Puzzle.charset} type. It should not affect the
         * parsing of the puzzle at all — any encoding information included
         * is ignored.
         *
         * Puzzle that don’t have a language tag explicitly set default to
         * the “C” Locale.
         *
         * Example locale strings:
         *
         * ```
         * "en_NZ"
         * "C"
         * ```
         *
         *
         * This is a libipuz-only extension to the ipuz spec.
         */
        get locale(): string;
        set locale(val: string);
        /**
         * Notes about the puzzle.
         *
         * **Note:** This property can be styled with
         * [PangoMarkup](https://docs.gtk.org/Pango/pango_markup.html). See
         * the [Text Handling](text-handling.html) section for additional
         * information.
         */
        get notes(): string;
        set notes(val: string);
        /**
         * Program-specific information about the program that wrote the puzzle file.
         *
         * Example origin string:
         *
         * ```
         * "Created by Yoyodyne Crossword Editor Version 1.0"
         * ```
         *
         */
        get origin(): string;
        set origin(val: string);
        /**
         * Bibliographic reference for a published puzzle.
         *
         * **Note:** This property can be styled with
         * [PangoMarkup](https://docs.gtk.org/Pango/pango_markup.html). See
         * the [Text Handling](text-handling.html) section for additional
         * information.
         */
        get publication(): string;
        set publication(val: string);
        /**
         * Name and/or reference for a publisher.
         *
         * **Note:** This property can be styled with
         * [PangoMarkup](https://docs.gtk.org/Pango/pango_markup.html). See
         * the [Text Handling](text-handling.html) section for additional
         * information.
         */
        get publisher(): string;
        set publisher(val: string);
        /**
         * The kind type of the puzzle.
         *
         * This can be more useful than the {@link GObject.Type} of the puzzle for switch
         * statements or other conditionals.
         *
         * **Note:** This only returns the more specific type. So a cryptic
         * crossword will return {@link Ipuz.PuzzleKind.CRYPTIC}, and not
         * {@link Ipuz.PuzzleKind.CROSSWORD}.
         * @read-only
         */
        get puzzle_kind(): PuzzleKind;
        /**
         * The kind type of the puzzle.
         *
         * This can be more useful than the {@link GObject.Type} of the puzzle for switch
         * statements or other conditionals.
         *
         * **Note:** This only returns the more specific type. So a cryptic
         * crossword will return {@link Ipuz.PuzzleKind.CRYPTIC}, and not
         * {@link Ipuz.PuzzleKind.CROSSWORD}.
         * @read-only
         */
        get puzzleKind(): PuzzleKind;
        /**
         * A `GHash` table containing all the named styles for the puzzle. These can be added or removed by calling {@link Ipuz.Puzzle.set_style}
         * @read-only
         */
        get styles(): GLib.HashTable<any, any>;
        /**
         * Title of the puzzle.
         *
         * **Note:** This property can be styled with
         * [PangoMarkup](https://docs.gtk.org/Pango/pango_markup.html). See
         * the [Text Handling](text-handling.html) section for additional
         * information.
         */
        get title(): string;
        set title(val: string);
        /**
         * Globally unique identifier for the puzzle.
         */
        get uniqueid(): string;
        set uniqueid(val: string);
        /**
         * Permanent URL for the puzzle.
         */
        get url(): string;
        set url(val: string);
        /**
         * Version of the ipuz spec used for the puzzle.
         * @construct-only
         */
        get version(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Puzzle.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Puzzle.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_from_data(data: string, size: number): Puzzle;

        static new_from_file(filename: string): Puzzle;

        static new_from_stream(stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): Puzzle;

        // Signals

        /** @signal */
        connect<K extends keyof Puzzle.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Puzzle.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Puzzle.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Puzzle.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Puzzle.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Puzzle.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @param builder
         * @virtual
         */
        vfunc_build(builder: Json.Builder): void;
        /**
         * @param info
         * @virtual
         */
        vfunc_calculate_info(info: PuzzleInfo): void;
        /**
         * @param dest
         * @virtual
         */
        vfunc_clone(dest: Puzzle): void;
        /**
         * Compares two puzzles and returns `true` if they are identical.
         * @param puzzle2 An {@link Ipuz.Puzzle} to compare with `puzzle1`
         * @virtual
         */
        vfunc_equal(puzzle2: Puzzle): boolean;
        /**
         * @virtual
         */
        vfunc_fixup(): void;
        /**
         * Returns `true` if `self` has been played and is in a winning state.
         * @virtual
         */
        vfunc_game_won(): boolean;
        /**
         * Indicates static properties about the puzzle determined at load time.
         * @virtual
         */
        vfunc_get_flags(): PuzzleFlags;
        /**
         * @virtual
         */
        vfunc_get_kind_str(): string[];
        /**
         * @param member_name
         * @param node
         * @virtual
         */
        vfunc_load_node(member_name: string, node: Json.Node): void;
        /**
         * @param member_name
         * @param node
         * @virtual
         */
        vfunc_post_load_node(member_name: string, node: Json.Node): void;
        /**
         * @param style_name
         * @param style
         * @virtual
         */
        vfunc_set_style(style_name: string, style: Style): void;
        /**
         * @virtual
         */
        vfunc_validate(): void;

        // Methods

        /**
         * Makes a full copy of `self`.
         * @returns A copy of `self`
         */
        deep_copy(): Puzzle;
        /**
         * Compares two puzzles and returns `true` if they are identical.
         * @param puzzle2 An {@link Ipuz.Puzzle} to compare with `puzzle1`
         * @returns `true` if the two puzzles match
         */
        equal(puzzle2: Puzzle): boolean;
        /**
         * Calls `func` for each {@link Ipuz.Style} in `self`.
         *
         * See {@link Ipuz.PuzzleForeachStyleFunc} for more information.
         * @param func The function to call for each style
         */
        foreach_style(func: PuzzleForeachStyleFunc): void;
        /**
         * Returns `true` if `self` has been played and is in a winning state.
         * @returns `true` if `self` is in a winning state.
         */
        game_won(): boolean;
        /**
         * Returns a non-displayed annotation.
         * @returns A non-displayed annotation.
         */
        get_annotation(): string;
        /**
         * Returns the author of the puzzle.
         *
         * **Note:** This string can be styled with
         * [PangoMarkup](https://docs.gtk.org/Pango/pango_markup.html). See
         * the [Text Handling](text-handling.html) section for additional
         * information.
         * @returns The author of the puzzle.
         */
        get_author(): string;
        /**
         * Returns the text value that represents a block in the saved file.
         * @returns The text value that represents a block in the saved file.
         */
        get_block(): string;
        /**
         * Returns the characters that can be entered in the puzzle.
         *
         * If {@link Ipuz.Puzzle.locale} is set, then the default charset
         * will be defined by it.
         *
         * Having a charset that doesn't match the characters of the
         * solution of `self` may cause problems for tools that use the
         * puzzle.
         * @returns The characters that can be entered in the puzzle.
         */
        get_charset(): Charset;
        /**
         * Returns the characters that can be entered in the puzzle, in string form.
         *
         * If {@link Ipuz.Puzzle.locale} is set, then the default charset
         * will be defined by it.
         *
         * Having a charset that doesn't match the characters of the
         * solution of `self` may cause problems for tools that use the
         * puzzle.
         * @returns The characters that can be entered in the puzzle, in string form.
         */
        get_charset_str(): string;
        /**
         * Returns the copyright information for `self`.
         * @returns The copyright information for `self`.
         */
        get_copyright(): string;
        /**
         * Returns the date of the puzzle or the publication date.
         *
         * This string should be in the format `"mm/dd/yyyy"`, though this
         * isn't currently enforced.
         *
         * **Note:** This string can also be styled with
         * [PangoMarkup](https://docs.gtk.org/Pango/pango_markup.html). See
         * the [Text Handling](text-handling.html) section for additional
         * information.
         * @returns The date of the puzzle or the publication date.
         */
        get_date(): string;
        /**
         * Returns the difficulty of the puzzle.
         *
         * This value is advisory only, as there is no standard for difficulty.
         *
         * **Note:** This string can also be styled with
         * [PangoMarkup](https://docs.gtk.org/Pango/pango_markup.html). See
         * the [Text Handling](text-handling.html) section for additional
         * information.
         * @returns The notes about the puzzle.
         */
        get_difficulty(): string;
        /**
         * Returns the editor of the puzzle.
         *
         * **Note:** This string can be styled with
         * [PangoMarkup](https://docs.gtk.org/Pango/pango_markup.html). See
         * the [Text Handling](text-handling.html) section for additional
         * information.
         * @returns The editor of the puzzle.
         */
        get_editor(): string;
        /**
         * Returns the text value that represents an empty cell.
         * @returns The text value that represents an empty cell.
         */
        get_empty(): string;
        /**
         * Returns the text to be displayed after a successful solve.
         *
         * **Note:** This string can be styled with
         * [PangoMarkup](https://docs.gtk.org/Pango/pango_markup.html). See
         * the [Text Handling](text-handling.html) section for additional
         * information.
         * @returns the text to be displayed after a successful solve.
         */
        get_explanation(): string;
        /**
         * Indicates static properties about the puzzle determined at load time.
         * @returns flags, with properties about the puzzle
         */
        get_flags(): PuzzleFlags;
        /**
         * Returns the text to be displayed above the puzzle.
         *
         * **Note:** This string can be styled with
         * [PangoMarkup](https://docs.gtk.org/Pango/pango_markup.html). See
         * the [Text Handling](text-handling.html) section for additional
         * information.
         * @returns The text to be displayed above the puzzle.
         */
        get_intro(): string;
        /**
         * Returns the license of the puzzle.
         *
         * The license is expected to be a recognized description of a
         * well-known license, and not the full license text. The description
         * should come from the [SPDX License
         * List](https://spdx.org/licenses/) when applicable. Otherwise, a URL
         * is recommended for a custom or proprietary license.
         *
         * Example license strings:
         *
         * ```
         * "CC-BY-SA-2.0"
         * "https://www.example.com/licensing.html"
         * ```
         *
         *
         * This is a libipuz-only extension to the ipuz spec.
         * @returns The license of the puzzle.
         */
        get_license(): string;
        /**
         * Returns the locale of the puzzle.
         *
         * The can be used for filtering by the language of the puzzle for
         * users in applications. It also changes the default
         * {@link Ipuz.Puzzle.charset} type. It should not affect the
         * parsing of the puzzle at all — any encoding information included
         * is ignored.
         *
         * Puzzle that don’t have a language tag explicitly set default to
         * the “C” Locale.
         *
         * Example locale strings:
         *
         * ```
         * "en_NZ"
         * "C"
         * ```
         *
         *
         * This is a libipuz-only extension to the ipuz spec.
         * @returns the locale of the puzzle
         */
        get_locale(): string;
        /**
         * Returns the notes about the puzzle.
         *
         * **Note:** This string can also be styled with
         * [PangoMarkup](https://docs.gtk.org/Pango/pango_markup.html). See
         * the [Text Handling](text-handling.html) section for additional
         * information.
         * @returns The notes about the puzzle.
         */
        get_notes(): string;
        /**
         * Returns program-specific information about the program that wrote
         * the puzzle file.
         *
         * Example origin string:
         *
         * ```
         * "Created by Yoyodyne Crossword Editor Version 1.0"
         * ```
         *
         * @returns Program-specific information about the program that wrote the puzzle file.
         */
        get_origin(): string;
        /**
         * Returns the bibliographic reference for a published puzzle.
         *
         * **Note:** This string can be styled with
         * [PangoMarkup](https://docs.gtk.org/Pango/pango_markup.html). See
         * the [Text Handling](text-handling.html) section for additional
         * information.
         * @returns The bibliographic reference for a published puzzle.
         */
        get_publication(): string;
        /**
         * Returns the name and/or reference for a publisher.
         *
         * **Note:** This string can be styled with
         * [PangoMarkup](https://docs.gtk.org/Pango/pango_markup.html). See
         * the [Text Handling](text-handling.html) section for additional
         * information.
         * @returns The name and/or reference for a publisher.
         */
        get_publisher(): string;
        /**
         * Calculates information about the current state of `self`. This
         * information is not kept in sync, so if there are any changes to
         * `self` then the puzzle info will have to be recalculated.
         * @returns a newly allocated {@link Ipuz.PuzzleInfo} object
         */
        get_puzzle_info(): PuzzleInfo;
        /**
         * Returns the type of puzzle that `self` is.
         *
         * This can be more useful than the {@link GObject.Type} of the puzzle
         * for switch statements or other conditionals.
         *
         * **Note:** This only returns the more specific type. So a cryptic
         * crossword will return {@link Ipuz.PuzzleKind.CRYPTIC}, and not
         * {@link Ipuz.PuzzleKind.CROSSWORD}.
         * @returns The kind type of the puzzle.
         */
        get_puzzle_kind(): PuzzleKind;
        /**
         * Returns one of the puzzle's styles by name.
         * @param style_name Name of the style
         * @returns The {@link Ipuz.Style} named `style_name`.
         */
        get_style(style_name: string): Style;
        /**
         * Returns the title of `self`.
         *
         * **Note:** This string can be styled with
         * [PangoMarkup](https://docs.gtk.org/Pango/pango_markup.html). See
         * the [Text Handling](text-handling.html) section for additional
         * information.
         * @returns The title of `self`.
         */
        get_title(): string;
        /**
         * Returns a globally unique identifier for `self`.
         *
         * Note, this function just returns the metadata that's been set on
         * the puzzle. Calling it won't generate a new uniqueid.
         * @returns a globally unique identifier for `self`.
         */
        get_uniqueid(): string;
        /**
         * Returns the permanent URL for the puzzle.
         * @returns The permanent URL for the puzzle.
         */
        get_url(): string;
        /**
         * Returns the version of the ipuz spec that `self` conforms to. This
         * version cannot be changed.
         * @returns the version string of the current puzzle
         */
        get_version(): string;
        /**
         * Returns a newly allocated string dontaining `self` as an ipuz file.
         * @returns A newly allocated string holding an ipuz file.
         */
        save_to_data(): [string, number];
        /**
         * Writes `self` to `filename` as an ipuz file, overwriting the current
         * contents.
         *
         * This operation is atomic, in the sense that the data is written to
         * a temporary file which is then renamed to the given filename.
         *
         * Errors will be in the {@link Gio.IOErrorEnum} domain.
         * @param filename The filename to save `self` to
         * @returns `true` if saving was successful
         */
        save_to_file(filename: string): boolean;
        /**
         * Writes `self` to `stream` as an ipuz file. This operation is
         * synchronous.
         *
         * The `cancellable` can be used to abort the operation from another
         * thread. If the operation is cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be set. Other possible errors are in the
         * {@link Gio.IOErrorEnum} domain.
         * @param stream The {@link Gio.InputStream} to save `self` to
         * @param cancellable An optional {@link Gio.Cancellable}
         * @returns `true` if saving was successful.
         */
        save_to_stream(stream: Gio.OutputStream, cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Sets a non-displayed annotation.
         * @param annotation A non-displayed annotation.
         */
        set_annotation(annotation: string): void;
        /**
         * Sets the author of the puzzle.
         *
         * **Note:** This string can be styled with
         * [PangoMarkup](https://docs.gtk.org/Pango/pango_markup.html). See
         * the [Text Handling](text-handling.html) section for additional
         * information.
         * @param author The author of the puzzle
         */
        set_author(author: string): void;
        /**
         * Sets the text value that represents a block.
         *
         * This value is used to indicate block squares when saving the
         * puzzle. It is not recommended to change this value, as other
         * implementations may expect it to be `"#"`.
         *
         * `block` must be only be one unicode character long.
         * @param block The text value that represents a block in the saved file
         */
        set_block(block: string): void;
        /**
         * Sets the characters that can be entered in the puzzle. Setting this
         * explicitly will override the charset defined by
         * {@link Ipuz.Puzzle.locale}.
         *
         * Setting a charset that doesn't include the characters of the
         * solution of `self` may cause problems for tools that use the puzzle.
         *
         * Updating this value will also keep {@link Ipuz.Puzzle.charset} in sync.
         * @param charset the characters that can be entered in the puzzle
         */
        set_charset(charset: Charset): void;
        /**
         * Sets the characters that can be entered in the puzzle, in string
         * form. Setting this explicitly will override the charset defined by
         * {@link Ipuz.Puzzle.locale}.
         *
         * Setting a charset that doesn't include the characters of the
         * solution of `self` may cause problems for tools that use the puzzle.
         *
         * Updating this value will also keep {@link Ipuz.Puzzle.charset} in sync.
         * @param charset_str the characters that can be entered in the puzzle, in string form
         */
        set_charset_str(charset_str: string): void;
        /**
         * Sets the copyright information for `self`.
         *
         * As an example:
         *
         *
         * ```c
         * ipuz_puzzle_set_copyright (puzzle, "© 2024 Yoyodyne, Inc");
         * ```
         *
         *
         * Licence information can be included in the
         * {@link Ipuz.Puzzle.license} property.
         * @param copyright Copyright information for `self`
         */
        set_copyright(copyright: string): void;
        /**
         * Sets the date of the puzzle or the publication date.
         *
         * This string should be in the format `"mm/dd/yyyy"`, though this
         * isn't currently enforced.
         *
         * **Note:** This string can also be styled with
         * [PangoMarkup](https://docs.gtk.org/Pango/pango_markup.html). See
         * the [Text Handling](text-handling.html) section for additional
         * information.
         * @param date The date of the puzzle or the publication date
         */
        set_date(date: string): void;
        /**
         * Returns the difficulty of the puzzle.
         *
         * This value is advisory only, as there is no standard for difficulty.
         *
         * **Note:** This string can also be styled with
         * [PangoMarkup](https://docs.gtk.org/Pango/pango_markup.html). See
         * the [Text Handling](text-handling.html) section for additional
         * information.
         * @param difficulty The difficulty of the puzzle.
         */
        set_difficulty(difficulty: string): void;
        /**
         * Sets the editor of the puzzle.
         *
         * **Note:** This string can be styled with
         * [PangoMarkup](https://docs.gtk.org/Pango/pango_markup.html). See
         * the [Text Handling](text-handling.html) section for additional
         * information.
         * @param editor The editor of the puzzle
         */
        set_editor(editor: string): void;
        /**
         * Sets the text value that represents an empty cell.
         *
         * This value is used to indicate empty cells when saving the
         * puzzle. It is not recommended to change this value.
         * @param empty The text value that represents an empty cell
         */
        set_empty(empty: string): void;
        /**
         * **Note:** This string can be styled with
         * [PangoMarkup](https://docs.gtk.org/Pango/pango_markup.html). See
         * the [Text Handling](text-handling.html) section for additional
         * information.
         *
         * Sets the text to be displayed after a successful solve.
         * @param explanation Text displayed after a successful solve
         */
        set_explanation(explanation: string): void;
        /**
         * Sets the text to be displayed above puzzle.
         *
         * **Note:** This string can be styled with
         * [PangoMarkup](https://docs.gtk.org/Pango/pango_markup.html). See
         * the [Text Handling](text-handling.html) section for additional
         * information.
         * @param intro The text displayed above puzzle
         */
        set_intro(intro: string): void;
        /**
         * Sets the license of the puzzle.
         *
         * The license string is expected to be a recognized description of a
         * well-known license, and not the full license text. The description
         * should come from the [SPDX License
         * List](https://spdx.org/licenses/) when applicable. Otherwise, a URL
         * is recommended for a custom or proprietary license.
         *
         * Example license strings:
         *
         * ```
         * "CC-BY-SA-2.0"
         * "https://www.example.com/licensing.html"
         * ```
         *
         *
         * This is a libipuz-only extension to the ipuz spec.
         * @param license The license of the puzzle
         */
        set_license(license: string): void;
        /**
         * Sets the locale of the puzzle.
         *
         * The can be used for filtering by the language of the puzzle for
         * users in applications. It also changes the default
         * {@link Ipuz.Puzzle.charset} type. It should not affect the
         * parsing of the puzzle at all — any encoding information included
         * is ignored.
         *
         * Puzzle that don’t have a language tag explicitly set default to
         * the “C” Locale.
         *
         * Example locale strings:
         *
         * ```
         * "en_NZ"
         * "C"
         * ```
         *
         *
         * This is a libipuz-only extension to the ipuz spec.
         * @param locale
         */
        set_locale(locale: string): void;
        /**
         * Sets the notes about the puzzle.
         *
         * **Note:** This string can also be styled with
         * [PangoMarkup](https://docs.gtk.org/Pango/pango_markup.html). See
         * the [Text Handling](text-handling.html) section for additional
         * information.
         * @param notes The notes about the puzzle
         */
        set_notes(notes: string): void;
        /**
         * Sets program-specific information about the program that wrote the
         * puzzle file.
         *
         * Example origin string:
         *
         * ```
         * "Created by Yoyodyne Crossword Editor Version 1.0"
         * ```
         *
         * @param origin
         */
        set_origin(origin: string): void;
        /**
         * Set the bibliographic reference for a published puzzle.
         *
         * **Note:** This property can be styled with
         * [PangoMarkup](https://docs.gtk.org/Pango/pango_markup.html). See
         * the [Text Handling](text-handling.html) section for additional
         * information.
         * @param publication Bibliographic reference for a published puzzle.
         */
        set_publication(publication: string): void;
        /**
         * Set the name and/or reference for a publisher.
         *
         * **Note:** `publisher` can be styled with
         * [PangoMarkup](https://docs.gtk.org/Pango/pango_markup.html). See
         * the [Text Handling](text-handling.html) section for additional
         * information.
         * @param publisher Name and/or reference for a publisher
         */
        set_publisher(publisher: string): void;
        /**
         * @param style_name
         * @param style
         */
        set_style(style_name: string, style: Style): void;
        /**
         * Sets the title of `self`.
         *
         * **Note:** This string can be styled with
         * [PangoMarkup](https://docs.gtk.org/Pango/pango_markup.html). See
         * the [Text Handling](text-handling.html) section for additional
         * information.
         * @param title The title of `self`
         */
        set_title(title: string): void;
        /**
         * Sets the globally unique identifier for `self`.
         * @param uniqueid A globally unique identifier for the puzzle.
         */
        set_uniqueid(uniqueid: string): void;
        /**
         * Sets the permanent URL for the puzzle.
         * @param url A permanent URL for the puzzle.
         */
        set_url(url: string): void;
    }

    namespace PuzzleInfo {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * {@link Ipuz.PuzzleInfo} provides a snapshot of statistics and
     * meta information of an {@link Ipuz.Puzzle}. It can only be created
     * through calling {@link Ipuz.Puzzle.get_puzzle_info}, and should
     * not be independently created.
     *
     * The snapshot it provides is static: It does not update after any
     * modifications to the puzzle. If the puzzle is changed in any
     * substantial way, the info would have to be regenerated to be valid.
     *
     * ## Usage
     *
     * ```c
     * g_autoptr (IpuzPuzzle) puzzle = NULL;
     * g_autoptr (IpuzPuzzleInfo) info = NULL;
     *
     * puzzle = ipuz_puzzle_new_from_file ("example.ipuz", NULL);
     * info = ipuz_puzzle_get_puzzle_info (puzzle);
     *
     * g_print ("example.ipuz has %u pangrams\n", ipuz_puzzle_info_get_pangrams (info);
     *
     * ```
     * @gir-type Class
     */
    class PuzzleInfo extends GObject.Object {
        static $gtype: GObject.GType<PuzzleInfo>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: PuzzleInfo.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<PuzzleInfo.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof PuzzleInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PuzzleInfo.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof PuzzleInfo.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, PuzzleInfo.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof PuzzleInfo.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<PuzzleInfo.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Returns the {@link Ipuz.CellStats} calculated for a puzzle.
         * @returns The {@link Ipuz.CellStats} calculated for a puzzle.
         */
        get_cell_stats(): CellStats;
        /**
         * Returns an {@link Ipuz.Charset} representing valid characters
         * associated with the puzzle.
         * @returns an {@link Ipuz.Charset} representing valid characters associated with the puzzle.
         */
        get_charset(): Charset;
        /**
         * Returns an {@link Ipuz.Charset} containing the lengths of all the
         * clues associated with the puzzle. This abuses charsets a little bit
         * as the lengths are cast to `gunichar`<!-- -->s.
         * @returns an {@link Ipuz.Charset} containing the lengths of all the clues associated with the puzzle.
         */
        get_clue_lengths(): Charset;
        /**
         * Returns the {@link Ipuz.PuzzleFlags} calculated for a puzzle.
         * @returns The {@link Ipuz.PuzzleFlags} calculated for a puzzle.
         */
        get_flags(): PuzzleFlags;
        /**
         * Returns the number of distinct, possible  pangrams within a puzzle.
         *
         * A pangram is when all the letters of the alphabet are used in one
         * puzzle. A double pangram is when every letter is used twice.
         * @returns The number of distinct, possible pangrams within a puzzle.
         */
        get_pangram_count(): number;
        /**
         * Returns an {@link Ipuz.Charset} containing all the solution
         * characters associated with the puzzle.
         * @returns an {@link Ipuz.Charset} containing all the solution characters associated with the puzzle.
         */
        get_solution_chars(): Charset;
    }

    /**
     * @gir-type Alias
     */
    type AcrosticClass = typeof Acrostic;
    /**
     * @gir-type Alias
     */
    type ArrowwordClass = typeof Arrowword;
    /**
     * @gir-type Alias
     */
    type BarredClass = typeof Barred;
    /**
     * An opaque data type containing the information for an individual
     * {@link Ipuz.Grid} cell.
     *
     * Cells are always created by a {@link Ipuz.Grid} and aren't intended
     * to exist independently.
     *
     * # Representation
     *
     * Cells are found in three fundamental types as defined by
     * {@link Ipuz.CellType}:
     *
     * * <img style="vertical-align:middle; display: inline" src="cell-normal.png"/> {@link Ipuz.CellType.NORMAL} — A regular light cell
     * * <img style="vertical-align:middle; display: inline" src="cell-block.png"/>  {@link Ipuz.CellType.BLOCK} — A block
     * * <img style="vertical-align:middle; display: inline" src="cell-null.png"/>   {@link Ipuz.CellType.NULL} — An omitted cell
     *
     * Cells also have a number of fields associated with them. They are:
     *
     * * <img style="vertical-align:middle; display: inline" src="cell-number.png"/>      `number`: The number associated with the cell
     * * <img style="vertical-align:middle; display: inline" src="cell-label.png"/>       `label`: An alternative to number, in string form
     * * <img style="vertical-align:middle; display: inline" src="cell-solution.png"/>    `solution`: The target answer for the puzzle
     * * <img style="vertical-align:middle; display: inline" src="cell-initial-val.png"/> `initial val`: A string representing a pre-filled value.
     *
     * The inline images above indicate how a cell could be rendered for
     * crossword-style puzzles. However, each puzzle kind defines how the
     * fields are interpreted. Not every puzzle kind uses every
     * field. Please see the *Representation* section located in each
     * class's documentation for more information.
     *
     * As an example of how things can vary, for {@link Ipuz.Crossword}
     * the `number` field refers to the clue number associated with that
     * cell (as shown above). For sudoku puzzles, it's the number solution
     * in the grid. It is never used with {@link Ipuz.Acrostic} or
     * {@link Ipuz.Nonogram} puzzles.
     *
     * ::: note
     *     Since cells are semantically undefined, the {@link Ipuz.Cell}
     *     setters don't do any type of validation. It is very possible to
     *     get a cell into a state that is undefined for a given puzzle
     *     kind. As an example, one can set the `label` on a cell with a
     *     `cell_type` of {@link Ipuz.CellType.NULL}, despite it being
     *     meaningless in all known puzzle kinds.
     *
     * ## Links to other structs
     *
     * Cells keep a reference to the styles and clues associated to
     * them. It's possible to look these up by calling
     * {@link Ipuz.Cell.get_clue} and {@link Ipuz.Cell.get_style}
     * respectively.
     *
     * ::: warning
     *     Cells don't automatically maintain the styles or clues
     *     associated with them. When modifying a puzzle, care must be
     *     taken to keep these in sync with the rest of the puzzle. The
     *     `_fix()` functions generally do this.
     * @gir-type Struct
     */
    abstract class Cell {
        static $gtype: GObject.GType<Cell>;

        // Methods

        /**
         * Clears the clue in the `direction` direction.
         * @param direction The direction to clear
         */
        clear_clue_direction(direction: ClueDirection | null): void;
        /**
         * Removes all clues associated with `cell`.
         */
        clear_clues(): void;
        /**
         * Compares two cells and returns `true` if they are identical.
         * @param cell2 An {@link Ipuz.Cell} to compare with `cell1`
         * @returns `true` if the two cells match
         */
        equal(cell2: Cell): boolean;
        /**
         * Returns a clue associated with `cell`. First tries the
         * `preferred_direction`, then the direction orthogonal to that,
         * and then any direction that is available. If `cell` as no
         * associated clue, then `null` is returned.
         * @param preferred_direction The preferred direction to find a clue
         * @returns A clue associated with `cell`, or `null`
         */
        find_clue(preferred_direction: ClueDirection | null): Clue | null;
        /**
         * Returns the {@link Ipuz.CellType} of `cell`.
         * @returns the {@link Ipuz.CellType} of `cell`
         */
        get_cell_type(): CellType;
        /**
         * Returns the clue associated with `cell` in the `direction`
         * direction. If not such clue exists, then `null` is returned.
         * @param direction The direction to find a cell
         * @returns The clue of `cell`, or `null`
         */
        get_clue(direction: ClueDirection | null): Clue | null;
        /**
         * Returns the initial value of `cell`.
         *
         * ::: note
         *     The `initial_val` is interpreted differently for each puzzle
         *     kind. Check each puzzle's *Representation* section of the docs
         *     to learn how to use it.
         * @returns the initial val of `cell`
         */
        get_initial_val(): string;
        /**
         * Returns the label of `cell`.
         *
         * ::: note
         *     The `label` is interpreted differently for each puzzle
         *     kind. Check each puzzle's *Representation* section of the docs
         *     to learn how to use it.
         * @returns the label of `cell`
         */
        get_label(): string;
        /**
         * Returns the number for `cell`.
         *
         * ::: note
         *     The `number` is interpreted differently for each puzzle
         *     kind. Check each puzzle's *Representation* section of the docs
         *     to learn how to use it.
         * @returns the number for `cell`
         */
        get_number(): number;
        /**
         * Returns the saved guess of `cell`.
         *
         * This method should rarely be called. The `saved_guess` field is
         * used as a guess of the solution when saving a grid to disk. You
         * should consider using {@link Ipuz.Guesses} to capture the
         * transient state of a puzzle instead, as it doesn't affect the
         * original puzzle.
         * @returns the saved guess of `cell`
         */
        get_saved_guess(): string;
        /**
         * Returns the solution of `cell`.
         *
         * ::: note
         *     The `solution` is interpreted differently for each puzzle
         *     kind. Check each puzzle's *Representation* section of the docs
         *     to learn how to use it.
         * @returns the solution of `cell`
         */
        get_solution(): string;
        /**
         * Returns the current style of cell, or `null`.
         * @returns The current style of cell
         */
        get_style(): Style | null;
        /**
         * Returns the style_name of `cell`.
         * @returns The style_name of `cell`
         */
        get_style_name(): string | null;
        /**
         * Refs the cell.
         *
         * This function should probably only be called by language bindings.
         * @returns `cell`. This can be used to chain calls or ref on return.
         */
        ref(): Cell;
        /**
         * Sets the {@link Ipuz.CellType} of `cell` to be `cell_type`.
         * @param cell_type The new {@link Ipuz.CellType} of `cell`
         */
        set_cell_type(cell_type: CellType | null): void;
        /**
         * Sets the clue associated with `cell` in the `direction`
         * direction.
         *
         * Only one clue can be associated with `direction` at a given time. If
         * `clue` is `null`, then the clue is cleared in that direction.
         * @param clue
         */
        set_clue(clue?: Clue | null): void;
        /**
         * Sets the initial value of `cell`.
         *
         * ::: note
         *     The `initial_val` is interpreted differently for each puzzle
         *     kind. Check each puzzle's *Representation* section of the docs
         *     to learn how to use it.
         * @param initial_val The initial value of `cell`
         */
        set_initial_val(initial_val: string): void;
        /**
         * Sets the label of `cell`.
         *
         * ::: note
         *     The `label` is interpreted differently for each puzzle
         *     kind. Check each puzzle's *Representation* section of the docs
         *     to learn how to use it.
         * @param label The label of `cell`
         */
        set_label(label: string): void;
        /**
         * Sets the number of `cell`.
         *
         * ::: note
         *     The `number` is interpreted differently for each puzzle
         *     kind. Check each puzzle's *Representation* section of the docs
         *     to learn how to use it.
         * @param number The number of `cell`
         */
        set_number(number: number): void;
        /**
         * Sets the saved guess of `cell`.
         *
         * This method should rarely be called. The `saved_guess` field is
         * used as a guess of the solution when saving a grid to disk. You
         * should consider using {@link Ipuz.Guesses} to capture the
         * transient state of a puzzle instead, as it doesn't affect the
         * original puzzle.
         * @param saved_guess A guess for `cell`
         */
        set_saved_guess(saved_guess: string): void;
        /**
         * Sets the solution of `cell`.
         *
         * ::: note
         *     The `solution` is interpreted differently for each puzzle
         *     kind. Check each puzzle's *Representation* section of the docs
         *     to learn how to use it.
         * @param solution The solution of `cell`
         */
        set_solution(solution: string): void;
        /**
         * Sets the style for a given cell. As a convenience, it's possible to
         * set the style_name at the same time when `style` is a named style.
         *
         * ::: note
         *     `style_name` is used to refer to a named style within the
         *     puzzle. No correctness checking is done on `style_name`: It's up
         *     to the caller to make sure that it's correct and `style` is a
         *     named style within the puzzle.
         * @param style An {@link Ipuz.Style}
         * @param style_name The name of the style, or `null`
         */
        set_style(style: Style, style_name?: string | null): void;
        /**
         * Sets the style_name of `cell`.
         * @param style_name The style_name of cell
         */
        set_style_name(style_name: string): void;
        /**
         * Unrefs `cell`, which will be freed when the reference count reaches 0.
         *
         * This function should probably only be called by language bindings.
         */
        unref(): void;
    }

    /**
     * A data type representing the coordinates of a single {@link Ipuz.Cell}.
     * @gir-type Struct
     */
    class CellCoord {
        static $gtype: GObject.GType<CellCoord>;

        // Fields

        row: number;
        column: number;

        // Constructors

        constructor(
            properties?: Partial<{
                row: number;
                column: number;
            }>,
        );

        // Methods

        /**
         * Returns a newly allocated copy of `coord`.
         * @returns A newly allocated copy of `coord`
         */
        copy(): CellCoord;
        /**
         * Returns `true` if `coord1` and `coord2` are identical.
         * @param coord2 An {@link Ipuz.CellCoord}
         * @returns `true`, if `coord1` and `coord2` are identical
         */
        equal(coord2?: CellCoord | null): boolean;
        /**
         * Frees `coord`.
         */
        free(): void;
    }

    /**
     * An opaque data structure that stores an ordered list of
     * {@link Ipuz.CellCoord}s.
     *
     * This structure does no de-duping or ordering on its own. It is up
     * to the callee to define the semantics of what the array means.
     * @gir-type Struct
     */
    class CellCoordArray {
        static $gtype: GObject.GType<CellCoordArray>;

        // Constructors

        constructor(properties?: Partial<{}>);

        static ['new'](): CellCoordArray;

        // Methods

        /**
         * Appends `coord` to `self`.
         * @param coord The cell coordinate to append
         */
        append(coord: CellCoord): void;
        clear(): void;
        /**
         * Returns the index of `coord` within `self`. If the coordinate is not
         * present, then -1 is returned.
         * @param coord A coordinate to determine the index of
         * @returns The index of `coord`, or -1
         */
        coord_index(coord?: CellCoord | null): number;
        /**
         * Returns a newly allocated {@link Ipuz.CellCoordArray}. This will
         * be a copy of `self`.
         * @returns A newly allocated copy of `self`
         */
        dup(): CellCoordArray;
        /**
         * @param array2
         */
        equal(array2: CellCoordArray): boolean;
        /**
         * Queries the coordinate at a specific index in the array.
         * @param index the index of the coord to return
         * @returns `TRUE` if the index is present, `FALSE` if it is out of bounds.
         */
        index(index: number): [boolean, CellCoord | null];
        /**
         * @returns the length of `self`.
         */
        len(): number;
        /**
         * Pops the front coord off of `self`.
         *
         * If `self` is non-empty, then `out_front` is filled with the value that
         * was popped, and `true` is returned.
         * @returns `true`, if `self` was non-empty, or `false` if it was empty.
         */
        pop_front(): [boolean, CellCoord | null];
        /**
         * Prints `self` to the console.
         *
         * Used for debugging.
         */
        print(): void;
        /**
         * Increases the reference count of `self`.
         *
         * This function will return `self` so that the call can be chained.
         * @returns `self`.
         */
        ref(): CellCoordArray;
        /**
         * Removes the first value equal to `coord` from `self`.
         * @param coord The cell coordinate to be removed
         */
        remove_coord(coord: CellCoord): void;
        /**
         * Randomly reorders all the elements of `self`.
         */
        shuffle(): void;
        /**
         * Decreases the reference count of `self`.
         *
         * When the reference count drops to 0, the structure is freed.
         */
        unref(): void;
    }

    /**
     * A data type that stores statistics about an {@link Ipuz.Puzzle}.
     * @gir-type Struct
     */
    class CellStats {
        static $gtype: GObject.GType<CellStats>;

        // Fields

        block_count: number;
        normal_count: number;
        null_count: number;

        // Constructors

        constructor(
            properties?: Partial<{
                block_count: number;
                normal_count: number;
                null_count: number;
            }>,
        );

        static ['new'](): CellStats;

        // Methods

        /**
         * Creates a copy of `self`.
         * @returns A new {@link Ipuz.CellStats} that contains the same values as `self`.
         */
        copy(): CellStats;
        /**
         * Compares two `IpuzPuzzleStats` and returns  `true` if they contain the same values.
         * @param cell_stats2 An {@link Ipuz.CellStats} to compare `cell_stats1` to
         * @returns `true` if `cell_stats1` and `cell_stats2` match
         */
        equal(cell_stats2: CellStats): boolean;
        /**
         * Frees `self`.
         */
        free(): void;
    }

    /**
     * An opaque, immutable data structure that stores an ordered count of
     * unicode characters.
     *
     * Charsets are surprisingly versatile. Fundamentally, they have a
     * unique mapping between a `gunichar` and a `guint`. They can be used
     * to keep track of the number of unicode characters in a puzzle or to
     * represent a set of valid characters.
     *
     * They are constructed from an {@link Ipuz.CharsetBuilder}, or a
     * simple one can be created via {@link Ipuz.Charset.deserialize}. A
     * common case has a list of characters with a count of one to be used
     * to filter text — such as an alphabet.
     *
     * Charsets have designed to be used in areas that are performance
     * critical. As a result, tradeoffs have been made to keep them as
     * fast as possible.
     *
     * ## Examples:
     *
     * An example of creating a charset from an existing string:
     * ```C
     * g_autoptr (IpuzCharset) charset = NULL;
     *
     * charset = ipuz_charset_deserialize ("ABCDEEE");
     *
     * // Show that charset contains three 'E's
     * g_assert_cmpint (ipuz_charset_get_char_count (charset, g_utf8_get_char ("E")),
     *                  ==,
     *                  3);
     * ```
     *
     * A second example of creating an alphabet filter:
     *
     * ```C
     * IpuzCharsetBuilder *builder;
     * g_autoptr (IpuzCharset) charset = NULL;
     * g_autoptr (GString) filtered = NULL;
     *
     * builder = ipuz_charset_builder_new_for_language ("en");
     *
     * // builder is consumed with this call
     * charset = ipuz_charset_builder_build (builder);
     *
     * g_assert_true (ipuz_charset_check_text (charset, "ENGLISH"));
     * g_assert_false (ipuz_charset_check_text (charset, "ESPAÑOL!"));
     *
     * // Filter string to only include english alphabet characters
     * filtered = g_string_new (NULL);
     * for (gchar *p = "ESPAÑOL!"; p[0]; p = g_utf8_next_char (p))
     *   {
     *     gunichar c = g_utf8_get_char (p);
     *     if (ipuz_charset_get_char_count (charset, c) > 0)
     *       g_string_append_unichar (filtered, c);
     *   }
     *
     * // Make sure characters are filtered out
     * g_assert_cmpstr (filtered->str, ==, "ESPAOL");
     * ```
     *
     * ## Iteration
     *
     * To iterate through a charset, one can do:
     *
     * ```C
     * for (guint i = 0; i < ipuz_charset_get_n_chars (charset); i++)
     *   {
     *     IpuzCharsetValue value;
     *
     *     ipuz_charset_get_value (charset, i, &value);
     *     // do something with value
     *   }
     * ```
     *
     * ## Limitations
     *
     * Like the rest of libipuz, the charset operates on unicode
     * characters rather than clusters. This means that glyphs with
     * multiple code-points can't be stored in a charset.
     * @gir-type Struct
     */
    abstract class Charset {
        static $gtype: GObject.GType<Charset>;

        // Static methods

        /**
         * Creates a new character set by deserializing from a string.
         *
         * As an example:
         *
         * ```C
         * IpuzCharset *alphabet;
         *
         * alphabet = ipuz_charset_deserialize ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
         * ```
         * @param str String serialization of a character set, as returned by `ipuz_charset_serialize()`.
         */
        static deserialize(str: string): Charset;

        // Methods

        /**
         * Checks to see if all the characters in `text` are contained within
         * `self`. This can be used to quickly assertain if a string is valid
         * to be used within a puzzle.
         * @param text text to test
         * @returns `true`, if all the characters in text exist in `self`
         */
        check_text(text: string): boolean;
        /**
         * Returns `true` if `charset1` and `charset2` have exactly the same contents.
         * @param charset2 an {@link Ipuz.Charset}
         * @returns `true`, if the charsets have identical characters and character counts.
         */
        equal(charset2?: Charset | null): boolean;
        /**
         * Returns the count of `c`. If `c` is not in `self`, then 0 is returned.
         * @param c a character to search for
         * @returns the count of the character `c` in `self`
         */
        get_char_count(c: string): number;
        /**
         * Returns the index of `c`.
         * @param c a character to search for
         * @returns the index of the character `c` in `self`, or -1 if it does not exist.
         */
        get_char_index(c: string): number;
        /**
         * Returns the number of different types of characters stored in
         * `self`. This is a constant-time operation.
         * @returns the number of different types of characters stored in `self`
         */
        get_n_chars(): number;
        /**
         * Returns the cummulative count of all the characters stored in
         * `self`.
         *
         * This is separate from {@link Ipuz.Charset.get_n_chars} which
         * returns the count of the different of types of characters.
         * @returns The total number of characters in `self`
         */
        get_total_count(): number;
        /**
         * Finds the value of a `self` at the given index. On success, `true`
         * will be returned and `value` will be filled in with both the
         * character and its count.
         * @param index The index of the value
         * @returns `true`, if `value` has been set
         */
        get_value(index: number): [boolean, CharsetValue];
        /**
         * Refs the character set.
         * @returns `charset`. This can be used to chain calls, or to ref on return.
         */
        ref(): Charset;
        /**
         * Concatenates all the unique characters stored in `self` in the order
         * in which they would be returned by {@link Ipuz.Charset.get_char_index}.
         * @returns a string with all the characters from the character set
         */
        serialize(): string;
        /**
         * Returns `true` if `subset` is a subset of `self`. That is to say, all
         * the characters in `subset` exist in `self`, and of a count less than
         * or equal to the count in self.
         * @param subset an {@link Ipuz.Charset}
         * @returns `true`, if `subset` is a subset of `charset`.
         */
        subset(subset?: Charset | null): boolean;
        /**
         * Unrefs a charset, which will be freed when the reference count becomes 0.
         */
        unref(): void;
    }

    /**
     * An opaque data structure used to dynamically build an
     * {@link Ipuz.Charset}.
     *
     * This structure keeps track of the number of times a given unicode
     * character is added or removed from it. Once that process is done,
     * it can be converted to a {@link Ipuz.Charset}.
     *
     * The main reason for the split between the builder and the charset
     * is for performance: certain operations involving charsets are
     * performance critical, and having them immutable helps with that.
     *
     * ## Example:
     *
     * ```C
     * IpuzCharsetBuilder *builder;
     * g_autoptr (IpuzCharset) charset = NULL;
     *
     * builder = ipuz_charset_builder_new ();
     * ipuz_charset_builder_add_text (builder, "STAR");
     * ipuz_charset_builder_add_text (builder, "CARET");
     * ipuz_charset_builder_add_text (builder, "HASH");
     * ipuz_charset_builder_add_text (builder, "BRACE");
     *
     * // builder is consumed by this, and thus doesn't need freeing
     * charset = ipuz_charset_builder_build (builder);
     * g_assert_cmpint (ipuz_charset_get_count (charset, g_utf8_get_char ("A")),
     *                  ==,
     *                  4);
     * ```
     *
     * ::: note
     *     Calling {@link Ipuz.CharsetBuilder.build} will free the
     *     builder while returning a new {@link Ipuz.Charset}. As a
     *     result, there is almost never a need to explicitly free a
     *     builder unless it's unused.
     * @gir-type Struct
     */
    class CharsetBuilder {
        static $gtype: GObject.GType<CharsetBuilder>;

        // Constructors

        constructor(properties?: Partial<{}>);

        static ['new'](): CharsetBuilder;

        static new_for_language(lang: string): CharsetBuilder;

        static new_from_text(text?: string | null): CharsetBuilder;

        // Methods

        /**
         * Adds `c` to `self`.
         * @param c a unicode character to add to the builder.
         */
        add_character(c: string): void;
        /**
         * Adds each unicode code point from `text` into `self`.
         * @param text string with characters to add to the builder.
         */
        add_text(text: string): void;
        /**
         * Consumes `self` and frees it, returning an immutable
         * {@link Ipuz.Charset} in the process.
         *
         * The resulting charset can be queried efficiently for character
         * counts and such. Use {@link Ipuz.Charset.unref} to free the return
         * value.
         * @returns A {@link Ipuz.Charset} compiled from the information in `self`.
         */
        build(): Charset;
        /**
         * Makes a copy of `self`.
         * @returns A copy of `self`.
         */
        copy(): CharsetBuilder;
        /**
         * Frees `self`.
         *
         * ::: warning
         *     This function should almost never be called directly. Instead,
         *     it's expected that the user will call
         *     {@link Ipuz.CharsetBuilder.build} which will free it and
         *     generate a charset.
         */
        free(): void;
        /**
         * Tries to remove one instance of `c` from `self`, i.e., decrease its
         * character count by one. If `c` is not present in the `self`, this
         * function returns `false` and leaves `self` unchanged
         * @param c a unicode character to remove from the builder.
         * @returns `true`, if `self` had at least one instance of `c` to remove
         */
        remove_character(c: string): boolean;
        /**
         * Tries to remove all the characters in `text` from `self`,
         * i.e. decrease their character counts by as many instances of each
         * character there are in `text`. If `text` contains characters that are
         * not already in the `self`, or if `text` contains more of a certain
         * character than `self` already has, this function returns `false` and
         * leaves `self` unchanged.
         * @param text text whose characters should be tried to be removed
         * @returns `true`, if `self` had sufficient characters to remove all the characters from `text`
         */
        remove_text(text: string): boolean;
        /**
         * Explicitly sets the count of `c` to be `count` in `self`.
         *
         * This will override any existing counts previously set for `c`.
         * @param c a unicode character to add to the builder
         * @param count the count
         */
        set_char_count(c: string, count: number): void;
    }

    /**
     * A data structure that represents the value of an index of an
     * {@link Ipuz.Charset}.
     *
     * It is used by {@link Ipuz.Charset.get_value}.
     * @gir-type Struct
     */
    class CharsetValue {
        static $gtype: GObject.GType<CharsetValue>;

        // Fields

        c: string;
        count: number;

        // Constructors

        constructor(
            properties?: Partial<{
                c: string;
                count: number;
            }>,
        );

        static ['new'](): CharsetValue;

        // Methods

        /**
         * Frees `value`.
         */
        free(): void;
    }

    /**
     * An opaque data type representing an individual clue in a
     * puzzle. Clues are used by both {@link Ipuz.Crossword} and
     * {@link Ipuz.Acrostic} puzzles.
     * @gir-type Struct
     */
    class Clue {
        static $gtype: GObject.GType<Clue>;

        // Constructors

        constructor(properties?: Partial<{}>);

        static ['new'](): Clue;

        // Methods

        /**
         * Appends a raw `coord` to the internal list of coords of `clue`.
         *
         * ::: warning
         *     This function does not link the new coord to the grid. You
         *     will have to manually call {@link Ipuz.Cell.set_clue} to link
         *     it back to this clue.
         * @param coord A coord to append to `clue`
         */
        append_coord(coord: CellCoord): void;
        /**
         * Resets all the coords associated with `clue`.
         *
         * ::: warning
         *     This function does not unlink the existing coords from the
         *     grid. You should call {@link Ipuz.Clues.unlink_clue} first.
         */
        clear_coords(): void;
        /**
         * Returns `true` if `clue` contains coord in it's list of coords.
         * @param coord A coord to search for
         * @returns `true` if `clue` contains coord
         */
        contains_coord(coord: CellCoord): boolean;
        /**
         * Makes a copy of `clue`.
         * @returns A newly-allocated copy of `clue`
         */
        dup(): Clue;
        /**
         * Ensures that an enumeration exists for `clue`.
         *
         * If one hasn't been set yet, then a new one is generated based on
         * the length of the coords. The geometry of the clue is not
         * considered when generating this new enumeration.
         */
        ensure_enumeration(): void;
        /**
         * Compares two clues and returns `true` if they are identical.
         * @param clue2 An {@link Ipuz.Clue} to compare with `clue1`
         * @returns `true` if the two clues match
         */
        equal(clue2: Clue): boolean;
        /**
         * Returns the clue text of `clue`.
         * @returns The clue text of `clue`.
         */
        get_clue_text(): string;
        /**
         * Sets `coord` to be the coord at `index`.
         *
         * If `index` is longer than the number of cells associated with `clue`,
         * then `false` is returned.
         * @param index The index of the coord to get
         * @param coord Location to set the coord at `index`
         * @returns `true`, if `coord` is set
         */
        get_coord(index: number, coord: CellCoord): boolean;
        /**
         * Returns the raw coords that `clue` represents, in order.
         *
         * This method is less convenient than {@link Ipuz.Clue.get_n_coords}
         * and {@link Ipuz.Clue.get_coord}. You probably want to use those
         * methods instead.
         *
         * ::: note
         *     This returns the internal {@link Ipuz.CellCoordArray} even if
         *     there aren't any cells associated with `clue`. In that case, the
         *     length of the returned array will be 0.
         *
         * ::: warning
         *     It is possible to modify the returned array. If the caller does
         *     that, care must be taken to keep consistency with the rest of
         *     the puzzle.
         * @returns The raw {@link Ipuz.CellCoordArray} of the coords for `clue`
         */
        get_coords(): CellCoordArray;
        /**
         * Returns the direction of `clue`.
         * @returns the direction of `clue`
         */
        get_direction(): ClueDirection;
        /**
         * Returns the enumeration of `clue`.
         * @returns The enumeration of `clue`
         */
        get_enumeration(): Enumeration;
        /**
         * Sets `coord` to be the first coord of `clue`. If no coords have been
         * set to clue, then `coord` is untouched and `false` is returned.
         * @returns `true`, if `coord` was set to the first coord of `clue`.
         */
        get_first_coord(): [boolean, CellCoord];
        /**
         * Gets the text to display in the list of clues instead of the clue
         * number.
         * @returns the label of `clue`
         */
        get_label(): string;
        /**
         * Sets `location` to be the coord of `clue`.
         *
         * This is used by {@link Ipuz.Arrowword}, which display the clue
         * within a given cell. If a location has not been set for `clue`, then
         * `location` is left untouched and `false` is returned.
         * @returns `true`, if location is set
         */
        get_location(): [boolean, CellCoord];
        /**
         * Returns the number of cells associated with `clue`.
         * @returns The number of cells associated with `clue`.
         */
        get_n_coords(): number;
        /**
         * Returns the clue number.
         *
         * The clue number matches the number in {@link Ipuz.Cell}.
         * @returns the clue number
         */
        get_number(): number;
        /**
         * Refs the clue.
         * @returns `clue`. This can be used to chain calls or ref on return.
         */
        ref(): Clue;
        /**
         * Sets the clue text of `clue` to be `clue_text`.
         * @param clue_text the clue text of `clue`.
         */
        set_clue_text(clue_text: string): void;
        /**
         * Sets the raw coordinates of `clue`, overwriting any current values.
         *
         * ::: warning
         *     This function does not link the new coords to the grid. You
         *     will have to manually call {@link Ipuz.Cell.set_clue} to link
         *     them back to this clue.
         * @param coords Location to set the first coord of `clue`
         */
        set_coords(coords: CellCoordArray): void;
        /**
         * Sets the direction of `clue` to `direction`.
         * @param direction the direction of clue
         */
        set_direction(direction: ClueDirection | null): void;
        /**
         * Sets the enumeration of `clue` to be `enumeration`.
         * @param enumeration The enumeration of `clue`
         */
        set_enumeration(enumeration?: Enumeration | null): void;
        /**
         * Sets the text to display in the list of clues instead of the clue
         * number.
         * @param label The label of `clue`
         */
        set_label(label: string): void;
        /**
         * Sets the location of `clue` to be `location`. This is used for
         * {@link Ipuz.Arrowword}.
         *
         * The location can be unset by passing in `null` to `location`.
         * @param location Location to set the coord of the clue to
         */
        set_location(location?: CellCoord | null): void;
        /**
         * Sets the clue number of `clue` to `number`.
         * @param number The number to set
         */
        set_number(number: number): void;
        /**
         * Unrefs `clue`, which will be freed when the reference count reaches 0.
         */
        unref(): void;
    }

    /**
     * A data type that represents a relative identifier for an
     * {@link Ipuz.Clue}.
     *
     * Within a puzzle, clues can be identified by a
     * {@link Ipuz.ClueId}. For example, this id:
     *
     * ```C
     * IpuzClueId clue_id = {
     *    .direction = IPUZ_CLUE_DIRECTION_DOWN,
     *    .index = 5
     * };
     * ```
     *
     * would refer to the 6th clue in the down direction.
     *
     * Note that `index` is an offset into the list of clues, and has
     * nothing to do with the numbering the user sees. As an example, the
     * clue at *1 Across* would have an index of 0.
     *
     * If `direction == IPUZ_CLUE_DIRECTION_NONE`, then the number
     * is meaningless, and this means that there is no clue to be
     * identified (e.g. equivalent to a `null` pointer for an {@link Ipuz.Clue}).
     *
     * ::: note
     *     IpuzClueIds aren't guaranteed to be stable when editing
     *     puzzles. Changing the grid my lead to a change in index for a
     *     given clue.
     * @gir-type Struct
     */
    class ClueId {
        static $gtype: GObject.GType<ClueId>;

        // Fields

        direction: ClueDirection;
        index: number;

        // Methods

        /**
         * Returns a newly allocated copy of `clue_id`.
         * @returns A newly allocated copy of `clue_id`
         */
        copy(): ClueId;
        /**
         * Returns `true` if `clue_id1` and `clue_id2` are identical.
         * @param clue_id2 An {@link Ipuz.ClueId}
         * @returns `true`, if `clue_id1` and `clue_id2` are identical
         */
        equal(clue_id2?: ClueId | null): boolean;
        /**
         * Frees `clue_id`.
         */
        free(): void;
    }

    /**
     * @gir-type Alias
     */
    type CluesInterface = typeof Clues;
    /**
     * @gir-type Alias
     */
    type CrosswordClass = typeof Crossword;
    /**
     * @gir-type Alias
     */
    type CrypticClass = typeof Cryptic;
    /**
     * An opaque, immutable data type that stores the enumeration of a
     * clue.
     *
     * Once created this structure will never change. As a result, it can
     * be shared safely across different puzzles.
     *
     * ## Context
     *
     * In crosswords, the enumeration of a clue is a hint about the grid
     * markings to be used with the answer. It can indicate punctuation,
     * word breaks, or other display hints.
     *
     * As an example, consider this clue from a puzzle:
     * ```
     * 1ac. Beginnings of an afternoon beard (5,1'5,6)
     * ```
     *
     * Here, the enumeration is represented by the string `(5,1'5,6)`. It
     * indicates the formatting of the answer — `FIVE O'CLOCK SHADOW` —
     * and provides hints for rendering the grid to accommodate it.
     *
     * ![Example rendering of FIVE O'CLOCK SHADOW](enumeration.png)
     * _Example rendering of FIVE O'CLOCK SHADOW_
     *
     * This enumeration was created by calling:
     * ```C
     * ipuz_enumeration_new ("5 1'5 6");
     * ```
     *
     * ## The enumeration string
     *
     * The {@link Ipuz.Enumeration} expects to be passed a valid string
     * as defined by the ipuz spec when it is created. Currently, word
     * counts and prompts from the spec are not supported. The full set of
     * punctuation characters supported can be seen in
     * {@link Ipuz.Deliminator}.
     *
     * If an {@link Ipuz.Enumeration} is created with an invalid string,
     * then it won't have any deliminators. You can use
     * {@link Ipuz.Enumeration.get_has_delim} to make sure the enumeration has
     * been created correctly.
     *
     * ### Display strings
     *
     * If you want to represent the string to the user, you should use
     * {@link Ipuz.Enumeration.get_display}. One slightly confusing thing
     * about enumerations this is that the string used to create the
     * enumeration doesn't match the output string for displaying to the
     * user. Most notably, the spec uses spaces to indicate word breaks,
     * which are represented by commas for the display string.
     *
     * Here's an example:
     * ```C
     * // This will create the enumeration represented in the example above
     * enumeration1 = ipuz_enumeration_new ("5 1'5 6", IPUZ_VERBOSITY_STANDARD);
     *
     * // This will not parse correctly and will just display the raw string
     * enumeration2 = ipuz_enumeration_new ("5,1'5,6", IPUZ_VERBOSITY_STANDARD);
     * ```
     *
     * In this code example above, both `enumeration1` and `enumeration2`
     * will output the same display string, but only the first can be used
     * to calculate grid markings.
     *
     * ## Delimiators and grid offsets
     *
     * Enumerations use {@link Ipuz.Deliminator} to indicate what hint
     * should be used for grid markings. Deliminators can mark both an
     * edge between cells as well as the cell itself. See
     * {@link Ipuz.EnumerationForeachDelimFunc} for more information on how
     * to determine where it should apply.
     * @gir-type Struct
     */
    class Enumeration {
        static $gtype: GObject.GType<Enumeration>;

        // Constructors

        constructor(src: string, verbosity: Verbosity);

        static ['new'](src: string, verbosity: Verbosity): Enumeration;

        // Static methods

        /**
         * @param c
         */
        static valid_char(c: number): boolean;

        // Methods

        /**
         * Returns the length of `enumeration` in cells. As an example, an
         * enumeration created by "4-4 3" would return a length of 11. A
         * length of 0 indicates an indeterminate length. A length of -1
         * indicates that the source string for the enumeration wasn't
         * parseable.
         * @returns the length of `enumeration`
         */
        delim_length(): number;
        /**
         * Compares two enumerations and returns `true` if they are identical.
         * @param enumeration2 An {@link Ipuz.Enumeration} to compare with `enumeration1`
         * @returns `true` if the two enumerations match
         */
        equal(enumeration2?: Enumeration | null): boolean;
        /**
         * Calls `func` for each deliminator in `self`.
         *
         * See {@link Ipuz.EnumerationForeachDelimFunc} for more information.
         * @param func The function to call for each element
         */
        foreach_delim(func: EnumerationForeachDelimFunc): void;
        /**
         * Returns a string for displaying the user representing the
         * enumeration. It does not include outer parens, so will need to be
         * printed in them if appropriate.
         * @returns a string representing the enumeration
         */
        get_display(): string;
        /**
         * Returns whether `self` has valid delims within it. As an example, an
         * enumeration created by "4-4 3" would return `true`, while an enumeration of
         * "two words" would return `false`.
         * @returns whether `self` has valid deliminators
         */
        get_has_delim(): boolean;
        /**
         * Returns a copy of the source string used to make `self`
         * @returns the source string used to make `self`
         */
        get_src(): string;
        /**
         * Refs the enumeration.
         * @returns `self`. This can be used to chain calls or ref on return.
         */
        ref(): Enumeration;
        /**
         * Unrefs `self`, which will be freed when the reference count becomes 0.
         */
        unref(): void;
    }

    /**
     * @gir-type Alias
     */
    type FilippineClass = typeof Filippine;
    /**
     * @gir-type Alias
     */
    type GridClass = typeof Grid;
    /**
     * An opaque data type representing the user's guesses. It allows
     * storing an arbitrary string per cell.
     *
     * This is typically associated with an existing {@link Ipuz.Grid} and
     * used to keep track of guesses that a user has made in a game. It
     * can be serialized and saved/loaded from either a stream or
     * file. This provides a way to keep changes separate from a puzzle
     * file, which may be read-only or shared across users.
     *
     * Guesses can also be used as an overlay to store additional data on
     * a grid or other structure. In those instances, the guess must be
     * manually initialized.
     *
     * ## Representation
     *
     * Every puzzle type will define how it expects the guesses to be
     * structured for the purposes of `game_won()`. Please check out the
     * *Guesses* section of each puzle types documentation to understand
     * how to use the guesses object for that puzzle type.
     *
     * It is not expected that guesses files are necessarily portable
     * across applications: applications are free to store
     * application-specific values and provide their own winning
     * conditions.
     *
     * ::: note
     *     This struct is separate from the 'saved-guess` value stored in
     *     an ipuz file, though it has a very similar on-disk json
     *     format. In the future, we will support writing/reading guesses
     *     from those values.
     * @gir-type Struct
     */
    class Guesses {
        static $gtype: GObject.GType<Guesses>;

        // Constructors

        constructor(properties?: Partial<{}>);

        static ['new'](): Guesses;

        static new_from_file(filename: string): Guesses;

        static new_from_stream(stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): Guesses;

        // Methods

        /**
         * Makes a copy of `guesses`.
         * @returns A newly-allocated copy of `guesses`
         */
        copy(): Guesses;
        /**
         * Compares two guesses and returns `true` if they are identical.
         * @param guesses2 An {@link Ipuz.Guesses} to compare with `guesses1`
         * @returns `true` if the two guesses match
         */
        equal(guesses2: Guesses): boolean;
        /**
         * Returns the cell type of the cell at `coord`.
         *
         * In general the expectation is that an {@link Ipuz.Guesses} matches
         * layout matches the {@link Ipuz.Grid} it is created from. This can
         * be used to make sure that the two stay in sync.
         * @param coord the coordinate to get the cell type from
         * @returns the cell type at `coord`
         */
        get_cell_type(coord: CellCoord): CellType;
        /**
         * Returns a SHA1 HASH representing the current state of the
         * puzzle. It can be compared against a stored hash in the puzzle to
         * check for a victory condition, without actually storing the answer
         * in the puzzle. `salt` is optional. If used, it should be included
         * along with the hash when saving.
         *
         * Returns (transfer full): a newly allocated checksum of the solution
         * @param salt used to seed the checksum, or `null`
         */
        get_checksum(salt?: string | null): string;
        /**
         * Returns the guess in the cell at `coord`. If the user hasn't guessed
         * a value there then `null` is returned
         * @param coord the coordinate to get the guess from
         * @returns the guess at `cell`, or `null`
         */
        get_guess(coord: CellCoord): string | null;
        /**
         * Returns the height of `guesses`.
         * @returns The height of `guesses`
         */
        get_height(): number;
        /**
         * Calculates the completion percentage of `guesses`. This just
         * calculates the percentage of {@link Ipuz.CellType.NORMAL} cells filled in, and
         * has no bearing on the correctness of the guessses given. It will be
         * a value between 0.0 and 1.0 inclusive.
         * @returns the completion percentage of `guesses`
         */
        get_percent(): number;
        /**
         * Queries a row's or column's data string that has been previously set with
         * `ipuz_guesses_set_stride_guess()`.
         * @param direction IPUZ_CLUE_DIRECTION_ACROSS or IPUZ_CLUE_DIRECTION_DOWN.
         * @param index index of the row (IPUZ_CLUE_DIRECTION_ACROSS) or column (IPUZ_CLUE_DIRECTION_DOWN) with which to associate the data.
         * @returns The guess set previously with `ipuz_guesses_set_stride_guess()`, or `null` if the data is not set.
         */
        get_stride_guess(direction: ClueDirection | null, index: number): string | null;
        /**
         * Returns the width of `guesses`.
         * @returns The width of `guesses`
         */
        get_width(): number;
        /**
         * Prints `guesses` to stdout. This method is meant to be used for
         * debugging.
         */
        print(): void;
        /**
         * Refs the guesses.
         * @returns `guesses`. This can be used to chain calls or ref on return.
         */
        ref(): Guesses;
        /**
         * @param new_width
         * @param new_height
         */
        resize(new_width: number, new_height: number): void;
        /**
         * Writes `guesses` to `filename` as a guesses file, overwriting the
         * current contents.
         *
         * This operation is atomic, in the sense that the data is written to
         * a temporary file which is then renamed to the given filename.
         *
         * Errors will be in the {@link Gio.IOErrorEnum} domain.
         * @param filename The filename to save `guesses` to
         * @returns `true` if saving was successful
         */
        save_to_file(filename: string): boolean;
        /**
         * @param coord
         * @param cell_type
         */
        set_cell_type(coord: CellCoord, cell_type: CellType | null): void;
        /**
         * Sets the user's guess at `coord` to be `guess`. If `null`, the guess
         * is cleared.
         * @param coord the coordinate at which to set the guess
         * @param guess A guess, or `null`
         */
        set_guess(coord: CellCoord, guess?: string | null): void;
        /**
         * Sets a `data` string to be associated to a certain row or column.  The
         * interpretation of this string is left up to the application.  For example,
         * nonograms can encode the user's annotations about their progress with the
         * solution and put it in this string.
         *
         * You can pass `null` for `data` if you wish to clear an entry that has already
         * been set.
         * @param direction IPUZ_CLUE_DIRECTION_ACROSS or IPUZ_CLUE_DIRECTION_DOWN.
         * @param index index of the row (IPUZ_CLUE_DIRECTION_ACROSS) or column (IPUZ_CLUE_DIRECTION_DOWN) with which to associate the data.
         * @param data string that will be associated to the row or column.
         */
        set_stride_guess(direction: ClueDirection | null, index: number, data?: string | null): void;
        /**
         * Unrefs `guesses`, which will be freed when the reference count reaches 0.
         */
        unref(): void;
    }

    /**
     * @gir-type Alias
     */
    type NonogramClass = typeof Nonogram;
    /**
     * A data type used by {@link Ipuz.Nonogram} to indicate a segment of
     * a clue array in a nonogram.
     *
     * For monochromatic nonograms, the group field can be safely ignored.
     * @gir-type Struct
     */
    class NonogramClue {
        static $gtype: GObject.GType<NonogramClue>;

        // Fields

        count: number;
        group: string;

        // Constructors

        constructor(
            properties?: Partial<{
                count: number;
                group: string;
            }>,
        );

        // Methods

        /**
         * clue: An {@link Ipuz.NonogramClue}
         * Makes a copy of `clue`.
         * @returns A newly allocated clue
         */
        copy(): NonogramClue;
        /**
         * Compares two nonogram clues and returns `true` if they are identical.
         * @param clue2 An {@link Ipuz.NonogramClue} to compare with `clue1`
         * @returns `true`, if the two clues match
         */
        equal(clue2?: NonogramClue | null): boolean;
        /**
         * clue: An {@link Ipuz.NonogramClue}
         * Frees `clue`.
         */
        free(): void;
    }

    /**
     * @gir-type Alias
     */
    type NonogramColorClass = typeof NonogramColor;
    /**
     * @gir-type Alias
     */
    type PuzzleClass = typeof Puzzle;
    /**
     * @gir-type Alias
     */
    type PuzzleInfoClass = typeof PuzzleInfo;
    /**
     * An opaque data type that defines how an {@link Ipuz.Cell} should
     * be visually styled.
     *
     * Styles can either be *anonymous* and be defined on a per-cell
     * basis, or they can be *named* and have a `style_name` associated
     * with them. When they're named, they are defined at the
     * {@link Ipuz.Puzzle} level and can apply to multiple cells.
     *
     * The [ipuz spec](https://libipuz.org/ipuz-spec.html) doesn't
     * strongly define how the style should be rendered. Some latitude is
     * given to implementations to interpret and render the style as is
     * appropriate to their context.
     *
     * ## Usage:
     *
     * Here's an example of putting a circle behind a specific cell.
     *
     * ```C
     * static void
     * circle_cell (IpuzCrossword *puzzle,
     *              IpuzCellCoord *coord)
     * {
     *   g_autoptr (IpuzStyle) style = NULL;
     *   IpuzCell *cell;
     *
     *   cell = ipuz_crossword_get_cell (IPUZ_CROSSWORD (puzzle), coord);
     *
     *   style = ipuz_style_new ();
     *   ipuz_style_set_shapebg (style, IPUZ_STYLE_SHAPE_CIRCLE);
     *   ipuz_cell_set_style (style);
     * }
     * ```
     *
     * And here's an example of setting a global style to set a background
     * color:
     *
     * ```C
     * static void
     * set_global_style_on_cell (IpuzPuzzle *puzzle,
     *                           IpuzCell   *cell)
     * {
     *   g_autoptr (IpuzStyle) style = NULL;
     *
     *   // Create the global style
     *   style = ipuz_style_new ();
     *   ipuz_style_set_bg_color (style, "#f8e45c");
     *   ipuz_style_set_style_name (style, "yellow-bg");
     *   ipuz_puzzle_set_style (puzzle, "yellow-bg", style);
     *
     *   // Set a cell.
     *   ipuz_cell_set_style_name (cell, style, "yellow-bg");
     *  }
     * ```
     *
     * Please see the [ipuz spec](https://libipuz.org/ipuz-spec.html) for
     * more details on these concepts.
     * @gir-type Struct
     */
    class Style {
        static $gtype: GObject.GType<Style>;

        // Constructors

        constructor(properties?: Partial<{}>);

        static ['new'](): Style;

        static new_from_json(node: Json.Node): Style;

        // Static methods

        /**
         * @param side
         */
        static side_opposite(side: StyleSides): StyleSides;

        // Methods

        /**
         * @param builder
         */
        build(builder: Json.Builder): void;
        copy(): Style;
        /**
         * Compares two styles and returns `true` if they are identical.
         * @param style2 An {@link Ipuz.Style} to compare with style1
         * @returns `true` if the two styles match
         */
        equal(style2: Style): boolean;
        /**
         * Calls `func` on each mark that is explicitly set on `style`. For each
         * mark, it passes in the label at that position.
         *
         * In this instance, a *mark* is a small text label that appears in a
         * specific cell corner.
         *
         * This will not be called on a label that is set on an {@link Ipuz.Cell}
         * independent of `style`.
         * @param func The function to call for each mark
         */
        foreach_mark(func: StyleForeachMarkFunc): void;
        get_barred(): StyleSides;
        get_bg_color(): string;
        get_border(): number;
        get_border_color(): string;
        get_dashed(): StyleSides;
        get_divided(): StyleDivided;
        get_dotted(): StyleSides;
        get_equal(): StyleSides;
        get_greaterthan(): StyleSides;
        get_highlight(): boolean;
        get_image_url(): string;
        get_imagebg_url(): string;
        get_label(): string;
        get_lessthan(): StyleSides;
        get_named(): string;
        get_shapebg(): StyleShape;
        get_style_name(): string;
        get_text_color(): string;
        /**
         * Returns #true if style doesn't have anything set, and makes no
         * changes to the rendering of a cell it's associated with.
         * @returns #true if `style` is empty
         */
        is_empty(): boolean;
        /**
         * Refs the style.
         * @returns `style`. This can be used to chain calls or ref on return.
         */
        ref(): Style;
        /**
         * @param barred
         */
        set_barred(barred: StyleSides | null): void;
        /**
         * @param bg_color
         */
        set_bg_color(bg_color: string): void;
        /**
         * @param border
         */
        set_border(border: number): void;
        /**
         * @param border_color
         */
        set_border_color(border_color: string): void;
        /**
         * @param dashed
         */
        set_dashed(dashed: StyleSides | null): void;
        /**
         * @param divided
         */
        set_divided(divided: StyleDivided | null): void;
        /**
         * @param dotted
         */
        set_dotted(dotted: StyleSides | null): void;
        /**
         * @param equal
         */
        set_equal(equal: StyleSides | null): void;
        /**
         * @param greaterthan
         */
        set_greaterthan(greaterthan: StyleSides | null): void;
        /**
         * @param highlight
         */
        set_highlight(highlight: boolean): void;
        /**
         * @param image_url
         */
        set_image_url(image_url: string): void;
        /**
         * @param imagebg_url
         */
        set_imagebg_url(imagebg_url: string): void;
        /**
         * @param label
         */
        set_label(label: string): void;
        /**
         * @param lessthan
         */
        set_lessthan(lessthan: StyleSides | null): void;
        /**
         * Sets a label for a particular mark's location.  Pass `NULL` as the
         * label to unset a mark.  The label will be drawn at the specified `mark`
         * location for a cell.
         * @param mark single {@link Ipuz.StyleMark} value, bitmasks are not allowed
         * @param label label to set for the specified `mark`, or `NULL` to remove a label
         */
        set_mark(mark: StyleMark | null, label: string): void;
        /**
         * @param named
         */
        set_named(named: string): void;
        /**
         * @param shapebg
         */
        set_shapebg(shapebg: StyleShape | null): void;
        /**
         * @param style_name
         */
        set_style_name(style_name: string): void;
        /**
         * @param text_color
         */
        set_text_color(text_color: string): void;
        /**
         * Unrefs `style`, which will be freed when the reference count reaches 0.
         */
        unref(): void;
    }

    namespace Clues {
        /**
         * Interface for implementing Clues.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Adds a new clue set to `clues`. This clue set will be in the
             * direction of `direction`, and will be empty. If `label` is set, then
             * it will set the label of the newly created clue set.
             *
             * The return value of this function is the direction of the newly
             * added clue set, and should be used to access the clue set going
             * forward. Most of the time, the returned direction will be identical
             * to `direction`. However, should you add multiple cluesets of the
             * same direction but different labels, then the returned direction
             * will be a new value starting at {@link Ipuz.ClueDirection.CUSTOM}.
             *
             * If a clue set already exists with an identical `direction` or label,
             * then a new clue set won't be created and
             * {@link Ipuz.ClueDirection.NONE} will be returned.
             * @param direction the direction of the newly added clue set
             * @param label an optional label for the newly added clue set
             * @virtual
             */
            vfunc_add_clue_set(direction: ClueDirection, label?: string | null): ClueDirection;
            /**
             * Removes all the clues and clue sets of `clues`.
             * @virtual
             */
            vfunc_clear_clue_sets(): void;
            /**
             * Returns `true` if `clue` has a user guess for every cell. If all the
             * user guesses are correct, then `correct` is set to `true` as well.
             * @param clue The clue to inspect
             * @virtual
             */
            vfunc_clue_guessed(clue: Clue): [boolean, boolean];
            /**
             * Returns the direction of the clueset at `index`.
             *
             * This can be used in conjunction with
             * {@link Ipuz.Clues.get_n_clue_sets} to iterate through all the
             * directions in `clues`. This is the only place in the API where an
             * index is used, as opposed to a direction.
             * @param index the index of the clueset to lookup.
             * @virtual
             */
            vfunc_clue_set_get_dir(index: number): ClueDirection;
            /**
             * Returns the label of the clueset at `direction`.
             *
             * This label can be used as a user visible discription the clue set.
             * @param direction the direction of the clue set
             * @virtual
             */
            vfunc_clue_set_get_label(direction: ClueDirection): string;
            /**
             * [ RETHINK THIS FUNCTION. CANT WE GET IT FROM THE CELL?]
             * @param direction
             * @param coord
             * @virtual
             */
            vfunc_find_clue_by_coord(direction: ClueDirection, coord: CellCoord): Clue;
            /**
             * Searches for and returns the clue with `direction` and `label`.
             * @param direction The direction to search
             * @param label The label to look for
             * @virtual
             */
            vfunc_find_clue_by_label(direction: ClueDirection, label: string): Clue | null;
            /**
             * Searches for and returns the clue with `direction` and `number`.
             *
             * This is different from the {@link Ipuz.ClueId} which uses the
             * index to refer to a clue. As an example the clue _2dn_ could be
             * have a clue id with an index of 0.
             * @param direction The direction to search
             * @param number The number to look for
             * @virtual
             */
            vfunc_find_clue_by_number(direction: ClueDirection, number: number): Clue | null;
            /**
             * Calls `func` for each {@link Ipuz.Clue} in `clues`.
             * @param func The function to call for each clue
             * @virtual
             */
            vfunc_foreach_clue(func: CluesForeachClueFunc): void;
            /**
             * Returns the clue at `clue_id`, or `null`.
             * @param clue_id An id of a clue
             * @virtual
             */
            vfunc_get_clue_by_id(clue_id: ClueId): Clue | null;
            /**
             * Returns a string containing the solution of the puzzle for a given
             * clue. This string will have '?' characters embedded within it if
             * there are cells without solutions set yet.
             * @param clue_id An {@link Ipuz.ClueId} to get the clue string for
             * @virtual
             */
            vfunc_get_clue_string_by_id(clue_id: ClueId): string | null;
            /**
             * Returns an array of all clues in the direction of `direction`.
             * @param direction The direction of clues to search
             * @virtual
             */
            vfunc_get_clues(direction: ClueDirection): Clue[];
            /**
             * Returns a string containing the guess in the puzzle for a given
             * clue. This string will have '?' characters embedded within it if
             * there are cells not completely filled out.
             * @param clue_id An {@link Ipuz.ClueId} to get the guesses string for
             * @virtual
             */
            vfunc_get_guess_string_by_id(clue_id: ClueId): string | null;
            /**
             * Finds the {@link Ipuz.ClueId} of `clue` within `clues`.
             *
             * If `clue` doesn't exist in `clues`, then `false` is returned and
             * `clue_id`'s direction is set to {@link Ipuz.ClueDirection.NONE}.
             * @param clue The {@link Ipuz.Clue} to search for
             * @virtual
             */
            vfunc_get_id_by_clue(clue: Clue | null): [boolean, ClueId];
            /**
             * Returns the number of clue sets associated with `clues`.
             * @virtual
             */
            vfunc_get_n_clue_sets(): number;
            /**
             * Returns the number of clues in `direction`.
             * @param direction The direction of clues to count
             * @virtual
             */
            vfunc_get_n_clues(direction: ClueDirection): number;
            /**
             * Removes `clue` from `clues`. The clue will also be unlinked from the
             * grid.
             * @param clue A clue to remove
             * @virtual
             */
            vfunc_remove_clue(clue: Clue): void;
            /**
             * Removes the clue set in the direction of `direction`. All the clues
             * associated with that clue set will be unreffed.
             * @param direction the direction of the clue set to remove
             * @virtual
             */
            vfunc_remove_clue_set(direction: ClueDirection): void;
            /**
             * Unlinks `clue` from the grid. That is to say, any of the cells that
             * `clue` pointed to will no longer refer to it.
             * @param clue A clue to remove
             * @virtual
             */
            vfunc_unlink_clue(clue: Clue): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Grid.ConstructorProps {}
    }

    export interface CluesNamespace {
        $gtype: GObject.GType<Clues>;
        prototype: Clues;
    }
    /**
     * An interface to access and modify the clues of a crossword-like
     * puzzle. It is intended to be used with {@link Ipuz.Clue} clues
     * only, and will not work with other clue types.
     *
     * # Clue Sets
     *
     * The {@link Ipuz.Clues} interface is organized around the concept of
     * clue sets. Clue sets have an ordered list of clues, and are
     * identified by an {@link Ipuz.ClueDirection}. In general, it's
     * expected to have one clue set in a given physical direction. It is
     * possible to have multiple clue sets with the same direction, but
     * they must have different labels.
     *
     * Here is an examples of adding clues to a standard crossword from
     * scratch:
     *
     * ```C
     * IpuzPuzzle *puzzle;
     *
     * puzzle = ipuz_crossword_new ();
     *
     * ...
     *
     * // Add across and down clue sets to a grid
     * ipuz_clues_clue_add_clue_set (IPUZ_CLUES (puzzle), IPUZ_CLUE_DIRECTION_ACROSS, NULL);
     * ipuz_clues_clue_add_clue_set (IPUZ_CLUES (puzzle), IPUZ_CLUE_DIRECTION_DOWN, NULL);
     *
     * // Add a clue in the across direction
     * ipuz_clues_append_clue (IPUZ_CLUES (puzzle), IPUZ_CLUE_DIRECTION_ACROSS, clue);
     * ```
     *
     * ### Referring to clue sets
     *
     * Clue sets are referred to by their direction. Here's an example of
     * creating a puzzle with two custom clue sets:
     *
     * ```C
     * // This puzzle has two sets of clues, both spiraling in different directions
     * cw_direction = ipuz_clues_clue_add_clue_set (clues, IPUZ_CLUE_DIRECTION_CLUES, "Clockwise");
     * ccw_direction = ipuz_clues_clue_add_clue_set (clues, IPUZ_CLUE_DIRECTION_CLUES, "Counter Clockwise");
     *
     * // Add a clue who's cells of spiral in the clockwise direction
     * ipuz_clues_append_clue (clues, cw_direction, clue);
     * ```
     *
     * In this example, the direction returned by
     * {@link Ipuz.Clues.add_clue_set} can be used to work with the clue
     * set later on. They will have different values. In addition,
     * `ccw_direction` will have a value equal to or greater than
     * {@link Ipuz.ClueDirection.CUSTOM}.
     *
     * ### Itemizing clue sets
     *
     * It is also possible to iterate through all the clue sets in a
     * puzzle. That can be done through a combination of
     * {@link Ipuz.Clues.get_n_clue_sets} and {@link Ipuz.Clues.clue_set_get_dir}.
     *
     * ```C
     * g_print ("Puzzle has the following clue directions:\n")
     * for (guint i = 0; i < ipuz_clues_get_n_clue_sets (clues))
     *   {
     *     IpuzClueDirection direction;
     *     const gchar *label;
     *
     *     direction = ipuz_clues_clue_set_get_dir (clues, i);
     *     label = ipuz_clue_sets_get_direction (direction);
     *     g_print ("\t%s\n", label);
     *   }
     * ```
     * ::: note
     *     The `index` of a clue set is not guaranteed to be stable and
     *     should only be used to iterate through all clue sets. It
     *     shouldn't be used to refer to a clue set anywhere else.
     *
     *
     * ### Hiden Clue Sets
     *
     * Most clue sets are displayed to the user in the order stored in the
     * file. However, there are times that it is convenient to indicate
     * the cells of clues without revealing them to the users — such as
     * with an alphabetical crossword. In that instance, it's useful to
     * have a mirror of user visible clues with a direction of
     * {@link Ipuz.ClueDirection.HIDDEN}.
     *
     * By convention, these clues are never shown to the user. They are
     * also skipped when iterating through the direction with
     * {@link Ipuz.Clues.clue_set_next_direction} and
     * {@link Ipuz.Clues.clue_set_prev_direction}.
     * @gir-type Interface
     */
    interface Clues extends Grid, Clues.Interface {
        // Methods

        /**
         * Adds a new clue set to `clues`. This clue set will be in the
         * direction of `direction`, and will be empty. If `label` is set, then
         * it will set the label of the newly created clue set.
         *
         * The return value of this function is the direction of the newly
         * added clue set, and should be used to access the clue set going
         * forward. Most of the time, the returned direction will be identical
         * to `direction`. However, should you add multiple cluesets of the
         * same direction but different labels, then the returned direction
         * will be a new value starting at {@link Ipuz.ClueDirection.CUSTOM}.
         *
         * If a clue set already exists with an identical `direction` or label,
         * then a new clue set won't be created and
         * {@link Ipuz.ClueDirection.NONE} will be returned.
         * @param direction the direction of the newly added clue set
         * @param label an optional label for the newly added clue set
         * @returns the direction of the newly created clue set, or {@link Ipuz.ClueDirection.NONE}
         */
        add_clue_set(direction: ClueDirection | null, label?: string | null): ClueDirection;
        /**
         * Removes all the clues and clue sets of `clues`.
         */
        clear_clue_sets(): void;
        /**
         * Returns `true` if `clue` has a user guess for every cell. If all the
         * user guesses are correct, then `correct` is set to `true` as well.
         * @param clue The clue to inspect
         * @returns `true`, if the clue has guesses for every cell
         */
        clue_guessed(clue: Clue): [boolean, boolean];
        /**
         * Returns the direction of the clueset at `index`.
         *
         * This can be used in conjunction with
         * {@link Ipuz.Clues.get_n_clue_sets} to iterate through all the
         * directions in `clues`. This is the only place in the API where an
         * index is used, as opposed to a direction.
         * @param index the index of the clueset to lookup.
         * @returns The direction of the clueset indexed by `index`
         */
        clue_set_get_dir(index: number): ClueDirection;
        /**
         * Returns the label of the clueset at `direction`.
         *
         * This label can be used as a user visible discription the clue set.
         * @param direction the direction of the clue set
         * @returns The label of the clueset at `direction`
         */
        clue_set_get_label(direction: ClueDirection | null): string;
        /**
         * Returns the next clue set visible in `clues` after `direction`.
         *
         * For example, if called on a regular crossword with a `direction` of
         * {@link Ipuz.ClueDirection.ACROSS}, this would return
         * {@link Ipuz.ClueDirection.DOWN}.
         *
         * If `wrap` is `true` then this will wrap around to the beginning when
         * at the last visible clue sets, otherwise it will return
         * {@link Ipuz.ClueDirection.NONE}.
         *
         * Note that any clue sets of type {@link Ipuz.ClueDirection.HIDDEN}
         * will be skipped by this function.
         * @param direction A direction
         * @param wrap Whether to wrap around
         * @returns The next direction logically in `clues`, or {@link Ipuz.ClueDirection.NONE}
         */
        clue_set_next_direction(direction: ClueDirection | null, wrap: boolean): ClueDirection;
        /**
         * Returns the previous clue set visible in `clues` after `direction`.
         *
         * For example, if called on a regular crossword with a `direction` of
         * {@link Ipuz.ClueDirection.DOWN}, this would return
         * {@link Ipuz.ClueDirection.ACROSS}.
         *
         * If `wrap` is `true` then this will wrap around to the end when at the
         * first visible clue sets, otherwise it will return
         * {@link Ipuz.ClueDirection.NONE}.
         *
         * Note that any clue sets of type {@link Ipuz.ClueDirection.HIDDEN}
         * will be skipped by this function.
         * @param direction A direction
         * @param wrap Whether to wrap around
         * @returns The previous direction logically in `clues`, or {@link Ipuz.ClueDirection.NONE}
         */
        clue_set_prev_direction(direction: ClueDirection | null, wrap: boolean): ClueDirection;
        /**
         * [ RETHINK THIS FUNCTION. CANT WE GET IT FROM THE CELL?]
         * @param direction
         * @param coord
         */
        find_clue_by_coord(direction: ClueDirection | null, coord: CellCoord): Clue;
        /**
         * Searches for and returns the clue with `direction` and `label`.
         * @param direction The direction to search
         * @param label The label to look for
         * @returns The clue with `direction` and `label`, or `null`
         */
        find_clue_by_label(direction: ClueDirection | null, label: string): Clue | null;
        /**
         * Searches for and returns the clue with `direction` and `number`.
         *
         * This is different from the {@link Ipuz.ClueId} which uses the
         * index to refer to a clue. As an example the clue _2dn_ could be
         * have a clue id with an index of 0.
         * @param direction The direction to search
         * @param number The number to look for
         * @returns The clue with `direction` and `number`, or `null`
         */
        find_clue_by_number(direction: ClueDirection | null, number: number): Clue | null;
        /**
         * Calls `func` for each {@link Ipuz.Clue} in `clues`.
         * @param func The function to call for each clue
         */
        foreach_clue(func: CluesForeachClueFunc): void;
        /**
         * Returns the clue at `clue_id`, or `null`.
         * @param clue_id An id of a clue
         * @returns A clue at `clue_id`
         */
        get_clue_by_id(clue_id: ClueId): Clue | null;
        /**
         * Returns a string containing the solution of the puzzle for a given
         * clue. This string will have '?' characters embedded within it if
         * there are cells without solutions set yet.
         * @param clue_id An {@link Ipuz.ClueId} to get the clue string for
         * @returns The solution for the puzzle for `clue_id`. Returns `null` if `clue_id` points to an invalid clue
         */
        get_clue_string_by_id(clue_id: ClueId): string | null;
        /**
         * Returns an array of all clues in the direction of `direction`.
         * @param direction The direction of clues to search
         * @returns an array of all clues in the direction of `direction`
         */
        get_clues(direction: ClueDirection | null): Clue[];
        /**
         * Returns a string containing the guess in the puzzle for a given
         * clue. This string will have '?' characters embedded within it if
         * there are cells not completely filled out.
         * @param clue_id An {@link Ipuz.ClueId} to get the guesses string for
         * @returns The guesses for the puzzle for `clue_id`. Returns `null` if `clue_id` points to an invalid clue
         */
        get_guess_string_by_id(clue_id: ClueId): string | null;
        /**
         * Finds the {@link Ipuz.ClueId} of `clue` within `clues`.
         *
         * If `clue` doesn't exist in `clues`, then `false` is returned and
         * `clue_id`'s direction is set to {@link Ipuz.ClueDirection.NONE}.
         * @param clue The {@link Ipuz.Clue} to search for
         * @returns `true`, if `clue_id` was set to the id of `clue`
         */
        get_id_by_clue(clue: Clue | null): [boolean, ClueId];
        /**
         * Returns the number of clue sets associated with `clues`.
         * @returns The number of clue sets associated with `clues`
         */
        get_n_clue_sets(): number;
        /**
         * Returns the number of clues in `direction`.
         * @param direction The direction of clues to count
         * @returns The number of clues in `direction`
         */
        get_n_clues(direction: ClueDirection | null): number;
        /**
         * Removes `clue` from `clues`. The clue will also be unlinked from the
         * grid.
         * @param clue A clue to remove
         */
        remove_clue(clue: Clue): void;
        /**
         * Removes the clue set in the direction of `direction`. All the clues
         * associated with that clue set will be unreffed.
         * @param direction the direction of the clue set to remove
         */
        remove_clue_set(direction: ClueDirection | null): void;
        /**
         * Unlinks `clue` from the grid. That is to say, any of the cells that
         * `clue` pointed to will no longer refer to it.
         * @param clue A clue to remove
         */
        unlink_clue(clue: Clue): void;
    }

    export const Clues: CluesNamespace & {
        new (): Clues; // This allows `obj instanceof Clues`
    };

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

export default Ipuz;

// END
