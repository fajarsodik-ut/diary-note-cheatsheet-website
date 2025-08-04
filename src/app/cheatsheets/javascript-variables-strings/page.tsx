import Link from 'next/link';
import { ArrowLeft, Code2 } from 'lucide-react';

export default function JavaScriptVariablesStringsPage() {
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
                JavaScript Variables & Strings
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                A comprehensive guide to working with variables and strings in JavaScript
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {['JavaScript', 'Variables', 'Strings', 'Basics'].map((tag) => (
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
            
            {/* Variables Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">1</span>
                Variables (A place to store data)
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Variables are containers for storing data values.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">How to Declare Variables</h3>

              {/* let */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-2">let (Modern & Recommended)</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  Use this for variables when you know the value might change later.
                  It&apos;s &quot;block-scoped,&quot; meaning it only exists inside the code block ({`{...}`}) where it&apos;s created.
                </p>
                <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 mb-4">
                  <pre className="text-sm"><code className="text-gray-800 dark:text-gray-200">{`let userAge = 30;
userAge = 31; // This is OK`}</code></pre>
                </div>
              </div>

              {/* const */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-green-600 dark:text-green-400 mb-2">const (Modern & Recommended)</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  Use this for variables when you know the value will never change (a constant).
                  You must give it a value when you declare it, and you can&apos;t change it later.
                </p>
                <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 mb-4">
                  <pre className="text-sm"><code className="text-gray-800 dark:text-gray-200">{`const birthDate = "1990-05-15";
// birthDate = "1991-01-01"; // This will cause an error!`}</code></pre>
                </div>
              </div>

              {/* var */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-orange-600 dark:text-orange-400 mb-2">var (The Old Way)</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  This is the original way to declare variables. It&apos;s best to avoid var in modern code because its behavior can be tricky.
                  It is not block-scoped, which can lead to unexpected bugs.
                </p>
              </div>

              {/* Variable Naming Rules */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Variable Naming Rules</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Start with a letter, underscore (_), or dollar sign ($).</li>
                  <li>Can contain letters, numbers, _, or $.</li>
                  <li>Names are case-sensitive (myname is different from myName).</li>
                  <li>Cannot be a reserved word (like let, if, for, etc.).</li>
                  <li>Use camelCase for multi-word variable names (e.g., firstName, userEmailAddress).</li>
                </ul>
              </div>
            </section>

            {/* Strings Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold mr-3">2</span>
                Strings (Text)
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Strings are used for storing and manipulating text.
              </p>

              {/* Key Concept */}
              <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-400 p-4 mb-6">
                <h4 className="text-lg font-semibold text-amber-800 dark:text-amber-200 mb-2">Key Concept: Strings are Immutable</h4>
                <p className="text-amber-700 dark:text-amber-300 mb-3">
                  &quot;Immutable&quot; means that once a string is created, its value cannot be changed. Any method that looks like it&apos;s modifying a string actually returns a brand new string.
                </p>
                <div className="bg-amber-100 dark:bg-amber-900/40 rounded-lg p-4">
                  <pre className="text-sm"><code className="text-amber-800 dark:text-amber-200">{`let greeting = "hello";

// This does NOT work. The original string is unchanged.
greeting[0] = "H"; 
console.log(greeting); // Output: "hello"

// To "change" it, you must assign the result to a new variable.
let loudGreeting = greeting.toUpperCase();
console.log(loudGreeting); // Output: "HELLO"
console.log(greeting);     // Output: "hello" (The original is still safe!)`}</code></pre>
                </div>
              </div>

              {/* Template Literals */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-2">String Interpolation (Template Literals)</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  This is the modern and easiest way to combine strings with variables. Use backticks (`) and the ${`{...}`} syntax.
                </p>
                <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 mb-4">
                  <pre className="text-sm"><code className="text-gray-800 dark:text-gray-200">{`const name = "Maria";
const emailCount = 12;

// The old way (concatenation with +)
const oldMessage = "Hello " + name + ", you have " + emailCount + " emails.";

// The new, better way (interpolation)
const newMessage = \`Hello \${name}, you have \${emailCount} emails.\`;`}</code></pre>
                </div>
              </div>

              {/* String Methods */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Useful String Properties and Methods</h4>
                
                <div className="space-y-4">
                  {[
                    {
                      method: '.length (Property)',
                      description: 'Returns the number of characters in the string.',
                      example: '"Hello".length → 5'
                    },
                    {
                      method: '.toUpperCase() / .toLowerCase()',
                      description: 'Returns a new string in all uppercase or all lowercase.',
                      example: '"Hello".toUpperCase() → "HELLO"\n"World".toLowerCase() → "world"'
                    },
                    {
                      method: '.includes(\'substring\')',
                      description: 'Checks if a string contains another string. Returns true or false.',
                      example: '"JavaScript".includes("Script") → true'
                    },
                    {
                      method: '.slice(startIndex, endIndex)',
                      description: 'Extracts and returns a new string. The character at endIndex is not included.',
                      example: '"Programming".slice(0, 4) → "Prog"'
                    },
                    {
                      method: '.replace(\'old\', \'new\')',
                      description: 'Returns a new string where the first match of \'old\' is replaced with \'new\'.',
                      example: '"I like cats".replace("cats", "dogs") → "I like dogs"'
                    },
                    {
                      method: '.trim()',
                      description: 'Returns a new string with whitespace removed from the beginning and end.',
                      example: '"  some text  ".trim() → "some text"'
                    },
                    {
                      method: '[index]',
                      description: 'Access the character at a specific position (index).',
                      example: '"word"[0] → "w"'
                    },
                    {
                      method: '.charCodeAt(index)',
                      description: 'Get the ASCII number value of a character at an index.',
                      example: '"ABC".charCodeAt(0) → 65'
                    }
                  ].map((item, index) => (
                    <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <h5 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">{item.method}</h5>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">{item.description}</p>
                      <div className="bg-gray-100 dark:bg-gray-900 rounded p-3">
                        <code className="text-sm text-gray-800 dark:text-gray-200 whitespace-pre-line">{item.example}</code>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Footer */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-12">
              <p className="text-gray-600 dark:text-gray-300 text-center">
                This cheatsheet covers the fundamentals of JavaScript variables and strings. 
                More advanced topics and additional cheatsheets will be added over time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
