import dynamic from 'next/dynamic';

const Gadget = dynamic(() => import('../gadget'), { ssr: false });

async function fetchGadgets() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const gadgets = await fetch("http://localhost:4000/gadgets").then((res) =>
    res.json()
  );
  return gadgets;
}

export default async function RscPage() {
  const gadgets = await fetchGadgets();
  return (
    <>
      <h1>Gadgets</h1>
      {gadgets.map((gadget, index) => (
        <Gadget gadget={gadget} key={index} />
      ))}
    </>
  );
}
