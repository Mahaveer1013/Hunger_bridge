import { UserCircleIcon } from '@heroicons/react/24/outline';

interface UserProfileProps {
  name: string;
  role: string;
}

export const UserProfile = ({ name, role }: UserProfileProps) => (
  <div className="flex flex-col items-center mb-10">
    <div className="relative">
      <UserCircleIcon className="w-16 h-16 text-blue-400" />
      <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 border-2 border-white rounded-full"></span>
    </div>
    <span className="font-bold text-blue-800 mt-3">Welcome back!</span>
    <span className="text-sm text-blue-600">{role}</span>
  </div>
);
