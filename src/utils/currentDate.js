const currentDate = () => {
  const date = new Date();
  return `${date.getDate()}.${date.getUTCMonth() + 1}.${date.getUTCFullYear()}`;
};

export default currentDate;
