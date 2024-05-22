interface FeatureCardProps {
  title: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-700 dark:text-gray-300">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </div>
);

export default FeatureCard;
