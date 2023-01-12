import { IFieldConfig, TEditedData, TOnEditArgs } from '../../../types';

type TEditProfileModalCallbacks = {
  onCancel: () => void,
  onSubmit: (data: TEditedData) => void,
};

export type TEditProfileModalFormComponentProps = TOnEditArgs & TEditProfileModalCallbacks;

export type TEditProfileModalFormProps = TEditProfileModalCallbacks & IFieldConfig & {
  initialFormValue: { [key: string]: string | null },
};
