



// const keyLayout = ({keys}: {keys:{label:string, value:string}[][]}) => {
//     return null;
// }


export const Keyboard = ({keyset, KeyComponent} : {keyset: string[][], KeyComponent: React.FC<{label: string, value: string}>}) => {
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            {
            
            keyset.map((row) => {
                return(
                    <div style={{display: "inline-flex", gap: "1rem", marginTop: '1rem'}} key={row[0]+"_keyrow"}>
                        {
                            row.map((key) => (
                                <KeyComponent label={key} key={'button_'+key} value={key}/>
                            ))
                        }
                    </div>
                    )

                })
            }

        </div>
    )
}