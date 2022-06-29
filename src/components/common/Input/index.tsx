import cn from 'classnames';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  classNames?: string;
}

const Input = ({ classNames, ...inputProps }: InputProps) => {
  return (
    <input
      className={cn(
        'border-gray-400 border-2 rounded-lg px-4 py-2 outline-black',
        classNames,
      )}
      {...inputProps}
    />
  );
};

export default Input;
