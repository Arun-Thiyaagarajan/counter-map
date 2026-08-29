/**
 * Stores values with the number of times each value was added.
 *
 * @typeParam T - The type of values to count.
 */
export class CounterMap {
    constructor() {
        this.map = new Map();
    }
    /**
     * Adds one to a value's count.
     *
     * @param value - The value to add.
     * @returns The new count for the value.
     */
    add(value) {
        const count = (this.map.get(value) ?? 0) + 1;
        this.map.set(value, count);
        return count;
    }
    /**
     * Removes one from a value's count.
     *
     * @param value - The value to remove.
     * @returns The new count, or `0` when the value is not stored.
     */
    remove(value) {
        const count = this.map.get(value);
        if (count === undefined) {
            return 0;
        }
        if (count === 1) {
            this.map.delete(value);
            return 0;
        }
        const newCount = count - 1;
        this.map.set(value, newCount);
        return newCount;
    }
    /**
     * Gets the count for a value.
     *
     * @param value - The value to look up.
     * @returns The count, or `0` when the value is not stored.
     */
    get(value) {
        return this.map.get(value) ?? 0;
    }
    /**
     * Checks whether a value is stored.
     *
     * @param value - The value to check.
     * @returns `true` when the value is stored.
     */
    has(value) {
        return this.map.has(value);
    }
    /**
     * Removes a value and its count.
     *
     * @param value - The value to delete.
     * @returns `true` when the value was stored.
     */
    delete(value) {
        return this.map.delete(value);
    }
    /** Removes every value and count. */
    clear() {
        this.map.clear();
    }
    /**
     * Gets the largest count.
     *
     * @returns The largest count, or `0` when empty.
     */
    maxCount() {
        let max = 0;
        for (const count of this.map.values()) {
            max = Math.max(max, count);
        }
        return max;
    }
    /**
     * Gets the first value with the largest count.
     *
     * @returns The value, or `undefined` when empty.
     */
    maxValue() {
        let maxValue;
        let maxCount = 0;
        for (const [value, count] of this.map) {
            if (count > maxCount) {
                maxCount = count;
                maxValue = value;
            }
        }
        return maxValue;
    }
    /**
     * Gets the smallest count.
     *
     * @returns The smallest count, or `0` when empty.
     */
    minCount() {
        if (this.map.size === 0) {
            return 0;
        }
        let min = Infinity;
        for (const count of this.map.values()) {
            min = Math.min(min, count);
        }
        return min;
    }
    /**
     * Gets the first value with the smallest count.
     *
     * @returns The value, or `undefined` when empty.
     */
    minValue() {
        if (this.map.size === 0) {
            return undefined;
        }
        let minValue;
        let minCount = Infinity;
        for (const [value, count] of this.map) {
            if (count < minCount) {
                minCount = count;
                minValue = value;
            }
        }
        return minValue;
    }
    /** Gets the number of stored values. */
    get size() {
        return this.map.size;
    }
}
