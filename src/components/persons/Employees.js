import Card from "./Card";

const Employees = ({ employees }) => {
  return (
    <div>
      <div className="md:container mx-auto my-24">
        <h2 className="text-center text-5xl mb-20 font-bold">Meet the heroes behind the magic</h2>
        <div className="flex justify-between">
          {employees?.map((person) => (
            <Card person={person} key={person.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Employees;
