import { HiOutlineUserAdd, HiOutlinePencil, HiOutlineGlobe } from 'react-icons/hi';

const steps = [
  {
    icon: HiOutlineUserAdd,
    step: '01',
    title: 'Create Your Account',
    description: 'Sign up with your university email and verify your identity to join the platform.',
    color: 'from-primary to-primary-dark',
  },
  {
    icon: HiOutlinePencil,
    step: '02',
    title: 'Set Up Your Profile',
    description: 'Add your university, department, skills, and interests to personalize your experience.',
    color: 'from-violet-500 to-purple-600',
  },
  {
    icon: HiOutlineGlobe,
    step: '03',
    title: 'Start Connecting',
    description: 'Explore feeds, join communities, chat with peers, and discover opportunities.',
    color: 'from-emerald-500 to-green-600',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="text-primary font-semibold text-sm">How It Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text mb-4">
            Get Started in{' '}
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              3 Simple Steps
            </span>
          </h2>
          <p className="text-text-secondary text-lg">
            Join thousands of students already networking, learning, and growing on UniConnect.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.step} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-border to-transparent z-0" />
              )}
              <div className="relative z-10 text-center">
                <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg relative`}>
                  <step.icon size={36} className="text-white" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
                    <span className="text-xs font-bold text-text">{step.step}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-text mb-3">{step.title}</h3>
                <p className="text-text-secondary leading-relaxed max-w-xs mx-auto">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
