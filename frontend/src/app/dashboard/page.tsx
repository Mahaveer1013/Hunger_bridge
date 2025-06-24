import { Sidebar } from '../../components/dashboard/Sidebar';
import { DashboardHeader } from '../../components/dashboard/DashboardHeader';
import { StatsCard } from '../../components/dashboard/StatsCard';
import { ActivityList } from '../../components/dashboard/ActivityList';
import {
    ClipboardDocumentListIcon,
    UsersIcon,
    ChartBarIcon,
} from '@heroicons/react/24/outline';

export default function DashboardPage() {
    // Mock data
    const stats = [
        {
            icon: <ClipboardDocumentListIcon className="w-6 h-6" />,
            title: 'Total Donations',
            value: '12',
            description: '5.4K meals donated',
            iconBgColor: 'bg-blue-100',
            iconTextColor: 'text-blue-600',
        },
        {
            icon: <UsersIcon className="w-6 h-6" />,
            title: 'Active Requests',
            value: '4',
            description: '240 meals requested',
            iconBgColor: 'bg-green-100',
            iconTextColor: 'text-green-600',
        },
        {
            icon: <ChartBarIcon className="w-6 h-6" />,
            title: 'Your Impact',
            value: '87%',
            description: 'Completion rate',
            iconBgColor: 'bg-purple-100',
            iconTextColor: 'text-purple-600',
        },
    ];

    const recentDonations = [
        {
            id: 1,
            title: 'Vegetable Biryani',
            time: '2 hours ago',
            location: 'T. Nagar',
            value: '45 meals',
            icon: <ClipboardDocumentListIcon className="w-5 h-5" />,
        },
        {
            id: 2,
            title: 'Chapati + Dal',
            time: 'Yesterday',
            location: 'Adyar',
            value: '80 meals',
            icon: <ClipboardDocumentListIcon className="w-5 h-5" />,
        },
    ];

    const upcomingRequests = [
        {
            id: 1,
            title: 'Hope Foundation',
            time: 'Today, 3 PM',
            location: 'Nungambakkam',
            value: '60 meals',
            icon: <UsersIcon className="w-5 h-5" />,
            iconBgColor: 'bg-green-100',
            iconTextColor: 'text-green-600',
            valueBgColor: 'bg-green-100',
            valueTextColor: 'text-green-800',
        },
        {
            id: 2,
            title: 'Children First',
            time: 'Tomorrow, 11 AM',
            location: 'Anna Nagar',
            value: '40 meals',
            icon: <UsersIcon className="w-5 h-5" />,
            iconBgColor: 'bg-green-100',
            iconTextColor: 'text-green-600',
            valueBgColor: 'bg-green-100',
            valueTextColor: 'text-green-800',
        },
    ];

    return (
        <>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {stats.map((stat, index) => (
                    <StatsCard key={index} {...stat} />
                ))}
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <ActivityList
                    title="Recent Donations"
                    items={recentDonations}
                />
                <ActivityList
                    title="Upcoming Requests"
                    items={upcomingRequests}
                />
            </div>
        </>
    );
}
