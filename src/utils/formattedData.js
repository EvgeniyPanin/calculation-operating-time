export const formattedDate = (data) => {
    const date = new Date(data);
    const year = date.getFullYear();
    const month = ((date.getMonth() + 1 + '').length === 1) ? '0' + ((date.getMonth() + 1)) : (date.getMonth() + 1);
    const day = date.getDate().length === 1 ? '0' + date.getDate() : date.getDate();
    return `${day}.${month}.${year}`
  }