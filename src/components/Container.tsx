type Props = {
  children: React.ReactNode;
};

function Container({ children }: Props) {
  return (
    <section className='flex flex-col gap-4 container md:p-0 md:mx-auto px-4'>
      {children}
    </section>
  );
}

export default Container;
