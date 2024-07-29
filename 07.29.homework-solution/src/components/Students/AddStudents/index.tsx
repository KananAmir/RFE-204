import React, { useState } from "react";
// import { Student } from "../../classes";

class Student {
  id: number;
  name: string;
  email: string;
  gpa: number;

  constructor(name: string, email: string, gpa: number) {
    this.id = Date.now();
    this.name = name;
    this.email = email;
    this.gpa = gpa;
  }
}

interface AddStudentProps {
  students: Student[];
  setStudents: React.Dispatch<React.SetStateAction<Student[]>>;
}

const AddStudent = ({ students, setStudents }: AddStudentProps) => {
  // const [name, setName] = useState<string>("");
  // const [email, setEmail] = useState<string>("");
  // const [gpa, setGpa] = useState<number>(0);
  const [studentObj, setStudentObj] = useState<Student | null>({
    id: 0,
    name: "",
    gpa: 0,
    email: "",
  });
  const [errorStatus, setErrorStatus] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (studentObj.name && studentObj.email && studentObj.gpa) {
      const student = new Student(
        studentObj.name,
        studentObj.email,
        studentObj.gpa
      );
      setStudents([...students, student]);
      // setName("");
      // setGpa(0);
      // setEmail("");
      setStudentObj({ name: "", email: "", gpa: 0 });
      setErrorStatus(false);
    } else {
      setErrorStatus(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="name"
        onChange={(e) => setStudentObj({ ...studentObj, name: e.target.value })}
        value={studentObj.name}
      />
      <br />
      <input
        type="email"
        placeholder="email"
        onChange={(e) =>
          setStudentObj({ ...studentObj, email: e.target.value })
        }
        value={studentObj.email}
      />
      <br />
      <input
        type="number"
        placeholder="gpa"
        onChange={(e) => setStudentObj({ ...studentObj, gpa: e.target.value })}
        value={studentObj?.gpa}
        step="0.1"
        max={4}
        min={0}
      />
      <br />
      {errorStatus && (
        <p style={{ color: "red" }}>all inputs must be filled!!</p>
      )}
      <button type="submit">Add</button>
    </form>
  );
};

export default AddStudent;
