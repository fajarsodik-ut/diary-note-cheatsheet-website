import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Tag, Code2, BookOpen, Lightbulb } from 'lucide-react';

export default function JavaScriptArraysStudyPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link href="/diary" className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:underline mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Diary
        </Link>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto">
          <header className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center text-purple-600 dark:text-purple-400 text-sm mb-4">
              <Calendar className="w-4 h-4 mr-2" />
              <span>August 15, 2025</span>
              <Clock className="w-4 h-4 ml-6 mr-2" />
              <span>6 min read</span>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Deep Dive into JavaScript Arrays: My Study Notes
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              Today I created comprehensive study notes about JavaScript arrays. These concepts are fundamental 
              for web development, and I wanted to document my learning process and key insights! 📚
            </p>

            <div className="flex flex-wrap gap-2">
              {['JavaScript', 'Arrays', 'Learning', 'Study Notes', 'Programming', 'Web Development'].map((tag) => (
                <span 
                  key={tag}
                  className="inline-flex items-center px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full"
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {/* Learning Story */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="flex items-center">
                <BookOpen className="w-6 h-6 mr-3 text-purple-600 dark:text-purple-400" />
                Why I Created These Study Notes
              </h2>
              <p>
                Arrays are everywhere in JavaScript programming! Whether you&apos;re storing a list of users, 
                managing shopping cart items, or working with API data, arrays are essential. I realized I needed 
                to really understand them deeply, so I created comprehensive study notes covering the most important concepts.
              </p>

              <h2>My Learning Approach</h2>
              <p>
                Instead of just reading about arrays, I focused on answering specific questions that come up 
                in real programming scenarios. This question-based approach helps me remember the concepts better 
                and makes the knowledge more practical.
              </p>

              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 my-6">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2 flex items-center">
                  <Lightbulb className="w-4 h-4 mr-2" />
                  Study Strategy:
                </h4>
                <p className="text-blue-700 dark:text-blue-300">
                  I broke down array concepts into 6 key questions that every JavaScript developer should be able to answer confidently.
                </p>
              </div>
            </div>
          </div>

          {/* Study Notes Content */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Code2 className="w-6 h-6 mr-3 text-purple-600 dark:text-purple-400" />
              JavaScript Array Study Notes
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Here are the key concepts for working with arrays in JavaScript, broken down by essential questions.
            </p>

            {/* Question 1 */}
            <section className="mb-8 border-l-4 border-blue-400 pl-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                🔍 What Are the Key Characteristics of JavaScript Arrays?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                JavaScript arrays are special variables that can hold more than one value at a time. Their main characteristics are:
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Zero-Indexed</h4>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">
                    The first element is at index 0, second at index 1, and so on.
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Dynamic Size</h4>
                  <p className="text-green-700 dark:text-green-300 text-sm">
                    You can add or remove elements anytime - arrays grow and shrink automatically.
                  </p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Mixed Data Types</h4>
                  <p className="text-purple-700 dark:text-purple-300 text-sm">
                    Store numbers, strings, booleans, objects, even other arrays!
                  </p>
                </div>
              </div>

              <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                <pre className="text-sm"><code className="text-gray-800 dark:text-gray-200">{`// Example of an array with mixed data types
let mixedArray = [42, "hello", true, { name: "John" }];`}</code></pre>
              </div>
            </section>

            {/* Question 2 */}
            <section className="mb-8 border-l-4 border-green-400 pl-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                📖 How Do You Access and Update Elements in an Array?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                You use bracket notation <code>[]</code> with the element&apos;s index to access or update it.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">📖 Accessing</h4>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">
                    Place index number in brackets after array name.
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">✏️ Updating</h4>
                  <p className="text-green-700 dark:text-green-300 text-sm">
                    Use bracket notation on left side of assignment operator.
                  </p>
                </div>
              </div>

              <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                <pre className="text-sm"><code className="text-gray-800 dark:text-gray-200">{`let fruits = ["Apple", "Banana", "Cherry"];

// Accessing the second element ("Banana")
console.log(fruits[1]); // Output: Banana

// Updating the third element from "Cherry" to "Cranberry"
fruits[2] = "Cranberry";
console.log(fruits); // Output: ["Apple", "Banana", "Cranberry"]`}</code></pre>
              </div>
            </section>

            {/* Question 3 */}
            <section className="mb-8 border-l-4 border-purple-400 pl-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                ➕➖ How Do You Add and Remove Elements from Arrays?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                JavaScript has built-in methods to easily add or remove elements from both ends of an array.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">🔚 End of Array</h4>
                  <div className="space-y-2">
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                      <code className="font-semibold text-green-800 dark:text-green-200">push()</code> - Adds to end
                    </div>
                    <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                      <code className="font-semibold text-red-800 dark:text-red-200">pop()</code> - Removes from end
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">🔝 Beginning of Array</h4>
                  <div className="space-y-2">
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                      <code className="font-semibold text-green-800 dark:text-green-200">unshift()</code> - Adds to beginning
                    </div>
                    <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                      <code className="font-semibold text-red-800 dark:text-red-200">shift()</code> - Removes from beginning
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
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

            {/* Question 4 */}
            <section className="mb-8 border-l-4 border-yellow-400 pl-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                📐 What&apos;s the Difference Between 1D and 2D Arrays?
              </h3>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">One-Dimensional (1D)</h4>
                  <p className="text-blue-700 dark:text-blue-300 text-sm mb-3">
                    A simple, linear list of elements. Standard array type you&apos;ll use most often.
                  </p>
                  <code className="text-xs bg-white dark:bg-gray-800 p-2 rounded block">
                    let oneDim = [1, 2, 3, 4, 5];
                  </code>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Two-Dimensional (2D)</h4>
                  <p className="text-purple-700 dark:text-purple-300 text-sm mb-3">
                    An &quot;array of arrays&quot; - like a grid or table with rows and columns.
                  </p>
                  <code className="text-xs bg-white dark:bg-gray-800 p-2 rounded block">
                    let twoDim = [[1,2,3], [4,5,6]];
                  </code>
                </div>
              </div>

              <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
                <pre className="text-sm"><code className="text-gray-800 dark:text-gray-200">{`let twoDim = [
  [1, 2, 3],  // Row 0
  [4, 5, 6],  // Row 1
  [7, 8, 9]   // Row 2
];

// Accessing the number 6 (Row 1, Column 2)
console.log(twoDim[1][2]); // Output: 6`}</code></pre>
              </div>
            </section>

            {/* Question 5 */}
            <section className="mb-8 border-l-4 border-indigo-400 pl-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                🎯 What Is Array Destructuring, and How Does It Work?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Array destructuring allows you to unpack values from an array and assign them to variables 
                in a single, clean line of code. Much more readable than accessing each element by index!
              </p>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 mb-4">
                <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">💡 Pro Tip:</h4>
                <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                  You can skip elements with commas and don&apos;t need to destructure all elements!
                </p>
              </div>

              <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
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

            {/* Question 6 */}
            <section className="mb-8 border-l-4 border-pink-400 pl-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                🔄 How Can You Reverse a String Using Array Methods?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                You can&apos;t directly reverse a string in JavaScript, but you can combine string and array methods in three steps:
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">1️⃣</div>
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">.split(&apos;&apos;)</h4>
                  <p className="text-blue-700 dark:text-blue-300 text-sm">Convert to character array</p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">2️⃣</div>
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">.reverse()</h4>
                  <p className="text-purple-700 dark:text-purple-300 text-sm">Reverse the array order</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg text-center">
                  <div className="text-2xl mb-2">3️⃣</div>
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">.join(&apos;&apos;)</h4>
                  <p className="text-green-700 dark:text-green-300 text-sm">Merge back to string</p>
                </div>
              </div>

              <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4">
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

              <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-4 mt-4">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">🚀 Method Chaining</h4>
                <p className="text-green-700 dark:text-green-300 text-sm">
                  Chaining all three methods together creates a more concise solution! This is a common JavaScript pattern.
                </p>
              </div>
            </section>
          </div>

          {/* Learning Reflection */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2>What I Learned from This Study Session</h2>
              <p>
                Creating these study notes was incredibly valuable! The question-based approach helped me think about 
                practical scenarios where I&apos;d use each concept. The string reversal technique was particularly interesting - 
                it&apos;s a great example of how different JavaScript features work together.
              </p>

              <h2>Key Insights</h2>
              <ul>
                <li><strong>Arrays are more flexible than I thought</strong> - mixed data types open up many possibilities</li>
                <li><strong>Method chaining is powerful</strong> - combining simple methods creates elegant solutions</li>
                <li><strong>Destructuring makes code cleaner</strong> - much more readable than array[0], array[1], etc.</li>
                <li><strong>Visual learning helps</strong> - the grid representation of 2D arrays clicked immediately</li>
              </ul>

              <blockquote>
                <p>
                  The best way to learn programming concepts is to write them down, create examples, 
                  and ask yourself &quot;when would I actually use this?&quot; These study notes will be 
                  a great reference for future projects!
                </p>
              </blockquote>

              <p>
                <strong>Next up:</strong> I want to study array methods like map(), filter(), and reduce() - 
                they&apos;re essential for modern JavaScript development.<br />
                Fajar
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
