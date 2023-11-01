export const formatDate = (dateString) => {
  const date = new Date(dateString); // Convertir la chaîne de caractères en objet Date
  const day = date.getDate().toString().padStart(2, '0'); // Obtenir le jour au format "01"
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Obtenir le mois au format "01"
  const year = date.getFullYear().toString(); // Obtenir l'année au format "2024"

  return `${day}/${month}/${year}`;
}

export const reverseFormatDate = (formattedDate) => {
  const [day, month, year] = formattedDate?.split('/');
  const date = new Date(`${year}-${month}-${day}`);
  if (!isNaN(date.getTime())) {
    const isoString = date.toISOString();
    return isoString.slice(0, 16);
  }
  return ''; // Return an empty string if the date is invalid
};


