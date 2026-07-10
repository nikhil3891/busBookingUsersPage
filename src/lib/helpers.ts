export const formatDate = (date: string | Date): string => {
  return new Date(date).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

export const formatTime = (time: string): string => {
  return new Date(`2000-01-01 ${time}`).toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
};

export const calculateDuration = (departure: string, arrival: string): string => {
  const [depHour, depMin] = departure.split(':').map(Number);
  const [arrHour, arrMin] = arrival.split(':').map(Number);

  let diffHours = arrHour - depHour;
  let diffMins = arrMin - depMin;

  if (diffMins < 0) {
    diffHours--;
    diffMins += 60;
  }

  if (diffHours < 0) diffHours += 24;

  return `${diffHours}h ${diffMins}m`;
};
