import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';

export default function GachaGameMechanicsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link href="/diary" className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:underline mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Diary
        </Link>

        {/* Article Header */}
        <article className="max-w-5xl mx-auto">
          <header className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center text-purple-600 dark:text-purple-400 text-sm mb-4">
              <Calendar className="w-4 h-4 mr-2" />
              <span>August 5, 2025</span>
              <Clock className="w-4 h-4 ml-6 mr-2" />
              <span>5 min read</span>
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Understanding Gacha Game Combat Mechanics: RGB & L&D Systems
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              Today I created an interactive infographic about elemental combat systems in gacha games. 
              Understanding these mechanics is crucial for strategic gameplay and team building.
            </p>

            <div className="flex flex-wrap gap-2">
              {['Gaming', 'Infographic', 'Game Design', 'Gacha Games', 'Combat Systems'].map((tag) => (
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
              <h2>The Inspiration Behind This Infographic</h2>
              <p>
                As someone who enjoys gacha games, I&apos;ve always been fascinated by the strategic depth that elemental 
                systems bring to gameplay. The RGB (Red, Green, Blue) and L&D (Light & Dark) mechanics create 
                interesting tactical decisions that go beyond simple rock-paper-scissors gameplay.
              </p>

              <h2>What I Learned About Game Design</h2>
              <p>
                Creating this infographic helped me understand several key game design principles:
              </p>
              
              <ul>
                <li><strong>Balance through asymmetry:</strong> L&D units are rare but versatile</li>
                <li><strong>Strategic depth:</strong> Multiple interaction layers create complex decisions</li>
                <li><strong>Visual clarity:</strong> Color coding makes systems intuitive to understand</li>
                <li><strong>Risk vs reward:</strong> L&D units are strong against each other but neutral elsewhere</li>
              </ul>

              <blockquote>
                <p>
                  The beauty of these systems lies in their simplicity on the surface, but the strategic 
                  depth they provide when combined with team composition, character abilities, and timing.
                </p>
              </blockquote>
            </div>
          </div>

          {/* Interactive Infographic */}
          <div className="bg-gray-900 text-white rounded-xl shadow-lg p-8 mb-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600 mb-4">
                Gacha Game Combat Interactions
              </h2>
              <p className="text-lg text-gray-400">Understanding the Battle Dynamics of RGB & L&D Characters</p>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
              
              {/* RGB Section */}
              <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-center mb-6 text-indigo-400">The RGB Elemental Cycle</h3>
                <div className="relative flex justify-center items-center h-80">
                  {/* Elements */}
                  <div className="absolute top-0 transform -translate-y-4">
                    <div className="bg-red-500/20 border-2 border-red-500 p-4 rounded-full shadow-md text-center w-28 h-28 flex flex-col justify-center hover:transform hover:scale-110 transition-transform">
                      <span className="text-4xl">🔥</span>
                      <span className="font-semibold mt-1">RED</span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 transform translate-x-4 translate-y-4">
                    <div className="bg-green-500/20 border-2 border-green-500 p-4 rounded-full shadow-md text-center w-28 h-28 flex flex-col justify-center hover:transform hover:scale-110 transition-transform">
                      <span className="text-4xl">🌿</span>
                      <span className="font-semibold mt-1">GREEN</span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-0 transform -translate-x-4 translate-y-4">
                     <div className="bg-blue-500/20 border-2 border-blue-500 p-4 rounded-full shadow-md text-center w-28 h-28 flex flex-col justify-center hover:transform hover:scale-110 transition-transform">
                      <span className="text-4xl">💧</span>
                      <span className="font-semibold mt-1">BLUE</span>
                    </div>
                  </div>
                  {/* Visual arrows indication */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-green-500 text-sm font-medium text-center">
                      <div className="mb-2">🔥 → 🌿</div>
                      <div className="mb-2">🌿 → 💧</div>
                      <div>💧 → 🔥</div>
                    </div>
                  </div>
                </div>
                <p className="text-center text-gray-400 mt-6">A classic &quot;Rock-Paper-Scissors&quot; system where each element is strong against one and weak against another.</p>
              </div>

              {/* L&D Section */}
              <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-center mb-6 text-yellow-400">The L&D Duality</h3>
                <div className="relative flex justify-around items-center h-80">
                  {/* Elements */}
                   <div className="bg-yellow-400/20 border-2 border-yellow-400 p-4 rounded-full shadow-md text-center w-32 h-32 flex flex-col justify-center hover:transform hover:scale-110 transition-transform">
                    <span className="text-5xl">☀️</span>
                    <span className="font-semibold mt-1">LIGHT</span>
                  </div>
                   <div className="bg-purple-500/20 border-2 border-purple-500 p-4 rounded-full shadow-md text-center w-32 h-32 flex flex-col justify-center hover:transform hover:scale-110 transition-transform">
                    <span className="text-5xl">🌙</span>
                    <span className="font-semibold mt-1">DARK</span>
                  </div>
                  {/* Arrows indication */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-yellow-400 text-lg">☀️ ⇄ 🌙</div>
                      <div className="text-gray-400 text-sm mt-2">Mutual Advantage</div>
                    </div>
                  </div>
                </div>
                <p className="text-center text-gray-400 mt-6">Light and Dark units are strong against each other, creating a high-risk, high-reward dynamic.</p>
              </div>
            </div>

            {/* Cross-Interaction Section */}
            <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-center mb-6 text-cyan-400">The L&D Advantage: Cross-Interactions</h3>
              <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-10 py-6">
                {/* L&D Group */}
                <div className="flex space-x-4">
                  <div className="bg-yellow-400/20 border-2 border-yellow-400 p-3 rounded-full shadow-md text-center w-24 h-24 flex flex-col justify-center hover:transform hover:scale-110 transition-transform">
                    <span className="text-4xl">☀️</span>
                    <span className="font-semibold text-sm mt-1">LIGHT</span>
                  </div>
                  <div className="bg-purple-500/20 border-2 border-purple-500 p-3 rounded-full shadow-md text-center w-24 h-24 flex flex-col justify-center hover:transform hover:scale-110 transition-transform">
                    <span className="text-4xl">🌙</span>
                    <span className="font-semibold text-sm mt-1">DARK</span>
                  </div>
                </div>

                {/* Interaction Arrow */}
                <div className="text-center">
                  <div className="text-4xl text-gray-400">⇄</div>
                  <p className="font-semibold text-gray-400 mt-2">NEUTRAL DAMAGE</p>
                </div>
                
                {/* RGB Group */}
                <div className="flex space-x-4">
                  <div className="bg-red-500/20 border-2 border-red-500 p-3 rounded-full shadow-md text-center w-24 h-24 flex flex-col justify-center hover:transform hover:scale-110 transition-transform">
                    <span className="text-4xl">🔥</span>
                    <span className="font-semibold text-sm mt-1">RED</span>
                  </div>
                  <div className="bg-green-500/20 border-2 border-green-500 p-3 rounded-full shadow-md text-center w-24 h-24 flex flex-col justify-center hover:transform hover:scale-110 transition-transform">
                    <span className="text-4xl">🌿</span>
                    <span className="font-semibold text-sm mt-1">GREEN</span>
                  </div>
                  <div className="bg-blue-500/20 border-2 border-blue-500 p-3 rounded-full shadow-md text-center w-24 h-24 flex flex-col justify-center hover:transform hover:scale-110 transition-transform">
                    <span className="text-4xl">💧</span>
                    <span className="font-semibold text-sm mt-1">BLUE</span>
                  </div>
                </div>
              </div>
              <p className="text-center text-gray-400 max-w-2xl mx-auto mt-4">
                L&D units deal and receive neutral damage from all RGB units. They have no elemental weakness 
                in the main cycle, making them universally effective and highly versatile in any team composition.
              </p>
            </div>
            
            {/* Footer */}
            <div className="text-center mt-8 text-gray-500">
              <p>This represents a common system in gacha games. Specific mechanics may vary by game.</p>
            </div>
          </div>

          {/* Reflection */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2>Technical Implementation</h2>
              <p>
                Building this infographic taught me several things about web development:
              </p>
              
              <ul>
                <li><strong>CSS Animations:</strong> Used hover effects and transitions for interactivity</li>
                <li><strong>Responsive Design:</strong> Ensured the layout works on all screen sizes</li>
                <li><strong>Color Theory:</strong> Applied consistent color schemes that match game elements</li>
                <li><strong>SVG Graphics:</strong> Used scalable vector graphics for crisp arrows and shapes</li>
              </ul>

              <h2>Why This Matters</h2>
              <p>
                Understanding these systems helps players make better strategic decisions. It also shows 
                how game designers balance complexity with accessibility - the core mechanics are simple 
                enough for new players to grasp, but deep enough to support advanced strategies.
              </p>

              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 my-6">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Key Takeaways:</h4>
                <ul className="text-blue-700 dark:text-blue-300">
                  <li>Visual design should support understanding, not complicate it</li>
                  <li>Interactive elements make learning more engaging</li>
                  <li>Game mechanics can be excellent subjects for educational content</li>
                  <li>Complex systems can be broken down into digestible components</li>
                </ul>
              </div>

              <p>
                This was a fun project that combined my interests in gaming, design, and web development. 
                I&apos;m thinking about creating more game-related infographics in the future!
              </p>
              
              <p>
                <strong>Next up:</strong> Maybe I&apos;ll analyze team composition strategies or create 
                interactive calculators for damage calculations.<br />
                Fajar
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
