import { type ComponentPropsWithoutRef } from 'react';

type ButtonProps = {
  el: 'button';
} & ComponentPropsWithoutRef<'button'> & {
    href?: never;
  };

type AnchorProps = {
  el: 'anchor';
} & ComponentPropsWithoutRef<'a'> & {
    href?: string;
  };

function isAnchor(props: ButtonProps | AnchorProps): props is AnchorProps {
  return 'href' in props;
}

export default function Button(props: ButtonProps | AnchorProps) {
  if (isAnchor(props)) {
    return <a className="button" {...props}></a>;
  }

  return <button className="button" {...props}></button>;
}
