import { MYINFO } from "@/utils/definitions";

const Certifications = ({ certs }: { certs: MYINFO["certifications"] }) => {
  return (
    <div className="space-y-2">
      <h2 className="text-3xl text-blue-500 font-semibold">Certifications</h2>
      <ul className="list-disc list-inside text-sm">
        {certs.map((cert, index) => (
          <li>
            {cert.title} - {cert.date}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Certifications;
