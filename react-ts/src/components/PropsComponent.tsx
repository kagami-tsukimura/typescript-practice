type Props = {
  id: number;
};

const PropsComponent = ({ id }: Props) => {
  return (
    <>
      <div>FCPropsComponent</div>
      {id}
    </>
  );
};

export default PropsComponent;
