import { useState } from "react";
import AddStudent from "./AddStudents";
import StudentsTable from "./StudentsTable";

interface IStudent {
  id: number;
  name: string;
  email: string;
  gpa: number;
}

const StudentsInfo = () => {
  const [students, setStudents] = useState<IStudent[]>([]);

  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredStudents: IStudent[] = students.filter((s) => {
    return s.name
      .toLowerCase()
      .trim()
      .includes(searchQuery.trim().toLowerCase());
  });

  return (
    <>
      <h3>Add Student Info</h3>
      <AddStudent students={students} setStudents={setStudents} />
      <hr />
      <input
        type="search"
        placeholder="search here.."
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <hr />
      <StudentsTable students={filteredStudents} setStudents={setStudents} />
    </>
  );
};

export default StudentsInfo;
