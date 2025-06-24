import { ReactNode } from 'react';

interface SidebarItemProps {
  icon: ReactNode;
  label: string;
  active?: boolean;
  href: string;
}

export const SidebarItem = ({ icon, label, active = false, href }: SidebarItemProps) => (
  <a
    href={href}
    className={`flex items-center gap-3 px-4 py-3 rounded-lg ${
      active ? 'bg-blue-100 text-blue-800' : 'hover:bg-blue-50 text-blue-700'
    } font-medium`}
  >
    {icon}
    {label}
  </a>
);
