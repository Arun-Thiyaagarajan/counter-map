/**
 * Stores values with the number of times each value was added.
 *
 * @typeParam T - The type of values to count.
 */
export declare class CounterMap<T> {
    private readonly map;
    /**
     * Adds one to a value's count.
     *
     * @param value - The value to add.
     * @returns The new count for the value.
     */
    add(value: T): number;
    /**
     * Removes one from a value's count.
     *
     * @param value - The value to remove.
     * @returns The new count, or `0` when the value is not stored.
     */
    remove(value: T): number;
    /**
     * Gets the count for a value.
     *
     * @param value - The value to look up.
     * @returns The count, or `0` when the value is not stored.
     */
    get(value: T): number;
    /**
     * Checks whether a value is stored.
     *
     * @param value - The value to check.
     * @returns `true` when the value is stored.
     */
    has(value: T): boolean;
    /**
     * Removes a value and its count.
     *
     * @param value - The value to delete.
     * @returns `true` when the value was stored.
     */
    delete(value: T): boolean;
    /** Removes every value and count. */
    clear(): void;
    /**
     * Gets the largest count.
     *
     * @returns The largest count, or `0` when empty.
     */
    maxCount(): number;
    /**
     * Gets the first value with the largest count.
     *
     * @returns The value, or `undefined` when empty.
     */
    maxValue(): T | undefined;
    /**
     * Gets the smallest count.
     *
     * @returns The smallest count, or `0` when empty.
     */
    minCount(): number;
    /**
     * Gets the first value with the smallest count.
     *
     * @returns The value, or `undefined` when empty.
     */
    minValue(): T | undefined;
    /** Gets the number of stored values. */
    get size(): number;
}
