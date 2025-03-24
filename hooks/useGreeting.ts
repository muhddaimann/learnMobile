import { useEffect, useState } from 'react';

export function useGreeting() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    const message =
      hour < 12
        ? 'Good Morning'
        : hour < 18
        ? 'Good Afternoon'
        : 'Good Evening';

    setGreeting(message);
  }, []);

  return greeting;
}
