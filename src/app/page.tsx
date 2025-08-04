import Link from "next/link";
import { BookOpen, Code2, Calendar, User } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg">
              <User className="w-12 h-12 text-indigo-600 dark:text-indigo-400" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Fajar&apos;s Digital Space
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Welcome to my personal diary and coding cheatsheet collection. 
            A place where I document my learning journey and share knowledge.
          </p>
        </div>

        {/* Navigation Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Diary Card */}
          <Link href="/diary" className="group">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 h-full group-hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg mr-4">
                  <Calendar className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">My Diary</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Personal thoughts, daily experiences, and reflections on my journey 
                through life and learning.
              </p>
              <div className="flex items-center text-purple-600 dark:text-purple-400 font-medium">
                <span>Explore entries</span>
                <BookOpen className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>

          {/* Cheatsheets Card */}
          <Link href="/cheatsheets" className="group">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 h-full group-hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg mr-4">
                  <Code2 className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Code Cheatsheets</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Quick reference guides, syntax examples, and practical coding tips 
                for various programming languages and frameworks.
              </p>
              <div className="flex items-center text-green-600 dark:text-green-400 font-medium">
                <span>Browse cheatsheets</span>
                <Code2 className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        </div>

        {/* Recent Activity Preview */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Recent Activity
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Latest Cheatsheet</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                JavaScript Variables & Strings - A comprehensive guide to working with variables and strings in JavaScript.
              </p>
              <Link href="/cheatsheets/javascript-variables-strings" className="text-indigo-600 dark:text-indigo-400 text-sm font-medium hover:underline">
                Read more →
              </Link>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Coming Soon</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                More cheatsheets and diary entries will be added as I continue my learning journey.
              </p>
              <span className="text-gray-400 text-sm">Stay tuned!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
