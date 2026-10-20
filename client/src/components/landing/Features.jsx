import {
  HiOutlineUserGroup,
  HiOutlineChatAlt2,
  HiOutlineBookOpen,
  HiOutlineCalendar,
  HiOutlineBriefcase,
  HiOutlineShoppingBag,
  HiOutlineBell,
  HiOutlineSearch,
} from 'react-icons/hi';

const features = [
  {
    icon: HiOutlineUserGroup,
    title: 'Student Network',
    description: 'Connect with students from your university and beyond. Build meaningful connections that last.',
    color: 'from-blue-500 to-primary',
    bgColor: 'bg-blue-50',
  },
  {
    icon: HiOutlineChatAlt2,
    title: 'Real-time Chat',
    description: 'Instant messaging with typing indicators, read receipts, and file sharing capabilities.',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
  },
  {
    icon: HiOutlineBookOpen,
    title: 'Notes & Resources',
    description: 'Share and access study materials, previous year papers, and PDF notes from peers.',
    color: 'from-violet-500 to-purple-500',
    bgColor: 'bg-violet-50',
  },
  {
    icon: HiOutlineCalendar,
    title: 'Events',
    description: 'Discover campus events, workshops, and seminars. Never miss what matters.',
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-50',
  },
  {
    icon: HiOutlineBriefcase,
    title: 'Opportunities',
    description: 'Find internships, hackathons, scholarships, and job openings curated for students.',
    color: 'from-cyan-500 to-blue-500',
    bgColor: 'bg-cyan-50',
  },
  {
    icon: HiOutlineShoppingBag,
    title: 'Marketplace',
    description: 'Buy and sell textbooks, calculators, and academic materials within your campus.',
    color: 'from-pink-500 to-rose-500',
    bgColor: 'bg-pink-50',
  },
  {
    icon: HiOutlineBell,
    title: 'Smart Notifications',
    description: 'Stay updated with real-time notifications for likes, comments, messages, and more.',
    color: 'from-amber-500 to-yellow-500',
    bgColor: 'bg-amber-50',
  },
  {
    icon: HiOutlineSearch,
    title: 'Global Search',
    description: 'Search students, posts, communities, events, and opportunities all in one place.',
    color: 'from-teal-500 to-emerald-500',
    bgColor: 'bg-teal-50',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-primary font-semibold text-sm">Features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text mb-4">
            Everything You Need,{' '}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              One Platform
            </span>
          </h2>
          <p className="text-text-secondary text-lg">
            UniConnect brings together all the tools students need to connect, learn, and grow in their university journey.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-white border-2 border-border-light rounded-2xl p-6 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon size={24} className={`bg-gradient-to-r ${feature.color} bg-clip-text`} style={{ color: 'inherit' }} />
              </div>
              <h3 className="text-lg font-bold text-text mb-2">{feature.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
