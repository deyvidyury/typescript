import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
import { NumbersCollection } from "./NumbersCollection";

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
// const sorter = new Sorter(numbersCollection)
// sorter.sort()
numbersCollection.sort();
console.log(numbersCollection.data)

const charactersCollection = new CharactersCollection('Xaayb');
// const sorter = new Sorter(charactersCollection);
// sorter.sort();
charactersCollection.sort();
console.log(charactersCollection.data)

const linkedList = new LinkedList();
linkedList.add(500)
linkedList.add(-10)
linkedList.add(-3)
linkedList.add(4)
linkedList.sort();
// const sorter = new Sorter(linkedList);
// sorter.sort();
linkedList.print()