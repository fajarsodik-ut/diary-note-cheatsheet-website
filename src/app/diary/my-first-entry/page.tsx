import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';

export default function MyFirstEntryPage() {
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
              <span>August 4, 2025</span>
              <Clock className="w-4 h-4 ml-6 mr-2" />
              <span>3 min read</span>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Starting My Learning Journey - Building This Website
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              Today I started creating my personal website to document my coding journey and share what I learn. 
              It feels exciting to have a place where I can track my progress and help others along the way.
            </p>

            <div className="flex flex-wrap gap-2">
              {['Personal', 'Web Development', 'Learning', 'First Post'].map((tag) => (
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

          {/* Article Content */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2>Why I&apos;m Starting This Website</h2>
              <p>
                I&apos;ve been learning to code for a while now, and I realized that I often forget the small details 
                and tricks I learn along the way. That&apos;s why I decided to create this website - it&apos;s going to be 
                my digital notebook where I can:
              </p>
              
              <ul>
                <li><strong>Document my learning:</strong> Keep track of what I learn each day</li>
                <li><strong>Create cheatsheets:</strong> Build quick reference guides for myself and others</li>
                <li><strong>Share my journey:</strong> Write about challenges, successes, and insights</li>
                <li><strong>Stay motivated:</strong> Having a public log keeps me accountable</li>
              </ul>

              <h2>What I&apos;ve Built So Far</h2>
              <p>
                Today I created the foundation of this website using Next.js and Tailwind CSS. I chose these 
                technologies because:
              </p>
              
              <blockquote>
                <p>
                  Next.js gives me great performance and SEO out of the box, while Tailwind CSS makes it 
                  easy to create beautiful, responsive designs quickly.
                </p>
              </blockquote>

              <p>
                I&apos;ve already created my first cheatsheet about JavaScript variables and strings. It covers:
              </p>
              
              <ol>
                <li>How to declare variables with <code>let</code>, <code>const</code>, and <code>var</code></li>
                <li>Variable naming conventions and best practices</li>
                <li>String methods and properties</li>
                <li>Template literals for string interpolation</li>
              </ol>

              <h2>Next Steps</h2>
              <p>
                I&apos;m planning to add more cheatsheets covering different programming topics. Some ideas I have:
              </p>
              
              <ul>
                <li>JavaScript Arrays and Objects</li>
                <li>CSS Flexbox and Grid</li>
                <li>React Hooks</li>
                <li>Git Commands</li>
                <li>And many more as I continue learning!</li>
              </ul>

              <h2>My Learning Goals</h2>
              <p>
                I want to become a well-rounded developer, so I&apos;m focusing on:
              </p>
              
              <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-400 p-4 my-6">
                <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">Current Focus Areas:</h4>
                <ul className="text-purple-700 dark:text-purple-300">
                  <li>JavaScript fundamentals and advanced concepts</li>
                  <li>React and Next.js for modern web development</li>
                  <li>CSS for beautiful, responsive designs</li>
                  <li>Best practices and clean code principles</li>
                </ul>
              </div>

              <p>
                I&apos;m excited about this journey and looking forward to documenting my progress here. 
                If you&apos;re also learning to code, I hope my notes and cheatsheets can help you too!
              </p>

              <h2>Final Thoughts</h2>
              <p>
                Building this website has been a great exercise in itself. I got to practice with:
              </p>
              
              <ul>
                <li>Setting up a Next.js project with TypeScript</li>
                <li>Designing with Tailwind CSS</li>
                <li>Creating responsive layouts</li>
                <li>Implementing dark mode</li>
                <li>Organizing project structure</li>
              </ul>

              <p>
                Every project teaches you something new, and this one is no exception. I&apos;m already thinking 
                about new features to add and improvements to make.
              </p>
              
              <p>
                <strong>Until next time,</strong><br />
                Fajar
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
