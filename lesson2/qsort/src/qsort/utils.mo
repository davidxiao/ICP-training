import Array "mo:base/Array";
import Nat "mo:base/Nat";
import Debug "mo:base/Debug";

module {

  func swap(items: [var Int], startIdx: Nat, endIdx: Nat){
    let tmp = items[startIdx];
    items[startIdx] := items[endIdx];
    items[endIdx] := tmp;
  };

  func partition(items: [var Int], startIdx: Nat, endIdx: Nat):Nat{
    let pivot = items[startIdx];
    var i = startIdx;
    var j = endIdx;
    loop {
      while (items[i] < pivot){
        i += 1;
      };
      while (items[j] > pivot){
        j -= 1;
      };
      if( i >= j) return j;
      swap(items, i, j);
    }
  };

  public func quicksort(items: [var Int], startIdx:Nat, endIdx:Nat ){
    if(startIdx < endIdx) {
      let pivot = partition(items, startIdx, endIdx);
      quicksort(items, startIdx, pivot);
      quicksort(items, pivot+1, endIdx);
    }
  };

}

// let rawItems: [Int] = [9,5,2,3,8,7,1, -1];
// let thawedItems: [var Int] = Array.thaw<Int>(rawItems);
// Debug.print(debug_show(thawedItems));
// quicksort(thawedItems, 0, thawedItems.size() -1 );
// Debug.print(debug_show(thawedItems));