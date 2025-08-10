import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Tag, Server, FolderOpen, Settings, AlertTriangle } from 'lucide-react';

export default function XamppHtdocsConfigPage() {
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
              <span>August 11, 2025</span>
              <Clock className="w-4 h-4 ml-6 mr-2" />
              <span>4 min read</span>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Configuring XAMPP: Changing the htdocs Folder Location
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              Today I learned how to configure XAMPP to use a custom folder on my D drive instead of the default htdocs location. 
              This is super useful for organizing web projects across different drives! 🧑‍💻
            </p>

            <div className="flex flex-wrap gap-2">
              {['Web Development', 'XAMPP', 'Apache', 'Configuration', 'Local Server', 'PHP'].map((tag) => (
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
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2>Why I Needed This</h2>
              <p>
                I was running out of space on my C drive and wanted to move my web development projects to my D drive. 
                The default XAMPP setup uses <code>C:/xampp/htdocs</code>, but I needed more flexibility in organizing 
                my projects across different drives.
              </p>

              <h2>The Challenge</h2>
              <p>
                Initially, I thought I&apos;d have to reinstall XAMPP on the D drive, but then I discovered that you can 
                simply reconfigure Apache to point to any folder you want. This is much cleaner and doesn&apos;t require 
                moving the entire XAMPP installation.
              </p>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 my-6">
                <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2 flex items-center">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  Important Discovery:
                </h4>
                <p className="text-yellow-700 dark:text-yellow-300">
                  Even on Windows, you must use forward slashes (/) in Apache configuration files, not backslashes (\). 
                  This caught me off guard initially!
                </p>
              </div>
            </div>
          </div>

          {/* Step-by-Step Guide */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Settings className="w-6 h-6 mr-3 text-purple-600 dark:text-purple-400" />
              Step-by-Step Configuration Guide
            </h2>

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="border-l-4 border-blue-400 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                  <FolderOpen className="w-5 h-5 mr-2 text-blue-500" />
                  Step 1: Create a New Folder on Drive D
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  Create the folder where you&apos;ll store your web projects. I chose <code>D:\web_projects</code> for mine.
                </p>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
                  <code className="text-sm text-gray-800 dark:text-gray-200">
                    📁 D:\web_projects\
                  </code>
                </div>
              </div>

              {/* Step 2 */}
              <div className="border-l-4 border-green-400 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                  <Server className="w-5 h-5 mr-2 text-green-500" />
                  Step 2: Open Apache Configuration
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  In XAMPP Control Panel, click <strong>Config</strong> for Apache → Select <strong>httpd.conf</strong>
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <p className="text-blue-800 dark:text-blue-200 text-sm">
                    💡 This opens the main Apache configuration file where all the magic happens!
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="border-l-4 border-purple-400 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Step 3: Edit DocumentRoot and Directory Settings
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Find and update these two critical settings:
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">🔍 Find DocumentRoot:</h4>
                    <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg mb-2">
                      <code className="text-red-700 dark:text-red-300 text-sm">
                        DocumentRoot &quot;C:/xampp/htdocs&quot;
                      </code>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                      <code className="text-green-700 dark:text-green-300 text-sm">
                        DocumentRoot &quot;D:/web_projects&quot;
                      </code>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">🔍 Find &lt;Directory&gt;:</h4>
                    <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg mb-2">
                      <code className="text-red-700 dark:text-red-300 text-sm">
                        &lt;Directory &quot;C:/xampp/htdocs&quot;&gt;
                      </code>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                      <code className="text-green-700 dark:text-green-300 text-sm">
                        &lt;Directory &quot;D:/web_projects&quot;&gt;
                      </code>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="border-l-4 border-orange-400 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Step 4: Save and Restart Apache
                </h3>
                <ol className="list-decimal list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  <li>Save the <code>httpd.conf</code> file</li>
                  <li>Go back to XAMPP Control Panel</li>
                  <li>Stop Apache if it&apos;s running</li>
                  <li>Start Apache again to apply changes</li>
                </ol>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mt-4">
                  <p className="text-green-800 dark:text-green-200 text-sm">
                    ✅ Success! Your D:\web_projects folder is now your web server root!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Learnings */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What I Learned</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">💡 Technical Insights</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Apache uses forward slashes on all platforms</li>
                  <li>• DocumentRoot defines the web server&apos;s base folder</li>
                  <li>• Directory blocks control access permissions</li>
                  <li>• Configuration changes require Apache restart</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">🚀 Practical Benefits</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Better disk space management</li>
                  <li>• Organized project structure</li>
                  <li>• Flexible development environment</li>
                  <li>• Easy backup of projects folder</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Testing Section */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">🧪 Testing the Configuration</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              After making the changes, I tested everything by:
            </p>
            <ol className="list-decimal list-inside text-gray-600 dark:text-gray-300 space-y-2 mb-4">
              <li>Creating a simple <code>index.php</code> file in <code>D:\web_projects</code></li>
              <li>Adding some basic PHP code with <code>&lt;?php echo &quot;Hello from D drive!&quot; ?&gt;</code></li>
              <li>Accessing <code>http://localhost/</code> in my browser</li>
              <li>Seeing my custom message display perfectly! 🎉</li>
            </ol>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <p className="text-center text-gray-600 dark:text-gray-300 font-medium">
                ✨ Everything worked flawlessly on the first try! ✨
              </p>
            </div>
          </div>

          {/* Reflection */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2>Final Thoughts</h2>
              <p>
                This was a simple but important configuration that will make my development workflow much better. 
                Having projects on the D drive means better organization and more storage space for larger projects.
              </p>
              
              <p>
                I&apos;m planning to create subfolders like <code>D:\web_projects\php_learning</code> and 
                <code>D:\web_projects\personal_sites</code> to keep everything organized by project type.
              </p>

              <blockquote>
                <p>
                  Sometimes the smallest configuration changes can have the biggest impact on your 
                  development experience. This XAMPP customization is definitely one of those wins! 🎯
                </p>
              </blockquote>

              <p>
                <strong>Next up:</strong> I want to explore virtual hosts in Apache to run multiple 
                sites simultaneously with custom domain names like <code>myproject.local</code>.<br />
                Fajar
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
