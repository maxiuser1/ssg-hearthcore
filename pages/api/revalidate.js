const handler = async (req, res) => {
    await res.revalidate("/");
    const pathToRevalidate = `/planb`;
    await res.revalidate(pathToRevalidate);
    return res.send({ revalidated: true });
  };
  
  export default handler;
  