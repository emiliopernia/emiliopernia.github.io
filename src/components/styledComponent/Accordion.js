import { useToggle } from "../../hooks/useToggle";
import { createContext,useContext } from "react";

const AccordionContext = createContext()

const Accordion = ({ title, content }) => {

    const { status: expand, toggleStatus: toggleExpand } = useToggle(false);
    const value = {
        expand,toggleExpand
    };
    console.log(expand)

    return (
        <AccordionContext.Provider value={value}>
            <div>
                <AccordionHeader title={title} />
                <AccordionContent content={content} />
            </div>
        </AccordionContext.Provider>
    )

};

const AccordionHeader = ({ title}) => {
    const{expand,toggleExpand}=useContext(AccordionContext);

    return (
        <button onClick={toggleExpand}>
            {title} <span>{expand ? '-' : '+'}</span>
        </button>
    )
};

const AccordionContent = ({ content }) => {
    const{expand}=useContext(AccordionContext);
    if (expand) {
        return (
            <div>
                {content}
            </div>
        )
    }

}

export default Accordion