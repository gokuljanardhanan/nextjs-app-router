"use client"; // This directive marks the file as a Client Component

const Gadget = ({ gadget }) => {
  console.log({ gadget });
  return (
    <li style={{ border: "1px solid grey", margin: "8px", padding: "8px" }}>
      <div style={{ color: "blue" }}>Name: {gadget.name}</div>
      <div style={{ color: "green" }}>Color: {gadget.data?.color}</div>
      <div style={{ color: "red" }}>Capacity: {gadget.data?.capacity}</div>
    </li>
  );
};

export default Gadget;
