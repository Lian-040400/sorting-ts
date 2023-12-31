import { NumberCollection } from "./NumberCollection";
import { CharacterCollection } from "./CharacterCollection";
import { LinkedList } from './LinkedList';


const numbersCollection = new NumberCollection([50,3,-5,0]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharacterCollection("Xaayb");
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort();
linkedList.print();
