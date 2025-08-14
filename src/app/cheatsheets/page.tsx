import Link from 'next/link';
import { Code2, Clock, ArrowRight } from 'lucide-react';

// This would typically come from a database or CMS
const cheatsheets = [
  {
    id: 'javascript-variables-strings',
    title: 'JavaScript Variables & Strings',
    description: 'Complete guide to variables and strings in JavaScript, covering let, const, var, and string methods.',
    category: 'JavaScript',
    readTime: '5 min read',
    date: '2025-08-04',
    tags: ['JavaScript', 'Variables', 'Strings', 'Basics'],
  },
  {
    id: 'javascript-arrays-objects',
    title: 'JavaScript Arrays & Objects',
    description: 'Comprehensive study notes covering array characteristics, methods, destructuring, and practical examples for working with arrays.',
    category: 'JavaScript',
    readTime: '8 min read',
    date: '2025-08-15',
    tags: ['JavaScript', 'Arrays', 'Objects', 'Data Structures'],
  },
];

export default function CheatsheetsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-green-100 dark:bg-green-900 rounded-full">
              <Code2 className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Code Cheatsheets
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Quick reference guides and practical examples for various programming languages and frameworks. Updated August 15, 2025.
          </p>
        </div>

        {/* Cheatsheets Grid */}
        <div className="max-w-4xl mx-auto">
          {cheatsheets.length > 0 ? (
            <div className="grid gap-6">
              {cheatsheets.map((cheatsheet) => (
                <Link 
                  key={cheatsheet.id} 
                  href={`/cheatsheets/${cheatsheet.id}`}
                  className="group"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group-hover:scale-[1.02]">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <span className="inline-block px-3 py-1 text-xs font-medium bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full mr-3">
                            {cheatsheet.category}
                          </span>
                          <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                            <Clock className="w-4 h-4 mr-1" />
                            {cheatsheet.readTime}
                          </div>
                        </div>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                          {cheatsheet.title}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          {cheatsheet.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {cheatsheet.tags.map((tag) => (
                            <span 
                              key={tag}
                              className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-400 group-hover:translate-x-1 transition-all ml-4" />
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Added on {new Date(cheatsheet.date).toLocaleDateString()}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Code2 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No cheatsheets yet
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Cheatsheets will appear here as they are added.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
