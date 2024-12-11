interface Props {
  text: string;
}
const ListItem = ({ text }: Props) => {
  return (
    <div className="bg-blue-500 text-xs w-max p-2 rounded-full">{text}</div>
  );
};
export default ListItem;
