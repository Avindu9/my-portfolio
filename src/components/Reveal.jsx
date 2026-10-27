import useReveal from '../hooks/useReveal';

/** Wraps children in an element that fades in when scrolled into view. */
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const [ref, visible] = useReveal(delay);
  const classes = ['reveal', visible ? 'is-visible' : '', className].filter(Boolean).join(' ');

  return (
    <Tag ref={ref} className={classes} {...rest}>
      {children}
    </Tag>
  );
}
