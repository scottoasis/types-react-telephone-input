import * as React from "react";

declare interface ReactTelInputProps {
  onChange: (phone: string, country: string) => void;
  value?: string;
  initialValue?: string;
  autoFormat?: boolean;
  defaultCountry?: string;
  onlyCountries?: string[];
  perferredCountries?: string[];
  classNames?: string[];
  onBlur?: () => void;
  onFocus?: () => void;
  disabled?: boolean;
  pattern?: string;
}

export class ReactTelInput extends React.Component<ReactTelInputProps, void> {}
