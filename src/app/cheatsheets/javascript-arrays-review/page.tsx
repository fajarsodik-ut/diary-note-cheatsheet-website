import Link from 'next/link';
import { ArrowLeft, Code2 } from 'lucide-react';

export default function JavaScriptArraysReviewPage() {
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
                JavaScript Arrays Review
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Modern study guide for JavaScript arrays: basics, 2D arrays, destructuring, and common methods.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {['JavaScript', 'Arrays', 'Review', 'Methods', 'Destructuring'].map((tag) => (
              <span 
                key={tag}
                className="px-3 py-1 text-sm bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Section 1: Array Basics */}
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-200 mb-4">1. What is a JavaScript Array?</h2>
          <p className="text-blue-700 dark:text-blue-300 mb-4">A JavaScript array is an ordered collection of values, each identified by a numeric index. Arrays can store numbers, strings, booleans, objects, and even other arrays.</p>
          <div className="bg-white dark:bg-gray-800 p-4 rounded mb-2">
            <pre className="text-sm"><code className="text-gray-800 dark:text-gray-200">{`const developers = ['Jessica', 'Naomi', 'Tom'];`}</code></pre>
          </div>
        </div>

        {/* Section 2: Access & Update */}
        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-purple-800 dark:text-purple-200 mb-4">2. Accessing & Updating Elements</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-100 dark:bg-blue-900/20 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Accessing</h4>
              <p className="text-blue-700 dark:text-blue-300 text-sm">Use bracket notation <code>[index]</code> to get an element.</p>
            </div>
            <div className="bg-green-100 dark:bg-green-900/20 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Updating</h4>
              <p className="text-green-700 dark:text-green-300 text-sm">Assign a new value using <code>=</code> and bracket notation.</p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded mb-2">
            <pre className="text-sm"><code className="text-gray-800 dark:text-gray-200">{`const fruits = ['apple', 'banana', 'cherry'];
fruits[1] = 'blueberry';
console.log(fruits); // ['apple', 'blueberry', 'cherry']`}</code></pre>
          </div>
        </div>

        {/* Section 3: 2D Arrays */}
        <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-orange-800 dark:text-orange-200 mb-4">3. Two-Dimensional Arrays</h2>
          <p className="text-orange-700 dark:text-orange-300 mb-4">A 2D array is an array of arrays, useful for grids and tables.</p>
          <div className="bg-white dark:bg-gray-800 p-4 rounded mb-2">
            <pre className="text-sm"><code className="text-gray-800 dark:text-gray-200">{`const chessboard = [
  ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
  ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
  ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
];
console.log(chessboard[0][3]); // "Q"`}</code></pre>
          </div>
        </div>

        {/* Section 4: Destructuring */}
        <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-indigo-800 dark:text-indigo-200 mb-4">4. Array Destructuring</h2>
          <p className="text-indigo-700 dark:text-indigo-300 mb-4">Destructuring lets you unpack array values into variables easily.</p>
          <div className="bg-white dark:bg-gray-800 p-4 rounded mb-2">
            <pre className="text-sm"><code className="text-gray-800 dark:text-gray-200">{`const fruits = ['apple', 'banana', 'orange'];
const [first, second, third] = fruits;
console.log(first); // "apple"
console.log(second); // "banana"
console.log(third); // "orange"`}</code></pre>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 mb-2">
            <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">Rest Syntax</h4>
            <p className="text-yellow-700 dark:text-yellow-300 text-sm">Use <code>...rest</code> to capture remaining elements.</p>
            <pre className="text-xs"><code className="text-gray-800 dark:text-gray-200">{`const [first, second, ...rest] = ['apple', 'banana', 'orange', 'mango', 'kiwi'];
console.log(rest); // ["orange", "mango", "kiwi"]`}</code></pre>
          </div>
        </div>

        {/* Section 5: Common Methods */}
        <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-4">5. Common Array Methods</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Add & Remove</h4>
              <ul className="list-disc ml-6 text-green-700 dark:text-green-300">
                <li><code>push()</code> - Add to end</li>
                <li><code>pop()</code> - Remove from end</li>
                <li><code>unshift()</code> - Add to start</li>
                <li><code>shift()</code> - Remove from start</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Find & Copy</h4>
              <ul className="list-disc ml-6 text-green-700 dark:text-green-300">
                <li><code>indexOf()</code> - Find index</li>
                <li><code>includes()</code> - Check existence</li>
                <li><code>slice()</code> - Copy part</li>
                <li><code>concat()</code> - Merge arrays</li>
                <li><code>splice()</code> - Add/remove anywhere</li>
              </ul>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded mb-2">
            <pre className="text-sm"><code className="text-gray-800 dark:text-gray-200">{`const desserts = ['cake', 'cookies', 'pie'];
desserts.push('ice cream');
console.log(desserts); // ["cake", "cookies", "pie", "ice cream"];
desserts.pop();
console.log(desserts); // ["cake", "cookies"];
desserts.shift();
console.log(desserts); // ["cookies", "pie"];
desserts.unshift('ice cream');
console.log(desserts); // ["ice cream", "cake", "cookies", "pie"];
`}</code></pre>
          </div>
        </div>

        {/* Section 6: String Reversal */}
        <div className="bg-pink-50 dark:bg-pink-900/20 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-pink-800 dark:text-pink-200 mb-4">6. String Reversal with Arrays</h2>
          <p className="text-pink-700 dark:text-pink-300 mb-4">Use <code>split()</code>, <code>reverse()</code>, and <code>join()</code> to reverse a string.</p>
          <div className="bg-white dark:bg-gray-800 p-4 rounded mb-2">
            <pre className="text-sm"><code className="text-gray-800 dark:text-gray-200">{`const str = 'hello';
const reversed = str.split('').reverse().join('');
console.log(reversed); // "olleh"`}</code></pre>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-xl p-8">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Key Takeaways</h3>
          <ul className="text-gray-600 dark:text-gray-300 space-y-2">
            <li>• Arrays are zero-indexed, dynamic, and can hold mixed data types</li>
            <li>• Use bracket notation <code>[index]</code> to access and update elements</li>
            <li>• <code>push/pop</code> work with the end, <code>unshift/shift</code> work with the beginning</li>
            <li>• 2D arrays are arrays of arrays, accessed with <code>[row][column]</code></li>
            <li>• Destructuring makes extracting array values cleaner and more readable</li>
            <li>• String reversal: <code>split() → reverse() → join()</code></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
