import { InputProps as AntInputProps } from 'antd';
import { UseControllerProps } from 'react-hook-form';
export type InputProps = UseControllerProps<any> & AntInputProps;
