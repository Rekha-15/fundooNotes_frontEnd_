import React from "react";
import AddNotes from "./addNotes";
import DisplayNotes from "../displayCard/displayCard";
import Services from "../../Services/NotesServices";
import "./Notes.scss";
// const service = new Services();

export default function Notes(props) {
  const [notes, setNotes] = React.useState([]);

  console.log("called display");

  const getAllNotes = () => {
    Services
      .getNotes()
      .then((res) => {
        const {data} = res.data;

        // console.log("getnotes", arrayData)
        let notes = data.reverse();
       console.log( "arraydata",notes);
        setNotes(notes);
      })
      .catch((err) => {
        console.log("error = " + err);
      });
  };

  React.useEffect(() => {
    getAllNotes();
    console.log("called display");
  }, []);


  return (
    <div className="mainContent" data-testId="wrapper">
      <AddNotes getall={getAllNotes} />
      <DisplayNotes notes={notes} getall={getAllNotes} />
      <div>
      </div>
    </div>
  );
}