function PopUpModelOverly({ children, model }) {
  console.log("model", model);
  return (
    model.isPoped && (
      <div className="absolute h-full w-full inset-0 bg-black/50 flex z-20 justify-center   ">
        {children}
      </div>
    )
  );
}

export default PopUpModelOverly;
