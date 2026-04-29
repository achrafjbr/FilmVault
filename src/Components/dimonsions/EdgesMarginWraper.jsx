export default function EdgesMarginWraper({ children, mLeft = 0, mRigth = 0 }) {
  return <div className={`${mLeft} ${mRigth}`}>{children}</div>;
}
