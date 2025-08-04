import Link from 'next/link';
import { Calendar, BookOpen, Clock, ArrowRight } from 'lucide-react';

// This would typically come from a database or CMS
interface DiaryEntry {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags?: string[];
}

const diaryEntries: DiaryEntry[] = [
  {
    id: 'my-first-entry',
    title: 'Starting My Learning Journey - Building This Website',
    excerpt: 'Today I started creating my personal website to document my coding journey and share what I learn. It feels exciting to have a place where I can track my progress and help others along the way.',
    date: '2025-08-04',
    readTime: '3 min read',
    tags: ['Personal', 'Web Development', 'Learning', 'First Post'],
  },
];

export default function DiaryPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-purple-100 dark:bg-purple-900 rounded-full">
              <Calendar className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Diary
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Personal thoughts, daily experiences, and reflections on my journey through life and learning.
          </p>
        </div>

        {/* Diary Entries */}
        <div className="max-w-4xl mx-auto">
          {diaryEntries.length > 0 ? (
            <div className="grid gap-6">
              {diaryEntries.map((entry) => (
                <Link 
                  key={entry.id} 
                  href={`/diary/${entry.id}`}
                  className="group"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 group-hover:scale-[1.02]">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <div className="flex items-center text-purple-600 dark:text-purple-400 text-sm mr-4">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(entry.date).toLocaleDateString()}
                          </div>
                          <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                            <Clock className="w-4 h-4 mr-1" />
                            {entry.readTime}
                          </div>
                        </div>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                          {entry.title}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          {entry.excerpt}
                        </p>
                        {entry.tags && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {entry.tags.map((tag) => (
                              <span 
                                key={tag}
                                className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 group-hover:translate-x-1 transition-all ml-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No diary entries yet
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                This is where your personal thoughts and experiences will be shared.
              </p>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  What to expect:
                </h4>
                <ul className="text-left text-gray-600 dark:text-gray-300 space-y-2">
                  <li className="flex items-start">
                    <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                    Daily reflections and thoughts
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                    Learning experiences and insights
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                    Personal growth and challenges
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 dark:text-purple-400 mr-2">•</span>
                    Project updates and milestones
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
