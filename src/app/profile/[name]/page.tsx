interface IProps {
    params: {
        name: string
    }
}

export default function(props: IProps, ){


    return (

        <h1>Hello {props.params.name}</h1>
    )

}
