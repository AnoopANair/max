import Card from "./Card";

function Cards(){
    return(
        <>
        <div style={{display:"flex",justifyContent:"center", flexWrap:"wrap", border: "1px solid black"}}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>

        </>
    )
}

export default Cards;