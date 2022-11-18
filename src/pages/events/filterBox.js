import styles from "./filterBox.css";

const Filter = ({title, isActive, onClick}) => {
    return (
        <div
         className = "wrapper"
         onClick ={onClick}
         style={{backgroundColor: `${isActive ? "lightblue" : "whiteSmoke"}`}}>
                <p className="title"> {title} </p>
        </div>
    )
}
export default Filter;