export const truncateDescription = (description, maxLength) => {
    if (!description) return '';
    
    const words = description.split(' ');
    const truncatedWords = words.slice(0, maxLength);
    const truncatedDescription = truncatedWords.join(' ');

    return truncatedDescription;
  };