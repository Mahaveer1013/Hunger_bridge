'use client';
import {
    ClipboardDocumentListIcon,
    PlusCircleIcon,
    UsersIcon,
    ChartBarIcon,
} from '@heroicons/react/24/outline';
import { UserProfile } from './UserProfile';
import { SidebarItem } from './SidebarItem';
import { usePathname } from 'next/navigation';

export const Sidebar = () => {
    const pathname = usePathname();
    return (
        <aside className="hidden md:flex flex-col w-64 bg-white/95 border-r border-blue-100 shadow-sm py-8 px-4">
            <UserProfile name="Welcome back!" role="Food Donor" />

            <nav className="flex flex-col gap-1">
                <SidebarItem
                    icon={<ClipboardDocumentListIcon className="w-5 h-5" />}
                    label="Dashboard"
                    active={pathname === '/dashboard'}
                    href="/dashboard"
                />
                <SidebarItem
                    icon={<PlusCircleIcon className="w-5 h-5" />}
                    label="New Donation"
                    active={pathname === '/dashboard/donate/new'}
                    href="/dashboard/donate/new"
                />
                <SidebarItem
                    icon={<UsersIcon className="w-5 h-5" />}
                    label="Requests"
                    active={pathname === '/dashboard/requests'}
                    href="/dashboard/requests"
                />
                <SidebarItem
                    icon={<ChartBarIcon className="w-5 h-5" />}
                    label="Impact"
                    active={pathname === '/dashboard/impact'}
                    href="/dashboard/impact"
                />
            </nav>
        </aside>
    );
};
