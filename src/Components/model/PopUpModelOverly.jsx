function PopUpModelOverly({ children, showModel }) {
  return (
    showModel && (
      <div className="absolute h-full w-full inset-0 bg-black/50 flex z-20 justify-center   ">
        {children}
      </div>
    )
  );
}

export default PopUpModelOverly;
