import {Box, Button, Modal, TextField, Typography} from "@mui/material";
import CardList from "./CardList";
import {useState} from "react";

function Todo() {
    const [todo, setTodo] = useState([]);
    const [open, setOpen] = useState(false);

    const [todoInput, setTodoInput] = useState("");
    const [todoError, setTodoError] = useState(true);

    function handleAdd() {
        setTodo([...todo, todoInput]);
        setTodoInput("");
        setTodoError(true);
        handleClose();
    }

    const handleOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);

    function handleInput(e) {
        setTodoInput(e.target.value);
        if (e.target.value.length === null || e.target.value === "") {
            setTodoError(true);
        } else {
            setTodoError(false);
        }
    }

    return (
        <>
            <Box sx={{margin: "20px"}}>
                <div style={wrapperHeaderStyle}>
                    <div>
                        <Typography variant="h1" sx={headerTextStyle}>
                            Incoming
                        </Typography>
                    </div>
                    <div style={headerTodoListLengthStyle}>{todo.length}</div>
                </div>
                <Box sx={wrapperTodoListStyle}>
                    <Box sx={addNewTaskBarStyle} onClick={handleOpen}>
                        + Add new task
                    </Box>
                    {todo.map((item, index) => {
                        return <CardList todo={item} key={index} setState={setTodo} state={todo}/>;
                    })}
                </Box>
                <hr style={horizontalStyle}/>
            </Box>
            <Modal open={open}
                   onClose={handleClose}
                   aria-labelledby="modal-modal-title"
                   aria-describedby="modal-modal-description">
                <Box sx={modalStyle}>
                    <TextField
                        error={todoError}
                        id="todo"
                        label={"What do you want to do ?"}
                        variant="outlined"
                        onChange={(e) => handleInput(e)}
                    />
                    <Button
                        variant="contained"
                        onClick={handleAdd}
                        sx={{margin: "20px 0px 0px 0px"}}
                        disabled={todoError}>
                        Add
                    </Button>
                </Box>
            </Modal>
        </>
    )
}

const addNewTaskBarStyle = {
    padding: "20px",
    background: "#fefffe",
    width: {xs: "300px", md: "500px"},
    borderRadius: "10px",
    margin: "20px 0px",
    fontSize: "25px",
    color: "#7b7b7b",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
};

const wrapperTodoListStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
};

const wrapperHeaderStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
};

const headerTextStyle = {
    color: "#fefffb",
    fontSize: {xs: "50px", md: "60px"},
};

const headerTodoListLengthStyle = {
    padding: "20px 30px",
    backgroundColor: "#b0a3f5",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    fontSize: "50px",
    borderRadius: "10px",
    color: "white",
    fontWeight: "bold",
};

const modalStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "3px solid #b0a3f5",
    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
};

const horizontalStyle = {
    width: "90%",
    backgroundColor: "white",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
};

export default Todo;