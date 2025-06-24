import { ReactNode } from 'react';
import { ClockIcon, MapPinIcon } from '@heroicons/react/24/outline';

interface ActivityItemProps {
  icon: ReactNode;
  title: string;
  time: string;
  location: string;
  value: string | number;
  iconBgColor?: string;
  iconTextColor?: string;
  valueBgColor?: string;
  valueTextColor?: string;
}

export const ActivityItem = ({
  icon,
  title,
  time,
  location,
  value,
  iconBgColor = 'bg-blue-100',
  iconTextColor = 'text-blue-600',
  valueBgColor = 'bg-blue-100',
  valueTextColor = 'text-blue-800',
}: ActivityItemProps) => (
  <div className="flex items-start gap-4 p-3 hover:bg-blue-50 rounded-lg transition">
    <div className={`p-2 rounded-lg ${iconBgColor} ${iconTextColor}`}>
      {icon}
    </div>
    <div className="flex-1">
      <h3 className="font-medium text-blue-900">{title}</h3>
      <div className="flex items-center gap-4 mt-1 text-sm">
        <span className="flex items-center gap-1 text-blue-600">
          <ClockIcon className="w-3 h-3" /> {time}
        </span>
        <span className="flex items-center gap-1 text-blue-600">
          <MapPinIcon className="w-3 h-3" /> {location}
        </span>
      </div>
    </div>
    <div className={`${valueBgColor} ${valueTextColor} px-2 py-1 rounded-full text-sm font-medium`}>
      {value}
    </div>
  </div>
);
