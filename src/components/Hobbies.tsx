import { MYINFO } from "@/utils/definitions";

const Hobbies = ({ hobbies }: { hobbies: MYINFO["hobbies"] }) => {
  return (
    <div className="space-y-2">
      <h2 className="text-3xl text-blue-500 font-semibold">Hobbies</h2>
      <ul className="list-disc list-inside text-sm">
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
};
export default Hobbies;
