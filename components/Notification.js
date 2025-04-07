import { useSelector } from 'react-redux';

export default function Notification() {
  const notifications = useSelector((state) => state.notifications?.message || []);

  return (
    <div className="fixed top-4 right-4 space-y-2 z-50">
      {notifications.map((note, i) => (
        <div key={i} className="bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg">
          {note.message}
        </div>
      ))}
    </div>
  );
}
