export const fadeAnimationVariants = {
  initial: {
   translateX: -100,
    opacity: 0,
  },
  animate: (index) => ({
    translateX: 0,
    opacity: 1,
    transition: {
      delay: 0.05 * index,
    },
  }),   
};
