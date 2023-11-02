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

export default function Button(props: ButtonProps | AnchorProps) {
    return <a className="button" {...props}></a>;
  }

  return <button className="button" {...props}></button>;
}
