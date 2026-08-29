
/**
 * Stores values with the number of times each value was added.
 *
 * @typeParam T - The type of values to count.
 * @complexity Space: O(n), where n is the number of stored values.
 */
export class CounterMap<T> {
    private readonly map = new Map<T, number>();

    /**
     * Adds one to a value's count.
     *
     * @param value - The value to add.
     * @returns The new count for the value.
     * @complexity Time: O(1) average. Space: O(1).
     */
    add(value: T): number {
        const count = (this.map.get(value) ?? 0) + 1;

        this.map.set(value, count);

        return count;
    }

    /**
     * Removes one from a value's count.
     *
     * @param value - The value to remove.
     * @returns The new count, or `0` when the value is not stored.
     * @complexity Time: O(1) average. Space: O(1).
     */
    remove(value: T): number {
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
     * @complexity Time: O(1) average. Space: O(1).
     */
    get(value: T): number {
        return this.map.get(value) ?? 0;
    }

    /**
     * Checks whether a value is stored.
     *
     * @param value - The value to check.
     * @returns `true` when the value is stored.
     * @complexity Time: O(1) average. Space: O(1).
     */
    has(value: T): boolean {
        return this.map.has(value);
    }

    /**
     * Removes a value and its count.
     *
     * @param value - The value to delete.
     * @returns `true` when the value was stored.
     * @complexity Time: O(1) average. Space: O(1).
     */
    delete(value: T): boolean {
        return this.map.delete(value);
    }

    /**
     * Removes every value and count.
     *
     * @complexity Time: O(n). Space: O(1).
     */
    clear(): void {
        this.map.clear();
    }

    /**
     * Gets the largest count.
     *
     * @returns The largest count, or `0` when empty.
     * @complexity Time: O(n). Space: O(1).
     */
    maxCount(): number {
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
     * @complexity Time: O(n). Space: O(1).
     */
    maxValue(): T | undefined {
        let maxValue: T | undefined;
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
     * @complexity Time: O(n). Space: O(1).
     */
    minCount(): number {
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
     * @complexity Time: O(n). Space: O(1).
     */
    minValue(): T | undefined {
        if (this.map.size === 0) {
            return undefined;
        }

        let minValue: T | undefined;
        let minCount = Infinity;

        for (const [value, count] of this.map) {
            if (count < minCount) {
                minCount = count;
                minValue = value;
            }
        }

        return minValue;
    }

    /**
     * Gets the number of stored values.
     *
     * @complexity Time: O(1). Space: O(1).
     */
    get size(): number {
        return this.map.size;
    }
}
