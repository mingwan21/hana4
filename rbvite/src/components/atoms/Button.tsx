type Props = {
  text: string;
  variant: string;
  classNames: string;
};
export default function Button({ text, variant = '' }: Props) {
  return (
    <button className={`btn ${variant} ${classNames} float-end mt-3`}>
      Sign In
    </button>
  );
}
