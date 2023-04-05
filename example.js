import { deprecate } from "./deprecate.js";

const foo = () => console.log("foo");

const foo2 = deprecate(foo, "foo() is deprecated");
foo2();
//foo2();
