import Link from 'next/link';
import { ArrowLeft, Code2 } from 'lucide-react';

export default function JavaScriptObjectsComprehensivePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link href="/cheatsheets" className="inline-flex items-center text-green-600 dark:text-green-400 hover:underline mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Cheatsheets
        </Link>

        {/* Header */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-4">
            <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg mr-4">
              <Code2 className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Comprehensive JavaScript Objects Guide
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Everything you need to know about JavaScript objects: creation, properties, methods, prototypes, destructuring, and practical examples.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {['JavaScript', 'Objects', 'Guide', 'Properties', 'Methods', 'Prototypes', 'Destructuring'].map((tag) => (
              <span 
                key={tag}
                className="px-3 py-1 text-sm bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Section 1: What is an Object? */}
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-200 mb-4">1. What is a JavaScript Object?</h2>
          <p className="text-blue-700 dark:text-blue-300 mb-4">An object is a collection of key-value pairs. Keys are strings (or Symbols), and values can be any data type. Objects are used to represent real-world entities and store structured data.</p>
          <div className="bg-white dark:bg-gray-800 p-4 rounded mb-2">
            <pre className="text-sm"><code className="text-gray-800 dark:text-gray-200">{`const person = {
  name: 'Alice',
  age: 30,
  isDeveloper: true
};`}</code></pre>
          </div>
        </div>

        {/* Section 2: Creating Objects */}
        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-purple-800 dark:text-purple-200 mb-4">2. Creating Objects</h2>
          <ul className="list-disc ml-6 text-purple-700 dark:text-purple-300 mb-4">
            <li>Object literal: <code>{`const obj = {}`}</code></li>
            <li>Constructor: <code>{`const obj = new Object()`}</code></li>
            <li>Object.create: <code>{`const obj = Object.create(proto)`}</code></li>
          </ul>
          <div className="bg-white dark:bg-gray-800 p-4 rounded mb-2">
            <pre className="text-sm"><code className="text-gray-800 dark:text-gray-200">{`const car = {
  brand: 'Toyota',
  year: 2022
};
const bike = new Object();
bike.type = 'Mountain';
bike.gears = 18;`}</code></pre>
          </div>
        </div>

        {/* Section 3: Properties & Methods */}
        <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-4">3. Properties & Methods</h2>
          <p className="text-green-700 dark:text-green-300 mb-4">Properties are values associated with a key. Methods are functions stored as object properties.</p>
          <div className="bg-white dark:bg-gray-800 p-4 rounded mb-2">
            <pre className="text-sm"><code className="text-gray-800 dark:text-gray-200">{`const user = {
  username: 'coder123',
  greet: function() {
    return 'Hello, ' + this.username;
  }
};
console.log(user.greet()); // "Hello, coder123"`}</code></pre>
          </div>
        </div>

        {/* Section 4: Accessing & Updating */}
        <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-orange-800 dark:text-orange-200 mb-4">4. Accessing & Updating Properties</h2>
          <ul className="list-disc ml-6 text-orange-700 dark:text-orange-300 mb-4">
            <li>Dot notation: <code>{`obj.key`}</code></li>
            <li>Bracket notation: <code>{`obj['key']`}</code></li>
          </ul>
          <div className="bg-white dark:bg-gray-800 p-4 rounded mb-2">
            <pre className="text-sm"><code className="text-gray-800 dark:text-gray-200">{`const book = { title: 'JS Guide', pages: 300 };
console.log(book.title); // "JS Guide"
book.pages = 350;
console.log(book['pages']); // 350`}</code></pre>
          </div>
        </div>

        {/* Section 5: Nested Objects & Arrays */}
        <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-indigo-800 dark:text-indigo-200 mb-4">5. Nested Objects & Arrays</h2>
          <p className="text-indigo-700 dark:text-indigo-300 mb-4">Objects can contain other objects and arrays, allowing for complex data structures.</p>
          <div className="bg-white dark:bg-gray-800 p-4 rounded mb-2">
            <pre className="text-sm"><code className="text-gray-800 dark:text-gray-200">{`const company = {
  name: 'TechCorp',
  employees: [
    { name: 'Bob', role: 'Engineer' },
    { name: 'Sue', role: 'Designer' }
  ],
  address: {
    city: 'Jakarta',
    country: 'Indonesia'
  }
};
console.log(company.employees[0].name); // "Bob"
console.log(company.address.city); // "Jakarta"`}</code></pre>
          </div>
        </div>

        {/* Section 6: Object Methods & Utilities */}
        <div className="bg-pink-50 dark:bg-pink-900/20 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-pink-800 dark:text-pink-200 mb-4">6. Useful Object Methods</h2>
          <ul className="list-disc ml-6 text-pink-700 dark:text-pink-300 mb-4">
            <li><code>Object.keys(obj)</code> - Get all keys</li>
            <li><code>Object.values(obj)</code> - Get all values</li>
            <li><code>Object.entries(obj)</code> - Get key-value pairs</li>
            <li><code>Object.assign(target, source)</code> - Merge objects</li>
            <li><code>Object.freeze(obj)</code> - Make object immutable</li>
          </ul>
          <div className="bg-white dark:bg-gray-800 p-4 rounded mb-2">
            <pre className="text-sm"><code className="text-gray-800 dark:text-gray-200">{`const obj = { a: 1, b: 2 };
console.log(Object.keys(obj)); // ["a", "b"]
console.log(Object.values(obj)); // [1, 2]
console.log(Object.entries(obj)); // [["a", 1], ["b", 2]]`}</code></pre>
          </div>
        </div>

        {/* Section 7: Prototypes & Inheritance */}
        <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">7. Prototypes & Inheritance</h2>
          <p className="text-yellow-700 dark:text-yellow-300 mb-4">All objects inherit properties and methods from their prototype. This enables code reuse and OOP patterns.</p>
          <div className="bg-white dark:bg-gray-800 p-4 rounded mb-2">
            <pre className="text-sm"><code className="text-gray-800 dark:text-gray-200">{`function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function() {
  return this.name + ' makes a sound.';
};
const dog = new Animal('Dog');
console.log(dog.speak()); // "Dog makes a sound."`}</code></pre>
          </div>
        </div>

        {/* Section 8: Object Destructuring */}
        <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Object Destructuring</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Destructuring lets you extract properties from objects into variables.</p>
          <div className="bg-white dark:bg-gray-800 p-4 rounded mb-2">
            <pre className="text-sm"><code className="text-gray-800 dark:text-gray-200">{`const user = { name: 'Sam', age: 25 };
const { name, age } = user;
console.log(name); // "Sam"
console.log(age); // 25`}</code></pre>
          </div>
        </div>

        {/* Section 9: Practical Examples */}
        <div className="bg-gradient-to-r from-blue-50 to-pink-50 dark:from-blue-900/20 dark:to-pink-900/20 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Practical Examples</h2>
          <ul className="list-disc ml-6 text-gray-600 dark:text-gray-300 mb-4">
            <li>Iterate over object properties with <code>for...in</code></li>
            <li>Clone objects with <code>Object.assign</code> or spread syntax</li>
            <li>Check property existence with <code>in</code> operator</li>
          </ul>
          <div className="bg-white dark:bg-gray-800 p-4 rounded mb-2">
            <pre className="text-sm"><code className="text-gray-800 dark:text-gray-200">{`const obj = { x: 10, y: 20 };
for (let key in obj) {
  console.log(key, obj[key]);
}
const clone = { ...obj };
console.log('x' in obj); // true`}</code></pre>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-gradient-to-r from-green-50 to-yellow-50 dark:from-green-900/20 dark:to-yellow-900/20 rounded-xl p-8">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Key Takeaways</h3>
          <ul className="text-gray-600 dark:text-gray-300 space-y-2">
            <li>• Objects store key-value pairs and can represent complex data</li>
            <li>• Use dot or bracket notation to access/update properties</li>
            <li>• Methods are functions stored in objects</li>
            <li>• Prototypes enable inheritance and code reuse</li>
            <li>• Destructuring and utility methods make working with objects easier</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
