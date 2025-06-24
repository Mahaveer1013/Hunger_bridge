import { ReactNode } from 'react';

interface StatsCardProps {
  icon: ReactNode;
  title: string;
  value: string | number;
  description: string;
  iconBgColor?: string;
  iconTextColor?: string;
}

export const StatsCard = ({
  icon,
  title,
  value,
  description,
  iconBgColor = 'bg-blue-100',
  iconTextColor = 'text-blue-600',
}: StatsCardProps) => (
  <div className="bg-white rounded-xl shadow-sm border border-blue-100 p-6 hover:shadow-md transition">
    <div className="flex items-center gap-4">
      <div className={`p-3 rounded-full ${iconBgColor} ${iconTextColor}`}>
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-gray-700">{title}</h3>
        <p className="text-2xl font-bold text-blue-800">{value}</p>
      </div>
    </div>
    <p className="mt-3 text-sm text-blue-600">{description}</p>
  </div>
);
