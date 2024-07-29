import React, { useRef, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";

import { Modal } from "antd";

import "./index.css";

interface Student {
  id: number;
  name: string;
  email: string;
  gpa: number;
}

interface StudentsTableProps {
  students: Student[];
  setStudents: React.Dispatch<React.SetStateAction<Student[]>>;
}

const StudentsTable = ({ students, setStudents }: StudentsTableProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedStudent, setEditedStudent] = useState(null);
  const [editedId, setEditedId] = useState(null);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleDelete = (id: number) => {
    const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents);
  };

  const handleEdit = (s) => {
    showModal();
    setEditedStudent({ ...s });
    setEditedId(s.id);
  };

  // const handleEdit = (id: number) => {
  //   const editedStudent = students.find((student) => student.id === id);
  //   console.log(editedStudent);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const idx = students.findIndex((q) => q.id === editedId);

    if (idx !== -1) {
      students.splice(idx, 1, editedStudent);
      setStudents([...students]);

      setEditedStudent({
        name: "",
        email: "",
        gpa: 0,
      });

      handleCancel();
    }
  };
  return (
    <>
      {students.length === 0 ? (
        <p>No students available.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Student Name</th>
              <th>Email</th>
              <th>GPA</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.gpa}</td>
                <td>
                  <button
                    className="delete"
                    onClick={() => handleDelete(student.id)}
                  >
                    <AiFillDelete />
                  </button>
                  <button className="edit" onClick={() => handleEdit(student)}>
                    <FaEdit />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="name"
            onChange={(e) =>
              setEditedStudent({ ...editedStudent, name: e.target.value })
            }
            value={editedStudent?.name}
          />
          <br />
          <input
            type="email"
            placeholder="email"
            onChange={(e) =>
              setEditedStudent({ ...editedStudent, email: e.target.value })
            }
            value={editedStudent?.email}
          />
          <br />
          <input
            type="number"
            placeholder="gpa"
            onChange={(e) =>
              setEditedStudent({ ...editedStudent, gpa: e.target.value })
            }
            value={editedStudent?.gpa}
            step="0.1"
            max={4}
            min={0}
          />
          <br />

          <button type="submit">Edit</button>
        </form>
      </Modal>
    </>
  );
};

export default StudentsTable;
