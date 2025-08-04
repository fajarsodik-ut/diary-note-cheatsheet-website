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
            
            {/* Coming Soon Notice */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-6 mb-8">
              <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">Coming Soon!</h3>
              <p className="text-blue-700 dark:text-blue-300">
                This cheatsheet is currently being prepared. It will cover arrays, objects, and their methods in JavaScript.
              </p>
            </div>

            {/* Preview Content */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">1</span>
                Arrays (Preview)
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Arrays are ordered collections of items. They&apos;re perfect for storing lists of data.
              </p>

              <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 mb-4">
                <pre className="text-sm"><code className="text-gray-800 dark:text-gray-200">{`// Creating arrays
const fruits = ['apple', 'banana', 'orange'];
const numbers = [1, 2, 3, 4, 5];
const mixed = ['hello', 42, true, null];

// Common array methods (coming soon!)
// .push(), .pop(), .shift(), .unshift()
// .map(), .filter(), .reduce()
// .find(), .includes(), .indexOf()
// And many more...`}</code></pre>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">2</span>
                Objects (Preview)
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Objects are collections of key-value pairs. They&apos;re great for storing related data.
              </p>

              <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 mb-4">
                <pre className="text-sm"><code className="text-gray-800 dark:text-gray-200">{`// Creating objects
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

// Accessing properties
console.log(person.name);     // 'John'
console.log(person['age']);   // 30

// More object concepts coming soon!
// Object.keys(), Object.values(), Object.entries()
// Destructuring, spread operator
// Methods and this keyword`}</code></pre>
              </div>
            </section>

            {/* Footer */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-12">
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Full content for this cheatsheet will be added soon. Stay tuned!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
