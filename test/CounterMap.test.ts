import { describe, expect, it } from "vitest";
import { CounterMap } from "../src/CounterMap.js";

describe("CounterMap", () => {
    it("adds values", () => {
        const counter = new CounterMap<string>();

        expect(counter.add("A")).toBe(1);
        expect(counter.add("A")).toBe(2);
        expect(counter.add("B")).toBe(1);

        expect(counter.get("A")).toBe(2);
        expect(counter.get("B")).toBe(1);
    });

    it("removes values", () => {
        const counter = new CounterMap<string>();

        counter.add("A");
        counter.add("A");

        expect(counter.remove("A")).toBe(1);
        expect(counter.get("A")).toBe(1);

        expect(counter.remove("A")).toBe(0);
        expect(counter.get("A")).toBe(0);
        expect(counter.has("A")).toBe(false);
    });

    it("returns max count and value", () => {
        const counter = new CounterMap<string>();

        counter.add("A");
        counter.add("A");

        counter.add("B");

        counter.add("C");
        counter.add("C");
        counter.add("C");

        expect(counter.maxCount()).toBe(3);
        expect(counter.maxValue()).toBe("C");
    });

    it("returns min count and value", () => {
        const counter = new CounterMap<string>();

        counter.add("A");
        counter.add("A");

        counter.add("B");

        counter.add("C");
        counter.add("C");
        counter.add("C");

        expect(counter.minCount()).toBe(1);
        expect(counter.minValue()).toBe("B");
    });

    it("supports generic values", () => {
        const counter = new CounterMap<number>();

        counter.add(10);
        counter.add(10);
        counter.add(20);

        expect(counter.get(10)).toBe(2);
        expect(counter.get(20)).toBe(1);
    });

    it("clears the counter", () => {
        const counter = new CounterMap<string>();

        counter.add("A");
        counter.add("B");

        counter.clear();

        expect(counter.size).toBe(0);
        expect(counter.maxCount()).toBe(0);
        expect(counter.minCount()).toBe(0);
    });
});