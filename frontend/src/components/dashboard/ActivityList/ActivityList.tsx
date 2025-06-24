import { ReactNode } from 'react';
import { ActivityItem } from './ActivityItem';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

interface ActivityListProps {
  title: string;
  items: Array<{
    id: string | number;
    title: string;
    time: string;
    location: string;
    value: string | number;
    icon: ReactNode;
    iconBgColor?: string;
    iconTextColor?: string;
    valueBgColor?: string;
    valueTextColor?: string;
  }>;
}

export const ActivityList = ({ title, items }: ActivityListProps) => (
  <div className="bg-white rounded-xl shadow-sm border border-blue-100 p-6">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-lg font-semibold text-blue-900">{title}</h2>
      <a href="#" className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1">
        View all <ArrowRightIcon className="w-3 h-3" />
      </a>
    </div>

    <div className="space-y-4">
      {items.map((item) => (
        <ActivityItem
          key={item.id}
          icon={item.icon}
          title={item.title}
          time={item.time}
          location={item.location}
          value={item.value}
          iconBgColor={item.iconBgColor}
          iconTextColor={item.iconTextColor}
          valueBgColor={item.valueBgColor}
          valueTextColor={item.valueTextColor}
        />
      ))}
    </div>
  </div>
);
