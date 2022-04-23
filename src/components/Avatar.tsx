interface Props {
  name: string;
  image: string;
}

export const Avatar = (props: Props): JSX.Element => {
  return (
    <div className="flex my-8 items-center justify-center">
      <div className="w-24">
        <img
          className="mx-auto block h-20 w-20 rounded-full"
          src={props.image}
          alt=""
        />
        <p className="text-center text-sm font-medium text-gray-700 group-hover:text-gray-900">
          {props.name}
        </p>
      </div>
    </div>
  );
};
