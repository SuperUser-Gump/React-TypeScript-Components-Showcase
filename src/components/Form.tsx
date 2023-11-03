import { type ComponentPropsWithoutRef, type FormEvent } from 'react';

type FormProps = ComponentPropsWithoutRef<'form'> & {
  // eslint-disable-next-line no-unused-vars
  onSave: (value: unknown) => void;
};
}
