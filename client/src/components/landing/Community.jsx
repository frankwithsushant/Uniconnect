import { Link } from 'react-router-dom';
import Button from '../common/Button';

const communities = [
  { name: 'CSE Students', members: '2.5K', emoji: '💻', color: 'from-blue-500 to-indigo-500' },
  { name: 'AI & ML', members: '1.8K', emoji: '🤖', color: 'from-violet-500 to-purple-500' },
  { name: 'Placement Prep', members: '3.2K', emoji: '🎯', color: 'from-green-500 to-emerald-500' },
  { name: 'Hackathons', members: '1.2K', emoji: '🚀', color: 'from-orange-500 to-red-500' },
  { name: 'GATE Preparation', members: '900', emoji: '📖', color: 'from-cyan-500 to-blue-500' },
  { name: 'Java Developers', members: '1.5K', emoji: '☕', color: 'from-amber-500 to-orange-500' },
];

const Community = () => {
  return (
    <section id="community" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
              <span className="text-primary font-semibold text-sm">Communities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text mb-4">
              Join Thriving{' '}
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                Student Communities
              </span>
            </h2>
            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              Connect with like-minded students in topic-specific communities. Share knowledge, 
              collaborate on projects, and stay updated with the latest in your field.
            </p>
            <Link to="/register">
              <Button variant="primary" size="lg">
                Explore Communities
                <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
            </Link>
          </div>

          {/* Right - community cards */}
          <div className="grid grid-cols-2 gap-4">
            {communities.map((community, index) => (
              <div
                key={community.name}
                className="group bg-white border-2 border-border-light rounded-2xl p-5 hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${community.color} rounded-xl flex items-center justify-center mb-3 text-2xl`}>
                  {community.emoji}
                </div>
                <h3 className="font-bold text-text text-sm mb-1">{community.name}</h3>
                <p className="text-xs text-text-secondary">{community.members} members</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
