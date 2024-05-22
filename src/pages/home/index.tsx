import FeatureCard from '@/components/common/FeatureCard';
import PageLayout from '@/layout/PageLayout';
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <PageLayout>
      <div className="p-6">
        <section className="mb-12 text-center">
          <h1 className="bg-gradient-to-br from-gray-200 to-teal-700 bg-clip-text text-2xl font-bold text-transparent md:text-3xl">
            Simplify Your Task Management
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Organize, prioritize, and manage your tasks effortlessly with Todo Task Management Dashboard. Whether you're an individual looking to keep
            track of personal projects or a team aiming to collaborate more efficiently, our dashboard is designed to make task management seamless
            and intuitive.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-center">Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard title="Intuitive Interface" />
            <FeatureCard title="Real-Time Collaboration" />
            <FeatureCard title="Customizable Workflows" />
            <FeatureCard title="Powerful Integrations" />
            <FeatureCard title="Automated Reminders" />
            <FeatureCard title="Insightful Analytics" />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-center">Why Choose Todo Task Management Dashboard?</h2>
          <ul className="list-disc list-inside space-y-2 text-lg max-w-2xl mx-auto">
            <li>Efficiency: Reduce the time spent on managing tasks and increase your productivity.</li>
            <li>Collaboration: Enhance team communication and collaboration with shared tasks and real-time updates.</li>
            <li>Flexibility: Adapt to your specific needs with customizable features and integrations.</li>
            <li>Reliability: Count on us to keep your data secure and accessible whenever you need it.</li>
          </ul>
        </section>

        <section className="mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Get Started Today</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Ready to take control of your tasks? Sign up now and start managing your tasks with ease and efficiency.
          </p>
          <div className="space-x-4">
            <Link to="/login" className="px-4 py-2 bg-blue-500 text-white rounded-md">
              Sign Up
            </Link>
            <Link to="/" className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded-md">
              Learn More
            </Link>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 text-center">Testimonials</h2>
          <div className="max-w-2xl mx-auto">
            <blockquote className="text-lg mb-4 border-l-4 border-blue-500 pl-4">
              "Todo Task Management Dashboard has revolutionized the way our team works. It's incredibly intuitive and has all the features we need to
              stay organized and productive." - <strong>Alex P.</strong>
            </blockquote>
            <blockquote className="text-lg border-l-4 border-blue-500 pl-4">
              "I love how easy it is to customize my workflow. The integrations with other tools I use daily make it an indispensable part of my
              routine." - <strong>Jamie L.</strong>
            </blockquote>
          </div>
        </section>

        <section className="text-center mt-12">
          <a href="#" className="text-blue-500 underline">
            Contact Us
          </a>{' '}
          for more information.
        </section>
      </div>
    </PageLayout>
  );
};

export default Home;
