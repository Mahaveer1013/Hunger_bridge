import { PlusCircleIcon } from '@heroicons/react/24/outline';

interface DashboardHeaderProps {
  title: string;
  subtitle: string;
  actionLabel?: string;
  onAction?: () => void;
}

export const DashboardHeader = ({
  title,
  subtitle,
  actionLabel = 'New Donation',
  onAction,
}: DashboardHeaderProps) => (
  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
    <div>
      <h1 className="text-2xl font-bold text-blue-900">{title}</h1>
      <p className="text-blue-600">{subtitle}</p>
    </div>
    {actionLabel && (
      <button
        onClick={onAction}
        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition-all transform hover:scale-105"
      >
        <PlusCircleIcon className="w-5 h-5" />
        <span>{actionLabel}</span>
      </button>
    )}
  </div>
);
