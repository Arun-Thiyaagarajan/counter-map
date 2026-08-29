export class CounterMap {
    constructor() {
        this.map = new Map();
    }
    add(value) {
        const count = (this.map.get(value) ?? 0) + 1;
        this.map.set(value, count);
        return count;
    }
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
    get(value) {
        return this.map.get(value) ?? 0;
    }
    has(value) {
        return this.map.has(value);
    }
    delete(value) {
        return this.map.delete(value);
    }
    clear() {
        this.map.clear();
    }
    maxCount() {
        let max = 0;
        for (const count of this.map.values()) {
            max = Math.max(max, count);
        }
        return max;
    }
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
    get size() {
        return this.map.size;
    }
}
