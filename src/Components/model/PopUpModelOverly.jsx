function PopUpModelOverly({ children, showModel }) {
  return (
    showModel && (
      <div className="absolute inset-0 bg-black/50 flex z-20 justify-center items-center ">
        {children}
      </div>
    )
  );
}

export default PopUpModelOverly;
