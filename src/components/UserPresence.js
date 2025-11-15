import { Users } from 'lucide-react';

export function UserPresence({ activeUsers, currentUserId }) {
  const userCount = activeUsers.length;

  return (
    <div className="fixed top-4 right-4 bg-white rounded-lg shadow-lg border border-gray-200 px-4 py-3 flex items-center gap-3">
      <div className="relative">
        <Users className="w-5 h-5 text-blue-500" />
        {userCount > 0 && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
          </div>
        )}
      </div>

      <div>
        <p className="text-sm font-medium text-gray-900">
          {userCount} {userCount === 1 ? 'User' : 'Users'} Online
        </p>

        <p className="text-xs text-gray-500">
          You: {currentUserId.substring(0, 12)}...
        </p>
      </div>
    </div>
  );
}
