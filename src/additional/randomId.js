const randomId = () => {
  return Math.random().toString(36).substr(2, 14);
};

export default randomId;
