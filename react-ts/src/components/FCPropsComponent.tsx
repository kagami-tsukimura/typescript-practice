type Props = {
  name: string;
};

const FCPropsComponent: React.FC<Props> = ({ name }) => {
  return (
    <>
      <div>PropsComponent</div>
      {name}
    </>
  );
};

export default FCPropsComponent;
