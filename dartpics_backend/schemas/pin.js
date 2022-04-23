export default{
    name: "pin",
    title: "Pin",
    type: "document",
    fields: [
        {
            name: "title",
            title: "Título",
            type:"string"
        },
        {
            name: "about",
            title: "Descripción",
            type:"string"
        },
        {
            name: "destination",
            title: "Destino",
            type:"url"
        },
        {
            name: "category",
            title: "Categoría",
            type:"string"
        },
        {
            name: "image",
            title: "Imagen",
            type:"image",
            options:{
                hotspot: true
            }
        },
        {
            name: "userId",
            title: "UserID",
            type:"string"
        },
        {
            name: "postedBy",
            title: "Publicado Por",
            type:"postedBy"
        },
        {
            name: "save",
            title: "Guardar",
            type:"array",
            of:[{type: "save" }]
        },
        {
            name: "comments",
            title: "Comentarios",
            type:"comment"
        }
    ]
}