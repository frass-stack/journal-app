//El state es reactivo.
export default () => ({
    isLoading: true,
    entries:[
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Hic asperiores molestias delectus, perspiciatis veniam saepe, praesentium quam itaque unde, vero nesciunt! Accusamus iste iusto deleniti rerum provident officiis ea beatae!',
            picture: null
        },
        {
            id: new Date().getTime() + 1000,
            date: new Date().toDateString(),
            text: 'Molestias delectus, perspiciatis veniam saepe, praesentium quam itaque unde, vero nesciunt! Accusamus iste iusto deleniti rerum provident officiis ea beatae!',
            picture: null
        },
        {
            id: new Date().getTime() + 2000,
            date: new Date().toDateString(),
            text: 'Perspiciatis veniam saepe, praesentium quam itaque unde, vero nesciunt! Accusamus iste iusto deleniti rerum provident officiis ea beatae!',
            picture: null
        }
    ]
})