export const formatDate = (dateString?: string): string => {
  if (!dateString) return "RÉCENT";

  const date = new Date(dateString);
  if (isNaN(date.getTime())) return dateString; // Retourne le texte original si non convertible

  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
};