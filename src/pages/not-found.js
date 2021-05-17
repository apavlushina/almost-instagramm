import { useEffect } from 'react';

export default function NotFound() {
  useEffect(() => {
    document.title = 'Not Found - Almost Instagramm';
  }, []);
  return (
    <div className="bg-gray-background">
      <div className="mx-auth max-w-screen-log">
        <p className="text-center text-2xl">Not Found!</p>
      </div>
    </div>
  );
}
