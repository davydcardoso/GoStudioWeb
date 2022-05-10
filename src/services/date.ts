export const getCurrentDateFormated = () => {
  return new Date()
    .toISOString()
    .replace(
      /^(?<year>\d+)-(?<month>\d+)-(?<day>\d+)T.*$/,
      "$<year>-$<month>-$<day>"
    );
};

export const formatDate = (date: Date) => {
  return date
    .toISOString()
    .replace(
      /^(?<year>\d+)-(?<month>\d+)-(?<day>\d+)T.*$/,
      "$<year>-$<month>-$<day>"
    );
};
