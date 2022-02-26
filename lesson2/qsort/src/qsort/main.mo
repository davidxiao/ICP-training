import Array "mo:base/Array";
import Utils "utils";
actor {
    public func qsort(items: [Int]) : async [Int]{
        let thawedItems: [var Int] = Array.thaw<Int>(items);
        Utils.quicksort(thawedItems, 0, thawedItems.size() - 1);
        return Array.freeze<Int>(thawedItems);
    };
};
