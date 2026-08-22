import useIsVisible from './helpers/UseIsVisible.js';

function VisibleDiv({ className, children, id }) {
  const [setNode, isVisible] = useIsVisible();
  return (
    <div ref={setNode} id={id} className={`${isVisible ? 'visible' : ''} ${className}`}>
      {children}
    </div>
  );
}

export default VisibleDiv;
