import Link from 'next/link';
import { ArrowLeft, Code2 } from 'lucide-react';

export default function JavaScriptArraysObjectsPage() {
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
                JavaScript Arrays & Objects
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Essential guide to working with arrays and objects in JavaScript
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {['JavaScript', 'Arrays', 'Objects', 'Data Structures'].map((tag) => (
              <span 
                key={tag}
                className="px-3 py-1 text-sm bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            
            {/* Introduction */}
            <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-6 mb-8">
              <h3 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">JavaScript Array Study Notes</h3>
              <p className="text-green-700 dark:text-green-300">
                Here are the key concepts for working with arrays in JavaScript, broken down by essential questions.
              </p>
            </div>

            {/* Section 1: Key Characteristics */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">1</span>
                What Are the Key Characteristics of JavaScript Arrays?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                JavaScript arrays are special variables that can hold more than one value at a time. Their main characteristics are:
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Zero-Indexed</h4>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">
                    The first element in an array is at index 0, the second is at index 1, and so on.
                  </p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Dynamic Size</h4>
                  <p className="text-purple-700 dark:text-purple-300 text-sm">
                    You can add or remove elements at any time, and the array will grow or shrink accordingly.
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Mixed Data Types</h4>
                  <p className="text-green-700 dark:text-green-300 text-sm">
                    A single array can store numbers, strings, booleans, objects, and even other arrays.
                  </p>
                </div>
              </div>

              <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 mb-4">
                <pre className="text-sm"><code className="text-gray-800 dark:text-gray-200">{`// Example of an array with mixed data types
let mixedArray = [42, "hello", true, { name: "John" }];`}</code></pre>
              </div>
            </section>

            {/* Section 2: Access and Update */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">2</span>
                How Do You Access and Update Elements in an Array?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                You use bracket notation <code>[]</code> with the element&apos;s index to access or update it.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">📖 Accessing</h4>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">
                    To get the value of an element, you place its index number in brackets after the array name.
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">✏️ Updating</h4>
                  <p className="text-green-700 dark:text-green-300 text-sm">
                    To change the value of an element, you use the same bracket notation on the left side of an assignment operator.
                  </p>
                </div>
              </div>

              <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 mb-4">
                <pre className="text-sm"><code className="text-gray-800 dark:text-gray-200">{`let fruits = ["Apple", "Banana", "Cherry"];

// Accessing the second element ("Banana")
console.log(fruits[1]); // Output: Banana

// Updating the third element from "Cherry" to "Cranberry"
fruits[2] = "Cranberry";
console.log(fruits); // Output: ["Apple", "Banana", "Cranberry"]`}</code></pre>
              </div>
            </section>

            {/* Section 3: Add and Remove Elements */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">3</span>
                How Do You Add and Remove Elements from Arrays?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                JavaScript has built-in methods to easily add or remove elements from both ends of an array.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">🔚 End of Array</h4>
                  <div className="space-y-3">
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                      <code className="font-semibold text-green-800 dark:text-green-200">push()</code>
                      <p className="text-green-700 dark:text-green-300 text-sm mt-1">Adds elements to the end</p>
                    </div>
                    <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                      <code className="font-semibold text-red-800 dark:text-red-200">pop()</code>
                      <p className="text-red-700 dark:text-red-300 text-sm mt-1">Removes the last element</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">🔝 Beginning of Array</h4>
                  <div className="space-y-3">
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                      <code className="font-semibold text-green-800 dark:text-green-200">unshift()</code>
                      <p className="text-green-700 dark:text-green-300 text-sm mt-1">Adds elements to the beginning</p>
                    </div>
                    <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                      <code className="font-semibold text-red-800 dark:text-red-200">shift()</code>
                      <p className="text-red-700 dark:text-red-300 text-sm mt-1">Removes the first element</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 mb-4">
                <pre className="text-sm"><code className="text-gray-800 dark:text-gray-200">{`let colors = ["Red", "Green", "Blue"];

// Add to the end
colors.push("Yellow");
console.log(colors); // ["Red", "Green", "Blue", "Yellow"]

// Remove from the end
colors.pop();
console.log(colors); // ["Red", "Green", "Blue"]

// Add to the beginning
colors.unshift("Purple");
console.log(colors); // ["Purple", "Red", "Green", "Blue"]

// Remove from the beginning
colors.shift();
console.log(colors); // ["Red", "Green", "Blue"]`}</code></pre>
              </div>
            </section>

            {/* Section 4: 1D vs 2D Arrays */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">4</span>
                What Is the Difference Between 1D and 2D Arrays?
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">📏 One-Dimensional (1D) Array</h4>
                  <p className="text-blue-700 dark:text-blue-300 text-sm mb-4">
                    A simple, linear list of elements. This is the standard array type you&apos;ll use most often.
                  </p>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded">
                    <code className="text-xs text-gray-800 dark:text-gray-200">let oneDim = [1, 2, 3, 4, 5];</code>
                  </div>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-3">📊 Two-Dimensional (2D) Array</h4>
                  <p className="text-purple-700 dark:text-purple-300 text-sm mb-4">
                    An &quot;array of arrays.&quot; Think of it as a grid or table with rows and columns. Useful for matrices, game boards, or tabular data.
                  </p>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded">
                    <code className="text-xs text-gray-800 dark:text-gray-200">let twoDim = [[1,2,3], [4,5,6]];</code>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 mb-4">
                <pre className="text-sm"><code className="text-gray-800 dark:text-gray-200">{`let twoDim = [
  [1, 2, 3],  // Row 0
  [4, 5, 6],  // Row 1
  [7, 8, 9]   // Row 2
];

// Accessing the number 6 (Row 1, Column 2)
console.log(twoDim[1][2]); // Output: 6`}</code></pre>
              </div>
            </section>

            {/* Section 5: Array Destructuring */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">5</span>
                What Is Array Destructuring, and How Does It Work?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Array destructuring is a special syntax that allows you to unpack values from an array and assign them to distinct variables in a single, clean line of code. It makes your code more readable by avoiding the need to access each element by its index.
              </p>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 mb-6">
                <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">💡 Pro Tip:</h4>
                <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                  You can skip elements with a comma, and you don&apos;t have to destructure all elements!
                </p>
              </div>

              <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 mb-4">
                <pre className="text-sm"><code className="text-gray-800 dark:text-gray-200">{`let contact = ["John Doe", "123-456-7890", "john.doe@email.com"];

// Without destructuring
// const name = contact[0];
// const phone = contact[1];
// const email = contact[2];

// With destructuring
const [name, phone, email] = contact;

console.log(name);  // "John Doe"
console.log(phone); // "123-456-7890"
console.log(email); // "john.doe@email.com"

// You can also skip elements with a comma
const [firstName, , userEmail] = ["Jane Doe", "987-654-3210", "jane.doe@email.com"];
console.log(firstName); // "Jane Doe"
console.log(userEmail); // "jane.doe@email.com"`}</code></pre>
              </div>
            </section>

            {/* Section 6: String Reversal */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">6</span>
                How Can You Use String and Array Methods to Reverse a String?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                You can&apos;t directly reverse a string in JavaScript, but you can do it by combining string and array methods in three steps:
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">1️⃣</div>
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">.split(&apos;&apos;)</h4>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">
                    Convert string into an array of characters
                  </p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">2️⃣</div>
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">.reverse()</h4>
                  <p className="text-purple-700 dark:text-purple-300 text-sm">
                    Reverse the order of array elements
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">3️⃣</div>
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">.join(&apos;&apos;)</h4>
                  <p className="text-green-700 dark:text-green-300 text-sm">
                    Merge characters back into a string
                  </p>
                </div>
              </div>

              <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 mb-4">
                <pre className="text-sm"><code className="text-gray-800 dark:text-gray-200">{`let originalString = "hello";
let reversedString;

// 1. Split the string into an array of characters
let charArray = originalString.split(''); // Becomes ['h', 'e', 'l', 'l', 'o']

// 2. Reverse the array
let reversedArray = charArray.reverse(); // Becomes ['o', 'l', 'l', 'e', 'h']

// 3. Join the array back into a string
reversedString = reversedArray.join(''); // Becomes "olleh"

console.log(reversedString); // Output: olleh

// You can also chain the methods together:
let anotherReversedString = "world".split('').reverse().join('');
console.log(anotherReversedString); // Output: "dlrow"`}</code></pre>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-4">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">🚀 Method Chaining</h4>
                <p className="text-green-700 dark:text-green-300 text-sm">
                  Notice how you can chain all three methods together for a more concise solution! This is a common pattern in JavaScript.
                </p>
              </div>
            </section>

            {/* Summary */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">🎯 Key Takeaways</h3>
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
      </div>
    </div>
  );
}
