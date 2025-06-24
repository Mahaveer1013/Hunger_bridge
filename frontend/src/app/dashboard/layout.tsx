import { Sidebar } from '../../components/dashboard/Sidebar';
import { DashboardHeader } from '../../components/dashboard/DashboardHeader';
import { ReactNode } from 'react';

export default function layout({ children }: { children: ReactNode }) {

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100 flex">
            <Sidebar />

            <main className="flex-1 flex flex-col py-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl w-full mx-auto">
                    <DashboardHeader
                        title="Dashboard Overview"
                        subtitle="Track your food donations and impact"
                    />
                    {children}
                </div>
            </main>
        </div>
    );
}
