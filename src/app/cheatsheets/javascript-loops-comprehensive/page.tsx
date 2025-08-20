import Link from 'next/link';
import { ArrowLeft, Code2 } from 'lucide-react';

export default function JavaScriptLoopsComprehensivePage() {
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
                Comprehensive Loop Guide in JavaScript
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Learn all about JavaScript loops: for, while, do...while, for...of, for...in, array methods, and practical patterns for iteration.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {['JavaScript', 'Loops', 'Iteration', 'Guide', 'for', 'while', 'array methods'].map((tag) => (
              <span 
                key={tag}
                className="px-3 py-1 text-sm bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Section 1: Why Loops? */}
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-200 mb-4">1. Why Use Loops?</h2>
          <p className="text-blue-700 dark:text-blue-300 mb-4">Loops let you repeat actions, process lists, and automate tasks. They are essential for working with arrays, objects, and any repetitive logic.</p>
        </div>

        {/* Section 2: for Loop */}
        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-purple-800 dark:text-purple-200 mb-4">2. for Loop</h2>
          <p className="text-purple-700 dark:text-purple-300 mb-4">The classic loop for running code a set number of times.</p>
          <div className="bg-white dark:bg-gray-800 p-4 rounded mb-2">
            <pre className="text-sm"><code className="text-gray-800 dark:text-gray-200">{`for (let i = 0; i < 5; i++) {
  console.log(i);
}`}</code></pre>
          </div>
        </div>

        {/* Section 3: while & do...while */}
        <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-4">3. while & do...while Loops</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-100 dark:bg-blue-900/20 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">while</h4>
              <pre className="text-xs"><code className="text-gray-800 dark:text-gray-200">{`let count = 0;
while (count < 3) {
  console.log(count);
  count++;
}`}</code></pre>
            </div>
            <div className="bg-purple-100 dark:bg-purple-900/20 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">do...while</h4>
              <pre className="text-xs"><code className="text-gray-800 dark:text-gray-200">{`let num = 0;
do {
  console.log(num);
  num++;
} while (num < 3);`}</code></pre>
            </div>
          </div>
        </div>

        {/* Section 4: for...of & for...in */}
        <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-orange-800 dark:text-orange-200 mb-4">4. for...of & for...in</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-pink-100 dark:bg-pink-900/20 p-4 rounded-lg">
              <h4 className="font-semibold text-pink-800 dark:text-pink-200 mb-2">for...of</h4>
              <p className="text-pink-700 dark:text-pink-300 text-sm">Iterate over array values.</p>
              <pre className="text-xs"><code className="text-gray-800 dark:text-gray-200">{`const fruits = ['apple', 'banana', 'cherry'];
for (const fruit of fruits) {
  console.log(fruit);
}`}</code></pre>
            </div>
            <div className="bg-yellow-100 dark:bg-yellow-900/20 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">for...in</h4>
              <p className="text-yellow-700 dark:text-yellow-300 text-sm">Iterate over object keys.</p>
              <pre className="text-xs"><code className="text-gray-800 dark:text-gray-200">{`const person = { name: 'Alice', age: 30 };
for (const key in person) {
  console.log(key, person[key]);
}`}</code></pre>
            </div>
          </div>
        </div>

        {/* Section 5: Array Methods for Iteration */}
        <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-indigo-800 dark:text-indigo-200 mb-4">5. Array Methods for Iteration</h2>
          <ul className="list-disc ml-6 text-indigo-700 dark:text-indigo-300 mb-4">
            <li><code>forEach()</code> - Run a function for each element</li>
            <li><code>map()</code> - Transform each element, return new array</li>
            <li><code>filter()</code> - Return elements that match a condition</li>
            <li><code>reduce()</code> - Accumulate a single value from array</li>
            <li><code>find()</code> - Find first matching element</li>
          </ul>
          <div className="bg-white dark:bg-gray-800 p-4 rounded mb-2">
            <pre className="text-sm"><code className="text-gray-800 dark:text-gray-200">{`const numbers = [1, 2, 3, 4, 5];
numbers.forEach(n => console.log(n));
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
const sum = numbers.reduce((acc, n) => acc + n, 0);
const found = numbers.find(n => n > 3);`}</code></pre>
          </div>
        </div>

        {/* Section 6: Loop Patterns & Tips */}
        <div className="bg-pink-50 dark:bg-pink-900/20 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-pink-800 dark:text-pink-200 mb-4">6. Loop Patterns & Tips</h2>
          <ul className="list-disc ml-6 text-pink-700 dark:text-pink-300 mb-4">
            <li>Break and continue to control loop flow</li>
            <li>Nested loops for grids and tables</li>
            <li>Labelled loops for advanced control</li>
            <li>Avoid infinite loops by updating conditions</li>
          </ul>
          <div className="bg-white dark:bg-gray-800 p-4 rounded mb-2">
            <pre className="text-sm"><code className="text-gray-800 dark:text-gray-200">{`outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === j) continue outer;
    console.log(i, j);
  }
}`}</code></pre>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-xl p-8">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Key Takeaways</h3>
          <ul className="text-gray-600 dark:text-gray-300 space-y-2">
            <li>• Use for, while, do...while for basic loops</li>
            <li>• for...of for arrays, for...in for objects</li>
            <li>• Array methods for functional iteration</li>
            <li>• Control flow with break, continue, and labels</li>
            <li>• Always update loop conditions to avoid infinite loops</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
