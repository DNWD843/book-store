import React from 'react';

import { AuthForm } from './AuthForm';
import { TAuthFormProps } from './AuthForm.props';

const AuthFormComponent: React.FC<TAuthFormProps> = (props) => {
  console.log(props);
  return (<AuthForm {...props} />);
};

AuthFormComponent.displayName = 'AuthFormComponent';

export { AuthFormComponent as AuthForm };
