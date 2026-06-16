import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function PageLoader() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const trigger = () => {
    setLoading(true);
    setProgress(20);
    setTimeout(() => setProgress(60), 100);
    setTimeout(() => setProgress(90), 250);
    setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setLoading(false);
        setProgress(0);
      }, 200);
    }, 400);
  };

  useEffect(() => {
    trigger();
  }, [location.pathname]);

  useEffect(() => {
    const handler = () => trigger();
    window.addEventListener('auth-change', handler);
    return () => window.removeEventListener('auth-change', handler);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[999]">
      <div
        className="h-1 bg-purple-600 transition-all duration-300 ease-out shadow-lg"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}