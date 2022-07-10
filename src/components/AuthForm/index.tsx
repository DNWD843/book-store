import React from 'react';

import { AuthForm } from './AuthForm';
import { IAuthFormProps } from './AuthForm.props';

const AuthFormComponent: React.FC<IAuthFormProps> = (props) => {
  console.log(props);
  return (<AuthForm {...props} />);
};

AuthFormComponent.displayName = 'AuthFormComponent';

export { AuthFormComponent as AuthForm };
