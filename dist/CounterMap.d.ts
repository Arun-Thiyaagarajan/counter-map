export declare class CounterMap<T> {
    private readonly map;
    add(value: T): number;
    remove(value: T): number;
    get(value: T): number;
    has(value: T): boolean;
    delete(value: T): boolean;
    clear(): void;
    maxCount(): number;
    maxValue(): T | undefined;
    minCount(): number;
    minValue(): T | undefined;
    get size(): number;
}
