const logger = (param) => (state) => (next) => (action) => {
  console.log("loging", param);
  next(action);
};

export default logger;
